"use client"
import MarginContainer from '@/app/Containers/MarginContainer'
import { ISelectedService } from '@/app/interfaces/components/home/IServicesComponent';
import { motion } from 'motion/react';
import { div } from 'motion/react-client';
import React, { useState } from 'react'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent';
import { animateFadeUp, animateFromLeft, animateRotateFromLeft, animateRotateFromRight } from '@/app/animation/animationVariants';
import { AiOutlineSolution } from 'react-icons/ai';
import { FaPeopleCarry, FaHouseUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { RiBrain2Fill } from 'react-icons/ri';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import Link from 'next/link';

export const ServicesComponent = () => {
    const servicesData = {
        title: "Services",
        buttonText: "Explore Services",
        services: [
            {
                "id": 1,
                "title": "Living",
                "description": "We provide personalized support for daily living, including assistance with personal care, meal prep, and household tasks. Our services focus on developing independent living skills, promoting emotional well-being, and fostering social connections, all tailored to help individuals lead fulfilling, independent lives.",
                "image": "https://images.unsplash.com/photo-1551892589-865f69869476?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "id": 2,
                "title": "Participation",
                "description": "Providing support by accompanying individuals to social, recreational, or educational activities, helping build confidence and promote social inclusion, and offering assistance with appointments and community events.",
                "image": "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "id": 3,
                "title": "Coordination ",
                "description": "Assisting participants in understanding and managing their NDIS plan, linking them with suitable services and providers, and supporting them in reviewing and tracking progress toward their goals.",
                "image": "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "id": 4,
                "title": "Supports ",
                "description": "Providing access to allied health professionals like OTs, physios, speech pathologists, and counsellors, along with therapy plans aimed at improving independence, mobility, and daily functioning.",
                "image": "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "id": 5,
                "title": "Development",
                "description": "Offering life skills training like cooking, budgeting, and using public transport, employment preparation programs, and confidence-building support for independent living.",
                "image": "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "id": 6,
                "title": "Accommodation",
                "description": "Providing temporary care to give families and carers a break, in safe, comfortable, and supportive environments for participants.",
                "image": "https://plus.unsplash.com/premium_photo-1688125414656-ab91164cbd1e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    };


    const serviceIcons = [
        <FaPeopleCarry className='lg:size-[40px] size-[30px]' />,
        <SiHomeassistantcommunitystore className='lg:size-[40px] size-[30px]' />,
        <AiOutlineSolution className='lg:size-[40px] size-[30px]' />,
        <RiBrain2Fill className='lg:size-[40px] size-[30px]' />,
        <GiSkills className='lg:size-[40px] size-[30px]' />,
        <FaHouseUser className='lg:size-[40px] size-[30px]' />
    ];


    const [selectedService, setSelectedService] = useState<ISelectedService>(servicesData.services[0]);

    return (
        <div className='bg-blue-50 py-16'>
            <MarginContainer>
                <div className='min-h-svh flex flex-col items-center justify-center gap-y-8'>

                    <SubHeaderComponent headerValue={servicesData.title} />

                    <div className="w-full lg:min-h-[480px] min-h-[450px] h-full flex flex-col justify-between items-center gap-x-16 gap-y-2">

                        <div className="lg:w-full w-screen px-4 flex justify-between items-center xl:gap-x-4 gap-x-2 overflow-hidden overflow-x-auto shadow">
                            {
                                servicesData.services.map((service, index) => (
                                    <motion.div
                                        key={`service-${index}`}
                                        variants={animateRotateFromLeft}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={0}
                                        onClick={() => setSelectedService(servicesData.services[index])}
                                        className={`${selectedService.id === service.id ? "animated-background2" : ""} 2xl:size-[180px] xl:size-[160px] size-[140px] lg:mt-5 mt-3 mb-2 p-[6px] flex justify-center items-center rounded-[20px] cursor-pointer`}>

                                        <div className={`${selectedService.id === service.id ? "bg-blue-400/80 text-white shadow shadow-gray-800 h-full" : "bg-white h-[90%] text-gray-600"} 2xl:w-[180px] xl:w-[160px] w-[140px] flex flex-col justify-center items-center text-sm text-center tracking-wider rounded-2xl shadow lg:p-2 p-1 transition-all duration-1000`}>
                                            {serviceIcons[index]}

                                            <h3 className='font-bold'>{service.title}</h3>
                                        </div>
                                    </motion.div>
                                ))
                            }

                        </div>


                        <div className='w-full lg:h-[300px] flex lg:flex-row flex-col lg:gap-x-12 gap-y-6 transition-all duration-1000'>
                            <motion.div
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.8}
                                className="w-full lg:h-full md:h-[400px] h-[300px] flex justify-center overflow-hidden shadow-lg shadow-gray-400 bg-gradient-to-b from-blue-500 to-blue-900">

                                <img
                                    src={selectedService.image}
                                    alt="Our Services"
                                    loading='eager'
                                    className="w-full h-full flex object-cover opacity-70"
                                />
                            </motion.div>


                            <div
                                className='md:w-fulll w-[90%] mx-auto h-full flex flex-col items-start gap-y-4'>
                                <motion.h6
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0.2}
                                    className='lg:text-2xl text-xl font-bold text-blue-500'>

                                    {selectedService.title}
                                </motion.h6>

                                <motion.div
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0.3}
                                    className="flex-1">

                                    <p className="lg:text-lg text-sm mb-6">
                                        {`${selectedService.description.substring(0, 350)}`} {`${servicesData.services[0].description.length > 350 ? "..." : ""}`}
                                    </p>
                                    <Link href="" className="small-button text-white font-bold">
                                        {"See all our services"}
                                    </Link>
                                </motion.div>
                            </div>

                        </div>

                    </div>

                </div >
            </MarginContainer >
        </div>
    )
}
