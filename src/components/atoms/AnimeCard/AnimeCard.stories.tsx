import { Meta, StoryObj } from "@storybook/react";
import AnimeCard from "./AnimeCard";

const meta = {
	title: "Atoms/AnimeCard",
	component: AnimeCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {
		action: "add",
		description: "Lorem ipsum dolor sit amet consectetur.",
		genres: ["Action", "Adventure", "Comedy"],
		image: "https://picsum.photos/250/350",
		rating: 4.5,
		rank: 10,
		favorite: "176k",
		size: "md",
		title: "The Godfather",
	},
} satisfies Meta<typeof AnimeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AddToCollection: Story = {
	args: {},
};
export const RemoveFromCollection: Story = {
	args: {
		action: "delete",
	},
};
