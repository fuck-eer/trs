const Test = ({ label }: { label: string }) => {
	return (
		<div className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700'>
			{label}
		</div>
	);
};

export default Test;
