type Props = {
	withLabel?: boolean;
	label1?: string;
	label2?: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const ToggleSwitch = ({
	checked,
	label1,
	label2,
	onChange,
	withLabel,
}: Props) => {
	return (
		<div className='flex flex-row gap-3 items-center justify-center'>
			{withLabel && (
				<p className='text-green-light capitalize font-normal'>{label1}</p>
			)}
			<div className='checkbox-wrapper-3'>
				<input
					type='checkbox'
					id='cbx-3'
					checked={checked}
					onChange={onChange}
				/>
				<label htmlFor='cbx-3' className='toggle'>
					<span></span>
				</label>
			</div>
			{withLabel && (
				<p className='text-purple-dark capitalize font-medium'>{label2}</p>
			)}
		</div>
	);
};

export default ToggleSwitch;
