import { cn } from "../../../utils/cn";

type Props = {
	icon: React.ReactNode;
	text: string;
	onClick: () => void;
	className?: {
		_icon?: string;
		_text?: string;
		_option?: string;
	};
};

const MenuOption = ({ icon, onClick, text, className }: Props) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"flex group gap-2 p-2 cursor-pointer justify-center items-center border border-transparent rounded-md hover:border-green-light hover:bg-green-light/10 transition-all duration-300 ease-in-out",
				className?._option
			)}
		>
			<div className={cn(className?._icon)}>{icon}</div>
			<p
				className={cn(
					"capitalize font-medium text-white leading-5 ",
					className?._text
				)}
			>
				{text}
			</p>
		</div>
	);
};

export default MenuOption;
