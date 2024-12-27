import React from "react";
import Eye from "../Icons/Eye";
import Avatar from "../Icons/Avatar";
import { colors } from "../../../utils/tailwindTheme";
import Cards from "../Icons/Cards";
import { useNavigate } from "react-router-dom";

export type Props = {
	heading: string;
	subHeading: string;
	views: number;
	catalogues: string[];
	sharedWith: string[];
	creatorId: string;
	id: string;
};
const SharedCard = ({
	id,
	catalogues,
	subHeading,
	heading,
	sharedWith,
	creatorId,
	views,
}: Props) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`/libraries/${id}`);
			}}
			className='flex cursor-pointer flex-col items-stretch gap-4 px-7 py-5 rounded-lg grow shrink basis-[calc(33.33%-2.5rem)] bg-green-dark-card max-w-[calc(33.33%-14px)]'
		>
			<h6 className='text-green-light text-2xl '>{heading}</h6>
			<p className='text-green-text text-sm h-[100px] font-light text-ellipsis overflow-hidden'>
				{subHeading}
			</p>
			<div className='flex justify-start items-center gap-4'>
				<div className='flex text-green-text items-center text-xs gap-2'>
					<Eye /> {views ?? "--"}
				</div>
				<div className='flex text-green-text items-center text-xs gap-2'>
					<Cards width='14' fill={colors["green-light"]} height='14' />{" "}
					{catalogues?.length ?? "--"}
				</div>
				<div className='flex text-green-text items-center text-xs gap-2'>
					<Avatar width='14' fill={colors["green-light"]} height='14' />{" "}
					{sharedWith?.length ?? "--"}
				</div>
			</div>
		</div>
	);
};

export default SharedCard;
