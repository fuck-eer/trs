import React, { useState } from "react";
import { cn } from "../../../utils/cn";
import Plus from "../Icons/Plus";
import { colors } from "../../../utils/tailwindTheme";
type Props = {
	onAdd: () => void;
	isPublic?: boolean;
	size?: "md" | "sm" | "lg";
};
const AddCardPlaceholder = ({ onAdd, isPublic, size = "md" }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			onClick={onAdd}
			className={cn(
				"relative px-7 py-5 flex flex-col font-pop items-center justify-center border-[2px] border-dashed gap-4 w-[260px] h-[350px] rounded-2xl transition-all duration-300 ease-in-out",
				"before:absolute before:top-0 before:left-0 before:w-full before:h-[30%] before:rounded-t-2xl before:bg-gradient-to-b before:from-black/50 before:to-transparent",
				"after:absolute after:bottom-0 after:left-0 after:w-full after:h-[30%] after:rounded-b-2xl after:bg-gradient-to-t after:from-black after:to-transparent",
				isPublic ? "border-green-light" : "border-purple-dark",
				size === "sm"
					? "w-[188px] h-[232px]"
					: size === "md"
						? "w-[260px] h-[350px]"
						: "w-[260px] h-[350px]",
				isHovered ? "transparent" : "bg-green-dark/40"
			)}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<Plus
				fill={isPublic ? colors["green-light"] : colors["purple-dark"]}
				strokeWidth='5'
				width='100'
				height='100'
			/>
		</div>
	);
};

export default AddCardPlaceholder;
