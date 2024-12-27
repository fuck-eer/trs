import { FieldType } from "../hooks/useForm";

export class Validator<T extends { [name: string]: FieldType }> {
  /** queue stores validation function during initialization */
  private valQue: validatorFunctionType[] = [];

  /** formValues needed in case of related validations like confirmEmails etc */
  private formValues: T | undefined;

  /** helper to chain validators together */
  private chain(fn: validatorFunctionType): this {
    this.valQue.push(fn);
    return this;
  }

  /** checks for required fields*/
  required(err?: string): this {
    return this.chain(val => {
      if (!val) throw err ?? "Field is required!";
    });
  }

  /**Checks relative validation */
  relativeValidation(validFn: (currentValue: string, formValues: T) => boolean, err?: string): this {
    return this.chain(val => {
      if (!validFn(val, this.formValues)) {
        throw err ?? "Field is not valid!";
      }
    });
  }

  /** checks for minimum length*/
  minLen(size: number, err?: string): this {
    return this.chain(val => {
      if (val && val.length < size) throw err ?? `Length should be greater than ${size}`;
    });
  }

  /** checks for maximum length*/
  maxLen(size: number, err?: string): this {
    return this.chain(val => {
      if (val && val.length > size) throw err ?? `Length should be less than ${size}`;
    });
  }

  onlyNumbers(err?: string, options?: { allowUndefined?: boolean }): this {
    return this.chain(val => {
      const numberRegex = options?.allowUndefined ? /^$|[0-9]+/ : /[0-9]+/;
      if (!numberRegex.test(val)) throw err ?? "Only numerical values are allowed";
    });
  }

  isRouteId(): this {
    return this.chain(val => {
      if (val) {
        const [org, marketDetails, apiGroup, methodType, apiName] = val?.split?.("-") ?? [];
        const marketArray = marketDetails?.split("_");
        if (marketArray?.length > 2) {
          throw "Market is invalid (to be either sc_<market> or <market>)";
        }
        if (marketArray?.length === 1) {
          if (
            marketArray?.[0] !== "mx" &&
            marketArray?.[0] !== "dsv" &&
            marketArray?.[0] !== "us" &&
            marketArray?.[0] !== "ca" &&
            marketArray?.[0] !== "cl"
          ) {
            throw "Market is invalid (should be : us,mx or ca)";
          }
        }
        if (marketArray?.length === 2) {
          if (marketArray?.[0] !== "sc") {
            throw "only 'sc' prefix is allowed before market";
          }
          if (
            marketArray?.[1] !== "mx" &&
            marketArray?.[1] !== "dsv" &&
            marketArray?.[1] !== "us" &&
            marketArray?.[1] !== "ca" &&
            marketArray?.[1] !== "cl"
          ) {
            throw "Market is invalid (should be : us,mx or ca)";
          }
        }
        if (org !== "mp" && org !== "dsv") throw "Organization is invalid";
        if (!apiGroup) throw "Api Group is required";
        if (
          methodType !== "get" &&
          methodType !== "put" &&
          methodType !== "patch" &&
          methodType !== "delete" &&
          methodType !== "post"
        )
          throw "Method type is invalid (should be: get,post,patch,put or delete)";
        if (!apiName) throw "API name is required";
      } else {
        throw "This field is required";
      }
    });
  }

  isQueryParam(err?: string, options?: { allowHyphenInKeys?: boolean; allowUndefined?: boolean }): this {
    return this.chain(val => {
      const queryParamRegex = options?.allowUndefined
        ? /^$|^([\w-]+(=[\w-]*)?(&[\w-]+(=[\w-]*)?)*)?$/
        : /^([\w-]+(=[\w-]*)?(&[\w-]+(=[\w-]*)?)*)?$/;
      if (!queryParamRegex.test(val)) throw err ?? "Query Param Predicate is not valid";
    });
  }

  isUri(err?: string): this {
    return this.chain(val => {
      const pathPredicateRegex = /^[a-zA-Z0-9-_.~/]*$/;
      if (!pathPredicateRegex.test(val)) throw err ?? "Path predicate is not valid";
    });
  }

  /** checks for length */
  hasLen(size: number, err?: string): this {
    return this.chain(val => {
      if (!(val && val.length === size)) throw err ?? `Length should be ${size}`;
    });
  }

  isJiraTicketNumber(err?: string): this {
    return this.chain(val => {
      const ticketRegex = /^[A-Z]{2,}-\d+/;
      if (!ticketRegex.test(val)) throw err ?? "Ticket number is incorrect";
    });
  }

  /** checks for valid email address*/
  isEmail(err?: string, allowUndefined?: boolean): this {
    const emailRegex = allowUndefined
      ? /^$|^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      : /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return this.chain(val => {
      if (!emailRegex.test(val ?? "")) throw err ?? "Invalid email address";
    });
  }

  isPhone(err?: string, allowUndefined?: boolean): this {
    const phoneRegex = allowUndefined ? /^$|^\d{10}$/i : /^\d{10}$/i;
    return this.chain(val => {
      if (!phoneRegex.test(val ?? "")) throw err ?? "Invalid phone number";
    });
  }

  isURL(errorMessage: string = "Invalid URL", allowUndefined?: boolean): this {
    const allowUndefinedRegex = allowUndefined ? "^$|" : "";
    const urlRegex = new RegExp(
      allowUndefinedRegex +
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return this.chain(val => {
      if (!urlRegex.test(val ?? "")) throw errorMessage;
    });
  }

  /**Check is something starts with a leading string */
  hasLeading(leadingString: string | string[], err?: string): this {
    return this.chain((val: string) => {
      if (typeof leadingString === "string") {
        if (val && !val.startsWith(leadingString)) throw err ?? `Field should have leading ${leadingString}`;
      } else if (leadingString.every(string => val && !val.startsWith(string)))
        throw err ?? `Field should have leading ${leadingString.join(", ")}`;
    });
  }

  /** checks for equality of emails*/
  confirmEmail(err?: string): this {
    return this.chain(val => {
      if (val !== this.formValues?.email.value) throw err ?? "emails don't match";
    });
  }

  /**check for equality internally */
  confirmField(fieldName: string, err?: string): this {
    return this.chain(val => {
      if (!this.formValues?.[fieldName]) {
        throw "Field does not exist in form";
      } else if (val !== this.formValues?.[fieldName].value) {
        throw err ?? `Emails don't match`;
      }
    });
  }

  /** checks for the pattern and matches it with regex*/
  regex(regex: RegExp | string, err?: string, options?: { isOptional?: boolean }): this {
    return this.chain(val => {
      const ignoreRegex = !val && !!options?.isOptional;

      if (typeof regex === "string") {
        const regexExp = new RegExp(regex);
        if (!ignoreRegex) {
          if (!regexExp.test(val ?? "")) throw err ?? "Field is not valid!";
        }
      } else if (!ignoreRegex) {
        if (!regex.test(val ?? "")) throw err ?? "Field is not in valid format";
      }
    });
  }

  /** checks that the value is in the array */
  in(args: string[], err?: string, options?: { allowIgnoreCase?: boolean; allowUndefined?: boolean }): this {
    const updatedArgs = options?.allowIgnoreCase ? [...args, ...args.map(e => e.toLowerCase())] : [...args];
    return this.chain(val => {
      if (!options?.allowUndefined) {
        if (!val) throw "Field is required!";
      }
      const isInArray = val && updatedArgs.includes(val.toLowerCase());
      if (!isInArray) throw err ?? "Not a valid value";
    });
  }

  isValidDateFormat(err?: string) {
    return this.chain(val => {
      // Regular expression to match the date format DD/MM/YYYY
      const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

      // Check if the date string matches the regex pattern
      if (!regex.test(val)) {
        throw err ?? "Field is not in valid format";
      }

      // Extract the day, month, and year from the date string
      const [, month, day, year] = val.match(regex).map(Number);

      // Check if the day, month, and year are valid
      if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > 9999) {
        throw err ?? "Field is not in valid format";
      }

      // Check for the correct number of days in each month
      const daysInMonth = [
        31,
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ];
      if (day > daysInMonth[month - 1]) {
        throw err ?? "Field is not in valid format";
      }

      const inputDate = new Date(year, month - 1, day);
      const minDate = new Date(2024, 0, 1); // January is month 0 in JavaScript
      const maxDate = new Date();

      if (inputDate < minDate || inputDate > maxDate) {
        throw err ?? "Field is not in valid format";
      }
    });
  }

  /** evaluates the validators */
  evaluate(val: string, formValues?: T): string {
    if (formValues) {
      this.formValues = formValues;
    }

    try {
      this.valQue.forEach(fn => fn(val));
    } catch (err) {
      return err as string;
    }
    return "";
  }
}

export type validatorFunctionType = (val?: string) => void;

export const validator = <T extends { [name: string]: string }>() => {
  return new Validator<{ [key in keyof T]: FieldType }>();
};
