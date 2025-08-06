"use client"
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion } from 'motion/react'
import React from 'react'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'

export const AboutComponent = () => {
    const aboutData = {
        "description": "We are dedicated to providing exceptional care and support for seniors, ensuring they live their golden years with dignity and joy. Our team of compassionate professionals is committed to enhancing the quality of life for our residents through personalized care plans, engaging activities, and a warm, welcoming environment. We believe in treating every individual with respect and kindness, making us a trusted partner in senior care. Whether it's through our assisted living services, memory care programs, or community outreach initiatives, we strive to make a positive impact in the lives of seniors and their families. Join us in our mission to create a better tomorrow for our elders.",
        "buttonText": "Learn More",
        "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "statistics": [
            {
                "title": "Great Donations",
                "value": 45,
                "color": "text-yellow-300"
            },
            {
                "title": "Happy Clients",
                "value": 100,
                "color": "text-purple-300"
            },
            {
                "title": "Years of Experience",
                "value": 20,
                "color": "text-green-400"
            },
            {
                "title": "Caregivers",
                "value": 100,
                "color": "text-white"
            }
        ]
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-8'>
            <SubHeaderComponent headerValue='Who We Are' />

            <div className='w-full min-h-[480px] flex flex-col relative items-center justify-center gap-y-12 overflow-hidden'>

                <div className="w-[50%] h-full absolute left-0 right-0 top-0 bottom-0 flex justify-center bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden">
                    <motion.img
                        src={aboutData.image}
                        alt="About Us"
                        animate={{scale: [1, 2, 1]}}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full shadow-md object-cover object-top opacity-20"
                    />
                </div>


                <MarginContainer>
                    <div className="z-20 w-full h-full flex justify-end items-center gap-x-32">
                        <ul className='w-[35%] py-6 min-h-[50px] grid grid-cols-2 items-center justify-between border-t-[1.8px] border-b-[1.8px] border-white gap-8'>
                            {
                                aboutData.statistics.map((stat, index) => (
                                    <li key={`aboutStatistics${index}`} className='flex flex-col items-center justify-center gap-y-2 text-center text-white'>
                                        <span className={`${stat.color} text-6xl font-bold `}>
                                            {stat.value}
                                        </span>
                                        {stat.title}
                                    </li>
                                ))
                            }

                        </ul>


                        <motion.div 
                            animate={{ x: [0, -16, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className='w-[65%] h-full flex flex-col md:flex-row items-center gap-x-16 p-12 bg-blue-50 shadow-md shadow-gray-400'>

                            <div className="flex-1">
                                <p className="text-lg mb-6">
                                    {`${aboutData.description.substring(0, 350)}`} {`${aboutData.description.length > 350 && "..."}`}
                                </p>
                                <button className="big-button text-white font-bold">
                                    {aboutData.buttonText}
                                </button>
                            </div>
                        </motion.div>

                    </div>

                </MarginContainer>
            </div>


        </div>
    )
}
