import React from 'react'
import { cn } from '../../../utils/cn';

type Props = {
    classnameForPublic: React.ReactNode;
    classnameForPrivate: React.ReactNode;
}

const PublicToggle = ({classnameForPublic, classnameForPrivate}: Props) => {
  return (
    <div className={cn('flex')}>
        <div>
            <h1 className={cn('font-[16px] px-[21px] py-[3px]', classnameForPublic)}>Public</h1>
        </div>

        <div>
            <h2 className={cn('font-[16px] px-[21px] py-[3px] border-2 border-green-light', classnameForPrivate)}>Private</h2>
        </div>
    </div>
  )
}

export default PublicToggle