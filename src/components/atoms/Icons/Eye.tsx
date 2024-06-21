import { IconProps } from "./ScrollDown";

const Eye = ({ className, fill, height, viewBox, width }: IconProps) => {
	return (
		<svg
			width={width ?? "16"}
			height={height ?? "16"}
			viewBox={viewBox ?? "0 0 16 16"}
			fill='none'
			className={className}
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_88_1568)'>
				<path
					d='M7.99992 2.66699C9.85792 2.66699 11.5086 3.50499 12.6839 4.54233C13.2739 5.06299 13.7599 5.64766 14.1026 6.22966C14.4393 6.80099 14.6666 7.42033 14.6666 8.00033C14.6666 8.58033 14.4399 9.19966 14.1026 9.77099C13.7599 10.353 13.2739 10.9377 12.6839 11.4583C11.5086 12.4957 9.85725 13.3337 7.99992 13.3337C6.14192 13.3337 4.49125 12.4957 3.31592 11.4583C2.72592 10.9377 2.23992 10.353 1.89725 9.77099C1.55992 9.19966 1.33325 8.58033 1.33325 8.00033C1.33325 7.42033 1.55992 6.80099 1.89725 6.22966C2.23992 5.64766 2.72592 5.06299 3.31592 4.54233C4.49125 3.50499 6.14258 2.66699 7.99992 2.66699ZM7.99992 4.00033C6.54392 4.00033 5.19458 4.66233 4.19859 5.54166C3.70258 5.97899 3.31059 6.45699 3.04592 6.90633C2.77525 7.36633 2.66659 7.74699 2.66659 8.00033C2.66659 8.25366 2.77525 8.63433 3.04592 9.09433C3.31059 9.54366 3.70258 10.021 4.19859 10.459C5.19458 11.3383 6.54392 12.0003 7.99992 12.0003C9.45592 12.0003 10.8053 11.3383 11.8013 10.459C12.2973 10.021 12.6893 9.54366 12.9539 9.09433C13.2246 8.63433 13.3333 8.25366 13.3333 8.00033C13.3333 7.74699 13.2246 7.36633 12.9539 6.90633C12.6893 6.45699 12.2973 5.97966 11.8013 5.54166C10.8053 4.66233 9.45592 4.00033 7.99992 4.00033ZM7.99992 6.00033C8.05858 6.00033 8.11658 6.00299 8.17392 6.00766C8.02918 6.26156 7.97187 6.55599 8.01081 6.84565C8.04975 7.1353 8.18278 7.40414 8.38944 7.6108C8.5961 7.81746 8.86494 7.95049 9.1546 7.98944C9.44425 8.02838 9.73868 7.97107 9.99259 7.82633C10.0276 8.22777 9.94062 8.63045 9.74291 8.98158C9.54519 9.33272 9.24602 9.61595 8.88459 9.79415C8.52316 9.97235 8.11633 10.0372 7.7174 9.98024C7.31848 9.92326 6.94606 9.74711 6.64896 9.47486C6.35187 9.20261 6.14394 8.84696 6.05242 8.45452C5.96091 8.06207 5.99008 7.65113 6.13611 7.27555C6.28215 6.89997 6.53823 6.57726 6.87081 6.34971C7.20338 6.12216 7.59694 6.00038 7.99992 6.00033Z'
					fill={fill ?? "#B6D9A1"}
				/>
			</g>
			<defs>
				<clipPath id='clip0_88_1568'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Eye;
