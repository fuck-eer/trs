import { Meta, StoryObj } from "@storybook/react";
import StatsCard from "./StatsCard";

const meta = {
	title: "Atoms/StatsCard",
	component: StatsCard,
	tags: ["autodocs"],
	argTypes: {},
	args: {
		favorites: 172641,
		members: 396951,
		popularity: 1,
		ranked: 105,
		ratedBy: 154322,
		score: 9.5,
	},
} satisfies Meta<typeof StatsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
