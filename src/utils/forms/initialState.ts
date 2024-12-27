import { validator } from "../validator";

export const initialStateUpdateForm = {
	name: "",
	description: "",
};
export type InitialStateUpdateFormType = typeof initialStateUpdateForm;
export const updateFormValidationSchema = {
	name: validator<InitialStateUpdateFormType>().minLen(3).maxLen(60).required(),
	description: validator<InitialStateUpdateFormType>()
		.minLen(10)
		.maxLen(200)
		.required(),
};

export const initialStateLibraryForm = {
	libraryName: "",
	userEmails: "",
	accessPassword: "",
	description: "",
};
export type InitialStateLibraryFormType = typeof initialStateLibraryForm;
export const libraryFormValidationSchema = {
	libraryName: validator<InitialStateLibraryFormType>()
		.minLen(3)
		.maxLen(100)
		.required(),
	userEmails: validator<InitialStateLibraryFormType>(),
	accessPassword: validator<InitialStateLibraryFormType>()
		.minLen(10)
		.maxLen(80)
		.required(),
	description: validator<InitialStateLibraryFormType>()
		.minLen(10)
		.maxLen(200)
		.required(),
};
