
import { animateBlurIn, animateFadeUp } from '@/app/animation/animationVariants';
import MarginContainer from '@/app/Containers/MarginContainer'
import { motion } from 'motion/react';
import React from 'react'
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent';
import Link from 'next/link';

export const WhyChooseUsComponent = () => {

    const whyChooseUsData = [
        {
            title: "We’re Local",
            description: "We’re proud to be 100% Western Australian. Our team is local, approachable, and always on hand to support you throughout your NDIS journey. Being part of the community we serve means we understand local needs, values, and resources, enabling us to provide genuine, personalised support close to home.",
            color: "text-yellow-500"
        },

        {
            title: "We Listen",
            description: "We pride ourselves on being a person-centred service — our top priority is listening to what you want and understanding your preferences at every stage of your journey.",
            color: "text-green-500"
        },

        {
            title: "We’re Flexible",
            description: "We provide flexible and reliable support that adapts to your lifestyle and changing needs. Whether you require assistance daily, weekly, or occasionally, our team ensures you receive consistent, dependable care. Our services adjust around you, not the other way around.",
            color: "text-purple-500"
        },

        {
            title: "We’re Transparent and Honest",
            description: "Trust begins with honesty. From the first conversation, we are open and transparent about the services we can provide and how we can meet your needs. We communicate clearly, act with integrity, and always keep your best interests at heart.",
            color: "text-yellow-500"
        },

        {
            title: "We Offer Focused Care",
            description: "Every participant’s journey is unique. Our supports are tailored to individual goals, preferences, and circumstances, ensuring care reflects each participant’s needs. Through active involvement in planning and decision-making, we deliver flexible, person-centred services that promote independence, well-being, and quality of life under the NDIS.",
            color: "text-green-500"
        },

        {
            title: "We’re Experienced",
            description: "Our team brings extensive knowledge and empathy to every interaction, ensuring participants receive the highest quality care and support.",
            color: "text-purple-500"
        },
    ];



    return (
        <MarginContainer>
            <SubHeaderComponent headerValue='Why Choose Us' />

            <div className='w-full xl:min-h-[700px] lg:min-h-[800px] flex lg:flex-row flex-col justify-between items-start gap-12'>

                <motion.div

                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.8}
                    className='w-full xl:h-[700px] lg:h-[800px] h-[400px] flex overflow-hidden rounded-xl bg-gray-300 shadow-lg shadow-gray-400'>

                    <motion.img

                        variants={animateBlurIn}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        src="images/pictures/Others/30.webp"
                        alt="our story image"
                        className='w-full h-full flex object-cover'
                    />
                </motion.div>


                <div className='w-full h-full flex flex-col gap-y-2'>
                    {
                        whyChooseUsData.map((item, index) =>


                            <motion.div
                                key={`aboutUs${index}`}

                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.12 * index}
                                className='w-full h-full flex flex-col gap-y-1'>

                                <h3 className={`text-lg font-bold ${item.color}`}>
                                    {item.title}
                                </h3>

                                <p className='text-sm'>
                                    {item.description}
                                </p>
                            </motion.div>
                        )
                    }

                    <Link href={"/about"} className="md:big-button small-button text-white font-bold">
                        {"Learn More"}
                    </Link>

                </div>


            </div>


        </MarginContainer>
    )
}
