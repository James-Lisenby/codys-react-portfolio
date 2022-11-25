import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#005]'>

    {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p>Hello! My name is </p>
        <h1>Cody Lisenby</h1>
        <h2>I am an aspiring full stack web developer!</h2>
        </div>

    </div>
  )
}

export default Home