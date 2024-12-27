import { useQuery } from "@tanstack/react-query";
import PageLayout from "../../components/atoms/PageLayout";
import SharedCard from "../../components/atoms/SharedCard/SharedCard";
import { getLibraries } from "../../networks/dataApiCalls";
import { useAuth } from "@clerk/clerk-react";

const SharedPage = () => {
	const { getToken } = useAuth();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["getLibraries"],
		queryFn: async () => getLibraries(await getToken()),
	});

	return (
		<PageLayout className='flex flex-col gap-8'>
			<div className='w-full justify-between items-center flex gap-7'>
				<h1 className='text-4xl text-white font-medium'>{"My Libraries"}</h1>
			</div>
			<div className='flex flex-row flex-wrap gap-5 justify-start items-center'>
				{isLoading ? (
					<p>Loading...</p>
				) : !isLoading && (isError || !data) ? (
					<p>Error occurred</p>
				) : (
					data?.data?.map(
						({
							heading,
							subHeading,
							views,
							catalogues,
							sharedWith,
							creatorId,
							id,
						}) => (
							<SharedCard
								key={id}
								heading={heading}
								subHeading={subHeading}
								views={views}
								catalogues={catalogues}
								sharedWith={sharedWith}
								creatorId={creatorId}
								id={id}
							/>
						)
					)
				)}
			</div>
		</PageLayout>
	);
};

export default SharedPage;
