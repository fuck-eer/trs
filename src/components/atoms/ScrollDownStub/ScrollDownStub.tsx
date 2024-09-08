import { cn } from "../../../utils/cn";
import ScrollDown from "../Icons/ScrollDown";

const ScrollDownStub = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"flex flex-row items-start justify-center gap-3 text-sm font-medium text-green-light",
				className
			)}
		>
			<p>Scroll</p>
			<ScrollDown
				className='animate-scrollDown'
				height='45'
				width='22'
				strokeWidth='6'
			/>
			<p>Down</p>
		</div>
	);
};

export default ScrollDownStub;
