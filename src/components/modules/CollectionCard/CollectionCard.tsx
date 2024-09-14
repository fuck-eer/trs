import AnimeCard, {
	Props as AnimeCardProps,
} from "../../atoms/AnimeCard/AnimeCard";
import { cn } from "../../../utils/cn";
import Button from "../../atoms/Button/Button";
import Delete from "../../atoms/Icons/Delete";
import Globe from "../../atoms/Icons/Globe";
import { colors } from "../../../utils/tailwindTheme";
import Cards from "../../atoms/Icons/Cards";

type Props = {
	heading: string;
	isPublic: boolean;
	subHeading: string;
	className?: string;
	cards: AnimeCardProps[];
};
const CollectionCard = ({ heading, isPublic, subHeading, cards }: Props) => {
	return (
		<div
			className={cn(
				"flex relative flex-row gap-24 px-10 py-5 pr-3 justify-between items-start rounded-2xl bg-green-dark-card",
				"after:absolute after:rounded-r-2xl after:top-0 after:right-0 after:bottom-0 after:left-[calc(100%-500px)] after:bg-gradient-to-r after:from-transparent after:to-green-dark"
			)}
		>
			<div className='flex flex-col justify-start gap-5 max-w-[500px] text-[12px] text-green-text self-stretch py-5'>
				<h3
					className={cn(
						"flex justify-between items-center text-2xl font-medium gap-4",
						isPublic ? "text-green-light" : "text-purple-dark"
					)}
				>
					{heading}{" "}
					{cards?.length && (
						<span className='flex gap-1 items-center text-[14px] text-gray-700 font-medium'>
							<Cards fill={colors.gray[700]} />
							{cards.length}
						</span>
					)}
				</h3>
				<p className='text-justify text-ellipsis line-clamp-5 grow'>
					{subHeading}
				</p>
				<div className='flex flex-row justify-between items-center'>
					<div className='flex flex-row gap-4 justify-start items-center'>
						<Button
							className='text-[14px] py-1 px-2 font-semibold'
							variant={isPublic ? "solid-primary" : "solid-secondary"}
						>
							Checkout!
						</Button>
						<Button variant={isPublic ? "nude-primary" : "nude-secondary"}>
							<Globe
								width='18'
								height='18'
								fill={isPublic ? colors["green-light"] : colors["gray"][700]}
							/>
						</Button>
					</div>
					<Button variant='nude-destructive'>
						<Delete width='18' height='18' />
					</Button>
				</div>
			</div>
			<div className='flex flex-row gap-5 grow justify-end'>
				{cards.map((card, index) =>
					index < 4 ? <AnimeCard {...card} disableHover /> : <></>
				)}
			</div>
		</div>
	);
};

export default CollectionCard;
