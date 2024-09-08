import { Meta, StoryObj } from "@storybook/react";
import Overlay from "./Overlay";

const meta = {
	title: "Atoms/Overlay",
	component: Overlay,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {
		className: {
			_container: "w-[800px] h-[600px]",
		},
		children: (
			<div className='text-3xl font-semibold font-pop text-green-light'>
				Hello
			</div>
		),
	},
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
