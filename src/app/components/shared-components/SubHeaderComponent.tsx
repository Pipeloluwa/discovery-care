"use client"
import { animateFadeUp, animateFromLeft, animateGradualSpacing } from '@/app/animation/animationVariants'
import { ISubHeaderComponent } from '@/app/interfaces/shared-components/ISubHeaderComponent'
import { motion } from 'motion/react'
import React from 'react'

export const SubHeaderComponent: React.FC<ISubHeaderComponent> = ({ headerValue }) => {
    return (
        <div className='w-full flex flex-col justify-center items-center mb-4'>
            <h1 className="flex whitespace-pre-wrap text-3xl font-bold text-blue-400 tracking-wide">
                {
                    headerValue.split("").map((char, index) =>
                        <motion.p
                            key={`Welcome to${index}`}
                            variants={animateGradualSpacing}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={index}>

                            {char}
                        </motion.p>
                    )
                }
            </h1>

            <motion.div
                variants={animateFromLeft}
                initial={"offscreen"}
                whileInView={"onscreen"}
                className='h-full flex justify-center items-center gap-x-2'>

                <div className='h-[2px] w-[70px] bg-purple-500' />
                <motion.img
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className='h-[25px]' src="/images/graphics/g2_.png" alt="letter o"
                />
                <div className='h-[2px] w-[70px] bg-green-500' />
            </motion.div>
        </div>
    )
}
