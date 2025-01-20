import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeRoute from "./pages/Routes/HomeRoute";
import AnimeRoute from "./pages/Routes/AnimeRoute";
import MyCollectionRoute from "./pages/Routes/MyCollectionRoute";
import CollectionRoute from "./pages/Routes/CollectionRoute";
import LibrariesRoute from "./pages/Routes/LibrariesRoute";
import LibraryRoute from "./pages/Routes/LibraryRoute";
import NavDrop from "./components/modules/NavDrop/NavDrop";
import LandingRoute from "./pages/Routes/LandingRoute";

function App() {
	let navPosition: "topRight" | "bottomLeft" = "topRight";
	const { pathname } = useLocation();

	switch (`/${pathname.split("/")[1]}`) {
		case "/":
			navPosition = "topRight";
			break;
		case "/collections":
			navPosition = "bottomLeft";
			break;
		case "/libraries":
			navPosition = "topRight";
			break;
		case "/anime":
			navPosition = "topRight";
			break;
		default:
			navPosition = "topRight";
			break;
	}

	return (
		<>
			{pathname.split("/")[1] !== "landing" && (
				<NavDrop isLoggedIn={true} position={navPosition ?? "topRight"} />
			)}
			<Routes>
				<Route path='/' element={<HomeRoute />} />
				<Route path='/landing' element={<LandingRoute />} />
				<Route path='/anime/:id' element={<AnimeRoute />} />
				<Route path='/collections' element={<MyCollectionRoute />} />
				<Route path='/collections/:id' element={<CollectionRoute />} />
				<Route path='/libraries' element={<LibrariesRoute />} />
				<Route path='/libraries/:id' element={<LibraryRoute />} />
			</Routes>
		</>
	);
}

export default App;
