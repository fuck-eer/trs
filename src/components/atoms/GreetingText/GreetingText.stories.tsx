import { Meta, StoryObj } from "@storybook/react";
import GreetingText from "./GreetingText";

const meta = {
	title: "Atoms/GreetingText",
	component: GreetingText,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		heading: { control: "text" },
		subHeading: { control: "text" },
	},
	args: {},
} satisfies Meta<typeof GreetingText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
