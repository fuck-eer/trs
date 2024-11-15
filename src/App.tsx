import "./App.css";
import { useHomePageData } from "./contexts/DataContext";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage.tsx/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<>
				<LandingPage images={landingPageImages?.map((e) => e.url) ?? []} />
				<HomePage
				recommendedRows={recommendedRows ?? []}
				trendingCards={trendingCards ?? []}
				/>
			</>} />
			<Route path='/collections' element={<p>Collection page</p>} />
			<Route path='/collections/:id' element={<p> Inside collection with dynamic id</p>} />
			<Route path="/:genre/:id" element={<p>Inside genre with dynamic id</p>} />
			<Route path="anime/:id" element={<p>Inside anime with dynamic id</p>} />
		</Routes>		
		</BrowserRouter>
	);
}

export default App;
