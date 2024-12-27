import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeRoute from "./pages/Routes/HomeRoute";
import AnimeRoute from "./pages/Routes/AnimeRoute";
import MyCollectionRoute from "./pages/Routes/MyCollectionRoute";
import CollectionRoute from "./pages/Routes/CollectionRoute";
import LibrariesRoute from "./pages/Routes/LibrariesRoute";
import LibraryRoute from "./pages/Routes/LibraryRoute";

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomeRoute />} />
			<Route path='/anime/:id' element={<AnimeRoute />} />
			<Route path='/collections' element={<MyCollectionRoute />} />
			<Route path='/collections/:id' element={<CollectionRoute />} />
			<Route path='/libraries' element={<LibrariesRoute />} />
			<Route path='/libraries/:id' element={<LibraryRoute />} />
		</Routes>
	);
}

export default App;
