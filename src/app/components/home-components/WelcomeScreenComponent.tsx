"use client"
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion } from 'motion/react'
import React from 'react'

export const WelcomeScreenComponent = () => {
  const welcomeScreenData = {
    "bigTitle": "Discovery Care Services",
    "caption": "We provide a wide range of healthcare services to meet your needs. From primary care to specialized treatments, our team is dedicated to delivering exceptional care with compassion and expertise.",
    "buttonText": "Our Care Services",
    "image": "/images/pictures/welcome-bg.webp"
  }



  return (

    <div className='w-full h-svh relative flex justify-center items-center'>

      <div className='w-full h-full flex absolute left-0 right-0 top-0 bottom-0 overflow-hidden'>
        <motion.img 
            animate={{scale: [1, 1.5, 1]}}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            src={welcomeScreenData.image} 
            alt="welcome-background-image" 
            className='w-full h-full flex object-cover' 
          />
      </div>

      <motion.img 
        animate={{ y: [0, 36, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={"/images/graphics/g1.png"} 
        alt='graphics image' 
        className='w-[400px] absolute left-20 bottom-0' 
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
          <h1 className="text-6xl text-center font-bold text-blue-500 text-shadow-2xs text-shadow-black">
            <span className='flex flex-wrap justify-center items-center yellow-color text-7xl tracking-wider'>
              {"Disc"} 

              <motion.img 
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className='h-[55px]' src="/images/graphics/g2_.png" alt="letter o" 
                /> 

              {"very Care"} 
            </span>  
            {welcomeScreenData.bigTitle.substring(15, welcomeScreenData.bigTitle.length)}
          </h1>

          <p className="animated-background w-[65%] mx-auto text-center tracking-wider text-lg text-white text-shadow-2xs text-shadow-black font-bold p-4 rounded-lg mt-4">
            {welcomeScreenData.caption}
          </p>

          <div>
            <button className="big-button font-bold text-white ">
              {welcomeScreenData.buttonText}
            </button>
          </div>

        </MarginContainer>
      </div>

    </div>
  )
}
