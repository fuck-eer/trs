import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import Plus from "../../components/atoms/Icons/Plus";
import Share from "../../components/atoms/Icons/Share";
import PageLayout from "../../components/atoms/PageLayout";
import PublicToggle from "../../components/atoms/PublicToggle/PublicToggle";
import { colors } from "../../utils/tailwindTheme";
import { useQuery } from "@tanstack/react-query";
import { getMyCollections } from "../../networks/dataApiCalls";
import CollectionCard from "../../components/modules/CollectionCard/CollectionCard";

const MyCollectionsPage = () => {
	const [isPublic, setIsPublic] = useState(true);
	const { data, isLoading, isError } = useQuery({
		queryKey: ["myCollection"],
		queryFn: () => getMyCollections(),
	});
	const onPublicChange = (state: "public" | "private") => {
		setIsPublic(state === "public");
	};

	return isLoading ? (
		<p>Loading...</p>
	) : isError ? (
		<p>Error Occurred</p>
	) : (
		<PageLayout className='flex flex-col gap-8'>
			<div className='w-full justify-between items-center flex gap-7'>
				<h1 className='text-4xl text-white font-medium'>My Collections</h1>
				<PublicToggle
					privateLabel='🔏'
					publicLabel='🌏'
					isPublic={isPublic}
					onClick={onPublicChange}
				/>
				<div className='flex justify-start gap-4 items-center max-w-min'>
					<Button
						variant={isPublic ? "nude-primary" : "nude-secondary"}
						onClick={() => console.log("share clicked")}
					>
						<Share
							fill={isPublic ? colors["green-light"] : colors["purple-dark"]}
							height='30'
						/>
					</Button>
					<Button
						className='p-2'
						variant={isPublic ? "solid-primary" : "solid-secondary"}
						onClick={() => console.log("add clicked")}
					>
						<Plus width='25' height='25' />
					</Button>
				</div>
			</div>
			{data?.data
				?.filter(({ isPublic: cardPublic }) => cardPublic === isPublic)
				.map(({ cards, heading, isPublic: cardPublic, subHeading }) => (
					<CollectionCard
						key={heading}
						heading={heading}
						subHeading={subHeading}
						isPublic={cardPublic}
						cards={cards}
					/>
				))}
		</PageLayout>
	);
};

export default MyCollectionsPage;
