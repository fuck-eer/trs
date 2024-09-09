import { getAPI } from "../utils/fetchApi";
import { Props as TrendingCardProps } from "../components/atoms/TrendingCard/TrendingCard";
import { RecommendedRowType } from "../pages/HomePage/HomePage";
export const DOMAIN = "http://localhost:6060";
const TRENDING_URL = "/trendingCards";
const RECOMMENDED_URL = "/recommendedRows";
const LANDINGPAGE_IMAGES_URL = "/landingPageImages";

export type imageType = {
	url: string;
	id: number;
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
