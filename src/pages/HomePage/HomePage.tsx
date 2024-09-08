import React from "react";
import PageLayout from "../../components/atoms/PageLayout";
import TrendingPane from "../../components/modules/TrendingPane/TrendingPane";
import { Props as TrendingCardProps } from "../../components/atoms/TrendingCard/TrendingCard";
import { Props as AnimeCardProps } from "../../components/atoms/AnimeCard/AnimeCard";
import SearchInput from "../../components/atoms/SearchInput/SearchInput";
import RecommendedCards from "../../components/modules/RecommendedCards/RecommendedCards";

export type RecommendedRowType = {
	heading: string;
	cards: AnimeCardProps[];
};

type Props = {
	trendingCards: TrendingCardProps[];
	recommendedRows: RecommendedRowType[];
	className?: string;
};
const HomePage = ({ trendingCards, recommendedRows, className }: Props) => {
	return (
		<PageLayout className='flex-row items-stretch'>
			<TrendingPane
				heading='The Recommendation Street'
				cards={trendingCards}
				subHeading='Lorem ipsum dolor sit amet consectetur. Pellentesque fusce non lorem mauris mattis fusce. Et est id viverra posuere semper aliquam nisl id risus.'
			/>
			<div className='flex-grow flex flex-col items-stretch gap-12 h-full'>
				<SearchInput className={"self-center"} />
				<div className='flex flex-col items-stretch gap-15 h-full'>
					{recommendedRows.map((row, index) => (
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
