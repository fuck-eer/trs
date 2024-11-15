import React from "react";
import {
	RatingType,
	SeasonType,
} from "../../../utils/types/jikanApiResponseType";
import Episodes from "../Icons/Episodes";
import Calender from "../Icons/Calender";
import Rating from "../Icons/Rating";
import Producer from "../Icons/Producer";
import Seasons from "../Icons/Seasons";

export type Props = {
	episodes?: number;
	rating?: RatingType;
	studio?: string;
	season?: SeasonType;
	duration?: string;
};
const InfoBar = ({ duration, episodes, rating, studio, season }: Props) => {
	return (
		<div className='flex w-full justify-around items-center gap-6 px-4 py-3 bg-green-dark-card rounded-lg drop-shadow-text'>
			<div className='flex items-center gap-4'>
				<Episodes width='30' height='30' />
				<p className='text-[18px] font-semibold text-green-text'>
					{episodes ?? "--"} Episodes
				</p>
			</div>
			<div className='flex items-center gap-4'>
				<Calender width='30' height='30' />
				<p className='text-[18px] font-semibold text-green-text'>
					{duration ?? "--"}
				</p>
			</div>
			<div className='flex items-center gap-4'>
				<Rating width='30' height='30' />
				<p className='text-[18px] font-semibold text-green-text'>
					{rating ?? "--"}
				</p>
			</div>
			<div className='flex items-center gap-4'>
				<Producer width='30' height='30' />
				<p className='text-[18px] font-semibold text-green-text'>
					{studio ?? "--"}
				</p>
			</div>
			<div className='flex items-center gap-4'>
				<Seasons width='30' height='30' />
				<p className='text-[18px] font-semibold text-green-text'>
					{season ?? "--"}
				</p>
			</div>
		</div>
	);
};

export default InfoBar;
