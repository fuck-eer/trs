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
	args: {
		images: [
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
			"https://images.unsplash.com/photo-1676498786939-e6b7e1c4f1b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
		],
	},
};
