import { Meta, StoryObj } from "@storybook/react";
import PublicToggle from "./PublicToggle";

const meta = {
	title: "Atoms/PublicToPrivateToggle",
	component: PublicToggle,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],

	argTypes: {},
	args: {
		privateLabel: "🔏",
		publicLabel: "🌏",
		isPublic: true,
		onClick: () => {},
	},
} satisfies Meta<typeof PublicToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
