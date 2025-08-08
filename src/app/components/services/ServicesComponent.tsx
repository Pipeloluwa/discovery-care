

import { animateFadeUp, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants';
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

export const ServicesComponent = () => {

    const servicesItemData = [
        {
            title: "Support independent Living/ Specialised Disability Accommodation ",
            image: "https://images.unsplash.com/photo-1478061653917-455ba7f4a541?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            values: [
                "Assistance with personal care, hygiene, and meal preparation",
                "Support with household tasks such as cleaning, laundry, and shopping",
                "Helping participants develop independent living skills"
            ],
            color: "bg-gradient-to-b from-white to-blue-200 rounded-lg p-6 shadow-lg shadow-gray-400"
        },

        {
            title: "Community Participation",
            image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            values: [
                "Accompanying participants to social, recreational, or educational activities",
                "Supporting confidence-building and social inclusion",
                "Assistance with appointments and community events"
            ],
            color: "bg-gradient-to-b from-white to-yellow-200 rounded-lg p-6 shadow-lg shadow-gray-400"
        },


        {
            title: "Support Coordination",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            values: [
                "Helping participants understand and navigate their NDIS plan",
                "Connecting participants to the right services and providers",
                "Reviewing and monitoring progress toward their goals"
            ],
            color: "bg-gradient-to-b from-white to-green-200 rounded-lg p-6 shadow-lg shadow-gray-400"
        },

        {
            title: "Therapeutic Supports",
            image: "https://plus.unsplash.com/premium_photo-1668061706855-26d4cf0f6248?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            values: [
                "Access to allied health professionals (Occupational Therapists, Physiotherapists, Speech Pathologists, and Counselling services).",
                "Therapy plans to enhance independence, mobility, and daily functioning"
            ],
            color: "bg-gradient-to-b from-white to-purple-200 rounded-lg p-6 shadow-lg shadow-gray-400"
        },

        {
            title: "Skill Development & Capacity Building",
            image: "https://images.unsplash.com/photo-1478061653917-455ba7f4a541?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            values: [
                "Life skills training such as cooking, budgeting, and using public transport",
                "Employment preparation and job-readiness programs",
                "Confidence-building for independent living"
            ],
            color: "bg-gradient-to-b from-white to-blue-200 rounded-lg p-6 shadow-lg shadow-gray-400"
        },

        {
            title: "Short-Term Accommodation & Respite",
            image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            values: [
                "Temporary care to give families and carers a break",
                "Safe, comfortable, and supportive environments for participants"
            ],
            color: "bg-gradient-to-b from-white to-yellow-200 rounded-lg p-6 shadow-lg shadow-gray-400"
        },

    ];



    return (
        <MarginContainer>
            <h6 className='w-full text-xl font-bold italic'>
                {"Our Services include: "}
            </h6>


            <div className='w-full flex flex-col lg:gap-y-24 gap-y-12'>
                {
                    servicesItemData.map((item, index) =>
                        <motion.div

                            variants={index % 2 === 0 ? animateFromRight : animateFromLeft}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.4}
                            className={`${index % 2 ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"} ${item.color} w-full min-h-[400px] flex justify-between items-center gap-12 py-10`}>

                            <div className='w-full h-[300px] flex overflow-hidden rounded-xl'>
                                <img
                                    src={item.image}
                                    alt="our story image"
                                    className='w-full h-full flex object-cover'
                                />
                            </div>


                            <div className='w-full h-full flex flex-col gap-y-4'>

                                <div key={`aboutUs${index}`} className='w-full h-full flex flex-col gap-y-2'>
                                    <h3 className='text-2xl font-bold text-blue-500'>
                                        {item.title}
                                    </h3>

                                    <ul className='flex flex-col gap-y-2 italic list-disc ml-8'>
                                        {
                                            item.values.map((serviceItem, index) =>
                                                <li key={`serviceItem${index}`}>
                                                    {serviceItem}
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>

                            </div>

                        </motion.div>

                    )
                }
            </div>


            <motion.div
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.2}
                className='w-full flex lg:mt-10 mt-6 mb-24'>

                <Link href={"/contact"} className="flex items-center gap-x-2 font-bold text-blue-500 underline text-lg">
                    {"Contact Us to Discuss Your Needs "} <FaArrowRightLong />
                </Link>
            </motion.div>
        </MarginContainer>
    )
}
