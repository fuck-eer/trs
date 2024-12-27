import React from "react";
import PageLayout from "../../components/atoms/PageLayout";
import TrendingPane from "../../components/modules/TrendingPane/TrendingPane";
import { Props as TrendingCardProps } from "../../components/atoms/TrendingCard/TrendingCard";
import { Props as AnimeCardProps } from "../../components/atoms/AnimeCard/AnimeCard";
import SearchInput from "../../components/atoms/SearchInput/SearchInput";
import RecommendedCards from "../../components/modules/RecommendedCards/RecommendedCards";
import { staticContent } from "../../staticContent";

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

	return (
		<PageLayout className='flex-row items-stretch gap-12 max-h-screen max-w-screen'>
			<TrendingPane
				cards={trendingCards}
				subHeading={staticContent["HomePage.TrendingPane.SubHeading"]}
			/>
			<div className='flex-grow flex flex-col items-stretch gap-12 max-h-full'>
				<SearchInput
					clearEnabled
					className={{ _inputContainer: "self-center" }}
				/>
				<div className='flex flex-col items-stretch gap-5 max-h-full no-scrollbar overflow-auto'>
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
