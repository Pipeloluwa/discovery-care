import MarginContainer from '@/app/Containers/MarginContainer'
import React from 'react'

export const AboutComponent = () => {
    const aboutData = {
        "description": "We are dedicated to providing exceptional care and support for seniors, ensuring they live their golden years with dignity and joy. Our team of compassionate professionals is committed to enhancing the quality of life for our residents through personalized care plans, engaging activities, and a warm, welcoming environment. We believe in treating every individual with respect and kindness, making us a trusted partner in senior care.",
        "buttonText": "Learn More",
        "image": "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "statistics": [
            {
                "title": "Donations Every Year",
                "value": 45
            },
            {
                "title": "Happy Clients",
                "value": 100
            },
            {
                "title": "Years of Experience",
                "value": 20
            },
            {
                "title": "Caregivers",
                "value": 100
            }
        ]
    }

    return (
        <MarginContainer>
            <div className='min-h-svh flex flex-col items-center justify-center gap-y-12'>

                <div className=" min-h-[300px] flex flex-col md:flex-row items-center gap-x-16 ">

                    <div className="flex-1 flex justify-center bg-gray-300">
                        <img
                            src={aboutData.image}
                            alt="About Us"
                            className="w-full h-full rounded-lg shadow-md"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4 text-green-600">{"About Us"}</h1>
                        <p className="text-lg mb-6">
                            {`${aboutData.description.substring(0, 250)}`} {`${aboutData.description.length > 250 && "..." }`}
                        </p>
                        <button className="big-button px-6 py-2 bg-green-600 text-white hover:bg-green-700 transition">
                            {aboutData.buttonText}
                        </button>
                    </div>
                </div>



                <ul className='w-full py-6 min-h-[50px] flex flex-wrap items-center justify-between border-t-[1.8px] border-b-[1.8px] border-gray-300 gap-x-8'>
                    {
                        aboutData.statistics.map((stat, index) => (
                            <li key={`aboutStatistics${index}`} className='flex flex-col items-center justify-center gap-y-2'>
                                <span className='text-6xl font-bold text-green-600'>
                                    {stat.value}
                                </span>
                                {stat.title}
                            </li>
                        ))
                    }

                </ul>

            </div>
        </MarginContainer>
    )
}
