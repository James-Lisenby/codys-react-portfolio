import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#005] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Imagenp" style={{width: '50px'}}/>
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
        <div className='md:hidden z-10'>
            <FaBars />
        </div>

        {/* Mobile Menu*/}
        <div className='hidden'>
        <ul className='absolute top-0 left-0 w-full h-screen bg-[] flex-col justify-center items-center classn'>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>

        {/* Social Icons */}
        <div className='hidden'></div>


    </div>
  )
}

export default Navbar