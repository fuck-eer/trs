import React, { useEffect, useState } from "react";
import Search from "../Icons/Search";
import Cross from "../Icons/Cross";
import { cn } from "../../../utils/cn";
import useHyperState from "../../../hooks/useHyperState";

export type Props = {
	className?: {
		_inputContainer?: string;
		_input?: string;
		_searchIcon?: string;
		_clearIcon?: string;
		_crossIcon?: string;
	};
	clearEnabled?: boolean;
	onClear?: () => void;
	onSearch?: (value: string) => void;
	invalid?: boolean;
	errorText?: string;
} & React.HTMLAttributes<HTMLInputElement>;
const SearchInput = ({
	clearEnabled,
	onClear,
	onSearch,
	className,
	...inputProps
}: Props) => {
	const { stateVariable: searchText, set: setSearchText } = useHyperState("");
	const [inputIsFocused, setInputIsFocused] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchText !== "") {
				//Will be calling the debounced function
			}
		}, 1000);
		return () => clearTimeout(timer);
	}, [searchText]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
		onSearch?.(e.target.value);
	};
	const handleClear = () => {
		setSearchText("");
		onClear?.();
	};
	return (
		<div
			className={cn(
				"flex flex-row justify-start gap-2 items-center px-3 py-2 rounded-full bg-green-dark-card",
				className?._inputContainer
			)}
		>
			<Search width='22' height='22' className={cn(className?._searchIcon)} />
			<input
				{...inputProps}
				className={cn(
					`grow h-full transition-all duration-500 ease-in-out bg-transparent text-[16px] font-medium text-green-text focus:outline-none placeholder:text-[16px] placeholder:font-semibold `,
					inputIsFocused || searchText
						? "placeholder:text-green-text/20 w-[400px]"
						: "placeholder:text-green-text w-[60px]",
					className?._input
				)}
				type={"text"}
				placeholder='Search'
				onChange={handleSearch}
				onBlur={() => setInputIsFocused(false)}
				onFocus={() => setInputIsFocused(true)}
				value={searchText ?? ""}
			/>
			{clearEnabled && (inputIsFocused || searchText) && (
				<Cross
					width='20'
					height='20'
					onClick={handleClear}
					className={cn(
						"cursor-pointer",
						searchText ? "visible" : "invisible",
						className?._clearIcon
					)}
				/>
			)}
		</div>
	);
};

export default SearchInput;
