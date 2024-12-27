import { cn } from "../../../utils/cn";
import clsx from "clsx";
import React from "react";
type props = {
	label: string;
	variant?: "primary" | "secondary";
	classes?: {
		wrapper?: string;
		label?: string;
	};
	checkValue: string;
	onCheck: (
		e: React.ChangeEvent<HTMLInputElement>,
		checkValue?: string
	) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
	label,
	checkValue,
	onCheck,
	classes,
	variant = "primary",
	...rest
}: props) => {
	return (
		<div
			className={cn(
				"relative flex justify-start items-start gap-3",
				classes?.wrapper
			)}
		>
			<input
				type='checkbox'
				className={cn(
					" peer appearance-none w-4 h-4 rounded-[3px] mt-[2px] border-2 shrink-0 cursor-pointer bg-green-dark-card transition duration-300",
					variant === "primary" ? "border-green-light" : "border-purple-dark"
				)}
				onChange={(e) => {
					onCheck(e, checkValue);
				}}
				{...rest}
			/>
			{rest.checked && (
				<div
					className={cn(
						"pointer-events-none top-[5.75px] left-[4px] absolute w-2 h-2 rounded-[1px]",
						variant === "primary" ? "bg-green-light" : "bg-purple-dark"
					)}
				/>
			)}
			<p
				className={clsx(
					"capitalize font-light text-sm text-green-text",
					classes?.label
				)}
			>
				{label}
			</p>
		</div>
	);
};

export default Checkbox;
