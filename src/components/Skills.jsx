import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#005] text-gray-500'>
        {/* Container */}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
    <p className='text-4xl inline border-b-4 border-green-300'>Skills</p>
    <p className='py-4'>I have some experience with the following technologies!</p>
</div>

<div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8'>
  <div className='shadow-md hover:scale-110 duration-500'>
    <img className='width-20 mx-auto' src={HTML} alt="HTML icon" />
    <p className='my-4'>HTML</p>
  </div>
  <div className='shadow-md hover:scale-110 duration-500'>
    <img className='width-20 mx-auto' src={CSS} alt="CSS icon" />
    <p className='my-4'>CSS</p>
  </div>
  <div className='shadow-md hover:scale-110 duration-500'>
    <img className='width-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
    <p className='my-4'>JavaScript</p>
  </div>
  <div className='shadow-md hover:scale-110 duration-500'>
    <img className='width-20 mx-auto' src={ReactImg} alt="React icon" />
    <p className='my-4'>React</p>
  </div>
  <div className='shadow-md hover:scale-110 duration-500'>
    <img className='width-20 mx-auto' src={Node} alt="Node icon" />
    <p className='my-4'>Node</p>
  </div>
  <div className='shadow-md hover:scale-110 duration-500'>
    <img className='width-20 mx-auto' src={GitHub} alt="GitHub icon" />
    <p className='my-4'>GitHub</p>
  </div>
</div>



</div>
    </div>
  )
}

export default Skills