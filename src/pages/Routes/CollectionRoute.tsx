import ErrorPage from "../../components/atoms/ErrorPage";
import CollectionPage from "../CollectionPage/CollectionPage";
import { useParams } from "react-router-dom";

const CollectionRoute = () => {
	const { id } = useParams();
	if (!id) return <ErrorPage />;
	return <CollectionPage collectionId={id} />;
};

export default CollectionRoute;
