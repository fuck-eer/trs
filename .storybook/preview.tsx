import React from "react";
import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";

const decorator = (Story) => {
	return (
		<div className='font-pop'>
			<Story />
		</div>
	);
};

const preview: Preview = {
	decorators: [decorator],
	parameters: {
		backgrounds: {
			default: "dark",
			values: [
				{
					name: "dark",
					value: "#0D1408",
				},
				{
					name: "light",
					value: "#A0AEC0",
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
