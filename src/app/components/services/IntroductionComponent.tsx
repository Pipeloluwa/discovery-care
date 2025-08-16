

import { animateFadeUp } from '@/app/animation/animationVariants'
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion } from 'motion/react'
import React from 'react'

export const IntroductionComponent = () => {
    return (
        <MarginContainer>
            <div className='w-full h-full flex flex-col justify-start gap-y-2'>
                <motion.h4

                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.8}
                    className='text-2xl font-bold text-blue-500 tracking-wider mt-10 '>

                    {"Comprehensive NDIS Services Tailored to Your Needs"}
                </motion.h4>

                <motion.p

                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.8}
                >

                    {"At Discovery Care Group, we provide a wide range of NDIS services to support participants in every aspect of daily life. Our services are designed to build capacity, promote independence, and help you achieve your NDIS goals."}
                </motion.p>
            </div>
        </MarginContainer>
    )
}
