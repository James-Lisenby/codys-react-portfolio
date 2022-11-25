import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-500 bg-[#005]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div classname='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-500 border-green-300'>Work</p>
                <p className='py-6'>Come take a look at some of my work!</p>
            </div>

<div style={{backgroundImage: `url(${WorkImg})`}}
className='grid sm:grid-col-2 md:grid-col-3 gap-4'>
    <div className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>

        {/* Hover effects */}
        <div className='opacity-0 group-hover:opacity-100'>
         <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
         </span>
         <div className='pt-8 text-center'>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-large'>Demo</button>
            </a>
            <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-large'>Code</button>
            </a>
         </div>
        </div>
    </div>
</div>

        </div>

    </div>
  )
}

export default Work