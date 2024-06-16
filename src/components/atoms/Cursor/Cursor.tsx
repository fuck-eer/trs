import React from "react";

export type Props = {
	x: number;
	y: number;
	icon?: string | React.ReactNode;
};

const Cursor = ({ icon, x, y }: Props) => {
	return (
		<div
			className='absolute z-50 top-0 left-0 bg-green-light w-[32px] h-[32px] rounded-full flex items-center justify-center mix-blend-difference'
			style={{
				top: y - 16,
				left: x - 16,
			}}
		>
			{icon}
			<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40px] h-[40px] rounded-full bg-transparent border-2 border-dashed border-green-light'></div>
		</div>
	);
};

export default Cursor;
