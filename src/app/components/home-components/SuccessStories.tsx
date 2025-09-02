"use client"
import { animateFadeUp, animateFromLeft, animateFromRight, animateGradualSpacing } from '@/app/animation/animationVariants';
import MarginContainer from '@/app/Containers/MarginContainer';
import { IconButton } from '@material-tailwind/react';
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'motion/react';
import React from 'react'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent';
import { FaQuoteRight } from 'react-icons/fa';


const sucessStoryData = [
    {
        id: 1,
        image: 'images/pictures/Others/11.webp',
        title: 'Community Event',
        description: 'A community event bringing people together for a cause.',
    },

    {
        id: 2,
        image: 'images/pictures/Others/13.webp',
        title: 'Volunteer Work',
        description: 'Volunteers working hard to make a difference in the community.',
    },
    {
        id: 3,
        image: 'images/pictures/Others/14.webp',
        title: 'Fundraising Event',
        description: 'A successful fundraising event to support our cause.',

    },
    {
        id: 4,
        image: 'images/pictures/Others/15.webp',
        title: 'Community Gathering',
        description: 'A gathering of community members to discuss important issues.',

    }
]



export const SuccessStories = () => {
    const sliderRef = React.useRef<Slider | null>(null);

    return (
        <div className='w-full lg:h-[75svh] pb-24 flex flex-col items-center gap-y-8 bg-gradient-to-b from-white via-blue-200  to-blue-500'>

            <MarginContainer>
                <SubHeaderComponent headerValue='Success Stories' />

                <div className="w-full md:h-[250px] h-[75vh] relative flex gap-x-3 justify-center items-center">

                    <div className="z-10 absolute lg:left-20 left-3  justify-center items-center">
                        <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickPrev(); }} onResize={() => { }} onResizeCapture={() => { }}
                            className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-blue-500/70 text-white border-3 border-white shadow-sm shadow-black"
                            placeholder='' onPointerEnterCapture onPointerLeaveCapture
                        >
                            <GrLinkPrevious className="size-[20px]" />
                        </IconButton>
                    </div>



                    <div className="h-full absolute left-0 right-0 lg:w-[70%] w-[98%] mx-auto justify-center items-center drop-shadow-lg">
                        <Slider
                            ref={slider => {
                                sliderRef.current = slider;
                            }}
                            arrows={false}
                            dots={false}
                            slidesToShow={1}
                            slidesToScroll={1}
                            infinite={true}
                            speed={1400}
                            autoplay={true}
                            pauseOnHover={true}
                            className="w-full h-full justify-center items-center overflow-hidden"
                        >
                            {
                                sucessStoryData.map((item, index) => {
                                    return (
                                        <div key={`successStoriesHome${index}`} className='w-full md:h-[250px] h-full flex drop-shadow pb-2'>

                                            <div className='w-full h-full flex md:flex-row flex-col justify-between items-center '>

                                                <div className='md:w-[45%] w-full md:h-full h-[300px] overflow-hidden flex items-center'>
                                                    <motion.div
                                                        viewport={{ once: true }}
                                                        variants={animateFromLeft}
                                                        initial={"offscreen"}
                                                        whileInView={"onscreen"}
                                                        custom={0}

                                                        className=' flex w-full h-full object-cover bg-gray-300'>
                                                        <motion.img
                                                            animate={{ scale: [1, 2, 1] }}
                                                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                                            alt='project picture'
                                                            src={item.image}
                                                            loading='eager'
                                                            className='flex w-full h-full object-cover' />

                                                    </motion.div>

                                                </div>


                                                <div className={`${index % 4 == 3 ? "bg-green-200" : index % 4 == 2 ? "bg-yellow-200" : index % 4 == 1 ? "bg-purple-200" : "bg-blue-200"} md:w-[55%] w-full h-full flex flex-col gap-y-4 justify-center items-start px-12 py-8`}>
                                                    <FaQuoteRight className="text-blue-600 md:size-[40px] size-[25px]" />

                                                    <motion.p
                                                        variants={animateFromRight}
                                                        initial={"offscreen"}
                                                        whileInView={"onscreen"}
                                                        className='lg:text-lg text-black'>

                                                        {item.description.substring(0, 100)} {item.description.length > 100 && "..."}
                                                    </motion.p>


                                                    <h3 className='flex whitespace-pre-wrap lg:text-xl text-lg text-blue-600 font-semibold'>

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

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>



                    <div className="z-10 absolute lg:right-20 right-3 justify-center items-center ">
                        <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickNext(); }} onResize={() => { }} onResizeCapture={() => { }}
                            className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-blue-500/70 text-white border-3 border-white shadow-sm shadow-black"
                            placeholder='' onPointerEnterCapture onPointerLeaveCapture
                        >
                            <GrLinkNext className="size-[20px]" />
                        </IconButton>
                    </div>


                </div>

            </MarginContainer>

        </div>
    )
}
