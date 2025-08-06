"use client"
import MarginContainer from '@/app/Containers/MarginContainer'
import { ISelectedService } from '@/app/interfaces/components/home/IServicesComponent';
import { motion } from 'motion/react';
import { div } from 'motion/react-client';
import React, { useState } from 'react'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent';
import { animateRotateFromRight } from '@/app/animation/animationVariants';

export const ServicesComponent = () => {
    const servicesData = {
        title: "Services We Offer",
        description: "Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve",
        image: "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonText: "Explore Services",
        services: [
            {   "id": 1,
                "title": "Service One",
                "description": "Comprehensive support and tailored solutions to meet your unique requirements. Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve Discover our range of professional services designed to support your needs and help you achieve",
                "icon": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {   "id": 2,
                "title": "Service Two",
                "description": "Expert guidance and support to help you navigate your challenges.",
                "icon": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {   "id": 3,
                "title": "Service Three",
                "description": "Innovative solutions designed to enhance your productivity and efficiency.",
                "icon": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {   "id": 4,
                "title": "Service Four",
                "description": "Dedicated support to ensure your success and satisfaction.",
                "icon": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {   "id": 5,
                "title": "Service Four",
                "description": "Dedicated support to ensure your success and satisfaction.",
                "icon": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {   "id": 6,
                "title": "Service Four",
                "description": "Dedicated support to ensure your success and satisfaction.",
                "icon": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    };


    const [selectedService, setSelectedService] = useState<ISelectedService>(servicesData.services[0]);

    return (
        <div className='bg-blue-50 py-16'>
            <MarginContainer>
                <div className='min-h-svh flex flex-col items-center justify-center gap-y-8'>

                    <SubHeaderComponent headerValue={servicesData.title} />

                    <div className="w-full min-h-[480px] h-full flex flex-col justify-between items-center gap-x-16">

                        <div className="w-full flex justify-between items-center gap-x-6">
                            {
                                servicesData.services.map((service, index) => (
                                    <motion.div
                                        key={`service-${index}`}
                                        variants={animateRotateFromRight}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={0.2 * index}
                                        className={`${selectedService.id === service.id ? "animated-background2" : ""} w-full p-1 flex justify-center items-center rounded-[20px] cursor-pointer`}>

                                        <div className={`${selectedService.id === service.id ? "bg-gradient-to-b from-blue-50 to-blue-200 text-black h-[140px] shadow shadow-gray-800" : "bg-white text-black h-[130px] "} w-full flex flex-col justify-center items-center rounded-2xl shadow`}>
                                            <div className='w-[30px] mb-4'>
                                            <img className='w-full h-full object-cover' src={service.icon} alt={service.title} />
                                        </div>
                                        <h3 className='text-small font-bold mb-2'>{service.title}</h3>
                                        </div>
                                    </motion.div>
                                ))
                            }

                        </div>


                        <div className='w-full h-[300px] flex gap-x-12'>
                            <div className="w-full h-full flex justify-center overflow-hidden shadow shadow-black">
                                <img
                                    src={selectedService.image}
                                    alt="Our Services"
                                    className="w-full h-full flex object-cover"
                                />
                            </div>


                            <div
                                className='w-full h-full flex flex-col items-start gap-y-4'>
                                <h6 className='text-2xl font-bold text-blue-500'>
                                    {selectedService.title}
                                </h6>

                                <div className="flex-1">
                                    <p className="text-lg mb-6">
                                        {`${selectedService.description.substring(0, 350)}`} {`${servicesData.services[0].description.length > 350 && "..."}`}
                                    </p>
                                    <button className="big-button text-white font-bold">
                                        {"See all our services"}
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div >
            </MarginContainer >
        </div>
    )
}
