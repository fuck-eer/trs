import { Meta, StoryObj } from "@storybook/react";
import InfoBar from "./InfoBar";

const meta = {
	title: "Atoms/InfoBar",
	component: InfoBar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {
		duration: "2016 Aug 24 - 2024 Oct 23",
		episodes: 12,
		rating: "R - 17+ (violence & profanity)",
		studio: "Sunrise",
		season: "winter",
	},
} satisfies Meta<typeof InfoBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
