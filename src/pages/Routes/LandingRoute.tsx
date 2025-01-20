import { useHomePageData } from "../../contexts/DataContext";
import { shuffleArray } from "../../utils/backdropImages";
import LandingPage from "../LandingPage/LandingPage";

const LandingRoute = () => {
	const { landingPageImages } = useHomePageData();
	return (
		<LandingPage
			images={shuffleArray(
				landingPageImages.data?.data?.map((e) => e.url) ?? []
			)}
		/>
	);
};

export default LandingRoute;
