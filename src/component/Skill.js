import React from 'react'

const Skill = () => {
    const skills=['Javascript', 'Css', 'Html', 'Bootstrap', 'Tailwind','React','Wordpress','Skeleton', 'Git', 'Elementor']
  return (
    <div>
        <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
        
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            My works are highly rated due to the matchless services and support and solution I provide to my esteemed client and this I achieve using latest web application and various skill set and tools.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800  rounded flex p-4 h-full items-center ">
                
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
               
              </div>
            </div>
          ))}
        </div>
        
        </div>
    </section>

    </div>
  )
}

export default Skill