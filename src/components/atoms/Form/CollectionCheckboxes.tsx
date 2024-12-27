import { useQuery } from "@tanstack/react-query";
import { getCollectionNames } from "../../../networks/dataApiCalls";
import { Rings } from "react-loader-spinner";
import { colors } from "../../../utils/tailwindTheme";
import Checkbox from "./Checkbox";
import { useAuth } from "@clerk/clerk-react";

export type Props = {
	onCheckChange: (id: string) => void;
	selectedCollections: string[];
	withoutHeading?: boolean;
};

const CollectionCheckboxes = ({
	onCheckChange,
	selectedCollections,
	withoutHeading,
}: Props) => {
	const { getToken } = useAuth();
	const {
		data: collectionNames,
		isLoading: isLoadingCollectionNames,
		isError: isErrorCollectionNames,
	} = useQuery({
		queryKey: ["getCollectionNames"],
		queryFn: async () => getCollectionNames(false, await getToken()),
	});
	return (
		<div className='flex flex-col gap-2 justify-start items-center'>
			{isLoadingCollectionNames ? (
				<Rings color={colors["purple-dark"]} height={40} width={40} />
			) : isErrorCollectionNames ? (
				<p className='text-sm text-center font-bold text-gray-700'>
					Unable to fetch collections Name at this moment
				</p>
			) : (
				<>
					{!withoutHeading && (
						<p className='self-start font-light text-sm text-green-text'>
							Collections To Share:
						</p>
					)}
					<div className='flex mt-2 flex-row w-[90%] gap-3 justify-start items-stretch'>
						<div className='flex flex-col gap-2 w-[50%]'>
							<p className='font-medium text-xs text-green-light'>Public</p>
							{collectionNames &&
								collectionNames.data?.publicCatalogues.map((e) => (
									<Checkbox
										key={e._id}
										variant='primary'
										checked={selectedCollections.includes(e._id)}
										label={e.listName}
										checkValue={e._id}
										onCheck={() => {
											onCheckChange(e._id);
										}}
									/>
								))}
						</div>
						<div className='flex flex-col gap-2 w-[50%]'>
							<p className='font-medium text-xs text-purple-dark'>Private</p>
							{collectionNames &&
								collectionNames.data?.privateCatalogues.map((e) => (
									<Checkbox
										key={e._id}
										variant='secondary'
										label={e.listName}
										checked={selectedCollections.includes(e._id)}
										checkValue={e._id}
										onCheck={() => {
											onCheckChange(e._id);
										}}
									/>
								))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default CollectionCheckboxes;
