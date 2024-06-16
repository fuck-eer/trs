import { cn } from "../../../utils/cn";

type Props = {
	children: React.ReactNode;
	className?: {
		_container?: string;
	};
};
const Overlay = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				"flex flex-col justify-center items-center rounded-[20px] bg-gradient-to-b from-green-light/10 to-transparent drop-shadow-glass shadow-border backdrop-blur-sm",
				className?._container
			)}
		>
			{children}
		</div>
	);
};

export default Overlay;
