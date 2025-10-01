// "use client";
// import { useEffect, useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { MdCancel } from "react-icons/md";
// import { MdOutlineLightMode } from "react-icons/md";
// import { MdOutlineDarkMode } from "react-icons/md";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   const toggleMenu = () => setIsOpen((prev) => !prev);
//   const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDarkMode]);

//   return (
//     <nav className="bg-white text-black justify-between px-8 py-4 dark:bg-black dark:text-white border-b border-gray-300 dark:border-gray-700 fixed w-full top-0 left-0 z-30">
//       <div className="max-w-[1200px] mx-auto flex items-center justify-between ">
//         <a
//           href="#"
//           className="lg:text-2xl text-xl font-bold z-20 
//                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
//                      bg-clip-text text-transparent"
//         >
//           DERICK
//      </a>


//         {/* Mobile Menu Icon */}
//         <div className="cursor-pointer md:hidden z-20">
//           {!isOpen ? (
//             <IoMdMenu size={30} onClick={toggleMenu} />
//           ) : (
//             <MdCancel size={30} onClick={toggleMenu} />
//           )}
//         </div>

//         {/* Mobile Nav */}
//         {isOpen ? (
//           <div
//             className="flex flex-col absolute top-16 w-screen min-h-screen left-0 z-10 duration-300 overflow-hidden 
//                        ease-in bg-white text-black items-center gap-10 font-semibold text-xl py-10 md:hidden
//                         dark:bg-black dark:text-white"
//           >
//             <a href="about">About</a>
//             <a href="projects">Projects</a>
//             <a href="skills">Skills</a>
//             <a href="contact">Contact</a>

//             <button
//               className="gradient-button"
//             >
//               Hire Me
//             </button>

//             {/* Dark Mode Toggle */}
//             <button onClick={toggleDarkMode} className="p-2 rounded-md">
//               {isDarkMode ? (
//                 <MdOutlineLightMode size={35} />
//               ) : (
//                 <MdOutlineDarkMode size={35} />
//               )}
//             </button>
//           </div>
//         ) : (
//           <div
//             className="flex flex-col absolute top-16 w-screen min-h-screen left-[-750px] z-10 duration-300
//                        ease-in bg-gray-200 text-black items-center gap-10 font-semibold text-xl py-4 md:hidden"
//           />
//         )}

//         {/* Desktop Nav */}
//         <div className="md:flex hidden items-center gap-10 font-medium md:font-semibold lg:text-xl text-base">
//           <a href="about">About</a>
//             <a href="projects">Projects</a>
//             <a href="skills">Skills</a>
//             <a href="contact">Contact</a>

          
//         </div>
//         <div className="md:flex hidden items-center gap-8">
//             <button
//             className="gradient-button"
//           >
//             Hire Me
//           </button>

//           <button onClick={toggleDarkMode} className="p-2 rounded-md">
//             {isDarkMode ? (
//               <MdOutlineLightMode size={25} />
//             ) : (
//               <MdOutlineDarkMode size={25} />
//             )}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Smooth scroll to section
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // highlight immediately on click
      setIsOpen(false);
    }
  };

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.5, // 50% of section must be visible
        rootMargin: "0px 0px -30% 0px", // triggers earlier for smoother highlight
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Dark mode load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const links = ["about", "projects", "skills", "contact"];

  return (
    <nav className="bg-white text-black justify-between px-8 py-4 dark:bg-black dark:text-white border-b border-gray-300 dark:border-gray-700 fixed w-full top-0 left-0 z-30">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between ">
        {/* Logo */}
        <a
          href="#"
          className="lg:text-2xl text-xl font-bold z-20 
                     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          DERICK
        </a>

        {/* Mobile Menu Icon */}
        <div className="cursor-pointer md:hidden z-20">
          {!isOpen ? (
            <IoMdMenu size={30} onClick={toggleMenu} />
          ) : (
            <MdCancel size={30} onClick={toggleMenu} />
          )}
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div
            className="flex flex-col absolute top-16 w-screen min-h-screen left-0 z-10 duration-300 overflow-hidden 
                       ease-in bg-white text-black items-center gap-10 font-semibold text-xl py-10 md:hidden
                        dark:bg-black dark:text-white"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className={`relative pb-1 transition-colors ${
                  activeSection === link
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    : "hover:text-blue-500"
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {/* underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                              transition-all duration-500 ${
                                activeSection === link ? "w-full" : "w-0"
                              }`}
                />
              </button>
            ))}

            <button onClick={() => handleScroll("contact")} className="gradient-button">Hire Me</button>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="p-2 rounded-md">
              {isDarkMode ? (
                <MdOutlineLightMode size={35} />
              ) : (
                <MdOutlineDarkMode size={35} />
              )}
            </button>
          </div>
        )}

        {/* Desktop Nav */}
        <div className="md:flex hidden items-center gap-10 font-medium md:font-semibold lg:text-xl text-base">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`relative pb-1 transition-colors ${
                activeSection === link
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : "hover:text-blue-500"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              {/* underline */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                            transition-all duration-500 ${
                              activeSection === link ? "w-full" : "w-0"
                            }`}
              />
            </button>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="md:flex hidden items-center gap-8">
          <button onClick={() => handleScroll("contact")} className="gradient-button">Hire Me</button>
          <button onClick={toggleDarkMode} className="p-2 rounded-md">
            {isDarkMode ? (
              <MdOutlineLightMode size={25} />
            ) : (
              <MdOutlineDarkMode size={25} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
