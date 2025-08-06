"use client"
import { ISubHeaderComponent } from '@/app/interfaces/shared-components/ISubHeaderComponent'
import { motion } from 'motion/react'
import React from 'react'

export const SubHeaderComponent: React.FC<ISubHeaderComponent> = ({ headerValue }) => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center mb-8'>
            <h1 className="text-4xl font-bold text-blue-400 tracking-wide">{headerValue}</h1>

            <div className='h-full flex justify-center items-center gap-x-2'>
                <div className='h-[2px] w-[70px] bg-purple-500' />
                <motion.img
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className='h-[25px]' src="/images/graphics/g2_.png" alt="letter o"
                />
                <div className='h-[2px] w-[70px] bg-green-500' />
            </div>
        </div>
    )
}
