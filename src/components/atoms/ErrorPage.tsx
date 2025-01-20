import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import PageLayout from "./PageLayout";
const textIcons = [
	"🦇",
	"🔥",
	"🤯",
	"👾",
	"🐞",
	"🚀",
	"🎈",
	"🎠",
	"🪅",
	"🔩",
	"🛠️",
	"🚨",
	"👀",
	"💀",
];
const ErrorPage = () => {
	const navigate = useNavigate();
	const handleGoHome = () => {
		navigate("/");
	};
	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<PageLayout className='justify-center items-center'>
			<div className='flex flex-col gap-5 items-stretch justify-end max-w-[600px]'>
				<h1 className='text-center text-3xl font-bold text-green-light'>
					This doesn't seems to be working!
				</h1>
				<p className='text-center text-sm font-light text-green-text'>
					An error has occurred while processing your request. Please try again
					later. If the issue persists, consider checking your internet
					connection or contact support for further assistance. We apologize for
					any inconvenience this may have caused and appreciate your patience.
				</p>
				<div className='flex flex-row gap-12 justify-center items-center'>
					<Button
						onClick={() => handleGoHome()}
						className='text-sm'
						variant='solid-primary'
					>
						Go Home!
					</Button>
					<Button
						onClick={() => handleGoBack()}
						className='text-sm'
						variant='outline-primary'
					>
						Go Back!
					</Button>
				</div>
			</div>
			<div className='absolute font-semibold text-[260px] animate-wiggleRocket -z-10 opacity-10'>
				{textIcons[Math.floor(Math.random() * textIcons.length)]}
			</div>
		</PageLayout>
	);
};

export default ErrorPage;
