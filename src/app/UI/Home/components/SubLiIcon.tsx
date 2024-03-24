import React from 'react'
import {motion, useScroll} from 'framer-motion'

type SubLiIconProps = {
    reference: React.RefObject<HTMLElement>;
};

const SubLiIcon: React.FC<SubLiIconProps> = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
    return (
        <figure className='absolute left-0'>
            <svg className='-rotate-90 fill-[#1a1a1a]' width="75" height="75" viewBox='0 0 100 100'>
                {/* <circle cx="75" cy="50" r="20" className='stroke-white stroke-1 fill-none' /> */}
                <motion.circle cx="75" cy="50" r="9" className='stroke-white stroke-[2px]' 
                    style={{
                        filter: 'drop-shadow(0px 0px 1px #FFFFFF)',
                        pathLength : scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="8" className='stroke-1 fill-[#66CCFF]'/>
            </svg>
        </figure>
    )
}

export default SubLiIcon