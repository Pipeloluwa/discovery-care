import MarginContainer from '@/app/Containers/MarginContainer'
import React from 'react'

export const ServicesComponent = () => {
    const servicesData = {
        title: "Services We Offer",
        description: "Discover our range of professional services designed to support your needs and help you achieve",
        image: "https://images.unsplash.com/photo-1743456117605-e673068f0fa5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonText: "Explore Services",
        services: [
            {
                "title": "Service One",
                "description": "Comprehensive support and tailored solutions to meet your unique requirements.",
                "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "title": "Service Two",
                "description": "Expert guidance and support to help you navigate your challenges.",
                "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "title": "Service Three",
                "description": "Innovative solutions designed to enhance your productivity and efficiency.",
                "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                "title": "Service Four",
                "description": "Dedicated support to ensure your success and satisfaction.",
                "image": "https://images.unsplash.com/vector-1744361488644-e5ae730c0140?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    };

    return (
        <MarginContainer>
            <div className='min-h-svh flex flex-col items-center justify-center gap-y-12'>

                <div className='flex flex-col text-center'>
                    <h1 className="text-4xl font-bold mb-4 text-green-600">
                        {servicesData.title}
                    </h1>

                    <p>
                        {`${servicesData.description.substring(0, 200)}`} {`${servicesData.description.length > 200 && "..."}`}
                    </p>
                </div>


                <div className="w-full min-h-[530px] h-full flex justify-between items-center gap-x-12">

                    <div className="w-[60%] grid grid-cols-2 gap-6">
                        {
                            servicesData.services.map((service, index) => (
                                <div key={`service-${index}`} className='w-full h-[250px] flex flex-col justify-center items-center rounded-lg shadow-gray-300 shadow-lg p-6 border border-gray-200'>
                                    <div className='w-[80px] h-[80px] mb-4'>
                                        <img className='w-full h-full object-cover' src={service.image} alt={service.title} />
                                    </div>
                                    <h3 className='text-xl text-green-600 font-bold mb-2'>{service.title}</h3>
                                    <p className='text-sm text-center'>{`${service.description.substring(0, 100)}`} {service.description.length > 100 && "..."}</p>
                                </div>
                            ))
                        }

                    </div>


                    <div className="w-[40%] h-full flex justify-center overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={servicesData.image}
                            alt="Our Services"
                            className="w-full min-h-[530px] h-full flex object-cover"
                        />
                    </div>

                </div>

            </div >
        </MarginContainer >
    )
}
