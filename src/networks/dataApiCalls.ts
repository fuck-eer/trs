import { APIReturnType, getAPI, postAPI } from "../utils/fetchApi";
import { JikanApiResponseType } from "../utils/types/jikanApiResponseType";
import { Props as AnimeCardType } from "../components/atoms/AnimeCard/AnimeCard";
import { recommendedConfig } from "../utils/recommendedConfig";
import axios from "axios";

export const DOMAIN = "http://localhost:3050";
const TRENDING_URL = "/animes/trendingLibraries";
const RECOMMENDED_URL = "/animes";
const LANDINGPAGE_IMAGES_URL = "/animes/heroImages";
const ANIME_DETAILS_URL = "/animes/";
const COLLECTIONS_URL = "/catalogues";
const COLLECTION_URL = "/catalogues/";
const COLLECTION_NAMES_URL = "/catalogues/getNames";
const LIBRARIES_URL = "/libraries";

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
	createdOn?: string;
	updatedOn?: string;
	cards: AnimeCardType[];
};

export type GetTrendingLibrariesAPIResponse = {
	_id: string;
	userId: string;
	libraryName: string;
	libraryDescription: string;
	views: 0;
};

export type GetLandingPageAPIResponse = {
	_id: string;
	imageId: string;
	imageUrl: string;
	inUse: boolean;
};

export type GetCollectionAPIResponse = {
	_id: string;
	userId: string;
	userName: string;
	email: string;
	listName: string;
	listDescription: string;
	isPublic: boolean;
	createdAt: string;
	updatedAt: string;
	content: AnimeCardType[];
};

export type GetCollectionNamesAPIResponse = {
	publicCatalogues: { _id: string; listName: string; isPublic: boolean }[];
	privateCatalogues: { _id: string; listName: string; isPublic: boolean }[];
};

export type UpdateCollectionAPIResponse = { message: string; id: string };

export type AddAnimeToCollectionsParams = {
	userId?: string;
	catalogueIds: string[];
	animeDetails: {
		title: string;
		description: string;
		imageUrl: string;
		rating?: number | null;
		genres: string[];
		favorite?: number | null;
		rank?: number | null;
	};
};

export type AddCollectionParams = {
	name?: string;
	description?: string;
	isPublic: boolean;
	userId?: string;
	catalogueName?: string;
	catalogueDescription?: string;
};

export type PostLibraryAPIParams = {
	libraryName: string;
	libraryDescription: string;
	libraryPassword: string;
	catalogues: string[];
	userId?: string;
	sharedWith: string[];
};

export type GetLibrariesAPIResponse = {
	_id: string;
	userId: string;
	libraryName: string;
	libraryDescription: string;
	views: number;
	catalogues: string[];
	sharedWith: string[];
};
export type GetLibraryAPIResponse = {
	_id: string;
	userId: string;
	libraryName: string;
	libraryDescription: string;
	views: number;
	catalogues: GetCollectionAPIResponse[];
	sharedWith: string[];
};

export const getTrendingCards = async (token?: string | null) => {
	const response = await getAPI<GetTrendingLibrariesAPIResponse[]>(
		`${DOMAIN}${TRENDING_URL}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	if (!response.data || response?.data?.length === 0)
		return { ...response, data: [] };
	const trendingCards = response.data.map((library, index) => ({
		title: library.libraryName,
		rank: index + 1,
		avatar: "https://picsum.photos/200",
		description: library.libraryDescription,
		views: library.views,
	}));
	return { ...response, data: trendingCards };
};
export const getRecommendedRows = async (token?: string | null) => {
	const apiCalls = recommendedConfig.map((recommendedRow) => {
		return axios.get<APIReturnType<JikanApiResponseType[]>>(
			`${DOMAIN}${RECOMMENDED_URL}${recommendedRow.query}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	});
	const responses = await Promise.all(apiCalls);
	return {
		data: recommendedConfig.map((e, i) => ({
			...e,
			cards: responses[i]?.data?.data?.map((card) => ({
				id: card.mal_id,
				title: card.title,
				description: card.synopsis,
				image: card.images.jpg.image_url,
				rating: card.score,
				favorite: card.favorites || card.members,
				rank: card.rank,
				genres: card.genres?.map((genre) => genre.name),
			})),
		})),
	};
};
export const getLandingPageImages = async (token?: string | null) => {
	const response = await getAPI<{ images: GetLandingPageAPIResponse[] }>(
		`${DOMAIN}${LANDINGPAGE_IMAGES_URL}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	if (!response.data || response?.data?.images?.length === 0)
		return { ...response, data: [] };
	const images = response.data.images.map((image) => ({
		id: image.imageId,
		url: image.imageUrl,
	}));
	return { ...response, data: images };
};
export const getAnimeDetails = async (id: string, token?: string | null) => {
	return await getAPI<APIReturnType<JikanApiResponseType>>(
		`${DOMAIN}${ANIME_DETAILS_URL}${id}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
};
export const getMyCollections = async (
	isPublic: boolean,
	token?: string | null
) => {
	const response = await getAPI<GetCollectionAPIResponse[]>(
		`${DOMAIN}${COLLECTIONS_URL}?mode=${isPublic ? "public" : "private"}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const collections = response.data.map((collection) => ({
		id: collection._id,
		heading: collection.listName,
		subHeading: collection.listDescription,
		isPublic: collection.isPublic,
		createdOn: collection.createdAt,
		updatedOn: collection.updatedAt,
		cards: collection.content,
	}));
	return { ...response, data: collections };
};
export const getCollectionDetails = async (
	id: string,
	token?: string | null
) => {
	const response = await getAPI<GetCollectionAPIResponse>(
		`${DOMAIN}${COLLECTION_URL}${id}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const transformedCollection = {
		id: response.data._id,
		heading: response.data.listName,
		subHeading: response.data.listDescription,
		isPublic: response.data.isPublic,
		createdOn: response.data.createdAt,
		updatedOn: response.data.updatedAt,
		cards: response.data.content,
	};

	return { ...response, data: transformedCollection };
};
export const deleteCollection = async (
	collectionId: string,
	token?: string | null
) => {
	try {
		const response = await postAPI<
			APIReturnType<UpdateCollectionAPIResponse>,
			{ catalogueId: string; isDeleted: boolean }
		>(
			`${DOMAIN}${COLLECTION_URL}/delete`,
			{
				catalogueId: collectionId,
				isDeleted: true,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (!response.data.id) throw new Error("Unable to delete collection");
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};
export const updateCollection = async (
	requestParams: {
		name: string;
		description: string;
		catalogueId: string;
	},
	token?: string | null
) => {
	try {
		const response = await postAPI<
			APIReturnType<UpdateCollectionAPIResponse>,
			{
				name: string;
				description: string;
				catalogueId: string;
				userId: string;
			}
		>(
			`${DOMAIN}${COLLECTION_URL}/update`,
			{
				...requestParams,
				userId: "123123",
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(response, "qwerty");

		if (!response.data.id) throw new Error("Unable to update collection");
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};

export const getCollectionNames = async (
	notLoggedIn: boolean = false,
	token?: string | null
) => {
	const response = await getAPI<GetCollectionNamesAPIResponse>(
		`${DOMAIN}${COLLECTION_NAMES_URL}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	if (!response.data || notLoggedIn)
		return {
			...response,
			data: {
				publicCatalogues: [],
				privateCatalogues: [],
			} as GetCollectionNamesAPIResponse,
		};

	return { ...response, data: response.data };
};

export const addAnimeToCollections = async (
	{ animeDetails, catalogueIds }: AddAnimeToCollectionsParams,
	token?: string | null
) => {
	try {
		const response = await postAPI<
			UpdateCollectionAPIResponse,
			AddAnimeToCollectionsParams
		>(
			`${DOMAIN}${COLLECTION_URL}/addAnime`,
			{
				catalogueIds,
				animeDetails,
				userId: "123123",
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (!response.data.message) throw new Error("Unable to update collection");
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};

export const addCollection = async (
	{ description, isPublic, name }: AddCollectionParams,
	token?: string | null
) => {
	try {
		const response = await postAPI<
			UpdateCollectionAPIResponse,
			AddCollectionParams
		>(
			`${DOMAIN}${COLLECTIONS_URL}`,
			{
				catalogueName: name,
				catalogueDescription: description,
				isPublic,
				userId: "123123",
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (!response.data.id) throw new Error("Unable to update collection");
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};

export const getLibraries = async (token?: string | null) => {
	try {
		const response = await getAPI<GetLibrariesAPIResponse[]>(
			`${DOMAIN}${LIBRARIES_URL}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const libraries = response.data.map((collection) => ({
			id: collection?._id,
			heading: collection?.libraryName,
			subHeading: collection?.libraryDescription,
			views: collection?.views,
			catalogues: collection?.catalogues,
			sharedWith: collection?.sharedWith,
			creatorId: collection?.userId,
		}));
		return { ...response, data: libraries };
	} catch (e) {
		return Promise.reject(e);
	}
};
export const getLibrary = async (id: string, token?: string | null) => {
	try {
		const response = await getAPI<GetLibraryAPIResponse>(
			`${DOMAIN}${LIBRARIES_URL}/${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const library = {
			id: response?.data?._id,
			heading: response?.data?.libraryName,
			subHeading: response?.data?.libraryDescription,
			views: response?.data?.views,
			catalogues: response?.data?.catalogues.map((collection) => ({
				id: collection._id,
				heading: collection.listName,
				subHeading: collection.listDescription,
				isPublic: collection.isPublic,
				createdOn: collection.createdAt,
				updatedOn: collection.updatedAt,
				cards: collection.content,
			})),
			sharedWith: response?.data?.sharedWith,
			creatorId: response?.data?.userId,
		};
		return { ...response, data: library };
	} catch (e) {
		return Promise.reject(e);
	}
};

export const addLibrary = async (
	{
		catalogues,
		libraryDescription,
		libraryName,
		libraryPassword,
		sharedWith,
	}: PostLibraryAPIParams,
	token?: string | null
) => {
	try {
		const response = await postAPI<
			UpdateCollectionAPIResponse,
			PostLibraryAPIParams
		>(
			`${DOMAIN}${LIBRARIES_URL}/add`,
			{
				libraryName,
				catalogues,
				libraryDescription,
				libraryPassword,
				sharedWith,
				userId: "123123",
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (!response.data.id) throw new Error("Unable to add library");
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};
