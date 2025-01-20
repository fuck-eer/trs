import React from "react";
import { cn } from "../../utils/cn";
import NavDrop from "../modules/NavDrop/NavDrop";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const PageLayout = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const isLarge = useMediaQuery("lg");
	const isMedium = useMediaQuery("md");
	return (
		<div
			className={cn(
				"relative z-0 font-pop flex flex-col items-stretch justify-start w-screen min-h-screen bg-gradient-to-b from-green-dark to-black overflow-x-hidden",
				isLarge ? "p-14" : isMedium ? "p-10" : "p-6",
				className
			)}
		>
			{children}
		</div>
	);
};

export default PageLayout;
