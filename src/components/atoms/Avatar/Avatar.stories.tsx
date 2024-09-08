import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
	title: "Atoms/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		profilePhotoUrl: { control: "text" },
	},
	args: {
		profilePhotoUrl: "https://picsum.photos/300/300",
	},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
