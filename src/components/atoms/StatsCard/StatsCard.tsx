import React from "react";
import Stats from "../Icons/Stats";
import { numberWithCommas } from "../../../utils/helper";
export type Props = {
	score: number;
	ranked: number;
	members: number;
	popularity: number;
	favorites: number;
	ratedBy: number;
};
const StatsCard = ({
	favorites,
	members,
	popularity,
	ranked,
	ratedBy,
	score,
}: Props) => {
	return (
		<div className='bg-green-dark flex flex-col min-w-[480px] gap-10 justify-center px-16 py-8 pb-14 rounded-lg drop-shadow-card relative overflow-hidden group'>
			<Stats className='absolute drop-shadow-inset-icon transition duration-[1.5s] ease-in-out group-hover:rotate-12 group-hover:scale-150 right-[-10px] bottom-0 -z-10' />
			<div className='flex flex-row items-center justify-between py-2 px-4 border-green-light border-2 rounded text-[10px] text-green-text font-extralight'>
				<p className='text-[15px] '>
					Score: <span className='text-white font-bold'>{score}</span>
				</p>
				<p>#{numberWithCommas(ratedBy)} people</p>
			</div>
			<div className='flex flex-row gap-10 text-[12px] text-green-text font-extralight'>
				<div className='flex flex-col gap-5'>
					<p>
						Ranked :{" "}
						<span className='text-[16px] font-bold text-white'>
							{numberWithCommas(ranked)}
						</span>
					</p>
					<p>
						Popularity :{" "}
						<span className='text-[16px] font-bold text-white'>
							#{numberWithCommas(popularity)}
						</span>
					</p>
				</div>
				<div className='flex flex-col gap-5'>
					<p>
						Members :{" "}
						<span className='text-[16px] font-bold text-white'>
							{numberWithCommas(members)}
						</span>{" "}
						people
					</p>
					<p>
						Favorites :{" "}
						<span className='text-[16px] font-bold text-white'>
							{numberWithCommas(favorites)}
						</span>{" "}
						people
					</p>
				</div>
			</div>
		</div>
	);
};

export default StatsCard;
