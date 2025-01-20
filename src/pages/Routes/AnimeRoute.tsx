import React from "react";
import AnimeDetailsPage from "../AnimeDetailsPage/AnimeDetailsPage";
import { useParams } from "react-router-dom";
import ErrorPage from "../../components/atoms/ErrorPage";

const AnimeRoute = () => {
	const { id } = useParams();
	if (!id) return <ErrorPage />;
	return (
		<>
			<AnimeDetailsPage animeID={id} />
		</>
	);
};

export default AnimeRoute;
