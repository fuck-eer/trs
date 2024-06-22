import { Meta, StoryObj } from "@storybook/react";
import TrendingCard from "./TrendingCard";

const meta = {
	title: "Atoms/TrendingCard",
	component: TrendingCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		avatar: { control: "text" },
		title: { control: "text" },
		description: { control: "text" },
		rank: { control: "number" },
		views: { control: "number" },
	},
	args: {
		avatar: "https://picsum.photos/300/300",
		title: "Sports Anime",
		description:
			"Lorem ipsum dolor sit amet consectetur. Faucibus eget proin ac amet lobortis integer. Eget vitae nunc ultricies sed massa.",
		rank: 1,
		views: 100,
	},
} satisfies Meta<typeof TrendingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
export const ShortDescription: Story = {
	args: {
		description: "Just a recommended anime list",
	},
};
