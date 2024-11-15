import { IconProps } from "./ScrollDown";

const Stats = (props: IconProps) => {
	return (
		<svg
			className={props?.className}
			width={props?.width ?? "284"}
			height={props?.height ?? "168"}
			viewBox={props?.viewBox ?? "0 0 284 168"}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_i_100_430)'>
				<path
					d='M261.332 108.016C257.796 107.096 254.123 106.821 250.49 107.204L223.011 68.9581C224.719 66.0489 226.208 62.9555 227.129 59.5207C232.58 39.1763 220.61 18.4429 200.265 12.9916C179.921 7.54034 159.187 19.5107 153.736 39.8552C152.179 45.6679 152.195 51.4776 153.267 56.988L97.0454 96.0114C95.4219 95.2335 93.7344 94.5971 92.0015 94.1093C89.3741 93.4053 86.7754 93.1809 84.1951 93.1817L56.6545 45.4801C57.9562 43.2645 59.0612 40.9018 59.7653 38.2744C64.1231 22.0106 54.5382 5.409 38.2744 1.05112C22.0106 -3.30675 5.409 6.27817 1.05112 22.542C-3.30675 38.8058 6.27817 55.4074 22.542 59.7652C25.1694 60.4693 27.7681 60.6936 30.3484 60.6928L57.889 108.394C56.5299 110.644 55.4834 113.068 54.7783 115.6C50.4204 131.864 60.0053 148.466 76.2691 152.823C92.533 157.181 109.135 147.596 113.492 131.333C114.425 127.854 114.597 124.392 114.326 120.999L170.622 81.9331C173.695 83.7947 176.959 85.4089 180.6 86.3843C186.401 87.9044 192.482 88.0181 198.336 86.7158L225.829 124.965C225.139 126.433 224.564 127.951 224.108 129.507C219.75 145.771 229.335 162.373 245.599 166.73C261.863 171.088 278.465 161.503 282.822 145.24C287.18 128.976 277.595 112.374 261.332 108.016Z'
					fill={props?.fill ?? "black"}
					fillOpacity={props?.fillOpacity ?? "0.2"}
				/>
			</g>
			<defs>
				<filter
					id='filter0_i_100_430'
					x='0'
					y='0'
					width={props?.width ?? "284"}
					height={props?.height ?? "168"}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='BackgroundImageFix'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='2' />
					<feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='shape'
						result='effect1_innerShadow_100_430'
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default Stats;
