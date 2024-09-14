import React from "react";
import { cn } from "../../../utils/cn";
export type ButtonVariant =
	| "solid-primary"
	| "solid-secondary"
	| "solid-destructive"
	| "solid-special"
	| "outline-primary"
	| "outline-secondary"
	| "outline-destructive"
	| "outline-special"
	| "nude-primary"
	| "nude-secondary"
	| "nude-destructive"
	| "nude-special"
	| "ghost-primary"
	| "ghost-secondary"
	| "ghost-special"
	| "ghost-destructive";
export type ButtonSize = "sm" | "md" | "lg";
type Props = {
	variant?: ButtonVariant;
	children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	variant = "solid-primary",
	children,
	className,
	...rest
}: Props) => {
	return (
		<button
			className={cn(
				"outline-none relative px-4 py-2 text-[16px] font-medium border-2 bg-transparent border-transparent rounded-lg flex justify-center gap-4 transition-all active:opacity-90 active:scale-95",
				(variant === "solid-special" ||
					variant === "outline-special" ||
					variant === "ghost-special" ||
					variant === "nude-special") &&
					"before:absolute before:opacity-0 hover:before:opacity-100 before:content-['✨'] before:top-0 before:left-full before:translate-x-[-50%] before:animate-haveALook before:translate-y-[-50%]",
				variant === "solid-primary" &&
					"bg-green-light text-green-dark border-green-light",
				variant === "outline-primary" &&
					"bg-transparent text-green-light border-green-light",
				variant === "ghost-primary" &&
					"bg-green-light/40 text-green-light border-green-light",
				variant === "nude-primary" &&
					"border-transparent bg-transparent text-green-light",
				variant === "solid-secondary" &&
					"bg-purple-dark text-green-dark border-purple-dark",
				variant === "outline-secondary" &&
					"bg-transparent text-purple-dark border-purple-dark",
				variant === "ghost-secondary" &&
					"bg-purple-dark/40 text-purple-dark border-purple-dark",
				variant === "nude-secondary" &&
					"border-transparent bg-transparent text-purple-dark",
				variant === "solid-destructive" &&
					"bg-red-error text-green-dark border-red-error",
				variant === "outline-destructive" &&
					"bg-transparent text-red-error border-red-error",
				variant === "ghost-destructive" &&
					"bg-red-error/40 text-red-error border-red-error",
				variant === "nude-destructive" &&
					"border-transparent bg-transparent text-red-error",
				variant === "solid-special" &&
					"bg-golden text-green-dark border-golden",
				variant === "outline-special" &&
					"bg-transparent text-golden border-golden",
				variant === "ghost-special" && "bg-golden/40 text-golden border-golden",
				variant === "nude-special" &&
					"border-transparent bg-transparent text-golden",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
