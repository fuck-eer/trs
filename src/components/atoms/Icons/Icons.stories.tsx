import { Meta, StoryObj } from "@storybook/react";
import ScrollDown, { IconProps } from "./ScrollDown";
import AddCollection from "./AddCollection";
import Calender from "./Calender";
import CollectionSettings from "./CollectionSettings";
import CollectionStats from "./CollectionStats";
import Episodes from "./Episodes";
import OpenPage from "./OpenPage";
import Rating from "./Rating";
import Seasons from "./Seasons";
import ShareCollection from "./ShareCollection";
import Producer from "./Producer";
import Vector from "./Vector";
import Plus from "./Plus";

const IconKeys = [
	"addCollection",
	"calender",
	"collectionSettings",
	"collectionStats",
	"episodes",
	"openPage",
	"studio",
	"rating",
	"scrollDown",
	"seasons",
	"shareCollection",
	"vector",
	"plus",
] as const;
export type IconKeyType = (typeof IconKeys)[number];

const IconHolder = ({
	iconKey,
	...iconProps
}: IconProps & { iconKey: IconKeyType }) => {
	switch (iconKey) {
		case "addCollection":
			return <AddCollection {...iconProps} />;
		case "calender":
			return <Calender {...iconProps} />;
		case "collectionSettings":
			return <CollectionSettings {...iconProps} />;
		case "collectionStats":
			return <CollectionStats {...iconProps} />;
		case "episodes":
			return <Episodes {...iconProps} />;
		case "openPage":
			return <OpenPage {...iconProps} />;
		case "rating":
			return <Rating {...iconProps} />;
		case "scrollDown":
			return <ScrollDown {...iconProps} />;
		case "seasons":
			return <Seasons {...iconProps} />;
		case "shareCollection":
			return <ShareCollection {...iconProps} />;
		case "studio":
			return <Producer {...iconProps} />;
		case "vector":
			return <Vector {...iconProps} />;
		case "plus":
			return <Plus {...iconProps} />;
		default:
			return <></>;
	}
};

const meta = {
	title: "Atoms/Icon",
	component: IconHolder,
	argTypes: {
		color: { control: { type: "text" } },
		className: { control: { type: "text" } },
		fill: { control: { type: "text" } },
		height: { control: { type: "text" } },
		width: { control: { type: "text" } },
		strokeWidth: { control: { type: "text" } },
		viewBox: { control: { type: "text" } },
		iconKey: { control: { type: "radio" }, options: IconKeys },
	},
	args: {
		className: "",
		color: "#ffffff",
		fill: "",
		height: "",
		iconKey: "calender",
		strokeWidth: "",
		viewBox: "",
		width: "",
	},
} satisfies Meta<typeof IconHolder>;

export default meta;

export const CalenderIcon: StoryObj<typeof meta> = {
	args: {
		color: "#B6D9A1",
	},
};
