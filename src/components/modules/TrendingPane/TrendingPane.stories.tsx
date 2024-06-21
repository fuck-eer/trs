import { Meta, StoryObj } from "@storybook/react";
import TrendingPane from "./TrendingPane";

const DummyCards = [
	{
		title: "Sports Anime",
		description:
			"Lorem ipsum dolor sit amet consectetur. Faucibus eget proin ac amet lobortis integer. Eget vitae nunc ultricies sed massa.",
		rank: 1,
		views: 100,
		avatar: "https://picsum.photos/300/300",
	},
	{
		title: "Sports Anime",
		description:
			"Lorem ipsum dolor sit amet consectetur. Faucibus eget proin ac amet lobortis integer. Eget vitae nunc ultricies sed massa.",
		rank: 2,
		views: 10,
		avatar: "https://picsum.photos/300/300",
	},
	{
		title: "Sports Anime",
		description:
			"Lorem ipsum dolor sit amet consectetur. Faucibus eget proin ac amet lobortis integer. Eget vitae nunc ultricies sed massa.",
		rank: 3,
		views: 1,
		avatar: "https://picsum.photos/300/300",
	},
];

const meta = {
	title: "Modules/TrendingPane",
	component: TrendingPane,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		cards: { control: "object" },
		className: { control: "object" },
		heading: { control: "text" },
		subHeading: { control: "text" },
	},
	args: {
		cards: DummyCards,
		subHeading:
			"Lorem ipsum dolor sit amet consectetur. Pellentesque fusce non lorem mauris mattis fusce. Et est id viverra posuere semper aliquam nisl id risus.",
	},
} satisfies Meta<typeof TrendingPane>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
