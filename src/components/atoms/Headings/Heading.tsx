import React from 'react'
import { cn } from '../../../utils/cn';

type Props = {
    classnameForHeader: React.ReactNode;
    classnameForSubHeader?: React.ReactNode;
    label: string;
    subHeading?: string;
}

const Heading = ({classnameForHeader, label, subHeading}: Props) => {
  return (
    <div className='flex flex-col px-[69px] py-[56px] w-[100%]'>
       <h1 className={cn(classnameForHeader)}>{label}</h1>
       {subHeading? <p className='text-white font-light font-sm text-[14px] mt-[8px] w-[500px] h-[72px] font-pop'>{subHeading}</p> : null}
    </div>
  )
}

export default Heading