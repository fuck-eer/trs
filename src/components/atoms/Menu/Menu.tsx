import { cn } from "../../../utils/cn";

export type Props = {
	children: React.ReactNode;
	className?: {
		_children?: string;
		_menuItemHolder?: string;
		_backdrop?: string;
		_menuHolder?: string;
	};
	onClose: () => void;
	isOpen: boolean;
	menuItem: React.ReactNode;
};

const Menu = ({ children, onClose, className, isOpen, menuItem }: Props) => {
	return (
		<div className={cn("relative", className?._menuHolder)}>
			{isOpen && (
				<div
					className={cn("fixed inset-0 z-[1]", className?._backdrop)}
					onClick={onClose}
				/>
			)}
			{children}
			{isOpen && (
				<div
					className={cn(
						"absolute top-[calc(100%+10px)] z-[2] right-0 flex p-5 flex-col rounded-xl min-w-[220px] min-h-[270px] bg-black/50 backdrop-blur-[8px] shadow-border drop-shadow-modal",
						className?._menuItemHolder
					)}
				>
					{menuItem}
				</div>
			)}
		</div>
	);
};

export default Menu;
