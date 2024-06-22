import { useState } from "react";
import useMouse from "../../../hooks/useMouse";
import Cursor from "../Cursor/Cursor";
import { cn } from "../../../utils/cn";
import Star from "../Icons/Star";
import Heart from "../Icons/Heart";
import Rank from "../Icons/Rank";
import { colors } from "../../../utils/tailwindTheme";

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
				"relative px-7 py-5 flex flex-col font-pop items-center justify-end gap-2 w-[260px] h-[350px] rounded-2xl",
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
			{isHovered && <Cursor x={x} y={y} />}
			{action ? (
				isHovered ? (
					<div className='absolute flex justify-center items-center right-3 top-3 translate-x-[30%] translate-y-[-40%] rounded-full w-[72px] h-[72px] bg-green-dark shadow-gen'>
						{action === "add" ? "A" : "D"}
					</div>
				) : (
					<div className='absolute right-3 top-3 rounded-full w-4 h-4 bg-green-dark' />
				)
			) : (
				<></>
			)}
			<div className='flex text-center text-green-text font-light flex-col text-[10px] items-center justify-center gap-2'>
				<h6 className='font-bold text-[14px]'>{title}</h6>
				<p>{description}</p>
			</div>
			{isHovered && (
				<div className='flex flex-col gap-3'>
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
