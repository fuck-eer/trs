import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import HomePage from "../HomePage/HomePage";
import { useHomePageData } from "../../contexts/DataContext";
import { shuffleArray } from "../../utils/backdropImages";

const HomeRoute = () => {
	const { landingPageImages, recommendedRows, trendingCards } =
		useHomePageData();
	return (
		<>
			<LandingPage
				images={shuffleArray(
					landingPageImages.data?.data?.map((e) => e.url) ?? []
				)}
			/>
			<HomePage
				recommendedRows={recommendedRows?.data?.data ?? []}
				trendingCards={trendingCards?.data?.data ?? []}
			/>
		</>
	);
};

export default HomeRoute;
