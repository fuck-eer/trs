import { IconProps } from "./ScrollDown";

const Star = ({ width, height, viewBox, fill, className }: IconProps) => {
	return (
		<svg
			width={width ?? "20"}
			height={height ?? "20"}
			viewBox={viewBox ?? "0 0 20 20"}
			className={className}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.5409 3.51668C10.9709 2.16168 9.02919 2.16168 8.45919 3.51668L6.99752 6.98918L3.20419 7.29001C1.72502 7.40668 1.12502 9.23251 2.25252 10.1875L5.14252 12.635L4.25919 16.295C3.91502 17.7225 5.48585 18.8508 6.75252 18.0858L10 16.125L13.2475 18.0867C14.5142 18.8517 16.085 17.7233 15.7409 16.295L14.8575 12.6367L17.7475 10.1883C18.875 9.23334 18.275 7.40834 16.7959 7.29084L13.0025 6.99084L11.5409 3.51668Z'
				fill={fill ?? "#F1E15A"}
			/>
		</svg>
	);
};

export default Star;
