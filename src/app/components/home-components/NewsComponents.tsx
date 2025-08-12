"use client"
import React, { useState } from 'react'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'
import { motion } from 'motion/react'
import MarginContainer from '@/app/Containers/MarginContainer'
import { Dialog, DialogBody } from '@material-tailwind/react'
import { INewsData } from '@/app/interfaces/components/home/INewsComponent'
import { animateBlurIn, animateFadeUp, animateFadeUpShort, animateGradualSpacing } from '@/app/animation/animationVariants'

// Extracted news content as JSON
const newsData: INewsData[] = [
    {
        id: 1,
        title: "How to become healthy",
        date: "July 15, 2025",
        image: "https://plus.unsplash.com/premium_photo-1668061706855-26d4cf0f6248?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "If you're tossing and turning every night, there's some bad news. Your brain could be in big trouble! Turns out, there are some pretty scary side effects to sleep loss, all around. (By the way, getting too much sleep isn't great either.) Here are some of the most common side effects of sleep loss: Memory problems, mood swings, weakened immune system, and increased risk of chronic diseases. Make sure to prioritize your sleep for better health and well-being. Also, try to maintain a consistent sleep schedule, create a relaxing bedtime routine, and limit screen time before bed. These habits can help improve your sleep quality and overall health. Furthermore, consider consulting a healthcare professional if you continue to experience sleep issues. They can provide personalized advice and treatment options to help you get the restful sleep you need. Not only will this improve your health, but it can also enhance your productivity and quality of life. Remember, sleep is essential for your body and mind to function at their best. So, make it a priority and take steps to ensure you get enough restful sleep each night. If you're tossing and turning every night, there's some bad news. Your brain could be in big trouble! Turns out, there are some pretty scary side effects to sleep loss, all around. (By the way, getting too much sleep isn't great either.) Here are some of the most common side effects of sleep loss: Memory problems, mood swings, weakened immune system, and increased risk of chronic diseases. Make sure to prioritize your sleep for better health and well-being. Also, try to maintain a consistent sleep schedule, create a relaxing bedtime routine, and limit screen time before bed. These habits can help improve your sleep quality and overall health. Furthermore, consider consulting a healthcare professional if you continue to experience sleep issues. They can provide personalized advice and treatment options to help you get the restful sleep you need. Not only will this improve your health, but it can also enhance your productivity and quality of life. Remember, sleep is essential for your body and mind to function at their best. So, make it a priority and take steps to ensure you get enough restful sleep each night. If you're tossing and turning every night, there's some bad news. Your brain could be in big trouble! Turns out, there are some pretty scary side effects to sleep loss, all around. (By the way, getting too much sleep isn't great either.) Here are some of the most common side effects of sleep loss: Memory problems, mood swings, weakened immune system, and increased risk of chronic diseases. Make sure to prioritize your sleep for better health and well-being. Also, try to maintain a consistent sleep schedule, create a relaxing bedtime routine, and limit screen time before bed. These habits can help improve your sleep quality and overall health. Furthermore, consider consulting a healthcare professional if you continue to experience sleep issues. They can provide personalized advice and treatment options to help you get the restful sleep you need. Not only will this improve your health, but it can also enhance your productivity and quality of life. Remember, sleep is essential for your body and mind to function at their best. So, make it a priority and take steps to ensure you get enough restful sleep each night."
    },

    {
        id: 2,
        title: "Importance of mental health",
        date: "July 20, 2025",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Mental health is just as important as physical health, and it’s essential to take care of both. Here are some tips for maintaining good mental health: Practice self-care, stay connected with loved ones, and seek professional help if needed."
    },

    {
        id: 3,
        title: "Healthy eating habits",
        date: "July 25, 2025",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Eating a balanced diet is crucial for maintaining good health. Focus on incorporating a variety of fruits, vegetables, whole grains, and lean proteins into your meals. Avoid processed foods and sugary drinks as much as possible."
    },

    {
        id: 4,
        title: "Staying active and fit",
        date: "July 30, 2025",
        image: "https://images.unsplash.com/photo-1478061653917-455ba7f4a541?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Regular physical activity is essential for maintaining a healthy lifestyle. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week, along with strength training exercises."
    }
]

export const NewsComponents = () => {
    const [news, setNews] = useState<INewsData | null>(null);

    return (
        <MarginContainer>
            {
                <Dialog
                    open={news !== null}
                    size='lg'
                    handler={() => { setNews(null) }}
                    className='bg-white lg:w-[700px] w-[90%] lg:h-[600px] h-[500px] mx-auto self-center outline-0 shadow-xl shadow-gray-300 pt-[10px]'
                    onResize={() => { }} onResizeCapture={() => { }} placeholder={""} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                >

                    <DialogBody className='w-full h-full space-y-4 text-black text-sm  overflow-hidden overflow-y-auto' onResize={() => { }} onResizeCapture={() => { }} placeholder={""} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>

                        <div className="w-full h-[350px] flex bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden">
                            <img
                                src={news?.image ?? ""}
                                alt="News"
                                className="w-full h-full shadow-md object-cover object-center"
                            />
                        </div>

                        <h3 className='text-2xl font-bold text-blue-500'>
                            {news?.title ?? ""}
                        </h3>

                        <small className='text-yellow-600 text-sm font-bold'>
                            {news?.date ?? ""}
                        </small>

                        <p>
                            {`${news?.content ?? ""}`}
                        </p>

                        <div>

                        </div>
                    </DialogBody>

                </Dialog>
            }


            <div className='w-full h-full flex flex-col items-center justify-center gap-y-8'>
                <SubHeaderComponent headerValue='Latest News' />

                <div className='w-full lg:min-h-[500px] flex lg:flex-row flex-col justify-between items-start gap-x-8 lg:gap-y-0 gap-y-16'>
                    <div className='w-full h-full flex flex-col gap-y-4'>

                        <motion.div
                            variants={animateBlurIn}
                            initial={"offscreen"}
                            whileInView={"onscreen"}

                            className="w-full h-[250px] flex bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden">

                            <motion.img
                                src={newsData[0]?.image ?? ""}
                                alt="About Us"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-full shadow-md object-cover object-top"
                            />
                        </motion.div>

                        <motion.h3
                            variants={animateFadeUpShort}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2}
                            className='text-2xl font-bold text-blue-500'>

                            {newsData[0]?.title ?? ""}
                        </motion.h3>

                        <motion.small
                            variants={animateFadeUpShort}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2}
                            className='text-yellow-600 text-sm font-bold'>

                            {newsData[0]?.date ?? ""}
                        </motion.small>

                        <motion.p
                            variants={animateFadeUpShort}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2}
                        >

                            {`${newsData[0]?.content.substring(0, 210) ?? ""}`} {`${news != null ? (news.content.length > 210 && "...") : ""}`}
                        </motion.p>

                        <motion.div
                            variants={animateFadeUpShort}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.2}
                        >

                            <button
                                onClick={() => { setNews(newsData[0]) }}
                                className="big-button text-white font-bold">
                                {"Read More"}
                            </button>
                        </motion.div>
                    </div>


                    <div className='w-full min-h-[500px] flex flex-col gap-y-4 justify-between items-center'>
                        {newsData != null &&
                            newsData!.filter(item => item.id != newsData[0].id).map((item, index) => (
                                <div
                                    onClick={() => { setNews(item) }}
                                    key={item.id}
                                    className={`${index != 0 && " border-t border-gray-300 pt-2"} w-full lg:h-[150px] md:h-[200px] h-[200px] flex justify-center items-start gap-x-6 cursor-pointer`}
                                >

                                    <motion.div
                                        variants={animateBlurIn}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}

                                        className="w-[35%] h-full flex bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full shadow-md object-cover object-center"
                                        />
                                    </motion.div>

                                    <div className='w-[65%] h-auto flex flex-col gap-y-2'>
                                        <h3 className='flex whitespace-pre-wrap text-lg font-bold text-blue-500'>
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

                                        <motion.small
                                            variants={animateFadeUp}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            custom={0.2}
                                            className='text-yellow-600 text-sm font-bold'>

                                            {item.date}
                                        </motion.small>

                                        <motion.p
                                            variants={animateFadeUp}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            custom={0.2}
                                        >

                                            {`${item.content.substring(0, 110)}`} {`${item.content.length > 110 ? "..." : ""}`}
                                        </motion.p>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>

            </div>
        </MarginContainer>
    )
}
