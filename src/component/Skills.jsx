import react from "../assets/image/skills/react.svg"
import nodejs from "../assets/image/skills/nodejs.svg"
import monogo from "../assets/image/skills/mongodb.svg"
import github from "../assets/image/skills/github.svg"
import sqlite from "../assets/image/skills/sqlite.svg"
import vercel from "../assets/image/skills/vercel.svg"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react";
import gsap from "gsap" 
import ScrollTrigger from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);
const Skills=()=>{
   useGSAP(() => {
    gsap.from("#titleSkills",{
        opacity:0,
        y:20,
        duration:0.5,
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
           trigger:'#titleSkills',
           start:"top 80%",
           toggleActions: "play none none reverse"
            
        }
        
    })
   
})

useEffect(() => {
  const skills = document.getElementById('skillsDia');
  const container = skills?.parentElement;

  const scrollWidth = skills.scrollWidth - container.clientWidth;

  gsap.to('#skillsDia', {
    x: -scrollWidth,
    yoyo: true,
    repeat: -1,
    duration: 8,
    ease: "none",
    scrollTrigger: {
      trigger: '#skillsDia',
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}, []);

    return(
        <div className="w-[98%] bg-white dark:bg-black mx-auto mt-10 flex flex-col  p-4 rounded-lg " id="skills">
            <div className="w-full text-center">
                <p className="text-lg text-[#1F7B57] font-semibold flex items-center justify-center">  <span className="bg-[#1F7B57] h-1.5 w-1.5 rounded-full mr-2"></span>Projects</p>
                <h1 className="text-5xl font-semibold text-black dark:text-[#DAE2F0] " id="titleSkills"> My Skills</h1>
            </div>
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-4 mt-4 w-full ">
            <div className="lg:w-5/12 w-11/12 mx-auto  h-fit py-4 border-2 border-gray-200 rounded-lg overflow-x-hidden dark:bg-black dark:border-2 dark:border-[#2D3236]">
           <div className="flex w-[max-content] mx-auto justify-start" id="skillsDia">
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 sm:mx-2 ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="css" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 sm:mx-2 rounded-lg">
                    <img src={react} alt="javascript" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 sm:mx-2 rounded-lg">
                    <img src={nodejs} alt="nodejs" className="w-18 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 sm:mx-2  rounded-lg">
                    <img src={monogo} alt="monogo" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 sm:mx-2 rounded-lg">
                    <img src={sqlite} alt="dbsqlite" className="w-16 h-16 "/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 sm:mx-2 rounded-lg">
                    <img src={github} alt="nodejs" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 sm:mx-2 rounded-lg">
                    <img src={vercel} alt="vercel" className="w-16 h-full"/>
                </div>
                
            </div>
            </div>
            <div className="lg:w-6/12 w h-fit p-2 flex flex-col">
                <ul  className="list-disc flex flex-col gap-5 ">
                <li className="text-[#59606E] text-lg"> <span className="text-black dark:text-[#DAE2F0] font-semibold"> Language:</span>
                 C, C++, Python, JavaScript
                 </li>
                 
                <li className="text-[#59606E] text-lg"> <span className="text-black dark:text-[#DAE2F0] font-semibold"> Front-End:</span>
                 HTML, CSS, CSS Tailwind, JavaScript, ReactJS 
                 </li>
                 <li className="text-[#59606E] text-lg"> <span className="text-black dark:text-[#DAE2F0] font-semibold"> Back-End:</span>
                  Python, JavaScript 
                 </li>
                 <li className="text-[#59606E] text-lg"> <span className="text-black dark:text-[#DAE2F0] font-semibold"> Databases:</span>
                 SQLite, MongoDB 
                 </li>
                 <li className="text-[#59606E] text-lg"> <span className="text-black dark:text-[#DAE2F0] font-semibold"> Others Tools:</span>
                 Git, GitHub, Vercel, Render, VsCode  
                 </li>
                 
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Skills