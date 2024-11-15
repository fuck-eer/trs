type Props = {
	title: string;
	embedId: string;
	width?: string;
	height?: string;
};
const YoutubeEmbed = ({ title, embedId }: Props) => (
	<div className='overflow-hidden relative w-full grow aspect-[16/5]'>
		<iframe
			className='w-full rounded-lg h-full'
			src={`https://www.youtube.com/embed/${embedId}`}
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			referrerPolicy='strict-origin-when-cross-origin'
			allowFullScreen
			title={title}
		/>
	</div>
);
export default YoutubeEmbed;
