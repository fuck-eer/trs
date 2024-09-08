import React from "react";
import { cn } from "../../../utils/cn";

export type Props = {
	x: number;
	y: number;
	offset?: number;
	icon?: string | React.ReactNode;
	className?: { _innerCircle?: string; _outerCircle?: string };
};

const Cursor = ({ icon, x, y, className, offset = 20 }: Props) => {
	return (
		<div
			className={cn(
				"absolute z-50 top-0 left-0 bg-green-light w-[40px] h-[40px] rounded-full flex items-center justify-center mix-blend-difference",
				className?._innerCircle
			)}
			style={{
				top: y - offset,
				left: x - offset,
			}}
		>
			{icon}
			<div
				className={cn(
					"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[52px] h-[52px] rounded-full bg-transparent border-[2px] border-dashed border-green-light",
					className?._outerCircle
				)}
			/>
		</div>
	);
};

export default Cursor;
