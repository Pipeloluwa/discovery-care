import MarginContainer from '@/app/Containers/MarginContainer'
import React from 'react'

const newsData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'June 10, 2024',
        title: 'News Title',
        description: 'Brief description of the news item...',
    },

    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'June 11, 2024',
        title: 'Another News Title',
        description: 'Another brief description of the news item...',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'June 12, 2024',
        title: 'More News Title',
        description: 'Yet another brief description of the news item...',
    }
]

export const LatestsNews = () => {
    return (
        <MarginContainer>
            <div className='min-h-svh flex flex-col items-center justify-center gap-y-12'>
                <h1 className="text-4xl font-bold mb-4 text-green-600">
                    {"Latest News"}
                </h1>

                <div className="w-full grid grid-cols-3 items-center justify-between gap-x-12">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            className='w-full min-h-[500px] flex flex-col justify-center items-center bg-gray-50 rounded-xl shadow-2xl shadow-gray-400 p-8 border border-gray-300'
                        >
                            <div className="w-full h-full mb-4">
                                <img
                                    src={news.image}
                                    alt="News"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col flex-1 gap-y-2 justify-between items-center">
                                <span className="text-xs text-gray-500">{news.date}</span>
                                <h3 className='text-2xl font-bold text-center p-4'>{news.title}</h3>
                                <p className='text-sm text-center'>{news.description}</p>
                                <button className="small-button mt-2 bg-green-600 text-white hover:bg-green-700 transition">
                                    Read More
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </MarginContainer>
    )
}
