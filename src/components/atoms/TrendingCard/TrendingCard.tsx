import Avatar from "../Avatar/Avatar";
import Eye from "../Icons/Eye";
import { colors } from "../../../utils/tailwindTheme";
import { cn } from "../../../utils/cn";
import useMediaQuery from "../../../hooks/useMediaQuery";
export type Props = {
	title: string;
	rank: number;
	avatar: string;
	description: string;
	views: number;
	className?: {
		_cardContainer?: string;
		_rank?: string;
		_title?: string;
		_description?: string;
		_viewsContainer?: string;
		_avatar?: string;
	};
};
const TrendingCard = ({
	avatar,
	description,
	rank,
	title,
	views,
	className,
}: Props) => {
	const isLarge = useMediaQuery("lg");
	const isMedium = useMediaQuery("md");
	return (
		<div
			className={cn(
				"relative z-0 flex min-w-[350px] w-full flex-col items-stretch justify-between gap-2 p-5 border rounded-lg bg-green-dark-card border-green-dark font-pop",
				className?._cardContainer
			)}
		>
			<span
				className={cn(
					"absolute font-bold top-0 right-[20px] text-green-light/5 [text-shadow:0px_0px_2px_#0D1408] drop-shadow-text",
					className?._rank,
					isLarge ? "text-[64px]" : isMedium ? "text-[56px]" : "text-[48px]"
				)}
			>
				#{rank}
			</span>
			<div
				className={cn(
					"flex z-10 flex-col items-stretch max-w-[340px] pb-4 gap-2"
				)}
			>
				<h3
					className={cn(
						"font-semibold text-green-text",
						className?._title,
						isLarge ? "text-[22px]" : isMedium ? "text-[18px]" : "text-[16px]"
					)}
				>
					{title}
				</h3>
				<p
					className={cn(
						"text-green-text font-light",
						className?._description,
						isLarge ? "text-[14px]" : isMedium ? "text-[12px]" : "text-[10px]"
					)}
				>
					{description}
				</p>
			</div>
			<div
				className={cn(
					"flex items-center justify-start gap-2 text-green-light",
					className?._viewsContainer
				)}
			>
				<Eye width='16' height='16' fill={colors["green-light"]} />
				<span className='font-semibold text-[16px]'>{views}</span>
			</div>
			<Avatar
				className={{
					_imageContainer: cn(
						"absolute bottom-[20px] right-[20px]",
						className?._avatar
					),
				}}
				profilePhotoUrl={avatar}
			/>
		</div>
	);
};

export default TrendingCard;
