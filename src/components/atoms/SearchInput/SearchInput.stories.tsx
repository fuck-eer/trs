import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta = {
	title: "Atoms/SearchInput",
	component: SearchInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		clearEnabled: { control: "boolean" },
		onClear: { action: "onClear" },
		invalid: { control: "boolean" },
		errorText: { control: "text" },
	},
	args: {
		clearEnabled: false,
		onClear: () => {},
	},
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		clearEnabled: true,
		onClear: () => {},
	},
};
