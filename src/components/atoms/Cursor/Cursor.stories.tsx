import { Meta, StoryObj } from "@storybook/react";
import Cursor from "./Cursor";
import useMouse from "../../../hooks/useMouse";

const meta = {
	title: "Atoms/Cursor",
	component: Cursor,
	decorators: [
		(Story) => {
			const { x, y } = useMouse();
			return (
				<div style={{ cursor: "none", width: "100vw", height: "100vh" }}>
					<Story args={{ x, y, icon: "👇" }} />
				</div>
			);
		},
	],
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],

	argTypes: {
		icon: {
			control: {
				type: "select",
				options: ["👇", "👆", "👈", "👉", "☝️", "👇", "👆", "👈", "👉", "☝️"],
			},
		},
		x: { control: { type: "number" } },
		y: { control: { type: "number" } },
	},
	args: {
		icon: "👇",
		x: 0,
		y: 0,
	},
} satisfies Meta<typeof Cursor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		icon: "👇",
		x: 15,
		y: 15,
	},
};
export const Secondary: Story = {
	args: {
		icon: "👇",
		x: 15,
		y: 15,
	},
};
export const Tertiary: Story = {
	args: {
		icon: "👈",
		x: 15,
		y: 15,
	},
};
