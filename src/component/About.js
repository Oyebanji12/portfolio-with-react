import React from 'react'
import {FaLinkedin, FaTwitterSquare, FaGithub} from "react-icons/fa"
import {SiHashnode} from "react-icons/si"


const About = () => {
  return (
    <div>
                <section id="about">
        <div className="container mx-auto  px-10 py-20 flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Hi, I'm Biodun.
              <br className="hidden lg:inline-block" />I love to Build Amazing
              Interface.
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm a front end developer & technical writer; I build beautiful user appearance and functional website and ensure great user experience. 
              I can translate company and customer need into functional and appealing interactive application.  <p> I also posses experience has a technical writer; I write technical documentation to assist, direct and explain concept has a developer.
              </p>
            </p>
            <div className="flex justify-center">
              <a
                href="#contacts"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-white-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-green rounded text-lg text-white">
                See My Past Work
              </a>
              
            </div>
            <div className='pt-5 grid grid-cols-4 gap-4 text-3xl'>
           <a href="https://www.linkedin.com/in/oyebanji-biodun-0018b8236"> <FaLinkedin /> </a>
             <a href="https://twitter.com/dawg_4life"><FaTwitterSquare /></a>
            <a href="https://github.com/Oyebanji12"> <FaGithub /></a>
           <a href="https://hashnode.com/@oyebanji12"> <SiHashnode /></a>
            </div>
          </div>
          
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="images/1648289222750.jpg"
              className="object-cover object-center rounded-lg"
              alt="hero"
              
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About