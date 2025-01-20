import { useParams } from "react-router-dom";
import LibraryPage from "../LibraryPage/LibraryPage";
import ErrorPage from "../../components/atoms/ErrorPage";

const LibraryRoute = () => {
	const { id } = useParams();
	if (!id) return <ErrorPage />;
	return <LibraryPage id={id} />;
};

export default LibraryRoute;
