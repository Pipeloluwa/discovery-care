"use client"
import React, { useState } from 'react'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'
import { motion } from 'motion/react'
import MarginContainer from '@/app/Containers/MarginContainer'

// Extracted news content as JSON
const newsData = [
    {
        id: 1,
        title: "How to become healthy",
        date: "July 15, 2025",
        image: "https://plus.unsplash.com/premium_photo-1668061706855-26d4cf0f6248?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "If you're tossing and turning every night, there's some bad news. Your brain could be in big trouble! Turns out, there are some pretty scary side effects to sleep loss, all around. (By the way, getting too much sleep"
    },

    {
        id: 2,
        title: "The importance of mental health",
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
    const [news, setNews] = useState(newsData[0]);

    return (
        <MarginContainer>
            <div className='w-full h-full flex flex-col items-center justify-center gap-y-8'>
                <SubHeaderComponent headerValue='Latest News' />

                <div className='w-full min-h-[500px] flex justify-between items-start gap-x-8'>
                    <div className='w-full h-full flex flex-col gap-y-4'>

                        <div className="w-full h-[250px] flex bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden">
                            <motion.img
                                src={news.image}
                                alt="About Us"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-full shadow-md object-cover object-top"
                            />
                        </div>

                        <h3 className='text-2xl font-bold text-blue-500'>
                            {news.title}
                        </h3>

                        <small className='text-yellow-600 text-sm font-bold'>
                            {news.date}
                        </small>

                        <p>
                            {`${news.content.substring(0, 210)}`} {`${news.content.length > 210 && "..."}`}
                        </p>

                        <div>
                            <button className="big-button text-white font-bold">
                                {"Read More"}
                            </button>
                        </div>
                    </div>


                    <div className='w-full h-full flex flex-col gap-y-4 justify-between items-center'>
                        {newsData.filter(item => item.id != news.id).map((item, index) => (
                            <div key={item.id} className={`${(newsData.length - 1) != (index + 1) && " border-b border-gray-300 pb-2"} w-full h-[150px] flex justify-center items-start gap-x-6`}>
                                <div className="w-[35%] h-full flex bg-gradient-to-b from-blue-500 to-blue-900 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full shadow-md object-cover object-top"
                                    />
                                </div>

                                <div className='w-[65%] h-auto flex flex-col gap-y-2'>
                                    <h3 className='text-lg font-bold text-blue-500'>
                                        {item.title}
                                    </h3>

                                    <small className='text-yellow-600 text-sm font-bold'>
                                        {item.date}
                                    </small>

                                    <p>
                                        {`${item.content.substring(0, 110)}`} {`${item.content.length > 110 ? "..." : ""}`}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </MarginContainer>
    )
}
