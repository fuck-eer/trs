import React, { useState } from "react";
import { cn } from "../../../utils/cn";

export type ToggleProps = {
	publicLabel?: string;
	privateLabel?: string;
	onClick: (state: "public" | "private") => void;
	className?: string;
	isPublic: boolean;
};

const PublicToggle = ({
	className,
	onClick,
	isPublic,
	publicLabel = "Public",
	privateLabel = "Private",
}: ToggleProps) => {
	return (
		<div
			className={cn(
				"flex border-2 text-[16px] rounded max-w-min",
				isPublic ? "border-green-light" : "border-purple-dark",
				className
			)}
		>
			<p
				title='Public Collections: Anyone can view and share.'
				onClick={() => onClick("public")}
				className={cn(
					"py-1 px-4 cursor-pointer transition-all",
					isPublic
						? "bg-green-light text-green-dark"
						: "bg-transparent text-purple-dark"
				)}
			>
				{publicLabel}
			</p>
			<p
				title='Private Collections: Only you can view and share.'
				onClick={() => onClick("private")}
				className={cn(
					"py-1 px-4 cursor-pointer transition-all",
					!isPublic
						? "bg-purple-dark text-green-dark"
						: "text-green-light bg-transparent"
				)}
			>
				{privateLabel}
			</p>
		</div>
	);
};

export default PublicToggle;
