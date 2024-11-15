import React from "react";
import { RecommendedRowType } from "../pages/HomePage/HomePage";
import { Props as TrendingCardProps } from "../components/atoms/TrendingCard/TrendingCard";
import { useQuery } from "@tanstack/react-query";
import {
	getLandingPageImages,
	getRecommendedRows,
	getTrendingCards,
	imageType,
} from "../networks/dataApiCalls";
export type DataContextType = {
	trendingCards: TrendingCardProps[];
	recommendedRows: RecommendedRowType[];
	landingPageImages: imageType[];
	dataLoading: boolean;
	apiError: boolean;
};

const DataContext = React.createContext<DataContextType>({
	landingPageImages: [],
	recommendedRows: [],
	trendingCards: [],
	dataLoading: false,
	apiError: false,
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
	const landingPageQuery = useQuery({
		queryKey: ["landingPageImages"],
		queryFn: () => getLandingPageImages(),
	});
	const recommendedRowsQuery = useQuery({
		queryKey: ["recommendedRowsQuery"],
		queryFn: () => getRecommendedRows(),
	});
	const trendingCardsQuery = useQuery({
		queryKey: ["trendingCardsQuery"],
		queryFn: () => getTrendingCards(),
	});
	console.log(
		trendingCardsQuery.data,
		landingPageQuery.data,
		recommendedRowsQuery.data
	);

	return (
		<DataContext.Provider
			value={{
				landingPageImages: landingPageQuery.data?.data ?? [],
				recommendedRows: recommendedRowsQuery.data?.data ?? [],
				trendingCards: trendingCardsQuery.data?.data ?? [],
				dataLoading:
					landingPageQuery.isLoading ||
					recommendedRowsQuery.isLoading ||
					trendingCardsQuery.isLoading,
				apiError:
					landingPageQuery.isError ||
					recommendedRowsQuery.isError ||
					trendingCardsQuery.isError,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useHomePageData = () => {
	const context = React.useContext(DataContext);
	if (context === undefined) {
		throw new Error("useHomePageData must be used within a DataProvider");
	}
	return context;
};
