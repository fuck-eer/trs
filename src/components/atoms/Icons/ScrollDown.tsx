export type IconProps = {
	width?: string;
	height?: string;
	viewBox?: string;
	fill?: string;
	color?: string;
	strokeWidth?: string;
	className?: string;
};
const ScrollDown = ({
	color,
	fill,
	height,
	viewBox,
	width,
	strokeWidth,
	className,
}: IconProps) => {
	return (
		<svg
			className={className}
			width={width ?? "28"}
			height={height ?? "60"}
			viewBox={viewBox ?? "0 0 28 60"}
			fill={fill ?? "none"}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14 57.5L14 2.5M14 57.5L3 46.3789M14 57.5L25 46.3789'
				stroke={color ?? "#B6D9A1"}
				stroke-width={strokeWidth ?? "5"}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default ScrollDown;
