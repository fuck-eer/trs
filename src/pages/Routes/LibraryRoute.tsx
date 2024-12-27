import { useParams } from "react-router-dom";
import LibraryPage from "../LibraryPage/LibraryPage";

const LibraryRoute = () => {
	const { id } = useParams();
	if (!id) return <p>Error occurred</p>;
	return <LibraryPage id={id} />;
};

export default LibraryRoute;
