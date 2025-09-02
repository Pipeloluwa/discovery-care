
import { animateBlurIn, animateFadeUp } from '@/app/animation/animationVariants';
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion } from 'motion/react';
import React from 'react'
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

export const OurStoryComponent = () => {

  const ourStoryData = [
    {
      title: "Our Story",
      description: "At Discovery Care Group, we are passionate about helping people with disabilities live meaningful and independent lives. Founded with a vision to create a safe and supportive environment for all, we provide services that reflect our belief in dignity, respect, and empowerment.",
      color: "text-yellow-500"
    },

    {
      title: "Mission Statement",
      description: "To deliver high-quality, person-centred NDIS services that empower participants to achieve their goals, enhance independence, and thrive in their communities.",
      color: "text-green-500"
    },

    {
      title: "Vision Statement",
      description: "An inclusive community where every individual living with disabilities is empowered to participate fully, pursue personal aspirations, and live with dignity, independence, and the freedom to make choices that enrich their lives.",
      color: "text-purple-500"
    },
  ];



  return (
    <MarginContainer>

      <div className='w-full lg:min-h-[400px] flex lg:flex-row flex-col justify-between items-center gap-12'>

        <motion.div

          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0.8}
          className='w-full h-[400px] flex overflow-hidden rounded-xl bg-gray-300 shadow-lg shadow-gray-400'>

          <motion.img

            variants={animateBlurIn}
            initial={"offscreen"}
            whileInView={"onscreen"}
            src="images/pictures/Others/30.webp"
            alt="our story image"
            className='w-full h-full flex object-cover'
          />
        </motion.div>


        <div className='w-full h-full flex flex-col gap-y-4'>
          {
            ourStoryData.map((item, index) =>


              <motion.div
                key={`aboutUs${index}`}

                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.12 * index}
                className='w-full h-full flex flex-col gap-y-2'>

                <h3 className={`text-2xl font-bold ${item.color}`}>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </motion.div>
            )
          }

        </div>

      </div>


    </MarginContainer>
  )
}
