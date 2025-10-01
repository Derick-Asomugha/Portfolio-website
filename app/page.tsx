 "use client";
import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import FadeInSection from "@/components/fadeIn";
import { FaChevronDown } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TbBracketsAngle } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { Code2, Server, Wrench } from "lucide-react";


export default function Home() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    
    <main  className="bg-white dark:bg-black min-h-screen lg:pt-[75px] pt-[65px] w-full">
  <FadeInSection>  
<div
  className="
    w-full grid grid-cols-1 lg:grid-cols-2 place-items-center h-full text-black dark:text-white
    bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
    from-gray-300 via-gray-100 to-gray-200
    dark:from-purple-900 dark:via-gray-900 dark:to-black
  "
>
        {/* Text Section */}
        <div className="py-10 md:py-20 lg:py-32 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Derick</span> —
            <br />
            A Full-Stack
            <br />
            Developer
          </h1>

          <p className="text-lg leading-relaxed">
            I craft beautiful, performant web applications
            <br /> that solve real-world problems.
            <br /> Passionate about clean code and exceptional
            <br /> user experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-6">
            <button onClick={() => handleScroll("projects")} className="flex gap-2 px-6 py-2 rounded-lg font-semibold dark:text-white text-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
              View Projects <span className="pt-1.5"><FaChevronDown /></span>
            </button>
            <button onClick={() => handleScroll("contact")} className="flex gap-2 px-6 py-2 rounded-lg font-semibold text-black dark:text-white border-2 border-black dark:border-white">
              Contact Me <span className="pt-1.5 font-bold"><CiMail /></span>
            </button>
          </div>
        </div>

   {/* Image Section */}
      <div className="flex justify-center py-10 md:py-20">
        <div className="p-[4px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 ease-out hover:scale-105">
          <Image
            src="/Images/myImage2.jpg"
            alt="Profile image"
            width={350}
            height={400}
            className="rounded-3xlw-[200px] h-[350px] md:w-[350px] md:h-[400px] object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </div>
    </FadeInSection> 
    <FadeInSection>   
    <section id="about" className="gap-4 grid grid-cols-1 px-10 lg:grid-cols-2 pt-20 md:pt-40 pb-20 justify-center items-start w-full place-items-center dark:text-white">
         <div>
          <Image
            src="/Images/aboutMe.png"
            alt="Profile image"
            width={400}
            height={400}
            className="rounded-xl w-[400px] lg:w-auto h-[400px] object-cover"
            priority
          />
      </div>
      <div className="pt-20 md:pt-0  ml-6 mr-6 px-10">
        <h1 className="font-bold text-2xl ">About Me</h1>
        <br />
       
        <p className="font-light text-xs md:text-2xl mb-4">
          I&#39;m a passionate full-stack developer with 2+ years of experience 
           building scalable web applications. I love turning complex problems 
           into simple, beautiful solutions that users enjoy interacting with.
        </p>
        <br />
        
        <p className="font-light text-xs md:text-2xl mb-4">
          When I&#39;m not coding, you&#39;ll find me exploring new technologies,<br />
          contributing to open source projects, or sharing my knowledge <br />
          through technical writing and mentoring.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center pl ">
        <div className="justify-center w-auto flex gap-2 px-6 py-2 rounded-lg font-semibold text-black dark:text-white border-2 border-black dark:border-white">
            2+ yrs<span className="pt-1.5 font-bold"><TbBracketsAngle /></span>
        </div>
        <div className="justify-center flex gap-2 px-6 py-2 rounded-lg font-semibold text-black dark:text-white border-2 border-black dark:border-white">
            20+ Projects <span className="pt-1.5 font-bold"><CiGlobe /></span>
        </div>
        <div className=" justify-center flex gap-2 px-6 py-2 rounded-lg font-semibold text-black dark:text-white border-2 border-black dark:border-white">
            Full Stack<span className="pt-1.5 font-bold"><FaBarsProgress /></span>
        </div>
        </div>
        <div className="mt-5 place-items-center justify-center text-center">
          <a href="/resume">
           <button className="flex gap-3 md:w-auto w-full px-6 py-2 rounded-lg font-semibold hover:h-12 hover:w-56 text-black dark:text-white border-2 border-black dark:border-white">
          Download Resume <span className="pt-1.5 font-bold"><IoMdDownload /></span>
        </button>
        </a>
        </div>
      </div>
    </section>
    </FadeInSection>  
    <FadeInSection>  
    <section id="projects"  className="text-center items-center justify-center dark:text-white  py-20 xl:px-20 bg-[#e3e3e7] dark:bg-[#121213] pb-32">
      <h2 className="font-bold  text-2xl">Featured Projects</h2>
      <br />
      <p className="font-light text-xs md:text-2xl mb-4 ">Here are some of my recent projects that showcase my skills in full-stack
        <br /> development, UI/UX design, and problem-solving.
        </p>
        <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3  gap-6 place-items-center pt-10">
         
           <ProjectCard
             image="/Images/eccomerce.png"
             name="E-commerce Store"
             description="A scalable e-commerce platform with product management and checkout."
             tools={["Tailwind","Typescript","React","Next js", "Node.js", "MongoDB", "oAuth", "REST API"]}
             liveDemo="https://topaz-quiet-79355925.figma.site"
             github="https://github.com/Derick-Asomugha/Weather-app"
           />
           

  {/* Crypto Image Generator */}
  <ProjectCard
    image="/Images/imageGenerator.png"
    name="Crypto Image Generator"
    description="Generate unique AI-driven crypto-themed images and NFTs instantly."
    tools={["React", "Next.js", "OpenAI API", "Tailwind CSS", "REST API", "Node.js", "Typescript"]}
    liveDemo="https://crypto-image-demo.vercel.app"
    github="https://github.com/Derick-Asomugha/Image-Generator"
  />

  {/* Blog Website */}
  <ProjectCard
    image="/Images/blog.png"
    name="Blog Website"
    description="A modern blog platform with markdown support, SEO, and dark mode."
    tools={["EJS", "React", "Next.js", "TypeScript", "Tailwind CSS", "REST API", "Node.js"]}
    liveDemo="https://blog-demo.vercel.app...."
    github="https://github.com/Derick-Asomugha/Blog-website"
  />

  {/* Weather App */}
  <ProjectCard
    image="/Images/weather.png"
    name="Weather App"
    description="Real-time weather forecasts with location search and 7-day predictions."
    tools={["React", "Next.js", "OpenWeather API", "Tailwind CSS", "TypeScript", "REST API", "Node.js"]}
    liveDemo="https://weather-demo.vercel.app...."
    github="https://github.com/Derick-Asomugha/Weather-app"
  />

  {/* To-Do List */}
  <ProjectCard
    image="/Images/todo.jpeg"
    name="To-Do List"
    description="A productivity app for managing daily tasks with drag-and-drop sorting."
    tools={["React", "Next.js","Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "REST API"]}
    liveDemo="https://todo-demo.vercel.app....."
    github="https://github.com/Derick-Asomugha/To-Do-list"
  />

  {/* Newspaper Form */}
  <ProjectCard
    image="/Images/newsLetter.png"
    name="News-Letter Form"
    description="An online form that lets users submit and publish news articles."
    tools={["Next.js", "EJS", "MongoDB", "Tailwind CSS", "Node.js", "TypeScript", "oAUTH"]}
    liveDemo="https://newsform-demo.vercel.app....."
    github="https://github.com/Derick-Asomugha/Newsletter-Form"
  />
</div>
    </section>
    </FadeInSection>
    <FadeInSection>    
    <section id="skills" className="text-center items-center justify-center dark:text-white pt-20 bg-white dark:bg-black px-10 pb-32">
       <h2 className="font-bold text-sm md:text-4xl">Skills & Technologies</h2>
      <br />
      <p className="font-light text-xs md:text-2xl">I work with a variety of technologies to bring ideas to life, from frontend
        <br /> frameworks to backend systems and cloud infrastructure.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 md:w-[300]  px-10 ">
      
      {/* Frontend */}
      <div className="bg-[#fbfbfd] dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="text-purple-500 w-6 h-6" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Frontend</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {["HTML" ,"CSS" ,"React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "jQuery", "EJS"].map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="bg-[#fbfbfd] dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Server className="text-blue-500 w-6 h-6" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Backend</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Node.js", "Express", "MongoDB", "Mongoose", "SQLite", "REST APIs", "oAUTH"].map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & DevOps */}
      <div className="bg-[#fbfbfd] dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Wrench className="text-green-500 w-6 h-6" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Tools & DevOps</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Git", "GitHub", "Unix CL", "VS Code", "Version control", "Debugging", "Deployment"].map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
    </section>
    </FadeInSection> 

    <FadeInSection>  
    <Experience />
    </FadeInSection>  

   <FadeInSection>  
    <Contact />
   </FadeInSection>  
    
    </main>
    
  );
}
