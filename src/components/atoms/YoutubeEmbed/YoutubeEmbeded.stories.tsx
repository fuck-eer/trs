import { Meta, StoryObj } from "@storybook/react";
import YoutubeEmbed from "./YoutubeEmbed";

const Component = (props) => (
	<div className='bg-green-dark-card w-[900px] h-[500px]'>
		<YoutubeEmbed {...props} />
	</div>
);

const meta = {
	title: "Atoms/YoutubeEmbed",
	component: Component,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		layout: "centered",
	},
	args: {
		title: "Anime Title",
		embedId: "1dy2zPPrKD0",
	},
} satisfies Meta<typeof YoutubeEmbed>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
