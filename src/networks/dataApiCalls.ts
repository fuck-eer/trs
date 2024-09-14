import { getAPI } from "../utils/fetchApi";
import { Props as TrendingCardProps } from "../components/atoms/TrendingCard/TrendingCard";
import { RecommendedRowType } from "../pages/HomePage/HomePage";
import { JikanApiResponseType } from "../utils/types/jikanApiResponseType";
import { Props as AnimeCardType } from "../components/atoms/AnimeCard/AnimeCard";
export const DOMAIN = "http://localhost:6060";
const TRENDING_URL = "/trendingCards";
const RECOMMENDED_URL = "/recommendedRows";
const LANDINGPAGE_IMAGES_URL = "/landingPageImages";
const ANIME_DETAILS_URL = "/animeDetails";
const MY_COLLECTIONS_URL = "/myCollections";
export type imageType = {
	url: string;
	id: number;
};

export type AnimeType = {
	id: number;
	data: JikanApiResponseType;
};

export type Collection = {
	heading: string;
	subHeading: string;
	isPublic: boolean;
	cards: AnimeCardType[];
};

export const getTrendingCards = async () => {
	return await getAPI<TrendingCardProps[]>(`${DOMAIN}${TRENDING_URL}`);
};
export const getRecommendedRows = async () => {
	return await getAPI<RecommendedRowType[]>(`${DOMAIN}${RECOMMENDED_URL}`);
};
export const getLandingPageImages = async () => {
	return await getAPI<imageType[]>(`${DOMAIN}${LANDINGPAGE_IMAGES_URL}`);
};

export const getAnimeDetails = async () => {
	return await getAPI<AnimeType[]>(`${DOMAIN}${ANIME_DETAILS_URL}`);
};
export const getMyCollections = async () => {
	return await getAPI<Collection[]>(`${DOMAIN}${MY_COLLECTIONS_URL}`);
};
