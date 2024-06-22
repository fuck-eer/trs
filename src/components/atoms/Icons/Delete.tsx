import { IconProps } from "./ScrollDown";

const Delete = ({ width, height, viewBox, fill, ...rest }: IconProps) => {
	return (
		<svg
			width={width ?? "25"}
			height={height ?? "29"}
			viewBox={viewBox ?? "0 0 25 29"}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<path
				d='M4.6875 28.125C3.82812 28.125 3.09271 27.8193 2.48125 27.2078C1.86979 26.5964 1.56354 25.8604 1.5625 25V4.6875H0V1.5625H7.8125V0H17.1875V1.5625H25V4.6875H23.4375V25C23.4375 25.8594 23.1318 26.5953 22.5203 27.2078C21.9089 27.8203 21.1729 28.126 20.3125 28.125H4.6875ZM20.3125 4.6875H4.6875V25H20.3125V4.6875ZM7.8125 21.875H10.9375V7.8125H7.8125V21.875ZM14.0625 21.875H17.1875V7.8125H14.0625V21.875Z'
				fill={fill ?? "#FF5050"}
			/>
		</svg>
	);
};

export default Delete;
