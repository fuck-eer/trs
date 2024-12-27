import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getLibrary } from "../../networks/dataApiCalls";
import PageLayout from "../../components/atoms/PageLayout";
import CollectionCard from "../../components/modules/CollectionCard/CollectionCard";
import { useAuth } from "@clerk/clerk-react";
export interface Props {
	id: string;
}
const LibraryPage = ({ id }: Props) => {
	const { getToken } = useAuth();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["library", id],
		queryFn: async () => getLibrary(id, await getToken()),
	});
	if (isLoading) return <div>Loading...</div>;
	if (isError || !data) return <div>Error occurred</div>;
	console.log(data);
	return (
		<PageLayout className='flex flex-col gap-8'>
			<div className='w-full justify-between items-center flex gap-7'>
				<h1 className='text-4xl text-white font-medium'>
					{data?.data?.heading}
				</h1>
			</div>
			{data?.data?.catalogues?.map(
				({ cards, heading, isPublic: cardPublic, subHeading, id }) => (
					<CollectionCard
						key={id}
						id={id}
						heading={heading}
						subHeading={subHeading}
						isPublic={cardPublic}
						cards={cards}
					/>
				)
			)}
		</PageLayout>
	);
};

export default LibraryPage;
