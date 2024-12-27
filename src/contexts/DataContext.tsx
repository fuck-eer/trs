import React from "react";
import { RecommendedRowType } from "../pages/HomePage/HomePage";
import { Props as TrendingCardProps } from "../components/atoms/TrendingCard/TrendingCard";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
	getLandingPageImages,
	getRecommendedRows,
	getTrendingCards,
	imageType,
} from "../networks/dataApiCalls";
import { APIReturnType } from "../utils/fetchApi";
import { useAuth } from "@clerk/clerk-react";
export type DataContextType = {
	trendingCards: UseQueryResult<APIReturnType<TrendingCardProps[]>>;
	recommendedRows: UseQueryResult<APIReturnType<RecommendedRowType[]>>;
	landingPageImages: UseQueryResult<APIReturnType<imageType[]>>;
};

const DataContext = React.createContext<DataContextType>({
	landingPageImages: {} as UseQueryResult<APIReturnType<imageType[]>>,
	recommendedRows: {} as UseQueryResult<APIReturnType<RecommendedRowType[]>>,
	trendingCards: {} as UseQueryResult<APIReturnType<TrendingCardProps[]>>,
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
	const { getToken } = useAuth();
	const landingPageQuery = useQuery({
		queryKey: ["landingPageImages"],
		queryFn: async () => getLandingPageImages(await getToken()),
	});
	const recommendedRowsQuery = useQuery({
		queryKey: ["recommendedRowsQuery"],
		queryFn: async () => getRecommendedRows(await getToken()),
	});
	const trendingCardsQuery = useQuery({
		queryKey: ["trendingCardsQuery"],
		queryFn: async () => getTrendingCards(await getToken()),
	});
	console.log(
		trendingCardsQuery.data,
		landingPageQuery.data,
		recommendedRowsQuery.data
	);

	return (
		<DataContext.Provider
			value={{
				landingPageImages: landingPageQuery,
				recommendedRows: recommendedRowsQuery,
				trendingCards: trendingCardsQuery,
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
