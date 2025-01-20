import { cn } from "../../utils/cn";
import Akatsuki from "./Icons/Akatsuki";
import PageLayout from "./PageLayout";

const LoadingPage = () => {
	return (
		<PageLayout className='justify-center items-center'>
			<div
				className={cn(
					"relative z-50 top-0 left-0 bg-green-light w-[40px] h-[40px] rounded-full flex items-center justify-center mix-blend-difference animate-haveALook"
				)}
			>
				<Akatsuki className='scale-[1.5] translate-y-2 animate-wiggle' />
				<div
					className={cn(
						"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[52px] h-[52px] rounded-full bg-transparent border-[2px] border-dashed border-green-light"
					)}
				/>
			</div>
		</PageLayout>
	);
};

export default LoadingPage;
