import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#005]'>

    {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p className='text-gray-500'>Hello! My name is </p>
        <h1 className='text-gray-500 text-4xl'>Cody Lisenby</h1>
        <h2 className='text-gray-500 text-4xl'>I am an aspiring full stack web developer!</h2>
        <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-green-300 hover:border-color-green-300'>
                View Work <HiArrowNarrowRight />
            </button>
        </div>
        </div>

    </div>
  )
}

export default Home