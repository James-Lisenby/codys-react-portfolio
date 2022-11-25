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
        <div>
         <span>

         </span>
         <div>
            <a href="/">
                <button></button>
            </a>
            <a href="/">
                <button></button>
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