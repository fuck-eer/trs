import { cn } from "../../../utils/cn";

type Props = {
	profilePhotoUrl: string;
	className?: { _imageContainer?: string; _image?: string; _ring?: string };
};
const Avatar = ({ profilePhotoUrl, className }: Props) => {
	return (
		<div
			className={cn(
				"relative flex justify-center items-center",
				className?._imageContainer
			)}
		>
			<div className='overflow-hidden w-[32px] relative rounded-full h-[32px]'>
				<img
					src={profilePhotoUrl}
					className={cn("w-full h-full", className?._image)}
					alt='profile photo'
				/>
			</div>
			<div
				className={cn(
					"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[36px] h-[36px] rounded-full bg-transparent border-[1px] border-green-light",
					className?._ring
				)}
			/>
		</div>
	);
};

export default Avatar;
