import ScrollDown from "../Icons/ScrollDown";

const ScrollDownStub = () => {
	return (
		<div className='flex flex-row items-start justify-center gap-3 text-sm font-medium text-green-light'>
			<p>Scroll</p>
			<ScrollDown
				className='animate-scrollDown'
				height='45'
				width='22'
				strokeWidth='6'
			/>
			<p>Down</p>
		</div>
	);
};

export default ScrollDownStub;
