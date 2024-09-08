import { Meta, StoryObj } from "@storybook/react";
import PublicToggle from "./PublicToggle";

const meta = {
    title: "Atoms/PublicToPrivateToggle",
    component: PublicToggle,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],

    argTypes: {
        classnameForPublic: {control: {type: "text"}},
        classnameForPrivate: {control: {type: "text"}},

    },
    args:{
        classnameForPublic: "text-white w-[328px]",
        classnameForPrivate: "text-Black w-[328px]",
    }

} satisfies Meta<typeof PublicToggle>;
 
export default meta;

type Story = StoryObj<typeof meta>;

export const General: Story = {
	args: {
		classnameForPublic: "text-white border-2 border-white",
		classnameForPrivate: "text-black border-2 border-white bg-white",
	},
};
export const PublicToPrivateToggle: Story = {
	args: {
		classnameForPublic: "text-black border-2 border-green-light bg-green-light",
		classnameForPrivate: "text-green-text border-2 border-green-light",
	},
};
export const PrivateToPublicToggle: Story = {
	args: {
		classnameForPublic: "text-purple-dark border-2 border-purple-dark",
		classnameForPrivate: "text-balck border-2 border-purple-dark bg-purple-dark",
	},
};

