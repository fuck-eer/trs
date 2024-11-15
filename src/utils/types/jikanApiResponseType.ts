export type ImageType = {
	image_url: string;
	small_image_url?: string;
	medium_image_url?: string;
	large_image_url?: string;
	maximum_image_url?: string;
};
export type TitleType = { type: string; title: string };
export type AnimeTypeType =
	| "TV"
	| "OVA"
	| "Movie"
	| "Special"
	| "ONA"
	| "Music"
	| null;
export type StatusType =
	| "Finished Airing"
	| "Currently Airing"
	| "Not yet aired"
	| null;

export type RatingType =
	| "G - All Ages"
	| "PG - Children"
	| "PG-13 - Teens 13 or older"
	| "R - 17+ (violence & profanity)"
	| "R+ - Mild Nudity"
	| "Rx - Hentai"
	| null;
export type SeasonType = "winter" | "spring" | "summer" | "fall" | null;
export type BroadcastType = {
	day: string;
	time: string;
	timezone: string;
	string: string;
};
export type URLInfoType = {
	mal_id: number;
	type: string;
	url: string;
	name: string;
};
export type AiringDurationType = {
	from: string;
	to: string;
	prop: {
		from: {
			day: number;
			month: number;
			year: number;
		};
		to: {
			day: number;
			month: number;
			year: number;
		};
	};
	string: string;
};
export type JikanApiImagesType = {
	jpg: ImageType;
	webp: ImageType;
} & Record<string, ImageType>;
export type JikanTrailerType = {
	youtube_id: string;
	url: string;
	embed_url: string;
	images: ImageType;
};
export type JikanTitleType = TitleType[];

export type JikanApiResponseType = {
	mal_id: string;
	url: string;
	images: JikanApiImagesType;
	trailer: JikanTrailerType;
	approved: boolean;
	titles: JikanTitleType;
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: AnimeTypeType;
	source: string;
	episodes: number;
	status: StatusType;
	airing: boolean;
	aired: AiringDurationType;
	duration: string;
	rating: RatingType;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	season: SeasonType;
	year: number;
	broadcast: BroadcastType;
	producers: URLInfoType[];
	licensors: URLInfoType[];
	studios: URLInfoType[];
	genres: URLInfoType[];
	explicit_genres: URLInfoType[];
	themes: URLInfoType[];
	demographics: URLInfoType[];
};
