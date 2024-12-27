import React from "react";
import AnimeDetailsPage from "../AnimeDetailsPage/AnimeDetailsPage";
import { useParams } from "react-router-dom";

const AnimeRoute = () => {
	const { id } = useParams();
	if (!id) return <p>Error occurred</p>;
	return (
		<>
			<AnimeDetailsPage animeID={id} />
		</>
	);
};

export default AnimeRoute;
