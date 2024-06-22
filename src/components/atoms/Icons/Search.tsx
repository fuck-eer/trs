import React from "react";
import { IconProps } from "./ScrollDown";

const Search = ({
	fill,
	height,
	strokeWidth,
	viewBox,
	width,
	...rest
}: IconProps) => {
	return (
		<svg
			width={width ?? "40"}
			height={height ?? "40"}
			viewBox={viewBox ?? "0 0 40 40"}
			{...rest}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.3334 30.0003C24.7767 30.0003 30.0001 24.777 30.0001 18.3337C30.0001 11.8903 24.7767 6.66699 18.3334 6.66699C11.8901 6.66699 6.66675 11.8903 6.66675 18.3337C6.66675 24.777 11.8901 30.0003 18.3334 30.0003Z'
				stroke={fill ?? "#B6D9A1"}
				strokeWidth={strokeWidth ?? "4"}
			/>
			<path
				d='M18.3335 13.334C17.0074 13.334 15.7356 13.8608 14.798 14.7984C13.8603 15.7361 13.3335 17.0079 13.3335 18.334M33.3335 33.334L28.3335 28.334'
				stroke={fill ?? "#B6D9A1"}
				strokeWidth={strokeWidth ?? "4"}
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default Search;
