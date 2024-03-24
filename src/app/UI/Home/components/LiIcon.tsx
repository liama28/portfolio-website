import React from 'react'
import { motion, useScroll } from 'framer-motion'

type LiIconProps = {
    reference: React.RefObject<HTMLElement>;
    enablePulse: boolean;
};

const LiIcon: React.FC<LiIconProps> = ({ reference, enablePulse }) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
    return (
        <figure className='absolute left-0'>
            <svg className='-rotate-90 fill-[#1a1a1a]' width="75" height="75" viewBox='0 0 100 100'>
                {/* <circle cx="75" cy="50" r="20" className='stroke-white stroke-1 fill-none' /> */}
                <motion.circle 
                    cx="75" 
                    cy="50" 
                    r="20" 
                    className='stroke-white stroke-[3px]' 
                    style={{
                        filter: 'drop-shadow(0px 0px 1px #FFFFFF)',
                        pathLength : scrollYProgress
                    }}
                />
                <circle 
                    cx="75" 
                    cy="50" 
                    r="10" 
                    className={enablePulse ? 'animate-pulse stroke-1 fill-[#66CCFF]' : 'stroke-1 fill-[#66CCFF]'}
                />
            </svg>
        </figure>
    )
}

export default LiIcon