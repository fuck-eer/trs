import "./App.css";
import { shuffleArray } from "./utils/backdropImages";
import { useHomePageData } from "./contexts/DataContext";
import AnimeDetailsPage from "./pages/AnimeDetailsPage/AnimeDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage.tsx/LandingPage";
import MyCollectionsPage from "./pages/MyCollectionsPage/MyCollectionsPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import { Modal } from "./components/atoms/Modal/Modal";

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
			{/* <LandingPage images={shuffleArray(landingPageImages?.map((e) => e.url) ?? [])} />
			<HomePage
				recommendedRows={recommendedRows ?? []}
				trendingCards={trendingCards ?? []}
			<AnimeDetailsPage />
			/> */}
			{/* <MyCollectionsPage /> */}
			<Modal
				isOpen={true}
				onClose={() => {
					return false;
				}}
				heading='Test Heading'
				modalName='test'
				withBackdrop
				actions={[
					{
						buttonText: "Test Button 1",
						buttonType: "solid-primary",
						onClick: () => {},
					},
					{
						buttonText: "Test Button 2",
						buttonType: "outline-primary",
						onClick: () => {},
					},
				]}
			>
				Hey,Guys this is just a test
			</Modal>
			<CollectionPage />
		</>
	);
}

export default App;
