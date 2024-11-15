import { useQuery } from "@tanstack/react-query";
import { getAnimeDetails } from "../../networks/dataApiCalls";
import PageLayout from "../../components/atoms/PageLayout";
import Overlay from "../../components/atoms/Overlay/Overlay";
import Akatsuki from "../../components/atoms/Icons/Akatsuki";
import InfoBar from "../../components/atoms/InfoBar/InfoBar";
import DetailsHeading from "../../components/atoms/DetailsHeading/DetailsHeading";
import StatsCard from "../../components/atoms/StatsCard/StatsCard";
import YoutubeEmbed from "../../components/atoms/YoutubeEmbed/YoutubeEmbed";
import clsx from "clsx";

const AnimeDetailsPage = () => {
	const DummyId = 123;
	const { data, isError, isLoading } = useQuery({
		queryKey: ["getAnimeDetails", DummyId],
		queryFn: () => getAnimeDetails(),
	});

	if (!isLoading && (isError || !data)) return <p>Error occured</p>;

	if (!data) return <p>Error occured</p>;

	const {
		data: [
			{
				data: {
					title,
					trailer: {
						youtube_id,
						images: { large_image_url },
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
					favorites,
					popularity,
					members,
					scored_by,
					aired,
				},
			},
		],
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
						<YoutubeEmbed title={title} embedId={youtube_id} />
					</Overlay>
				</>
			)}
		</PageLayout>
	);
};

export default AnimeDetailsPage;
