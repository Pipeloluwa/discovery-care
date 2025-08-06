import MarginContainer from '@/app/Containers/MarginContainer'
import React from 'react'
import { BsPersonCheckFill } from 'react-icons/bs'
import { SubHeaderComponent } from '../shared-components/SubHeaderComponent'

export const OverviewComponent = () => {
    const subHeading= "At DiscoveryCare Group, we deliver personalized NDIS support services designed to empower individuals to live independently, reach their goals, and flourish within their communities. Our high-quality, person-centered approach ensures that support is tailored to your unique needs and aspirations, helping you achieve a fulfilling and autonomous life.";
    const overviewData = [
        {
            "title": "Home Care",
            "description": "We provide personalized care in the comfort of your home, ensuring safety and companionship for seniors.",
            "image": <BsPersonCheckFill />,
            "color": "text-yellow-500"
        },

        {
            "title": "Community Activities",
            "description": "We organize engaging community activities that promote social interaction and mental well-being for seniors.",
            "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "color": "text-purple-500"
        },

        {
            "title": "Health Monitoring",
            "description": "We offer regular health monitoring services to ensure the well-being of seniors, including medication management and health check-ups.",
            "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "color": "text-green-500"
        }
    ]


    return (
        <MarginContainer>

            <p className='mt-28 w-[70%] mx-auto flex text-center'>
                <span className='text-6xl'>{"\""}</span>{subHeading}<span className='text-6xl'>{"\""}</span>
            </p>

            <div className="w-full grid grid-cols-3 items-center justify-between gap-x-12">
                {
                    overviewData.map((overview, index) =>
                        <div key={`overviewData ${index}`} className='w-full flex flex-col justify-center items-center'>
                            <div className={` ${overview.color} flex justify-center items-center`}>
                                <BsPersonCheckFill className='size-[50px]' />

                                <h3 className='text-2xl font-bold text-center p-4'>
                                    {overview.title}
                                </h3>
                            </div>



                            <p className='text-sm text-center'>
                                {`${overview.description.substring(0, 120)}`} {overview.description.length > 120 && "..."}
                            </p>

                        </div>
                    )
                }
            </div>

        </MarginContainer>
    )
}
