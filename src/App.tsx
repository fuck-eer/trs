import "./App.css";
import { useHomePageData } from "./contexts/DataContext";
import AnimeDetailsPage from "./pages/AnimeDetailsPage/AnimeDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage.tsx/LandingPage";
import MyCollectionsPage from "./pages/MyCollectionsPage/MyCollectionsPage";

function App() {
	const {
		dataLoading,
		apiError,
		landingPageImages,
		recommendedRows,
		trendingCards,
	} = useHomePageData();
	return dataLoading || apiError ? (
		<p>Error occured</p>
	) : (
		<>
			{/* <LandingPage images={landingPageImages?.map((e) => e.url) ?? []} />
			<HomePage
				recommendedRows={recommendedRows ?? []}
				trendingCards={trendingCards ?? []}
			<AnimeDetailsPage />
			/> */}
			<MyCollectionsPage />
		</>
	);
}

export default App;
