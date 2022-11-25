import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'



const Skills = () => {
  return (
    <div name='skills' className='bg-[#005] text-gray-500'>
        {/* Container */}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
    <p className='text-4xl inline border-b-4 border-green-300'>Experience</p>
    <p className='py-4'>I have some experience with the following technologies!</p>
</div>

<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
  <div>
    <img className='width-20 mx-auto' src={HTML} alt="HTML icon" />
    <p>HTML</p>
  </div>
</div>



</div>
    </div>
  )
}

export default Skills