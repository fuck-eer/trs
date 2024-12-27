import { cn } from "../../../utils/cn";

export type Props = {
	inputProps?: React.HTMLAttributes<HTMLTextAreaElement>;
	label?: string;
	name: string;
	className?: {
		_fieldContainer?: string;
		_label?: string;
		_inputContainer?: string;
		_input?: string;
		_helperContainer?: string;
	};
	leadingIcon?: React.ReactNode;
	trailingIcon?: React.ReactNode;
	helperText?: string;
	errorText?: string;
	rows?: number;
};
const TextArea = ({
	className,
	inputProps,
	label,
	name,
	errorText,
	helperText,
	leadingIcon,
	trailingIcon,
	rows,
}: Props) => {
	return (
		<div
			className={cn(
				"flex w-full flex-col gap-2 justify-start items-stretch text-green-text",
				className?._fieldContainer
			)}
		>
			<label
				htmlFor={name}
				className={cn("font-light text-sm text-green-text", className?._label)}
			>
				{label}
			</label>
			<div
				className={cn(
					"rounded-md border-2 flex flex-row gap-3 justify-start items-center bg-green-dark-card",
					errorText ? "border-red-error" : " border-green-light",
					className?._inputContainer
				)}
			>
				{leadingIcon && (
					<label htmlFor={name} className='pl-3 py-2'>
						{leadingIcon}
					</label>
				)}
				<textarea
					rows={rows ?? 3}
					name={name}
					id={name}
					className={cn(
						"py-2 text-sm grow h-full bg-transparent outline-none resize-none",
						leadingIcon ? "pl-0" : "pl-3",
						trailingIcon ? "pr-0" : "pr-3",
						className?._input
					)}
					{...inputProps}
				/>
				{trailingIcon && (
					<label htmlFor={name} className='pr-3 py-2'>
						{trailingIcon}
					</label>
				)}
			</div>
			<div
				className={cn(
					"w-full flex flex-col gap-2",
					className?._helperContainer
				)}
			>
				{helperText && !errorText && (
					<p className='text-sm text-gray-800'>{helperText}</p>
				)}
				{errorText && (
					<p className='text-xs font-light text-red-error'>{errorText}</p>
				)}
			</div>
		</div>
	);
};

export default TextArea;
