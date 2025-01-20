import { useMutation, useQuery } from "@tanstack/react-query";
import {
	addAnimeToCollections,
	AddAnimeToCollectionsParams,
	getAnimeDetails,
} from "../../networks/dataApiCalls";
import PageLayout from "../../components/atoms/PageLayout";
import Overlay from "../../components/atoms/Overlay/Overlay";
import Akatsuki from "../../components/atoms/Icons/Akatsuki";
import InfoBar from "../../components/atoms/InfoBar/InfoBar";
import DetailsHeading from "../../components/atoms/DetailsHeading/DetailsHeading";
import StatsCard from "../../components/atoms/StatsCard/StatsCard";
import YoutubeEmbed from "../../components/atoms/YoutubeEmbed/YoutubeEmbed";
import clsx from "clsx";
import OpenPage from "../../components/atoms/Icons/OpenPage";
import Plus from "../../components/atoms/Icons/Plus";
import { colors } from "../../utils/tailwindTheme";
import { Modal } from "../../components/atoms/Modal/Modal";
import { useState } from "react";
import { toast } from "sonner";
import CollectionCheckboxes from "../../components/atoms/Form/CollectionCheckboxes";
import { useAuth } from "@clerk/clerk-react";
import ErrorPage from "../../components/atoms/ErrorPage";

export type Props = {
	animeID: string;
};

const AnimeDetailsPage = ({ animeID }: Props) => {
	const { getToken } = useAuth();
	const [openAddToCollectionModal, setOpenAddToCollectionModal] =
		useState(false);
	const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
	const { data, isError, isLoading } = useQuery({
		queryKey: ["getAnimeDetails", animeID],
		queryFn: async () => getAnimeDetails(animeID, await getToken()),
	});

	const { mutate: addAnimeToCollectionsMutation, isPending: addingIsPending } =
		useMutation({
			mutationKey: ["addAnimeToCollections", selectedCollections, animeID],
			mutationFn: async ({
				animeDetails,
				catalogueIds,
			}: AddAnimeToCollectionsParams) =>
				addAnimeToCollections({ animeDetails, catalogueIds }, await getToken()),
		});

	const onCheckChange = (e: string) => {
		const selectedCollectionsSet = new Set(selectedCollections);
		if (selectedCollectionsSet.has(e)) {
			selectedCollectionsSet.delete(e);
		} else {
			selectedCollectionsSet.add(e);
		}
		setSelectedCollections(Array.from(selectedCollectionsSet));
	};

	if (!isLoading && isError) return <ErrorPage />;

	if (!data) return <ErrorPage />;

	const {
		data: {
			data: {
				title,
				trailer,
				images: {
					jpg: { image_url },
					webp: { large_image_url },
				},
				episodes,
				synopsis,
				genres,
				studios,
				season,
				rating,
				score,
				status,
				rank,
				mal_id,
				favorites,
				popularity,
				members,
				scored_by,
				aired,
			},
		},
	} = data;

	const airedFrom = aired?.from
		? new Date(aired.from).toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "2-digit",
		  })
		: "-";
	const airedTo = aired?.to
		? new Date(aired.to).toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "2-digit",
		  })
		: "-";

	return (
		<>
			<PageLayout className='relative items-center justify-center gap-12 min-h-screen min-w-screen'>
				{isLoading ? (
					<Akatsuki
						width='50'
						height='50'
						className='scale-[1.5] translate-y-2 animate-wiggle'
					/>
				) : (
					<>
						<div
							className={clsx(
								"absolute top-0 left-0 w-full h-full",
								"before:absolute before:top-0 before:left-0 before:w-full before:h-[30%] before:rounded-t-2xl before:bg-gradient-to-b before:from-black/50 before:to-transparent",
								"after:absolute after:bottom-0 after:left-0 after:w-full after:h-[30%] after:rounded-b-2xl after:bg-gradient-to-t after:from-black after:to-transparent"
							)}
						>
							<img
								src={large_image_url}
								alt={title}
								className='absolute opacity-10 w-full h-full object-cover'
							/>
						</div>
						<Overlay
							className={{
								_container: "px-12 self-baseline w-full h-full py-7 gap-7",
							}}
						>
							<div className='flex flex-row items-center justify-between gap-16'>
								<DetailsHeading
									descriptions={synopsis}
									genres={genres?.map((e) => e.name)}
									isAiring={status === "Currently Airing"}
									heading={title}
								/>
								<StatsCard
									favorites={favorites}
									members={members}
									popularity={popularity}
									ranked={rank}
									score={score}
									ratedBy={scored_by}
								/>
							</div>
							<InfoBar
								duration={`${airedFrom} - ${airedTo}`}
								episodes={episodes}
								rating={rating}
								studio={studios?.[0]?.name}
								season={season}
							/>
							<YoutubeEmbed title={title} embedId={trailer?.youtube_id ?? ""} />
						</Overlay>
						<div className='fixed flex flex-col gap-4 justify-start items-center bottom-[40px] right-[40px]'>
							<OpenPage
								solid
								width='24'
								height='24'
								className='cursor-pointer'
								fill={colors["green-light"]}
							/>
							<div
								className='w-12 h-12 rounded-full bg-green-light flex justify-center items-center cursor-pointer'
								onClick={() => setOpenAddToCollectionModal(true)}
							>
								<Plus width='24' height='24' fill={colors["green-dark-card"]} />
							</div>
						</div>
					</>
				)}
			</PageLayout>
			<Modal
				isOpen={openAddToCollectionModal}
				onClose={() => setOpenAddToCollectionModal(false)}
				heading='Add to Collection'
				modalName='add-to-collection'
				modalSize='md'
				withBackdrop
				actions={[
					{
						buttonText: "Add",
						isLoading: addingIsPending,
						disabled: addingIsPending,
						buttonType: "solid-primary",
						onClick: () => {
							const animeDetailsObj = {
								title,
								description: synopsis,
								imageUrl: image_url,
								rating: score,
								genres: genres?.map((e) => e.name),
								favorite: favorites,
								rank,
								id: mal_id,
							};
							addAnimeToCollectionsMutation(
								{
									animeDetails: animeDetailsObj,
									catalogueIds: selectedCollections,
								},
								{
									onSuccess() {
										setSelectedCollections([]);
										setOpenAddToCollectionModal(false);
									},
									onError() {
										setSelectedCollections([]);
										setOpenAddToCollectionModal(false);
										toast.error("Unable to add anime to collection");
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
							console.log("Cancel Add to collection");
							setOpenAddToCollectionModal(false);
						},
						className: "px-6",
					},
				]}
			>
				<CollectionCheckboxes
					onCheckChange={onCheckChange}
					selectedCollections={selectedCollections}
				/>
			</Modal>
		</>
	);
};

export default AnimeDetailsPage;
