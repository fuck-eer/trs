import { Meta, StoryObj } from "@storybook/react";
import ScrollDownStub from "./ScrollDownStub";

const meta = {
	title: "Atoms/ScrollDownStub",
	component: ScrollDownStub,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {},
} satisfies Meta<typeof ScrollDownStub>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
