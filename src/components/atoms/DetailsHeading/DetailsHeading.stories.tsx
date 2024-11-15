import { Meta, StoryObj } from "@storybook/react";
import DetailsHeading from "./DetailsHeading";

const meta = {
	title: "Atoms/DetailsHeading",
	component: DetailsHeading,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		layout: "centered",
	},

	args: {
		heading: "Avengers: EndGame",
		descriptions:
			"Lorem ipsum dolor sit amet consectetur. Proin dictumst bibendum sed elit sit at integer id. Commodo sed feugiat sagittis tellus lorem. Quam ultricies libero urna placerat mollis enim in. Sagittis amet ac urna ut. Lorem ipsum dolor sit amet consectetur. Proin dictumst bibendum sed elit sit at integer id. Commodo sed feugiat sagittis tellus lorem. Quam ultricies libero urna placerat mollis enim in. Sagittis amet ac urna ut.",
		genres: "Action, Adventure, Sci-Fi",
		isAiring: true,
	},
} satisfies Meta<typeof DetailsHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
export const Secondary: Story = {
	args: {
		genres: ["Action", "Adventure", "Sci-Fi"],
		isAiring: false,
	},
};
