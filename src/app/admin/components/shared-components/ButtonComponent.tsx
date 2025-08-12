"use client"
import React from 'react'
import { useFormStatus } from 'react-dom';

export const ButtonComponent = () => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit" className={`${pending ? "animate-pulse cursor-not-allowed pointer-events-none" : "bg-blue-500"} w-full text-white p-3 rounded-md hover:bg-blue-600 transition duration-200`}>
            Login
        </button>
    )
}
