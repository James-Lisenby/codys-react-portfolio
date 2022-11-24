import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {

const [nav, setNav] = useState(false)
const handlClick = () => setNav(!nav) 

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#005] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
        </div>



        {/* Menu */}
  
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        

        {/* Hamburger */}
        {/* The styling below makes it so the hamburger is only visible when the screen is 760px or less. */}
        <div onClick={handlClick} className='md:hidden z-10'>
            <FaBars />
        </div>

        {/* Mobile Menu*/}
        {/* The styling below is for the menu that appears on mobile devices. */}
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#005] flex flex-col justify-center items-center' } >
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
    

        {/* Social Icons */}
        <div className='hidden'></div>


    </div>
  )
}

export default Navbar