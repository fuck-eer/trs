import { Meta, StoryObj } from "@storybook/react";
import CollectionCard from "./CollectionCard";

const meta = {
	title: "Example/CollectionCard",
	component: CollectionCard,
	tags: ["autodocs"],
	argTypes: {},
	args: {
		heading: "My Collection",
		isPublic: true,
		subHeading:
			"Lorem ipsum dolor sit amet consectetur. Eget et scelerisque suspendisse adipiscing amet faucibus est pellentesque ac. Sed egestas augue elit vitae lectus tellus.",
		cards: [
			{
				title: "The Last of Us",
				description: "it is legit last of us",
				image: "https://www.picsum.photos/seed/picsum/200/300",
				rating: 9.8,
				favorite: "127k",
				rank: 8,
				genres: ["Action", "Horror"],
				size: "sm",
				action: undefined,
			},
			{
				title: "The Last of Us 2",
				description: "it is legit last of us",
				image: "https://www.picsum.photos/seed/picsum/200/300",
				rating: 9.8,
				favorite: "127k",
				rank: 8,
				genres: ["Action", "Horror"],
				size: "sm",
				action: undefined,
			},
			{
				title: "The Last of Us 3",
				description: "it is legit last of us",
				image: "https://www.picsum.photos/seed/picsum/200/300",
				rating: 9.8,
				favorite: "127k",
				rank: 8,
				genres: ["Action", "Horror"],
				size: "sm",
				action: undefined,
			},
		],
	},
} satisfies Meta<typeof CollectionCard>;
export default meta;

type Story = StoryObj<typeof CollectionCard>;

export const Primary: Story = {
	args: {},
};
