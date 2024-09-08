import { cn } from "../../../utils/cn";
import AnimeCard, {
	Props as AnimeCardProps,
} from "../../atoms/AnimeCard/AnimeCard";
type Props = {
	heading: string;
	cards: AnimeCardProps[];
	className?: {
		_container?: string;
		_heading?: string;
		_cardsContainer?: string;
		_card?: string;
	};
};
const RecommendedCards = ({ cards, heading, className }: Props) => {
	return (
		<div
			className={cn(
				"w-full flex flex-col gap-3 justify-start font-pop",
				className?._container
			)}
		>
			<h6 className={cn("font-semibold text-green-light", className?._heading)}>
				{heading}
			</h6>
			<div
				className={cn(
					"w-full py-5 flex overflow-auto flex-nowrap flex-row justify-start items-stretch gap-12",
					className?._cardsContainer
				)}
			>
				{cards.map((card, index) => (
					<AnimeCard
						{...card}
						key={index}
						className={{
							_cardContainer: cn("shrink-0 grow-0", className?._card),
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default RecommendedCards;
