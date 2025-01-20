import HomePage from "../HomePage/HomePage";
import { useHomePageData } from "../../contexts/DataContext";

const HomeRoute = () => {
	const { recommendedRows, trendingCards } = useHomePageData();
	return (
		<HomePage
			recommendedRows={recommendedRows?.data?.data ?? []}
			trendingCards={trendingCards?.data?.data ?? []}
		/>
	);
};

export default HomeRoute;
