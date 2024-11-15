import { Meta, StoryObj } from "@storybook/react";
import AddCardPlaceholder from "./AddCardPlaceholder";

const meta = {
	title: "Atoms/AddCardPlaceholder",
	component: AddCardPlaceholder,
	tags: ["autodocs"],
	argTypes: {},
	args: {
		isPublic: false,
		onAdd: () => {},
		size: "md",
	},
} satisfies Meta<typeof AddCardPlaceholder>;

export default meta;

type Story = StoryObj<typeof AddCardPlaceholder>;

export const Primary: Story = {
	args: {},
};
