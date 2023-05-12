import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';

export default function FeedForDoctor() {
    return (
        <div className='flex flex-col h-screen overflow-y-auto scrollbar-thumb-gray-500 scrollbar-track-gray-200 '>
            <div className='flex flex-col p-5 border mx-1 my-1 bg-gray-100 rounded-lg'>
                <div className='h-16 flex gap-5'>
                    <img src="/favicon.avif" alt="image" className='rounded-full h-10 w-10' />
                    <span className='mt-2 font-semibold '>Priyankar Pal</span>
                </div>
                <div className="border-t border-gray-500 border-solid mx-1 my-1">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor quas, debitis error eos quis nisi voluptatibus labore recusandae libero deleniti quam

                </div>
            </div>

            <div className='flex flex-col border mx-1 my-1 bg-gray-100 rounded-lg '>
                <LoadingButton loading variant="outlined">
                    Submit
                </LoadingButton>
            </div>

        </div>
    )
}
