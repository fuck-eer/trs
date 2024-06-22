import Avatar from "../Avatar/Avatar";
import Eye from "../Icons/Eye";
import { colors } from "../../../utils/tailwindTheme";
import { cn } from "../../../utils/cn";
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
	return (
		<div
			className={cn(
				"relative flex min-w-[400px] flex-col items-stretch justify-between gap-2 p-5 border rounded-lg bg-green-dark-card border-green-dark font-pop h-[180px]",
				className?._cardContainer
			)}
		>
			<span
				className={cn(
					"absolute text-[62px] font-bold top-0 right-[20px] text-green-light/5 [text-shadow:0px_0px_2px_#0D1408] drop-shadow-text",
					className?._rank
				)}
			>
				#{rank}
			</span>
			<div className='flex flex-col items-stretch max-w-[340px] gap-2'>
				<h3
					className={cn(
						"text-[24px] font-semibold text-green-text",
						className?._title
					)}
				>
					{title}
				</h3>
				<p
					className={cn(
						"text-[14px] text-green-text font-light",
						className?._description
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
