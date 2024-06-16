import { Meta, StoryObj } from "@storybook/react";
import Test from "./Test";

const meta = {
	title: "Atoms/Test",
	component: Test,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],

	argTypes: {
		label: { control: "text" },
	},
	args: {
		label: "Test 1",
	},
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Test 1",
	},
};
export const Secondary: Story = {
	args: {
		label: "Test 2",
	},
};
export const Tertiary: Story = {
	args: {
		label: "Test 3",
	},
};
