"use client"
import MarginContainer from '@/app/Containers/MarginContainer'
import { IconButton } from '@material-tailwind/react'
import React, { useRef } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'motion/react';
import { animateFadeUpShort, animateFromLeft, animateGradualSpacing } from '@/app/animation/animationVariants';
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'
import { div } from 'motion/react-client'
import { BsPersonBoundingBox } from 'react-icons/bs'




const staffData = [
    {
        id: 1,
        image: 'images/pictures/PictureIcons/1.webp',
        title: 'Director of Community Outreach',
        name: 'Ngozi Adebayo'
    },

    {
        id: 2,
        image: 'images/pictures/PictureIcons/2.webp',
        title: 'Volunteer Coordinator',
        name: 'Chukwuemeka Okoro'
    },
    {
        id: 3,
        image: 'images/pictures/PictureIcons/1.webp',
        title: 'Fundraising Manager',
        name: 'Ifeoma Eze'

    },
    {
        id: 4,
        image: 'images/pictures/PictureIcons/2.webp',
        title: 'Community Liaison',
        name: 'Babatunde Adebisi'

    },
    {
        id: 5,
        image: 'images/pictures/PictureIcons/1.webp',
        title: 'Volunteer Assistant',
        name: 'Amina Musa'

    },
    {
        id: 6,
        image: 'images/pictures/PictureIcons/2.webp',
        title: 'Caregiver Trainer',
        name: 'Olufemi Ogunleye'

    },
    {
        id: 7,
        image: 'images/pictures/PictureIcons/1.webp',
        title: 'Senior Services Coordinator',
        name: 'Adaugo Okeke'
    },

    {
        id: 8,
        image: 'images/pictures/PictureIcons/2.webp',
        title: 'Community Support Specialist',
        name: 'Emeka Ibe'
    },
]


const gradientColors: { [key: number]: string } = {
    0: "bg-gradient-to-b from-white to-green-200",
    1: "bg-gradient-to-b from-white to-yellow-200",
    2: "bg-gradient-to-b from-white to-purple-200",
    3: "bg-gradient-to-b from-white to-blue-200"
};



const sliderResponsiveSettings = [
    {
        breakpoint: 1140,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 960,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            // initialSlide: 3
        }
    },

];

export const StaffComponent = () => {
    const sliderRef = useRef<Slider | null>(null);


    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-8 '>

            <MarginContainer>
                <SubHeaderComponent headerValue='Our Experienced Staff' />
            </MarginContainer>

            <div className="w-full h-[500px] relative flex  gap-x-3 justify-center items-center">

                <div className="z-10 absolute left-12 lg:left-20 xl:left-32 justify-center items-center">
                    <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickPrev(); }} onResize={() => { }} onResizeCapture={() => { }}
                        className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-blue-500/70 text-white border-3 border-white shadow-sm shadow-black"
                        placeholder='' onPointerEnterCapture onPointerLeaveCapture
                    >
                        <GrLinkPrevious className="size-[20px]" />
                    </IconButton>
                </div>



                <div className="h-full absolute left-0 right-0 lg:w-[90%] w-[98%] mx-auto justify-center items-center drop-shadow-lg border-b border-gray-200">
                    <Slider
                        ref={slider => {
                            sliderRef.current = slider;
                        }}
                        arrows={false}
                        dots={false}
                        slidesToShow={3}
                        slidesToScroll={1}
                        infinite={true}
                        speed={1400}
                        autoplay={true}
                        pauseOnHover={true}
                        responsive={sliderResponsiveSettings}
                        className="w-full h-full justify-center items-center overflow-hidden"
                    >
                        {
                            staffData.map((item, index) => {
                                return (
                                    <div key={`galleryHome${index}`} className='overflow-hidden  md:w-[350px] w-full flex flex-col justify-center items-center p-4'>

                                        <div className='relative overflow-hidden lg:h-[300px] h-[250px] w-[100%] mx-auto flex items-center'>
                                            <motion.div
                                                viewport={{ once: true }}
                                                variants={animateFromLeft}
                                                initial={"offscreen"}
                                                whileInView={"onscreen"}
                                                custom={0}

                                                className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover object-top bg-gray-300'>
                                                {/* <motion.img
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                                    alt='project picture'
                                                    src={item.image}
                                                    className='flex w-full h-full object-cover' /> */}

                                                <BsPersonBoundingBox className='size-[100px] self-center mx-auto' />

                                            </motion.div>

                                        </div>


                                        <div className={`${gradientColors[index % 4]} w-[100%] min-h-[120px] flex flex-col justify-center items-center mx-auto p-4 shadow`}>
                                            <h3 className='flex whitespace-pre-wrap text-lg text-blue-600 font-semibold text-center'>
                                                {
                                                    item.title.split("").map((char, index) =>
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
                                            </h3>

                                            <motion.p
                                                variants={animateFadeUpShort}
                                                initial={"offscreen"}
                                                whileInView={"onscreen"}
                                                className='text-sm text-gray-600 text-center mt-2 italic'>

                                                {item.name.substring(0, 60)} {item.name.length > 60 && "..."}
                                            </motion.p>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>



                <div className="z-10 absolute right-12 lg:right-20 xl:right-32 justify-center items-center ">
                    <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickNext(); }} onResize={() => { }} onResizeCapture={() => { }}
                        className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-blue-500/70 text-white border-3 border-white shadow-sm shadow-black"
                        placeholder='' onPointerEnterCapture onPointerLeaveCapture
                    >
                        <GrLinkNext className="size-[20px]" />
                    </IconButton>
                </div>


            </div>

        </div>
    )
}
