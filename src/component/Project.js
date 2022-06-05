import React from 'react'

const Project = () => {
    const projects = [
        {
          title: "Weather App",
          subtitle: "React",
          description:
            "A real time weather application to show user the information of their desired location; it'll show the user weather information such as temperature, latitude and longitude.",
          image: "./project-1.gif",
          link: "https://miniweather-app.netlify.app",
        },
        {
          title: "Mini Cryptocurrency App",
          subtitle: "React",
          description:
            "A cryptocurrency application that show information about any cryptocurrency; it shows data such as market cap, price and symbol, it'll fetch the crypto inofrmation from an endpoint API.",
          image: "./project-2.gif",
          link: "https://mini-crypto-app.netlify.app",
        },
        {
          title: "Media Website",
          subtitle: "Html Css and Javascript",
          description:
            "A well curated media website that was built using html, css and javascript. it's a four page website that entails different section. The pages include home, work, about and contact.  ",
          image: "./project-3.gif",
          link: "https://wonderfall.netlify.app",
        },
        {
          title: "Landing Page",
          subtitle: "Bootstrap",
          description:
            "A user friendly landing page that was built with the technology of html and css library; bootstrap, the landing page is quite simple and has an good interface for easy user accesibility.",
          image: "./project-4.gif",
          link: "https://explorer-bt.netlify.app",
        },
      ];
  return (
    <div>
        <section id="projects" className="text-gray-400  body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My recent work demonstrate that my clients have faith in me to deliver the best results, and I've received positive feedback.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
            
            {/* list rendering */}
        {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
               {/* <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
        /> */}
                <div className="px-8 py-10 relative z-10 w-full  border-gray-800 bg-yellow-900 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default Project