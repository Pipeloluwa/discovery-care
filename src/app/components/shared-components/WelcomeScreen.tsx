"use client";
import MarginContainer from '@/app/Containers/MarginContainer'
import { IWelomeScreen } from '@/app/interfaces/shared-components/IWelcomeScreen'
import { motion } from 'motion/react'
import React from 'react'

export const WelcomeScreen: React.FC<IWelomeScreen> = ({title}) => {
  return (
    <div className='w-full h-[400px] relative flex justify-center items-center bg-gradient-to-b from-white to-blue-500'>

      <motion.img 
        animate={{ y: [0, 36, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={"/images/graphics/g1.png"} 
        alt='graphics image' 
        className='w-[300px] absolute left-20 bottom-0' 
        />

      <motion.img 
        animate={{ y: [0, -36, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={"/images/graphics/g1.png"} 
        alt='graphics image' 
        className='w-[200px] absolute right-60 top-35' 
        />


      <div className='z-20 w-full h-full flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 '>
        <MarginContainer>
          <h1 className="text-white text-shadow-2xs text-shadow-gray-500 text-6xl text-center font-bold tracking-wider">
            {title} 
          </h1>

        </MarginContainer>
      </div>

    </div>
  )
}
