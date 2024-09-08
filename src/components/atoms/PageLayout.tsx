import React from "react";
import { cn } from "../../utils/cn";

const PageLayout = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative font-pop flex flex-col items-stretch justify-start w-screen min-h-screen p-14 bg-gradient-to-b from-green-dark to-black",
				className
			)}
		>
			{children}
		</div>
	);
};

export default PageLayout;
