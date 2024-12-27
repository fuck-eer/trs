import CollectionPage from "../CollectionPage/CollectionPage";
import { useParams } from "react-router-dom";

const CollectionRoute = () => {
	const { id } = useParams();
	if (!id) return <p>Error occurred</p>;
	return <CollectionPage collectionId={id} />;
};

export default CollectionRoute;
