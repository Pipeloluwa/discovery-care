"use client"
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion, useInView } from 'motion/react'
import React, { LegacyRef, Ref, useEffect, useRef, useState } from 'react'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'
import Link from 'next/link'
import { animateFromLeft, animateFromRight, animateVisible } from '@/app/animation/animationVariants'

export const AboutComponent = () => {
    const aboutData = {
        "description": "We are a dedicated NDIS service provider committed to delivering high-quality, participant-focused care. Our goal is to help people with disabilities access the right support to lead fulfilling lives. Whether it’s assistance at home, community engagement, therapy services, or skill-building programs, DiscoveryCare Group walks with you every step of the way.",
        "image": "/images/pictures/Others/1.webp",
        "statistics": [
            {
                "title": "Great Donations",
                "value": 705,
                "color": "text-yellow-300"
            },
            {
                "title": "Happy Clients",
                "value": 500,
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


    const [numberStat1, setNumberStat1] = useState<number>(0);
    const [numberStat2, setNumberStat2] = useState<number>(0);
    const [numberStat3, setNumberStat3] = useState<number>(0);
    const [numberStat4, setNumberStat4] = useState<number>(0);

    const countRef: Ref<HTMLUListElement> = useRef(null);
    const countView = useInView(countRef, { once: false, amount: 0.3 });


    useEffect(() => {
        function animateNumber() {
            numberStat1 < aboutData.statistics[0].value && setNumberStat1((value) => value + Math.round(Math.random() + 1 * (aboutData.statistics[0].value / 100)));
            numberStat2 < aboutData.statistics[1].value && setNumberStat2((value) => value + Math.round(Math.random() + 1 * (aboutData.statistics[1].value / 100)));
            numberStat3 < aboutData.statistics[2].value && setNumberStat3((value) => value + Math.round(Math.random() + 1 * (aboutData.statistics[2].value / 100)));
            numberStat4 < aboutData.statistics[3].value && setNumberStat4((value) => value + Math.round(Math.random() + 1 * (aboutData.statistics[3].value / 100)));
        }

        if (!countView) {
            setNumberStat1(0); setNumberStat2(0); setNumberStat3(0); setNumberStat4(0);
        }
        setTimeout(() => animateNumber(), 50)
    }, [numberStat1, numberStat2, numberStat3, numberStat4, countView]);

    return (
        <MarginContainer>
            <div className='w-full h-full flex flex-col items-center justify-center gap-y-8'>
                <SubHeaderComponent headerValue='Who We Are' />

                <div className='w-full min-h-[480px] flex flex-col relative items-center justify-center gap-y-12 overflow-hidden'>

                    <motion.div
                        variants={animateFromLeft}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.8}
                        className="lg:w-[50%] w-full h-full absolute left-0 right-0 top-0 bottom-0 flex justify-center bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden">

                        <motion.img
                            src={aboutData.image}
                            alt="About Us"
                            animate={{ scale: [1, 2, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full shadow-md object-cover object-top"
                        />
                    </motion.div>


                    <MarginContainer>
                        <motion.div
                            variants={animateFromRight}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.8}
                            className="z-20 w-full h-full flex lg:flex-row flex-col-reverse justify-end items-center xl:gap-x-32 lg:gap-x-10 gap-y-12">

                            {/* <motion.ul
                                ref={countRef}
                                className='lg:w-[35%] md:w-[90%] w-full py-6 min-h-[50px] grid grid-cols-2 items-center justify-between border-t-[1.8px] border-b-[1.8px] border-white gap-8'>
                                {

                                    aboutData.statistics.map((stat, index) => (
                                        <motion.li
                                            key={`aboutStatistics${index}`}
                                            animate={{}}
                                            transition={{ duration: 20, delay: 3000, repeat: Infinity, ease: "easeInOut" }}
                                            className='flex flex-col items-center justify-center gap-y-2 text-center text-white md:text-base text-sm'>

                                            <span className={`${stat.color} flex md:text-5xl text-3xl font-bold transition-all duration-700`}>
                                                {
                                                    countView
                                                        &&
                                                        index === 0 ? numberStat1
                                                        : index === 1 ? numberStat2
                                                            : index === 2 ? numberStat3
                                                                : numberStat4
                                                } {" +"}
                                            </span>
                                            {stat.title}
                                        </motion.li>
                                    ))
                                }

                            </motion.ul> */}


                            <motion.div
                                animate={{ x: [-16, 16, -16] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className='lg:w-[65%] md:w-[80%] w-full h-full flex items-center gap-x-16 md:p-12 p-8 bg-blue-50 shadow-md lg:shadow-gray-400 shadow-gray-600'>

                                <div className="flex-1">
                                    <p className="lg:text-lg md:text-base text-sm md:text-start text-justify mb-6">
                                        {`${aboutData.description.substring(0, 360)}`} {`${aboutData.description.length > 360 ? "..." : ""}`}
                                    </p>
                                </div>
                            </motion.div>

                        </motion.div>

                    </MarginContainer>
                </div>


            </div>
        </MarginContainer>
    )
}
