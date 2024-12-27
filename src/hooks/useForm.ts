import { Validator } from "../utils/validator";
import { useCallback, useEffect, useState } from "react";
export type FieldType = {
  value: string;
  isTouched: boolean;
  error: string;
  isDirty: boolean;
  isSubmitted: boolean;
};
export type InitialStateType = { [name: string]: string };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type FormHookReturnType<T extends InitialStateType> = ReturnType<
  typeof useForm<
    T,
    {
      [key in keyof T]?: Validator<{ [k in keyof T]: FieldType }>;
    }
  >
>;
/**
 * This hook is used to manage form state, it takes `initialState` and `validationSchema` as input
 */
const useForm = <
  T extends InitialStateType,
  U extends {
    [key in keyof T]?: Validator<{ [k in keyof T]: FieldType }>;
  }
>(
  /**the keys in the initial state object and validation schema must be the name attribute of the form's field you are referencing */
  initialState: T,
  /**the keys in the initial state object and validation schema must be the name attribute of the form's field you are referencing */
  validationSchemaArg: U
) => {
  const [validationSchema, setValidationSchema] = useState(validationSchemaArg);
  const [formData, setFormData] = useState(() =>
    Object.entries(initialState).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          value,
          isTouched: false,
          error: validationSchema[key]?.evaluate(value) ?? "",
          isDirty: false,
          isSubmitted: false,
        },
      }),
      {} as Record<keyof T, FieldType>
    )
  );
  const [legacyData, setLegacyData] = useState<{ [key in keyof T]: string }>({ ...initialState });

  useEffect(() => {
    setFormData(prev =>
      Object.entries(prev).reduce(
        (acc, [key, fieldData]) => ({
          ...acc,
          [key]: {
            ...fieldData,
            error: validationSchema[key]?.evaluate(fieldData.value, formData) ?? "",
          },
        }),
        {} as Record<keyof T, FieldType>
      )
    );
  }, [validationSchema]);

  const resetFormData = useCallback(() => {
    setFormData(
      Object.entries(initialState).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            value,
            isTouched: false,
            isDirty: false,
            isSubmitted: false,
            error: validationSchema[key]?.evaluate(value, formData) ?? "",
          },
        }),
        {} as Record<keyof T, FieldType>
      )
    );
  }, [formData, initialState, validationSchema]);

  const explicitFieldUpdateHandler = useCallback(
    (
      value: string,
      name: string,
      errorText?: string,
      isDirtyChange?: boolean,
      overrideTouchedTrue: boolean = true
    ) => {
      setFormData(prev => ({
        ...prev,
        [name]: {
          ...prev[name],
          value,
          isTouched: overrideTouchedTrue ? true : prev[name].isTouched,
          isSubmitted: false,
          isDirty: isDirtyChange ? value !== legacyData?.[name] : false,
          error: errorText ?? validationSchema[name]?.evaluate(value, prev) ?? "",
        },
      }));
    },
    [validationSchema, legacyData]
  );

  //Change Validation dynamically
  const explicitValidationHandler = useCallback(
    (updateValidator: { [key in keyof T]?: Validator<{ [k in keyof T]: FieldType }> }) => {
      setValidationSchema(prev => ({ ...prev, ...updateValidator }));
    },
    []
  );

  const explicitErrorUpdateHandler = useCallback((key: string, error: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        error,
      },
    }));
  }, []);

  const explicitFormErrorsHandler = useCallback((errorsUpdateConfig: { [key: string]: string }) => {
    Object.keys(errorsUpdateConfig).forEach(key => {
      explicitErrorUpdateHandler(key, errorsUpdateConfig[key]);
    });
  }, []);

  //form explicit handler for entire form
  const explicitFormUpdateHandler = useCallback(
    (value: { [key in keyof T]: string }) => {
      if (value) {
        //console.log("Value is setting", value);

        setLegacyData({ ...value });
        Object.keys(value).forEach(key => {
          explicitFieldUpdateHandler(value[key], key, undefined, false, false);
        });
      }
    },
    [explicitFieldUpdateHandler]
  );

  //form field change handler based on the name attribute on the field
  const formFieldChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, value?: string) => {
      const name = event.target.name;
      const newValue = value ?? event.target.value;
      //console.log(newValue, legacyData);

      setFormData(prev => ({
        ...prev,
        [name]: {
          ...prev[name],
          value: newValue,
          isSubmitted: false,
          isDirty: newValue !== legacyData?.[name],
          error: validationSchema[name]?.evaluate(newValue, prev) ?? "",
        },
      }));
    },
    [validationSchema, legacyData]
  );

  //form field blur handler based on the name attribute on the field
  const formFieldBlurHandler = useCallback(
    (
      event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>,
      fieldName?: string
    ) => {
      const name = fieldName ?? event.target.name;

      setFormData(prev => {
        return {
          ...prev,
          [name]: {
            ...prev[name],
            value: prev[name]?.value?.trim(),
            isTouched: true,
            error: validationSchema[name]?.evaluate(prev[name].value?.trim(), prev) ?? "",
          },
        };
      });
    },
    [validationSchema]
  );

  const setTouchedOnSubmit = () => {
    setFormData(prev => {
      const updatedEntries = Object.entries(prev).map(row => {
        row[1].isTouched = true;
        row[1].isSubmitted = true;
        return row;
      });
      return Object.fromEntries(updatedEntries) as Record<keyof T, FieldType>;
    });
  };

  const setTouchExplicitly = (fieldName: string, isTouched: boolean) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        isTouched,
      },
    }));
  };

  const resetDirtyOnSubmit = () => {
    setFormData(prev => {
      const updatedEntries = Object.entries(prev).map(row => {
        row[1].isDirty = false;
        return row;
      });
      return Object.fromEntries(updatedEntries) as Record<keyof T, FieldType>;
    });
  };

  //checking the validity of whole form (re-evaluated on every state change)
  const isFormValid = Object.values(formData)
    .map(data => !data.error)
    .every(Boolean);

  const ignoreAndValidateForm = (ignoredFields: string[]) => {
    const updatedFormDetails = Object.fromEntries(
      Object.entries(formData).filter(([key]) => !ignoredFields.includes(key))
    );
    return Object.values(updatedFormDetails)
      .map(data => !data.error)
      .every(Boolean);
  };

  //checking the dirtiness (if any changes are made in the form) of the form,
  const isFormDirty = Object.values(formData)
    .map(data => data.isDirty)
    .some(Boolean);

  //checking Partial dirtiness of the form.
  const partialDirtyCheck = (ignoredFields: string[]) => {
    const fieldNameSet = new Set(ignoredFields);
    //console.log(ignoredFields, "ign fields");

    return Object.keys(formData)
      .map(key => {
        if (fieldNameSet.has(key)) {
          return false;
        }
        return formData[key].isDirty;
      })
      .some(Boolean);
  };

  const getMappedFormValues = (excludedKeys?: string[]) => {
    return Object.keys(formData).reduce((acc, value) => {
      const spreadObject = excludedKeys?.includes(value) ? {} : { [value]: formData[value].value };
      return { ...acc, ...spreadObject };
    }, {});
  };

  return {
    /**form field blur handler based on the name attribute on the field */
    formFieldBlurHandler,
    /**form field change handler based on the name attribute on the field */
    formFieldChangeHandler,
    /**shows validity of whole form */
    isFormValid,
    /**form state with name of each field as key */
    formData,
    /**form reset handler*/
    resetForm: resetFormData,
    /**for updating fields explicitly */
    explicitFieldUpdateHandler,
    /**for setting form fields to be touched on submit */
    setTouchedOnSubmit,
    /**shows if form is dirty or not */
    isFormDirty,
    /**for Resetting dirty on form submit */
    resetDirtyOnSubmit,
    /**for updating multiple fields explicitly */
    explicitFormUpdateHandler,
    /**get Key Value map for values*/
    getMappedFormValues,
    /** to ignore few fields while validating the form values */
    ignoreAndValidateForm,
    /** for changing the isTouched field from outside */
    setTouchExplicitly,
    /**Partial check */
    partialDirtyCheck,
    /**Validation object updater */
    explicitValidationHandler,
    explicitFormErrorsHandler,
    explicitErrorUpdateHandler,
  };
};

export default useForm;

//logic
//1. get initial state and validation schema as input to the hook
//2. define form state by transforming initial state based on the KEY
//3. expose onChange, onBlur, onReset and isFormValid functions from the Hook
//4. onChange and onBlur updates state based on name on the input field
