import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
    title: "Atoms/Heading",
    component: Heading,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],

    argTypes: {
        classnameForHeader: {control: {type: "text"}},
        label: {control: {type: "text"}},
        subHeading: {control: {type: "text"}},
    },
    args:{
        classnameForHeader: "font-bold text-2xl text-white w-[328px]",
        label: "My Collections",
    }

} satisfies Meta<typeof Heading>;
 
export default meta;

type Story = StoryObj<typeof meta>;

export const SharePage: Story = {
	args: {
		classnameForHeader: "font-bold text-2xl text-white",
        label: "My Collections",
	},
};
export const CataloguePagePublic: Story = {
	args: {
		classnameForHeader: "font-bold text-2xl text-green-text",
        label: "My Collections",
	},
};
export const CataloguePagePrivate: Story = {
	args: {
		classnameForHeader: "font-bold text-2xl text-purple-dark",
        label: "My Collections",
	},
};
export const CollectionPage: Story = {
	args: {
		classnameForHeader: "text-purple-dark font-[48px]",
        label: "My Collections",
        subHeading: "This is a sub heading Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsum recusandae porro quis amet accusamus quasi unde ratione? Repellendus numquam libero, maiores quos ",
	},
};
export const CollectionPublic: Story = {
	args: {
		classnameForHeader: "text-green-text font-[48px]",
        label: "My Collections",
        subHeading: "This is a sub heading Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsum recusandae porro quis amet accusamus quasi unde ratione? Repellendus numquam libero, maiores quos ",
	},
};


