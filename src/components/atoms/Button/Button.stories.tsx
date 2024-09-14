import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
	title: "Atoms/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		layout: "centered",
	},

	args: {
		children: "Button",
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {},
};
