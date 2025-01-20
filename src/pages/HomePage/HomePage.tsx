import React from "react";
import PageLayout from "../../components/atoms/PageLayout";
import TrendingPane from "../../components/modules/TrendingPane/TrendingPane";
import { Props as TrendingCardProps } from "../../components/atoms/TrendingCard/TrendingCard";
import { Props as AnimeCardProps } from "../../components/atoms/AnimeCard/AnimeCard";
import SearchInput from "../../components/atoms/SearchInput/SearchInput";
import RecommendedCards from "../../components/modules/RecommendedCards/RecommendedCards";
import { staticContent } from "../../staticContent";
import { cn } from "../../utils/cn";
import useMediaQuery from "../../hooks/useMediaQuery";
import LoadingPage from "../../components/atoms/LoadingPage";
import ErrorPage from "../../components/atoms/ErrorPage";

export type RecommendedRowType = {
	heading: string;
	cards: AnimeCardProps[];
};

type Props = {
	trendingCards: TrendingCardProps[];
	recommendedRows: RecommendedRowType[];
	className?: string;
};
const HomePage = ({ trendingCards, recommendedRows }: Props) => {
	console.log("trendingCards", trendingCards);
	console.log("recommendedRows", recommendedRows);
	const isLarge = useMediaQuery("lg");
	const isMedium = useMediaQuery("md");

	return (
		<PageLayout
			className={cn(
				"flex-row items-stretch gap-12 max-h-screen max-w-screen",
				isLarge ? "gap-12" : isMedium ? "gap-8" : "gap-6"
			)}
		>
			<TrendingPane
				cards={trendingCards}
				className={{ _container: "w-[25%]" }}
				subHeading={staticContent["HomePage.TrendingPane.SubHeading"]}
			/>
			<div
				className={cn(
					"flex-grow flex flex-col items-stretch gap-12 max-h-full",
					isLarge
						? "w-[calc(75%-48px)]"
						: isMedium
						? "w-[calc(75%-32px)]"
						: "w-[calc(75%-24px)]"
				)}
			>
				<SearchInput
					clearEnabled
					className={{ _inputContainer: "self-center" }}
				/>
				<div className='flex flex-col items-stretch gap-5 max-h-full max-w-full no-scrollbar overflow-auto'>
					{recommendedRows.map((row) => (
						<RecommendedCards
							cards={row.cards}
							heading={row.heading}
							key={row.heading}
						/>
					))}
				</div>
			</div>
		</PageLayout>
	);
};

export default HomePage;
