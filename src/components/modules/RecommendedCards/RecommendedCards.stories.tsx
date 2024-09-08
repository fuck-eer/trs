import { Meta, StoryObj } from "@storybook/react";
import RecommendedCards from "./RecommendedCards";
import { Props as AnimeCardProps } from "../../atoms/AnimeCard/AnimeCard";

export const DummyAnimeCards: AnimeCardProps[] = [
	{
		title: "Sports Anime 1",
		description: "Lorem ipsum dolor sit amet consectetur.",
		image: "https://picsum.photos/260/350",
		rating: 8.1,
		favorite: "176k",
		rank: 1,
		genres: ["Action", "Adventure", "Comedy"],
		action: "add",
	},
	{
		title: "Sports Anime 2",
		description: "Lorem ipsum dolor sit amet consectetur.",
		image: "https://picsum.photos/260/350",
		rating: 8.1,
		favorite: "176k",
		rank: 1,
		genres: ["Action", "Adventure", "Comedy"],
		action: "add",
	},
	{
		title: "Sports Anime 3",
		description: "Lorem ipsum dolor sit amet consectetur.",
		image: "https://picsum.photos/260/350",
		rating: 8.1,
		favorite: "176k",
		rank: 1,
		genres: ["Action", "Adventure", "Comedy"],
		action: "add",
	},
	{
		title: "Sports Anime 4",
		description: "Lorem ipsum dolor sit amet consectetur.",
		image: "https://picsum.photos/260/350",
		rating: 8.1,
		favorite: "176k",
		rank: 1,
		genres: ["Action", "Adventure", "Comedy"],
		action: "add",
	},
	{
		title: "Sports Anime 5",
		description: "Lorem ipsum dolor sit amet consectetur.",
		image: "https://picsum.photos/260/350",
		rating: 8.1,
		favorite: "176k",
		rank: 1,
		genres: ["Action", "Adventure", "Comedy"],
		action: "add",
	},
];

const meta = {
	title: "Modules/RecommendedCards",
	component: RecommendedCards,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		heading: { control: "text" },
		cards: { control: "object" },
	},
	args: {
		heading: "World-Wide Hits",
		cards: [...DummyAnimeCards, ...DummyAnimeCards, ...DummyAnimeCards],
	},
} satisfies Meta<typeof RecommendedCards>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
