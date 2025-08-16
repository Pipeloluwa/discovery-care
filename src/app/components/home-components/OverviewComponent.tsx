"use client";
import MarginContainer from '@/app/Containers/MarginContainer'
import React, { useEffect, useState } from 'react'
import { BsPersonCheckFill } from 'react-icons/bs'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'
import { GrSupport } from 'react-icons/gr'
import { FaPeopleGroup } from 'react-icons/fa6'
import { animateFadeUp } from '@/app/animation/animationVariants';
import { motion } from 'motion/react';

export const OverviewComponent = () => {
    
    const subHeading = "At Discovery Care Group, we deliver personalized NDIS support services designed to empower individuals to live independently, reach their goals, and flourish within their communities. Our high-quality, person-centered approach ensures that support is tailored to your unique needs and aspirations, helping you achieve a fulfilling and autonomous life.";
    const overviewData = [
        {
            "title": "Tailored",
            "description": "Tailored, participant-focused care.",
            "color": "text-yellow-500"
        },

        {
            "title": "Flexible ",
            "description": "Flexible and reliable support",
            "color": "text-purple-500"
        },

        {
            "title": "Experienced",
            "description": "Experienced and compassionate professionals",
            "color": "text-green-500"
        }
    ]


    const overviewIcons = [
        <BsPersonCheckFill className='lg:size-[50px] md:size-[40px] size-[30px]' />,
        <GrSupport className='lg:size-[50px] md:size-[40px] size-[30px]' />,
        <FaPeopleGroup className='lg:size-[50px] md:size-[40px] size-[30px]' />
    ];


    return (
        <MarginContainer>

            <motion.p
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                className='mt-28 lg:w-[70%] md:w-[80%] w-full mx-auto flex text-center'>
                <span className='text-6xl'>{"\""}</span>{subHeading}<span className='text-6xl'>{"\""}</span>
            </motion.p>

            <div className="w-full grid sm:grid-cols-3 grid-cols-2 items-start justify-between ld:gap-x-12 md:gap-x-8 gap-6">
                {
                    overviewData.map((overview, index) =>
                        <motion.div
                            key={`overviewData ${index}`}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2 * index}
                            className={`${overviewData.length === (index + 1) ? "sm:col-span-1 col-span-2" : "col-span-1"} w-full flex flex-col justify-center items-center`}>
                            <div className={` ${overview.color} flex justify-center items-center gap-x-2 lg:p-4`}>
                                {overviewIcons[index]}
                                <h3 className='lg:text-2xl font-bold text-center '>
                                    {overview.title}
                                </h3>
                            </div>



                            <p className='text-sm text-center'>
                                {`${overview.description.substring(0, 120)}`} {overview.description.length > 120 && "..."}
                            </p>

                        </motion.div>
                    )
                }
            </div>

        </MarginContainer>
    )
}
