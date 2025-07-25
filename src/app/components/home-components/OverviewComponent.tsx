import MarginContainer from '@/app/Containers/MarginContainer'
import React from 'react'

export const OverviewComponent = () => {
    const overviewData = [
        {
            "title": "Home Care",
            "description": "We provide personalized care in the comfort of your home, ensuring safety and companionship for seniors.",
            "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            "title": "Community Activities",
            "description": "We organize engaging community activities that promote social interaction and mental well-being for seniors.",
            "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            "title": "Health Monitoring",
            "description": "We offer regular health monitoring services to ensure the well-being of seniors, including medication management and health check-ups.",
            "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]


    return (
        <MarginContainer>
            <div className='min-h-svh flex flex-col items-center justify-center gap-y-12'>
                <h1 className="text-4xl font-bold mb-4 text-green-600">
                    {"We offer you the best support"}
                </h1>

                <div className="w-full grid grid-cols-3 items-center justify-between gap-x-12">
                    {
                        overviewData.map((overview, index) =>
                            <div key={`overviewData ${index}`} className='w-full h-[350px] flex flex-col justify-center items-center rounded-xl shadow-2xl shadow-gray-400 p-8 border border-gray-100'>
                                <div className='w-[100px]'>
                                    <img className='w-full h-full flex object-cover' src={overview.image} alt="icon" />
                                </div>

                                <h3 className='text-2xl font-bold text-center p-4'>
                                    {overview.title}
                                </h3>

                                <p className='text-sm text-center'>
                                    {`${overview.description.substring(0, 120)}`} {overview.description.length > 120 && "..."}
                                </p>

                            </div>
                        )
                    }
                </div>

            </div>
        </MarginContainer>
    )
}
