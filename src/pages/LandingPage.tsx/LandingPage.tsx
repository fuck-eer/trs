import Cursor from "../../components/atoms/Cursor/Cursor";
import GreetingCoressel from "../../components/atoms/GreetingCoressel/GreetingCoressel";
import GreetingText from "../../components/atoms/GreetingText/GreetingText";
import Overlay from "../../components/atoms/Overlay/Overlay";
import PageLayout from "../../components/atoms/PageLayout";
import ScrollDownStub from "../../components/atoms/ScrollDownStub/ScrollDownStub";
import useMouse from "../../hooks/useMouse";

const DummyImages = [
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
	"https://picsum.photos/200/300",
];

const LandingPage = () => {
	const { x, y } = useMouse();
	return (
		<PageLayout className='cursor-none p-[50px]'>
			<GreetingCoressel
				className='fixed top-0 left-[50%] translate-x-[-50%]'
				images={DummyImages}
			/>
			<Cursor x={x} y={y} />
			<Overlay className={{ _container: "flex-grow w-full h-full" }}>
				<GreetingText />
			</Overlay>
			<ScrollDownStub className='absolute bottom-[30px] z-40 left-[50%] translate-x-[-50%]' />
		</PageLayout>
	);
};

export default LandingPage;
