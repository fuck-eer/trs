import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "../../../utils/cn";
import AnimeCard, {
	Props as AnimeCardProps,
} from "../../atoms/AnimeCard/AnimeCard";
import { useRef, useState } from "react";
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
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={cn(
				"relative w-full flex flex-col gap-3 justify-start font-pop",
				className?._container
			)}
		>
			<h6
				className={cn(
					"font-semibold flex gap-3 items-center text-green-light",
					className?._heading
				)}
			>
				{heading}
				<span className='text-sm font-light text-gray-600'>
					#{cards?.length}
				</span>
			</h6>
			{isHovered && (
				<>
					<div
						className='absolute rounded-full w-10 h-10 flex justify-center items-center top-[50%] left-0  translate-y-[-50%] cursor-pointer z-10 bg-black animate-scrollLeft'
						onClick={() => {
							if (scrollRef.current) {
								scrollRef.current.scrollLeft += -800;
							}
						}}
					>
						<FaChevronLeft className='text-green-light' />
					</div>
					<div
						className='absolute rounded-full w-10 h-10 flex justify-center items-center top-[50%] right-[20px]  translate-y-[-50%] cursor-pointer z-10 bg-black animate-scrollRight'
						onClick={() => {
							if (scrollRef.current) {
								scrollRef.current.scrollLeft += 800;
							}
						}}
					>
						<FaChevronRight className='text-green-light' />
					</div>
				</>
			)}
			<div
				ref={scrollRef}
				className={cn(
					"relative w-full py-5 flex overflow-auto no-scrollbar flex-nowrap flex-row justify-start items-stretch gap-12 transition-all duration-300 ease-in-out scroll-smooth",
					className?._cardsContainer
				)}
			>
				{cards.map((card) => (
					<AnimeCard
						{...card}
						key={card.id}
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
