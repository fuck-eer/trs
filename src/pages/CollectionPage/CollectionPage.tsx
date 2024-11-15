import React from "react";
import PageLayout from "../../components/atoms/PageLayout";
import { useQuery } from "@tanstack/react-query";
import { getCollectionDetails } from "../../networks/dataApiCalls";
import Button from "../../components/atoms/Button/Button";
import { colors } from "../../utils/tailwindTheme";
import AnimeCard from "../../components/atoms/AnimeCard/AnimeCard";
import Share from "../../components/atoms/Icons/Share";
import { cn } from "../../utils/cn";
import Settings from "../../components/atoms/Icons/Settings";
import Avatar from "../../components/atoms/Icons/Avatar";
import AddCardPlaceholder from "../../components/atoms/AddCard/AddCardPlaceholder";

// type Props = {

// }
const CollectionPage = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["collection"],
		queryFn: () => getCollectionDetails(),
	});

	if (!isLoading && (isError || !data)) return <p>Error occured</p>;
	if (!data) return <p>Error occured</p>;
	const {
		data: { cards, heading, isPublic, subHeading, createdOn, updatedOn },
	} = data;
	return isLoading ? (
		<p>Loading...</p>
	) : isError ? (
		<p>Error Occurred</p>
	) : (
		<PageLayout className='flex-col gap-12'>
			<div className='flex flex-col gap-4'>
				<div className='w-full justify-between items-center flex gap-7'>
					<h1
						className={cn(
							"text-4xl text-white font-semibold",
							isPublic ? "text-green-light" : "text-purple-dark"
						)}
					>
						{heading}
					</h1>
					<div className='flex justify-start gap-4 items-center max-w-min'>
						<Button
							variant={isPublic ? "nude-primary" : "nude-secondary"}
							onClick={() => console.log("share clicked")}
						>
							<Avatar
								fill={isPublic ? colors["green-light"] : colors["purple-dark"]}
								width='30'
								height='30'
							/>
						</Button>
						<Button
							className='p-2'
							variant={isPublic ? "solid-primary" : "solid-secondary"}
							onClick={() => console.log("add clicked")}
						>
							<Settings
								width='30'
								height='30'
								fill={colors["green-dark-card"]}
							/>
						</Button>
					</div>
				</div>
				<div className='flex flex-row justify-between items-stretch'>
					<p className='text-white text-ellipsis text-[14px] font-normal line-clamp-5 max-w-[500px]'>
						{subHeading}
					</p>
					<div className='flex flex-col justify-start text-[12px] items-stretch'>
						<p
							className={cn(isPublic ? "text-green-light" : "text-purple-dark")}
						>
							Created on:{" "}
							<span className='text-[14px] text-white font-bold'>
								{createdOn ? createdOn : "--"}
							</span>
						</p>
						<p
							className={cn(isPublic ? "text-green-light" : "text-purple-dark")}
						>
							Updated on:{" "}
							<span className='text-[14px] text-white font-bold'>
								{updatedOn ? updatedOn : "--"}
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap gap-[90px] justify-start items-center'>
				{cards.map((card) => (
					<AnimeCard key={card.title} {...card} />
				))}
				<AddCardPlaceholder
					onAdd={() => console.log("add clicked")}
					isPublic={isPublic}
					size='md'
				/>
			</div>
		</PageLayout>
	);
};

export default CollectionPage;
