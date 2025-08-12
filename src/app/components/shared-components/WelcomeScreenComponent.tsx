"use client";
import { animateGradualSpacing } from '@/app/animation/animationVariants';
import MarginContainer from '@/app/Containers/MarginContainer'
import { IWelomeScreen } from '@/app/interfaces/shared-components/IWelcomeScreen'
import { motion } from 'motion/react'
import React from 'react'

export const WelcomeScreenComponent: React.FC<IWelomeScreen> = ({ title }) => {
  return (
    <div className='w-full md:h-[400px] h-[300px] relative flex justify-center items-center bg-gradient-to-b from-white to-blue-500'>

      {/* <motion.img
        animate={{ y: [0, 36, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='lg:w-[300px] md:w-[250px] w-[200px] absolute xl:left-20 md:left-8 sm:left-5 -left-10 bottom-0'
      />

      <motion.img
        animate={{ y: [0, -36, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='lg:w-[200px] md:w-[150px] w-[100px] absolute xl:right-50 md:right-30 sm:right-[6rem] right-0 top-35'
      /> */}


      <img
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='lg:w-[300px] md:w-[250px] w-[200px] absolute xl:left-20 md:left-8 sm:left-5 -left-10 bottom-0'
      />

      <img
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='lg:w-[200px] md:w-[150px] w-[100px] absolute xl:right-50 md:right-30 sm:right-[6rem] right-0 top-35'
      />


      <div className='z-20 w-full h-full flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 '>
        <MarginContainer>
          <h1 className="flex whitespace-pre-wrap text-white text-shadow-2xs text-shadow-gray-500 lg:text-6xl text-5xl text-center font-bold tracking-wider">
            {
              title.split("").map((char, index) =>
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

        </MarginContainer>
      </div>

    </div>
  )
}
