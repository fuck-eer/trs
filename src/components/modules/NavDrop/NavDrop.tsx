import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "../../../utils/cn";
import Share from "../../atoms/Icons/Share";
import CollectionStats from "../../atoms/Icons/CollectionStats";
import CollectionSettings from "../../atoms/Icons/CollectionSettings";
import { colors } from "../../../utils/tailwindTheme";
import ShareCollection from "../../atoms/Icons/ShareCollection";
import AddCollection from "../../atoms/Icons/AddCollection";
import { useNavigate } from "react-router-dom";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/clerk-react";

type Props = {
	isLoggedIn: boolean;
};
const NavDrop = ({ isLoggedIn }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const handleIconClick = (whereTo: "collection" | "libraries" | "stats") => {
		switch (whereTo) {
			case "collection":
				navigate("/collections");
				break;
			case "libraries":
				navigate("/libraries");
				break;
			case "stats":
				navigate("/");
				break;
			default:
				break;
		}
	};

	return (
		<div className='fixed right-16 top-12 z-50'>
			<div className='relative flex font-bold text-lg font-serif text-green-light flex-col items-center justify-center w-16 h-16 rounded-full border-4 bg-green-dark-card border-green-light shadow-glass-card z-10'>
				<SignedOut>
					<SignInButton>TRS</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
			<div
				className={cn(
					"absolute top-0 left-0 w-full min-h-28 bg-green-dark-card z-[1] rounded-full py-5 px-2 flex flex-col justify-end gap-3 shadow-main transition-all duration-300 ease-in-out",
					isOpen ? "pt-20" : "pt-5"
				)}
			>
				{isOpen && (
					<div className='flex flex-col gap-3 justify-center items-center pb-3'>
						<AddCollection
							fill={colors["green-light"]}
							width='24'
							height='24'
							strokeWidth='1'
							className='cursor-pointer'
							onClick={() => {
								handleIconClick("collection");
							}}
						/>
						<ShareCollection
							fill={colors["green-light"]}
							width='24'
							height='24'
							strokeWidth='1'
							className='cursor-pointer'
							onClick={() => {
								handleIconClick("libraries");
							}}
						/>
						<CollectionStats
							fill={colors["green-light"]}
							width='24'
							strokeWidth='4'
							height='24'
							className='cursor-pointer'
							onClick={() => {
								handleIconClick("stats");
							}}
						/>
					</div>
				)}
				<div
					onClick={() => setIsOpen((prev) => !prev)}
					className={cn(
						"cursor-pointer flex flex-col gap-2 justify-center items-center"
					)}
				>
					{isOpen && <div className='rounded-full h-[3px] w-[60%] bg-black' />}
					<FaChevronDown
						className={cn(
							"text-green-light transition-all duration-300 ease-in-out",
							isOpen ? "rotate-180" : "rotate-0"
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default NavDrop;
