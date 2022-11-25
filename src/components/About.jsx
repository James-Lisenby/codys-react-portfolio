import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#005] text-gray-500'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-300'>About</p>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full  sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <h1>Hi! Im cody, feel free to look around and check out some of my work. </h1>
                    </div>
                    <p>This is just filler text and once this page is complete, I will come back and change it to something more meaningful. </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About