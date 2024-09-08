import { Meta, StoryObj } from "@storybook/react";
import GreetingCoressel from "./GreetingCoressel";

const images = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

const meta = {
	title: "Atoms/GreetingCoressel",
	component: GreetingCoressel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {
		images,
	},
} satisfies Meta<typeof GreetingCoressel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		images,
	},
};
