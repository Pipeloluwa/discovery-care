"use client"
import { animateFadeDown, animateFadeUp, animateFromLeft, animateGradualSpacing } from '@/app/animation/animationVariants'
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'
import { WelcomeSuspense } from '../suspense-components/WelcomeSuspense'
import dynamic from 'next/dynamic'

const WelcomeScreenComponent = () => {
  const welcomeScreenData = {
    "bigTitle": "Discovery Care",
    "caption": "Empowering You to Live Your Best Life.",
    "buttonText": "Our Services",
    "image": "/images/pictures/welcome-bg_.webp"
  }



  return (

    <div className='w-full h-svh relative flex justify-center items-center'>

      <div className='w-full h-full flex absolute left-0 right-0 top-0 bottom-0 overflow-hidden'>
        <motion.img
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          src={welcomeScreenData.image}
          alt="welcome-background-image"
          className='w-full h-full flex object-cover'
        />
      </div>

      {/* <motion.img
        animate={{ y: [0, 36, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='xl:w-[400px] lg:w-[300px] md:w-[250px] w-[180px] absolute xl:left-20 lg:left-10 left-0 md:bottom-0 bottom-10'
      /> */}



      {/* <motion.img
        animate={{ y: [0, -36, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] absolute xl:right-60 lg:right-40 md:right-20 right-0 top-35'
      /> */}


      <img
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='xl:w-[400px] lg:w-[300px] md:w-[250px] w-[180px] absolute xl:left-20 lg:left-10 left-0 md:bottom-0 bottom-10'
      />

      <img
        src={"/images/graphics/g1.png"}
        alt='graphics image'
        className='xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] absolute xl:right-60 lg:right-40 md:right-20 right-0 top-35'
      />


      <div className='z-20 w-full h-full flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 '>
        <MarginContainer>
          <h1 className="lg:text-7xl md:text-6xl text-5xl text-center font-bold yellow-color text-shadow-2xs text-shadow-gray-600">

            <span className='flex flex-wrap justify-center items-center tracking-wider'>

              <div className='flex justify-center items-center gap-x-[2px]'>
                {
                  "Disc".split("").map((char, index) =>
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
              </div>

              <motion.div
                variants={animateFromLeft}
                initial={"offscreen"}
                whileInView={"onscreen"}
              >
                <motion.img
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className='sm:mt-0 lg:h-[55px] md:h-[45px] sm:h-[35px] h-[30px]' src="/images/graphics/g2_.png" alt="letter o"
                />
              </motion.div>

              <div className='flex gap-x-[2px]'>
                {
                  "very".split("").map((char, index) =>
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
              </div>
            </span>

            <div className='flex justify-center gap-x-[2px] whitespace-pre-wrap'>
              {
                "Care Group".split("").map((char, index) =>
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
            </div>

            {/* <div className='flex gap-x-[2px] justify-center'>
              {
                welcomeScreenData.bigTitle.substring(15, welcomeScreenData.bigTitle.length).split("").map((char, index) =>
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
            </div> */}
          </h1>

          <motion.p
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            className="animated-background lg:w-[65%] w-full mx-auto text-center tracking-widest lg:text-xl md:text-lg text-sm text-white italic font-bold p-4 rounded-lg lg:mt-4">

            {welcomeScreenData.caption}
          </motion.p>

          <motion.div
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
          >
            <Link href={"/services"} className="big-button font-bold text-white">
              {welcomeScreenData.buttonText}
            </Link>
          </motion.div>

        </MarginContainer>
      </div>

    </div>
  )
}



export default dynamic(() => Promise.resolve(WelcomeScreenComponent), { loading: () => <WelcomeSuspense />, ssr: false });
