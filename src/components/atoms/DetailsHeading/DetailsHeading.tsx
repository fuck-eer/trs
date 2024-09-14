import Airing from "../Icons/Airing";
import { colors } from "../../../utils/tailwindTheme";
type Props = {
	heading: string;
	descriptions: string;
	genres: string | string[];
	isAiring?: boolean;
};
const DetailsHeading = ({ descriptions, genres, heading, isAiring }: Props) => {
	return (
		<div className='flex flex-col gap-4 text-[14px] text-white'>
			<h1 className='text-[28px] flex gap-3 items-center font-bold text-green-light'>
				{heading}{" "}
				<span>
					<Airing
						width='24'
						height='24'
						fill={isAiring ? colors["red-light"] : colors["green-dark-card"]}
					/>
				</span>
			</h1>
			<div className='flex flex-col gap-2'>
				<p className='text-justify line-clamp-[7] text-ellipsis'>
					{descriptions}
				</p>
				<p className='flex gap-3 text-[16px]'>
					Genres:
					<span className='text-green-light font-semibold'>
						{typeof genres === "string" ? genres : genres.join(", ")}
					</span>
				</p>
			</div>
		</div>
	);
};

export default DetailsHeading;
