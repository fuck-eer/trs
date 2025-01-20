import React from "react";
import TrendingCard, {
	Props as CardProps,
} from "../../atoms/TrendingCard/TrendingCard";
import { cn } from "../../../utils/cn";
import useMediaQuery from "../../../hooks/useMediaQuery";

export type Props = {
	heading?: React.ReactNode;
	subHeading?: string;
	cards: CardProps[];
	className?: {
		_container?: string;
		_headingContainer?: string;
		_heading?: string;
		_subHeading?: string;
		_cardsContainer?: string;
		_card?: string;
	};
};
const TrendingPane = ({ className, cards, heading, subHeading }: Props) => {
	const isLarge = useMediaQuery("lg");
	const isMedium = useMediaQuery("md");

	return (
		<div
			className={cn(
				"flex flex-col gap-8 min-w-[408px] max-w-[480px] rounded-3xl bg-gradient-to-b from-green-light/5 to-gray-600/0 px-8 py-7 shadow-glass",
				className?._container,
				isLarge
					? "px-8 py-7 gap-8"
					: isMedium
					? "px-7 py-6 gap-6"
					: "px-6 py-5 gap-4"
			)}
		>
			<div
				className={cn(
					"flex flex-col justify-start gap-4 w-full",
					className?._headingContainer,
					isLarge ? "gap-4" : isMedium ? "gap-3" : "gap-2"
				)}
			>
				{heading ? (
					heading
				) : (
					<h1
						className={cn(
							"text-center text-green-text font-semibold drop-shadow-text",
							className?._heading,
							isLarge ? "text-[26px]" : isMedium ? "text-[22px]" : "text-[20px]"
						)}
					>
						The <span className='text-green-light'>Recommendation</span> Street
					</h1>
				)}
				{subHeading && (
					<p
						className={cn(
							"text-[16px] text-center text-green-text font-extralight self-center max-w-[330px]",
							className?._subHeading,
							isLarge ? "text-[14px]" : isMedium ? "text-[12px]" : "text-[10px]"
						)}
					>
						{subHeading}
					</p>
				)}
			</div>
			<div
				className={cn(
					"w-full grow flex flex-col justify-start gap-12",
					className?._cardsContainer,
					isLarge ? "gap-12" : isMedium ? "gap-8" : "gap-6"
				)}
			>
				{cards?.map((card, index) => (
					<TrendingCard
						key={index}
						{...card}
						className={{ _cardContainer: cn(className?._card) }}
					/>
				))}
			</div>
		</div>
	);
};

export default TrendingPane;
