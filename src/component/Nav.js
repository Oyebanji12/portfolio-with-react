import React from 'react'

const Nav = () => {
  return (
    <div>
        <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0"> 
          <a href="#about"  className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0">
            Dev-Biodun
          </a>
      </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
          <a href="#projects"   className="mr-5 font-bold text-white hover:text-green-500">
            Past Work
          </a>
          <a href="#skills"  className="mr-5 font-bold text-white hover:text-green-500">
            Skills
          </a>
         {/* <a href="#testimonials"  className="mr-5 hover:text-white">
            Testimonials
    </a> */}
        </nav>

        <a
          href="#contacts"
          className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-white text-lg mt-4 md:mt-0">
          Hire Me
          
        </a>
      </div>
    </header>
    </div>
  )
}

export default Nav