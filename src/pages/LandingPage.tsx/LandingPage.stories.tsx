import { Meta, StoryObj } from "@storybook/react";
import LandingPage from "./LandingPage";

const meta = {
	title: "Pages/LandingPage",
	component: LandingPage,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {},
	args: {},
} satisfies Meta<typeof LandingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
