import { createPortal } from "react-dom";
import Button, { ButtonVariant } from "../Button/Button";
import { cn } from "../../../utils/cn";
import { useEffect } from "react";
import { Rings } from "react-loader-spinner";
import { colors } from "../../../utils/tailwindTheme";
export type ActionType = {
	buttonType: ButtonVariant;
	buttonText: string;
	onClick: () => void;
	disabled?: boolean;
	className?: string;
	isLoading?: boolean;
};
export type Props = {
	heading?: React.ReactNode;
	modalName: string;
	modalSize?: "md" | "lg";
	children: React.ReactNode;
	actions?: ActionType[];
	withBackdrop?: boolean;
	isOpen: boolean;
	onClose: () => void;
};
const modalEl = document.getElementById("modal");
const backdropEl = document.getElementById("backdrop");
export const Modal = ({
	children,
	modalSize = "md",
	actions = [],
	modalName,
	isOpen,
	heading,
	onClose,
}: Props) => {
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	return createPortal(
		<>
			{isOpen && (
				<>
					<ModalBackdrop onClick={onClose} />
					<div
						className={cn(
							"flex fixed z-[51] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col gap-10 px-10 py-6 rounded-lg font-pop shadow-border backdrop-blur-sm bg-black/65 drop-shadow-modal",
							modalSize === "md"
								? "w-[600px]"
								: modalSize === "lg"
								? "w-[800px]"
								: ""
						)}
					>
						<div className='font-normal text-base text-green-text display-flex flex-col gap-5 flex'>
							{heading && (
								<div className='font-medium text-2xl text-green-text'>
									{heading}
								</div>
							)}
							{children}
						</div>
						<div className='flex flex-row-reverse gap-6'>
							{actions?.map(
								({
									buttonType,
									buttonText,
									onClick,
									disabled,
									isLoading,
									className,
								}) => (
									<Button
										key={buttonText}
										variant={buttonType}
										onClick={onClick}
										disabled={disabled || isLoading}
										className={cn("py-[6px] px-3 text-sm", className)}
									>
										{isLoading ? (
											<Rings
												color={colors["green-dark-card"]}
												height={20}
												width={20}
											/>
										) : (
											buttonText
										)}
									</Button>
								)
							)}
						</div>
					</div>
				</>
			)}
		</>,
		modalEl as HTMLElement,
		modalName
	);
};

export const ModalBackdrop = ({ onClick }: { onClick?: () => void }) => {
	return createPortal(
		<div
			onClick={(e) => {
				e.stopPropagation();
				onClick?.();
			}}
			className='fixed inset-0 z-50 bg-black/10 backdrop-blur-sm'
		/>,
		backdropEl as HTMLElement,
		"backdrop"
	);
};
