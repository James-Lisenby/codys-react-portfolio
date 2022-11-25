import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#005] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b3da60b4-00a5-4ed4-b7d6-beee526a7c06" className='flex flex-col max-w-[600px] w-full'>
            <div className='p-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-300 text-gray-500'>Contact</p>
                <p className='text-gray-500 py-4'>Submit the form below or email me at james123lisenby@hotmail.com</p>
            </div>
            <input className='bg-green-300 p-2' type="text" placeholder='Name' name='name'/>
            <input className='bg-green-300 my-4 p-2' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-green-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-300 hover:border-green-300 px-4 py-3 my-8 mx-auto flex items-center'>Lets do work!</button>
        </form>

    </div>
  )
}