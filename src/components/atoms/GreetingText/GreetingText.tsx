import { cn } from "../../../utils/cn";

export type Props = {
	heading?: React.ReactNode;
	subHeading?: React.ReactNode;
	className?: { _container?: string; _heading?: string; _subHeading?: string };
};
const GreetingText = ({ heading, subHeading, className }: Props) => {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center gap-2 text-green-text font-pop",
				className?._container
			)}
		>
			<h1 className={cn("text-[80px] font-semibold", className?._heading)}>
				{heading ? (
					heading
				) : (
					<>
						The <span className='text-green-light'>Recommendation</span> Street
					</>
				)}
			</h1>
			<p className={cn("text-[24px] font-light", className?._subHeading)}>
				{subHeading ? (
					subHeading
				) : (
					<>
						<span className='font-semibold text-green-light'>Live</span> Anime.{" "}
						<span className='font-semibold text-green-light'>Love</span> Anime.{" "}
						<span className='font-semibold text-green-light'>Share</span> Anime.{" "}
						<span className='font-semibold text-green-light'>Show</span> Anime.{" "}
						<span className='font-semibold text-green-light'>Know</span> Anime.
					</>
				)}
			</p>
		</div>
	);
};

export default GreetingText;
