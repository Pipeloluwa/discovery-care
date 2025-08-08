
import MarginContainer from '@/app/Containers/MarginContainer'
import React from 'react'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { div } from 'motion/react-client';
import { FaArrowRightLong } from 'react-icons/fa6';
import { animateFromLeft, animateFromRight } from '@/app/animation/animationVariants';
import { motion } from 'motion/react';

export const OurCoreValues = () => {
    const ourCoreValuesData =
    {
        title: "Our Core Values",
        values: [
            { title: "Compassion", description: "We genuinely care about your wellbeing.", color: "bg-gradient-to-b from-yellow-400 to-yellow-600" },
            { title: "Integrity", description: "We are reliable, transparent, and professional.", color: "bg-gradient-to-b from-green-400 to-green-600" },
            { title: "Person-Centred", description: "We support you to take control of your life and decisions.", color: "bg-gradient-to-b from-purple-400 to-purple-600" },
            { title: "Respect and Oneness", description: "We value individuality and cultural diversity and stay united in our shared purpose.", color: "bg-gradient-to-b from-blue-400 to-blue-600" }
        ]
    };


    return (
        <MarginContainer>
            <SubHeaderComponent headerValue='Our Core Values' />

            <div className='w-full lg:min-h-[350px] flex justify-between gap-x-12'>

                <div className='w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        ourCoreValuesData.values.map((item, index) =>
                            <motion.div
                                key={index}

                                variants={index % 2=== 0 ? animateFromRight : animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.8}
                                className='w-full flex flex-wrap gap-x-3'>

                                <div className={`${item.color} w-full md:min-h-[300px] min-h-[250px] p-2 flex flex-col justify-center items-center gap-y-2 text-center text-white rounded-xl shadow-lg shadow-gray-400`}>
                                    <h5 className='text-xl font-bold tracking-wider text-shadow-2xs shadow-gray-800'>
                                        {item.title}
                                    </h5>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </motion.div>
                        )
                    }

                </div>

            </div>


            {/* <div className='w-full flex lg:-mt-10 mt-2'>
                <button className="flex items-center gap-x-2 font-bold text-blue-500 underline text-lg">
                    {"Refer a client"} <FaArrowRightLong />
                </button>
            </div> */}

        </MarginContainer>
    )
}
