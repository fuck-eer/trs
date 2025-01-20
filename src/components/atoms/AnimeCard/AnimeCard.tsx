import { useState } from "react";
import useMouse from "../../../hooks/useMouse";
import Cursor from "../Cursor/Cursor";
import { cn } from "../../../utils/cn";
import Star from "../Icons/Star";
import Heart from "../Icons/Heart";
import Rank from "../Icons/Rank";
import { colors } from "../../../utils/tailwindTheme";
import Plus from "../Icons/Plus";
import Delete from "../Icons/Delete";
import { trimTill } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";

const sizes = ["sm", "md", "lg"] as const;
const actions = ["add", "delete"] as const;
export type SizesType = (typeof sizes)[number];
export type ActionsType = (typeof actions)[number];

export type Props = {
	id: string;
	title: string;
	description: string;
	image: string;
	rating?: number;
	favorite?: string;
	disableHover?: boolean;
	rank?: number;
	genres?: string[] | string;
	size?: SizesType;
	action?: ActionsType;
	className?: {
		_cardContainer?: string;
		_headingContainer?: string;
		_rank?: string;
		_img?: string;
		_title?: string;
		_description?: string;
		_viewsContainer?: string;
		_genres?: string;
		_rating?: string;
		_favorite?: string;
	};
};

const AnimeCard = ({
	id,
	description,
	image,
	rating,
	size = "md",
	title,
	action,
	disableHover = false,
	rank,
	favorite,
	genres,
	className,
}: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();
	// const { x, y } = useMouse();
	return (
		<div
			className={cn(
				"relative cursor-pointer overflow-hidden px-7 py-5 flex flex-col font-pop items-center justify-end gap-4 w-[260px] h-[350px] rounded-2xl transition-all duration-300 ease-in-out",
				"before:absolute before:top-0 before:left-0 before:w-full before:h-[30%] before:rounded-t-2xl before:bg-gradient-to-b before:from-black/60 before:to-transparent",
				"after:absolute after:bottom-0 after:left-0 after:w-full after:h-[30%] after:rounded-b-2xl after:bg-gradient-to-t after:from-black after:to-transparent hover:after:h-[90%]",
				size === "sm"
					? "w-[188px] h-[232px]"
					: size === "md"
					? "w-[224px] h-[290px]"
					: "w-[260px] h-[350px]",
				isHovered ? "transparent" : "bg-green-dark/40",
				className?._cardContainer
			)}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			onClick={() => navigate(`/anime/${id}`)}
		>
			<img
				src={image}
				alt={title}
				className={cn(
					"absolute top-0 rounded-2xl left-0 w-full h-full -z-10 transition-all duration-300 ease-in-out",
					className?._img,
					isHovered ? "scale-110" : "scale-100"
				)}
			/>
			{action === "add" || action === "delete" ? (
				<div
					className={cn(
						isHovered
							? "absolute flex justify-center items-center right-3 top-3 translate-x-[30%] translate-y-[-40%] rounded-full w-[72px] h-[72px] bg-green-dark shadow-gen cursor-pointer transition-all duration-500 ease-in-out"
							: "absolute right-3 top-3 rounded-full w-4 h-4 bg-green-dark transition-all duration-500 ease-in-out"
					)}
				>
					{isHovered &&
						(action === "add" ? (
							<Plus fill={colors["green-light"]} />
						) : action === "delete" ? (
							<Delete fill={colors["red-error"]} />
						) : null)}
				</div>
			) : (
				<></>
			)}
			<div
				className={cn(
					"flex text-center text-green-text font-light flex-col text-[10px] items-center justify-center z-10 gap-2 animate-slideUp",
					className?._headingContainer
				)}
			>
				<h6 className={cn("font-bold text-[14px]", className?._title)}>
					{title}
				</h6>
				<p title={description} className={cn(className?._description)}>
					{trimTill(description, size === "sm" ? 23 : size === "md" ? 30 : 37)}
				</p>
			</div>
			{isHovered && !disableHover && (
				<div
					className={cn(
						"flex flex-col gap-3 animate-slideUp z-10",
						className?._viewsContainer
					)}
				>
					<p
						className={cn(
							"font-semibold text-[10px] text-center text-green-light",
							className?._genres
						)}
					>
						{Array.isArray(genres) ? genres.join(", ") : genres}
					</p>
					<div
						className={cn(
							"flex flex-row justify-between items-center gap-5 text-[13px] text-green-text font-semibold",
							size === "sm" && "text-[10px] gap-[10px]",
							size === "md" && "text-[12px] gap-4",
							size === "lg" && "text-[14px] gap-5",
							className?._viewsContainer
						)}
					>
						<div
							className={cn(
								"flex flex-row gap-2 items-center justify-between",
								className?._rating
							)}
						>
							<Star fill={colors.golden} />
							<p>{rating ?? "--"}</p>
						</div>
						<div
							className={cn(
								"flex flex-row gap-2 items-center justify-between",
								className?._favorite
							)}
						>
							<Heart />
							<p>{favorite ?? "--"}</p>
						</div>
						<div
							className={cn(
								"flex flex-row gap-2 items-center justify-between",
								className?._rank
							)}
						>
							<Rank fill={colors["green-light"]} />
							<p>{rank ?? "--"}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AnimeCard;
