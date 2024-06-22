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

const sizes = ["sm", "md", "lg"] as const;
const actions = ["add", "delete"] as const;
export type SizesType = (typeof sizes)[number];
export type ActionsType = (typeof actions)[number];

export type Props = {
	title: string;
	description: string;
	image: string;
	rating?: number;
	favorite?: string;
	rank?: number;
	genres?: string[] | string;
	size?: SizesType;
	action?: ActionsType;
};

const AnimeCard = ({
	description,
	image,
	rating,
	size = "md",
	title,
	action,
	rank,
	favorite,
	genres,
}: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const { x, y } = useMouse();
	return (
		<div
			className={cn(
				"relative cursor-none px-7 py-5 flex flex-col font-pop items-center justify-end gap-4 w-[260px] h-[350px] rounded-2xl transition-all duration-300 ease-in-out",
				"before:absolute before:top-0 before:left-0 before:w-full before:h-[30%] before:rounded-t-2xl bg-gradient-to-b from-black/50 to-transparent",
				"after:absolute after:bottom-0 after:left-0 after:w-full after:h-[30%] after:rounded-b-2xl bg-gradient-to-t from-black to-transparent",
				isHovered ? "transparent" : "bg-green-dark/40"
			)}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<img
				src={image}
				alt={title}
				className='absolute top-0 rounded-2xl left-0 w-full h-full -z-10'
			/>
			{isHovered && (
				<Cursor
					className={{
						_innerCircle: "w-[32px] h-[32px]",
						_outerCircle: "w-[40px] h-[40px]",
					}}
					offset={16}
					x={x}
					y={y}
				/>
			)}
			{action ? (
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
						) : (
							<Delete fill={colors.error} />
						))}
				</div>
			) : (
				<></>
			)}
			<div className='flex text-center text-green-text font-light flex-col text-[10px] items-center justify-center gap-2 animate-slideUp'>
				<h6 className='font-bold text-[14px]'>{title}</h6>
				<p>{description}</p>
			</div>
			{isHovered && (
				<div className='flex flex-col gap-3 animate-slideUp'>
					<p className='font-semibold text-[10px] text-center text-green-light'>
						{Array.isArray(genres) ? genres.join(", ") : genres}
					</p>
					<div className='flex flex-row justify-between items-center gap-5 text-[13px] text-green-text font-semibold'>
						<div className='flex flex-row gap-2 items-center justify-between'>
							<Star fill={colors.golden} />
							<p>{rating ?? "--"}</p>
						</div>
						<div className='flex flex-row gap-2 items-center justify-between'>
							<Heart />
							<p>{favorite ?? "--"}</p>
						</div>
						<div className='flex flex-row gap-2 items-center justify-between'>
							<Rank fill={colors["green-light"]} />
							<p>#{rank ?? "--"}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AnimeCard;
