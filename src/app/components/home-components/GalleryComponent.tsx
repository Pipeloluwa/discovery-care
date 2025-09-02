"use client"
import MarginContainer from '@/app/Containers/MarginContainer'
import { IconButton } from '@material-tailwind/react'
import React, { useRef } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'motion/react';
import { animateFadeDown, animateFadeUp, animateFadeUpShort, animateFromLeft, animateGradualSpacing } from '@/app/animation/animationVariants';
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'
import { div } from 'motion/react-client'


const galleryData = [
    {
        id: 1,
        image: 'images/pictures/Others/3.webp',
        title: 'Community Event',
        description: 'A community event bringing people together for a cause.',
    },

    {
        id: 2,
        image: 'images/pictures/Others/4.webp',
        title: 'Volunteer Work',
        description: 'Volunteers working hard to make a difference in the community.',
    },
    {
        id: 3,
        image: 'images/pictures/Others/5.webp',
        title: 'Fundraising Event',
        description: 'A successful fundraising event to support our cause.',

    },
    {
        id: 4,
        image: 'images/pictures/Others/6.webp',
        title: 'Community Gathering',
        description: 'A gathering of community members to discuss important issues.',

    },
    {
        id: 5,
        image: 'images/pictures/Others/7.webp',
        title: 'Volunteer Work',
        description: 'A successful fundraising event to support our cause.',

    },
    {
        id: 6,
        image: 'images/pictures/Others/8.webp',
        title: 'Caregiver Training',
        description: 'A gathering of community members to discuss important issues.',

    },
    {
        id: 7,
        image: 'images/pictures/Others/9.webp',
        title: 'Visiting Seniors',
        description: 'A community event bringing people together for a cause.',
    },

    {
        id: 8,
        image: 'images/pictures/Others/10.webp',
        title: 'Community Support',
        description: 'Volunteers working hard to make a difference in the community.',
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

export const GalleryComponent = () => {
    const sliderRef = useRef<Slider | null>(null);


    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-8 '>

            <MarginContainer>
                <SubHeaderComponent headerValue='Our Gallery' />
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
                            galleryData.map((item, index) => {
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
                                                <motion.img
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                                    alt='project picture'
                                                    src={item.image}
                                                    loading='eager'
                                                    className='flex w-full h-full object-cover' />

                                            </motion.div>

                                        </div>


                                        <div className={`${gradientColors[index % 4]} w-[100%] min-h-[120px] flex flex-col justify-center items-center mx-auto p-4 shadow`}>
                                            <motion.h3
                                                className='flex whitespace-pre-wrap text-lg text-blue-600 font-semibold text-center'>

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
                                            </motion.h3>



                                            <motion.p
                                                variants={animateFadeUpShort}
                                                initial={"offscreen"}
                                                whileInView={"onscreen"}
                                                custom={0.2}
                                                className='text-sm text-gray-600 text-center mt-2'>

                                                {item.description.substring(0, 60)} {item.description.length > 60 && "..."}
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
