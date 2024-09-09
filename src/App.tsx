import "./App.css";
import { useHomePageData } from "./contexts/DataContext";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage.tsx/LandingPage";

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
			<LandingPage images={landingPageImages?.map((e) => e.url) ?? []} />
			<HomePage
				recommendedRows={recommendedRows ?? []}
				trendingCards={trendingCards ?? []}
			/>
		</>
	);
}

export default App;
