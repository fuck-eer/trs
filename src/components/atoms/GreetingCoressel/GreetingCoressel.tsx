import { cn } from "../../../utils/cn";

const getImageSet = (allImages: string[]) => {
	const numberOfImages = Math.floor(allImages.length / 3);
	return {
		set1: allImages.slice(0, numberOfImages),
		set2: allImages.slice(numberOfImages, numberOfImages * 2),
		set3: allImages.slice(numberOfImages * 2, allImages.length),
	};
};
const GreetingCoressel = ({
	images,
	className,
}: {
	images: string[];
	className?: string;
}) => {
	const { set1, set2, set3 } = getImageSet(images);
	return (
		<div
			className={cn(
				"flex flex-row justify-center gap-12 overflow-hidden h-[1080px] min-w-[1000px]",
				className
			)}
		>
			<div className='flex flex-col items-stretch gap-12 min-w-[300px] h-full'>
				{set1.map((image, index) => (
					<div
						className='flex opacity-30 flex=shrink-0 bg-slate-500 flex-row items-center justify-center gap-12 min-h-[445px] rounded-xl overflow-hidden'
						key={index}
					>
						<img src={image} alt={image} className='w-full h-full' />
					</div>
				))}
			</div>
			<div className='flex flex-col -translate-y-80 items-stretch gap-12 min-w-[300px] h-full'>
				{set2.map((image, index) => (
					<div
						className='flex opacity-30 flex=shrink-0 bg-slate-500 flex-row items-center justify-center gap-12 min-h-[445px] rounded-xl overflow-hidden'
						key={index}
					>
						<img src={image} alt={image} className='w-full h-full' />
					</div>
				))}
			</div>
			<div className='flex -translate-y-40 flex-col items-stretch gap-12 min-w-[300px] h-full'>
				{set3.map((image, index) => (
					<div
						className='flex opacity-30 flex=shrink-0 bg-slate-500 flex-row items-center justify-center gap-12 min-h-[445px] rounded-xl overflow-hidden'
						key={index}
					>
						<img src={image} alt={image} className='w-full h-full' />
					</div>
				))}
			</div>
		</div>
	);
};

export default GreetingCoressel;
