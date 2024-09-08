import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./HomePage";
import { DummyTrendingCards } from "../../components/modules/TrendingPane/TrendingPane.stories";
import { DummyAnimeCards } from "../../components/modules/RecommendedCards/RecommendedCards.stories";

const meta = {
	title: "Pages/HomePage",
	component: HomePage,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {},
	args: {
		trendingCards: DummyTrendingCards,
		recommendedRows: [
			{ cards: DummyAnimeCards, heading: "World-Wide Hits" },
			{ cards: DummyAnimeCards, heading: "World Hits" },
			{ cards: DummyAnimeCards, heading: "Wide Hits" },
			{ cards: DummyAnimeCards, heading: "World-Wide" },
		],
	},
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
