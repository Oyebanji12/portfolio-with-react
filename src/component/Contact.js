import React from 'react'
import { useState } from 'react';

const Contact = () => {
    const [nm, setNm]= useState('');
  const [em, setEm]= useState('');
  const[msg, setMsg]= useState('')
  function handleName(e){
    console.log(e.target.value)
    setNm(e.target.value);
  }
  function handleEmail(e){
    console.log(e.target.value)
    setEm(e.target.value)
  }
  function handleMessage(e){
    console.log(e.target.value)
    setMsg(e.target.value)
  }
  function handleSubmit(event){
    console.log(`${nm} ${em} ${msg}`)
    
    
  }
  return (
    <div>
         <section id="contacts">
        
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font text-center"  >
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-center">
            Get in touch
          </p>

          <form action='https://getform.io/f/c7e20834-9cc8-4818-a1b7-9d0cfc35072d' method='POST' onSubmit={handleSubmit}
    
    className=" container mx-auto  lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input 
              type="text" name='name'
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleName} />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input 
              type="text" name='email'
              
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleEmail} />
          </div>
          <div className="relative mb-4">
            <label
            
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea type='text' name='message'
              
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-dark-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleMessage} />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
</section>

    </div>
  )
}

export default Contact