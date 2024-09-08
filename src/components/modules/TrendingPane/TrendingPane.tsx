import React from "react";
import TrendingCard, {
	Props as CardProps,
} from "../../atoms/TrendingCard/TrendingCard";
import { cn } from "../../../utils/cn";

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
	return (
		<div
			className={cn(
				"flex flex-col gap-8 max-w-[480px] rounded-3xl bg-gradient-to-b from-green-light/5 to-gray-600/0 px-8 py-7 shadow-glass",
				className?._container
			)}
		>
			<div
				className={cn(
					"flex flex-col justify-start gap-4 w-full",
					className?._headingContainer
				)}
			>
				{heading ? (
					heading
				) : (
					<h1
						className={cn(
							"text-[28px] text-center text-green-text font-semibold drop-shadow-text",
							className?._heading
						)}
					>
						The <span className='text-green-light'>Recommendation</span> Street
					</h1>
				)}
				{subHeading && (
					<p
						className={cn(
							"text-[16px] text-center text-green-text font-extralight self-center max-w-[330px]",
							className?._subHeading
						)}
					>
						{subHeading}
					</p>
				)}
			</div>
			<div
				className={cn(
					"w-full grow flex flex-col justify-start gap-12",
					className?._cardsContainer
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
