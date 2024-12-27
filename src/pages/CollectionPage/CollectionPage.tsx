import React, { useEffect, useState } from "react";
import PageLayout from "../../components/atoms/PageLayout";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
	deleteCollection,
	getCollectionDetails,
	updateCollection,
} from "../../networks/dataApiCalls";
import Button from "../../components/atoms/Button/Button";
import { colors } from "../../utils/tailwindTheme";
import AnimeCard from "../../components/atoms/AnimeCard/AnimeCard";
import Share from "../../components/atoms/Icons/Share";
import { cn } from "../../utils/cn";
import Settings from "../../components/atoms/Icons/Settings";
import Avatar from "../../components/atoms/Icons/Avatar";
import AddCardPlaceholder from "../../components/atoms/AddCard/AddCardPlaceholder";
import moment from "moment";
import Menu from "../../components/atoms/Menu/Menu";
import MenuOption from "../../components/atoms/Menu/MenuOption";
import Rename from "../../components/atoms/Icons/Rename";
import Delete from "../../components/atoms/Icons/Delete";
import ToggleSwitch from "../../components/atoms/Form/ToggleSwitch";
import { Modal } from "../../components/atoms/Modal/Modal";
import TextField from "../../components/atoms/Form/TextField";
import TextArea from "../../components/atoms/Form/TextArea";
import Checkbox from "../../components/atoms/Form/Checkbox";
import useForm from "../../hooks/useForm";
import {
	initialStateUpdateForm,
	updateFormValidationSchema,
} from "../../utils/forms/initialState";
import { toast } from "sonner";
import CollectionCheckboxes from "../../components/atoms/Form/CollectionCheckboxes";
import { useAuth } from "@clerk/clerk-react";

type Props = { collectionId: string };
const CollectionPage = ({ collectionId }: Props) => {
	const { getToken } = useAuth();
	const [openSettings, setOpenSettings] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [openRename, setOpenRename] = useState(false);
	const [openShare, setOpenShare] = useState(false);
	const [openUsersMenu, setOpenUsersMenu] = useState(false);
	const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
	const [mode, setMode] = useState<"public" | "private">("public");

	const {
		formData,
		formFieldBlurHandler,
		formFieldChangeHandler,
		setTouchedOnSubmit,
		isFormValid,
	} = useForm(initialStateUpdateForm, updateFormValidationSchema);

	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ["collection", collectionId],
		queryFn: async () => getCollectionDetails(collectionId, await getToken()),
	});

	const { isPending: isUpdating, mutate: updateCollectionMutation } =
		useMutation({
			mutationKey: ["updateCollection", collectionId],
			mutationFn: async (variable: {
				name: string;
				description: string;
				catalogueId: string;
			}) => updateCollection(variable, await getToken()),
		});

	const { isPending: isDeleting, mutate: deleteCollectionMutation } =
		useMutation({
			mutationKey: ["deleteCollection", collectionId],
			mutationFn: async (catalogueId: string) =>
				deleteCollection(catalogueId, await getToken()),
		});

	useEffect(() => {
		if (data) {
			if (data.data.isPublic) {
				setMode("public");
			} else {
				setMode("private");
			}
		}
	}, [data]);

	const onSwitchMode = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setMode("private");
		} else {
			setMode("public");
		}
	};

	if (!isLoading && (isError || !data)) return <p>Error occurred</p>;
	if (!data) return <p>Error occurred</p>;
	const {
		data: { cards, heading, subHeading, createdOn, updatedOn },
	} = data;
	const isPublicMode = mode !== "private";

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
		<p>Loading...</p>
	) : isError ? (
		<p>Error Occurred</p>
	) : (
		<>
			<PageLayout className='flex-col gap-12'>
				<div className='flex flex-col gap-4'>
					<div className='w-full justify-between items-center flex gap-7'>
						<h1
							className={cn(
								"text-4xl text-white font-semibold",
								isPublicMode ? "text-green-light" : "text-purple-dark"
							)}
						>
							{heading}
						</h1>
						<div className='flex justify-start gap-4 items-center max-w-min'>
							<Menu
								isOpen={openUsersMenu}
								onClose={() => setOpenUsersMenu(false)}
								className={{ _menuItemHolder: "gap-2 min-h-max" }}
								menuItem={
									<>
										<div className='flex flex-col justify-start items-stretch gap-2'>
											<p className='font-light text-xs text-gray-600'>
												Creator
											</p>
											<p className='text-sm text-green-text'>Bhojraj Singh</p>
										</div>
										<div className='flex flex-col justify-start items-stretch gap-2 mt-3'>
											<p className='font-light text-xs text-gray-600'>
												Shared With
											</p>
											<p className='text-sm text-green-text'>Bhojraj Singh</p>
											<p className='text-sm text-green-text'>Bhojraj Singh</p>
											<p className='text-sm text-green-text'>Bhojraj Singh</p>
											<p className='text-sm text-green-text'>Bhojraj Singh</p>
										</div>
									</>
								}
							>
								<Button
									variant={isPublicMode ? "nude-primary" : "nude-secondary"}
									onClick={() => {
										setOpenUsersMenu(true);
									}}
								>
									<Avatar
										fill={
											isPublicMode
												? colors["green-light"]
												: colors["purple-dark"]
										}
										width='30'
										height='30'
									/>
								</Button>
							</Menu>
							<Menu
								isOpen={openSettings}
								onClose={() => {
									setOpenSettings(false);
								}}
								className={{ _menuItemHolder: "gap-2" }}
								menuItem={
									<>
										<MenuOption
											text='Update'
											icon={
												<Rename width='16' height='16' fill='white' solid />
											}
											onClick={() => {
												setOpenRename((prev) => !prev);
												setOpenSettings(false);
											}}
										/>
										<MenuOption
											text='Share It'
											icon={<Share width='16' height='16' fill='white' solid />}
											onClick={() => {
												setOpenShare((prev) => !prev);
												setOpenSettings(false);
											}}
										/>
										<div className='flex flex-col grow justify-end items-center gap-4'>
											<ToggleSwitch
												checked={mode === "private"}
												onChange={onSwitchMode}
												label1='Public'
												label2='Private'
												withLabel
											/>
											<Button
												className='w-full hover:bg-red-error/10'
												variant='outline-destructive'
												onClick={() => {
													setOpenDelete(true);
													setOpenSettings(false);
												}}
											>
												<Delete
													width='16'
													height='16'
													fill={colors["red-error"]}
												/>
												Delete
											</Button>
										</div>
									</>
								}
							>
								<Button
									className='p-2'
									variant={isPublicMode ? "solid-primary" : "solid-secondary"}
									onClick={() => setOpenSettings((prev) => !prev)}
								>
									<Settings
										width='30'
										height='30'
										fill={colors["green-dark-card"]}
									/>
								</Button>
							</Menu>
						</div>
					</div>
					<div className='flex flex-row justify-between items-stretch'>
						<p className='text-white text-ellipsis text-[14px] font-normal line-clamp-5 max-w-[500px]'>
							{subHeading}
						</p>
						<div className='flex flex-col justify-start text-[12px] items-stretch'>
							<p
								className={cn(
									isPublicMode ? "text-green-light" : "text-purple-dark"
								)}
							>
								Created on:{" "}
								<span className='text-[14px] text-white font-bold'>
									{createdOn ? moment(createdOn).format("YYYY MMM Do") : "--"}
								</span>
							</p>
							<p
								className={cn(
									isPublicMode ? "text-green-light" : "text-purple-dark"
								)}
							>
								Updated on:{" "}
								<span className='text-[14px] text-white font-bold'>
									{updatedOn ? moment(updatedOn).format("YYYY MMM Do") : "--"}
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap gap-[90px] justify-start items-center'>
					{cards.map((card) => (
						<AnimeCard key={card.title} {...card} />
					))}
					<AddCardPlaceholder
						onAdd={() => console.log("add clicked")}
						isPublic={isPublicMode}
						size='md'
					/>
				</div>
			</PageLayout>
			{/* Delete Collection Modal */}
			<Modal
				isOpen={openDelete}
				onClose={() => setOpenDelete(false)}
				heading='Delete Collection'
				modalName='delete-collection'
				modalSize='md'
				withBackdrop
				actions={[
					{
						buttonText: "Delete",
						buttonType: "solid-destructive",
						isLoading: isDeleting,
						onClick: () => {
							deleteCollectionMutation(collectionId, {
								onSuccess() {
									setOpenDelete(false);
									refetch();
								},
								onError() {
									setOpenDelete(false);
									toast.error("Unable to delete collection");
								},
							});
							setOpenDelete(false);
						},
						className: "text-white px-6",
					},
					{
						buttonText: "Cancel",
						buttonType: "outline-primary",
						onClick: () => {
							console.log("Cancel Delete collection");
							setOpenDelete(false);
						},
						className: "text-white px-6",
					},
				]}
			>
				<p>
					Are you sure you want to{" "}
					<span className='text-red-error'>delete collection</span> named{" "}
					<span className='text-green-light'>{heading}</span> permanently?
				</p>
			</Modal>
			{/* Update Collection Modal */}
			<Modal
				isOpen={openRename}
				onClose={() => setOpenRename(false)}
				heading='Update Collection'
				modalName='update-collection'
				modalSize='md'
				withBackdrop
				actions={[
					{
						buttonText: "Update",
						buttonType: "solid-primary",
						isLoading: isUpdating,
						onClick: () => {
							setTouchedOnSubmit();
							if (!isFormValid) {
								return;
							}
							updateCollectionMutation(
								{
									catalogueId: collectionId,
									name: formData.name.value,
									description: formData.description.value,
								},
								{
									onSuccess: () => {
										setOpenRename(false);
										refetch();
									},
									onError: () => {
										setOpenRename(false);
										toast.error("Unable to update collection");
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
							setOpenRename(false);
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
			{/* Share Collection Modal */}
			<Modal
				isOpen={openShare}
				onClose={() => setOpenShare(false)}
				heading='Share Collection'
				modalName='share-collection'
				modalSize='md'
				withBackdrop
				actions={[
					{
						buttonText: "Share it",
						buttonType: "solid-primary",
						onClick: () => {
							console.log("Share collection");
							setOpenShare(false);
						},
						className: "px-6",
					},
					{
						buttonText: "Cancel",
						buttonType: "outline-primary",
						onClick: () => {
							console.log("Cancel Share collection");
							setOpenShare(false);
						},
						className: "px-6",
					},
				]}
			>
				<TextField name='LibraryName' label='Library Name:' />
				<div className='flex flex-row gap-4 justify-start items-stretch'>
					<TextField
						name='userEmails'
						label='User Emails:'
						helperText='Provide emails of people you want to share it with'
					/>
					<TextField
						name='accessPassword'
						label='Access Password:'
						helperText='Provide password, in case of private collections'
					/>
				</div>
				<TextArea name='description' label='Description:' />
				<CollectionCheckboxes
					onCheckChange={onCheckChange}
					selectedCollections={selectedCollections}
				/>
			</Modal>
		</>
	);
};

export default CollectionPage;
