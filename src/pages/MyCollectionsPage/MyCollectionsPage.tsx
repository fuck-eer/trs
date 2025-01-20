import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import Plus from "../../components/atoms/Icons/Plus";
import Share from "../../components/atoms/Icons/Share";
import PageLayout from "../../components/atoms/PageLayout";
import PublicToggle from "../../components/atoms/PublicToggle/PublicToggle";
import { colors } from "../../utils/tailwindTheme";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
	addCollection,
	AddCollectionParams,
	addLibrary,
	getMyCollections,
	PostLibraryAPIParams,
} from "../../networks/dataApiCalls";
import CollectionCard from "../../components/modules/CollectionCard/CollectionCard";
import { Modal } from "../../components/atoms/Modal/Modal";
import { toast } from "sonner";
import TextField from "../../components/atoms/Form/TextField";
import TextArea from "../../components/atoms/Form/TextArea";
import {
	initialStateLibraryForm,
	initialStateUpdateForm,
	libraryFormValidationSchema,
	updateFormValidationSchema,
} from "../../utils/forms/initialState";
import useForm from "../../hooks/useForm";
import CollectionCheckboxes from "../../components/atoms/Form/CollectionCheckboxes";
import { useAuth } from "@clerk/clerk-react";
import LoadingPage from "../../components/atoms/LoadingPage";
import ErrorPage from "../../components/atoms/ErrorPage";

const MyCollectionsPage = () => {
	const { getToken } = useAuth();
	const [isPublic, setIsPublic] = useState(true);
	const [openCreateCollection, setOpenCreateCollection] = useState(false);
	const [openCreateLibrary, setOpenCreateLibrary] = useState(false);
	const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
	const {
		formData,
		formFieldBlurHandler,
		formFieldChangeHandler,
		setTouchedOnSubmit,
		isFormValid,
	} = useForm(initialStateUpdateForm, updateFormValidationSchema);

	const {
		formData: libraryFormData,
		formFieldBlurHandler: libraryFormFieldBlurHandler,
		formFieldChangeHandler: libraryFormFieldChangeHandler,
		setTouchedOnSubmit: libraryFormSetTouchedOnSubmit,
		isFormValid: libraryFormIsFormValid,
	} = useForm(initialStateLibraryForm, libraryFormValidationSchema);

	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ["myCollection", isPublic],
		queryFn: async () => getMyCollections(isPublic, await getToken()),
	});

	const { mutate: addCollectionMutation, isPending: isAdding } = useMutation({
		mutationKey: ["addCollection"],
		mutationFn: async (variable: AddCollectionParams) =>
			addCollection(variable, await getToken()),
	});

	const { mutate: addLibraryMutation, isPending: isSharing } = useMutation({
		mutationKey: ["addLibrary"],
		mutationFn: async (variable: PostLibraryAPIParams) =>
			addLibrary(variable, await getToken()),
	});

	const onPublicChange = (state: "public" | "private") => {
		setIsPublic(state === "public");
	};

	const onCheckChange = (e: string) => {
		const selectedCollectionsSet = new Set(selectedCollections);
		if (selectedCollectionsSet.has(e)) {
			selectedCollectionsSet.delete(e);
		} else {
			selectedCollectionsSet.add(e);
		}
		setSelectedCollections(Array.from(selectedCollectionsSet));
	};

	return isLoading ? (
		<LoadingPage />
	) : isError ? (
		<ErrorPage />
	) : (
		<>
			<PageLayout className='flex flex-col gap-8'>
				<div className='w-full justify-between items-center flex gap-7'>
					<h1 className='text-4xl text-white font-medium'>My Collections</h1>
					<PublicToggle
						privateLabel='🔏'
						publicLabel='🌏'
						isPublic={isPublic}
						onClick={onPublicChange}
					/>
					<div className='flex justify-start gap-4 items-center max-w-min'>
						<Button
							variant={isPublic ? "nude-primary" : "nude-secondary"}
							onClick={() => setOpenCreateLibrary(true)}
						>
							<Share
								fill={isPublic ? colors["green-light"] : colors["purple-dark"]}
								height='30'
							/>
						</Button>
						<Button
							className='p-2'
							variant={isPublic ? "solid-primary" : "solid-secondary"}
							onClick={() => setOpenCreateCollection(true)}
						>
							<Plus width='25' height='25' />
						</Button>
					</div>
				</div>
				{data?.data
					?.filter(({ isPublic: cardPublic }) => cardPublic === isPublic)
					.map(({ cards, heading, isPublic: cardPublic, subHeading, id }) => (
						<CollectionCard
							key={id}
							id={id}
							heading={heading}
							subHeading={subHeading}
							isPublic={cardPublic}
							cards={cards}
						/>
					))}
			</PageLayout>
			{/* Create Collection Modal */}
			<Modal
				isOpen={openCreateCollection}
				onClose={() => setOpenCreateCollection(false)}
				heading='Create New Collection'
				modalName='create-collection'
				modalSize='md'
				withBackdrop
				actions={[
					{
						buttonText: "Create",
						buttonType: "solid-primary",
						isLoading: isAdding,
						onClick: () => {
							setTouchedOnSubmit();
							if (!isFormValid) {
								return;
							}
							addCollectionMutation(
								{
									name: formData.name.value,
									description: formData.description.value,
									isPublic: true,
								},
								{
									onSuccess: () => {
										setOpenCreateCollection(false);
										refetch();
									},
									onError: () => {
										setOpenCreateCollection(false);
										toast.error("Unable to create collection");
									},
								}
							);
						},
						className: "px-6",
					},
					{
						buttonText: "Cancel",
						buttonType: "outline-primary",
						onClick: () => {
							console.log("Cancel Update collection");
							setOpenCreateCollection(false);
						},
						className: "px-6",
					},
				]}
			>
				<TextField
					name='name'
					label='Name:'
					inputProps={{
						value: formData.name.value,
						onChange: formFieldChangeHandler,
						onBlur: formFieldBlurHandler,
					}}
					errorText={
						formData.name.isTouched && formData.name.error
							? formData.name.error
							: ""
					}
				/>
				<TextArea
					name='description'
					label='Description:'
					inputProps={{
						value: formData.description.value,
						onChange: formFieldChangeHandler,
						onBlur: formFieldBlurHandler,
					}}
					errorText={
						formData.description.isTouched && formData.description.error
							? formData.description.error
							: ""
					}
				/>
			</Modal>
			{/* Create Library Modal */}
			<Modal
				heading='Share Collections'
				modalName='create-library'
				modalSize='md'
				withBackdrop
				isOpen={openCreateLibrary}
				onClose={() => setOpenCreateLibrary(false)}
				actions={[
					{
						buttonText: "Share it",
						buttonType: "solid-primary",
						isLoading: isSharing,
						onClick: () => {
							libraryFormSetTouchedOnSubmit();
							if (!libraryFormIsFormValid) {
								return;
							}
							addLibraryMutation(
								{
									catalogues: selectedCollections,
									libraryDescription: libraryFormData.description.value,
									libraryName: libraryFormData.libraryName.value,
									libraryPassword: libraryFormData.accessPassword.value,
									sharedWith: libraryFormData.userEmails.value.split(","),
								},
								{
									onSuccess: () => {
										setOpenCreateLibrary(false);
										refetch();
									},
									onError: () => {
										setOpenCreateLibrary(false);
										toast.error("Unable to create library");
									},
								}
							);
						},
						className: "px-6",
					},
					{
						buttonText: "Cancel",
						buttonType: "outline-primary",
						onClick: () => {
							setOpenCreateLibrary(false);
						},
						className: "px-6",
					},
				]}
			>
				<TextField
					name='libraryName'
					label='Library Name:'
					inputProps={{
						value: libraryFormData.libraryName.value,
						onChange: libraryFormFieldChangeHandler,
						onBlur: libraryFormFieldBlurHandler,
					}}
					errorText={
						libraryFormData.libraryName.isTouched &&
						libraryFormData.libraryName.error
							? libraryFormData.libraryName.error
							: ""
					}
				/>
				<div className='flex flex-row gap-4 justify-start items-stretch'>
					<TextField
						name='userEmails'
						label='User Emails:'
						helperText='Provide emails of people you want to share it with'
						inputProps={{
							value: libraryFormData.userEmails.value,
							onChange: libraryFormFieldChangeHandler,
							onBlur: libraryFormFieldBlurHandler,
						}}
						errorText={
							libraryFormData.userEmails.isTouched &&
							libraryFormData.userEmails.error
								? libraryFormData.userEmails.error
								: ""
						}
					/>
					<TextField
						name='accessPassword'
						label='Access Password:'
						helperText='Provide password, in case of private collections'
						inputProps={{
							value: libraryFormData.accessPassword.value,
							onChange: libraryFormFieldChangeHandler,
							onBlur: libraryFormFieldBlurHandler,
						}}
						errorText={
							libraryFormData.accessPassword.isTouched &&
							libraryFormData.accessPassword.error
								? libraryFormData.accessPassword.error
								: ""
						}
					/>
				</div>
				<TextArea
					name='description'
					label='Description:'
					inputProps={{
						value: libraryFormData.description.value,
						onChange: libraryFormFieldChangeHandler,
						onBlur: libraryFormFieldBlurHandler,
					}}
					errorText={
						libraryFormData.description.isTouched &&
						libraryFormData.description.error
							? libraryFormData.description.error
							: ""
					}
				/>
				<CollectionCheckboxes
					onCheckChange={onCheckChange}
					selectedCollections={selectedCollections}
				/>
			</Modal>
		</>
	);
};

export default MyCollectionsPage;
