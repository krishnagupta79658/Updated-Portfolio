import django from "../assets/image/skills/django.svg"
import react from "../assets/image/skills/react.svg"
import nodejs from "../assets/image/skills/nodejs.svg"
import monogo from "../assets/image/skills/mongodb.svg"
import github from "../assets/image/skills/github.svg"
import sqlite from "../assets/image/skills/sqlite.svg"
import vercel from "../assets/image/skills/vercel.svg"
const Skills=()=>{
    return(
        <div className="w-[98%] bg-white mx-auto mt-10 flex flex-col  p-4 rounded-lg" id="skills">
            <div className="w-full text-center">
                <p className="text-lg text-[#1F7B57] font-semibold flex items-center justify-center">  <span className="bg-[#1F7B57] h-1.5 w-1.5 rounded-full mr-2"></span>Projects</p>
                <h1 className="text-5xl font-semibold text-black "> My Skills</h1>
            </div>
            <div className="flex sm:flex-row flex-col-reverse justify-between items-center gap-4 mt-4 w-full ">
            <div className="sm:w-6/12 w-full h-fit py-4 ">
            <div className="flex sm:flex-wrap  justify-evenly border-2 border-gray-200 rounded-lg overflow-x-hidden">
                <div className="min-w-24 sm:w-34  h-full flex justify-center  py-2">
                    <img src={django} alt="django" className="w-16 h-16 "/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="css" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 rounded-lg">
                    <img src={react} alt="javascript" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 rounded-lg">
                    <img src={nodejs} alt="nodejs" className="w-18 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 rounded-lg">
                    <img src={monogo} alt="monogo" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 rounded-lg">
                    <img src={sqlite} alt="dbsqlite" className="w-16 h-16 "/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 rounded-lg">
                    <img src={github} alt="nodejs" className="w-16 h-16"/>
                </div>
                <div className="min-w-24 sm:w-34 h-full flex justify-center py-2 rounded-lg">
                    <img src={vercel} alt="vercel" className="w-16 h-full"/>
                </div>
                
            </div>
            </div>
            <div className="sm:w-5/12 h-fit p-2 flex flex-col">
                <ul  className="list-disc flex flex-col gap-5 ">
                <li className="text-[#59606E] text-lg"> <span className="text-black font-semibold"> Language:</span>
                 C, C++, Python, JavaScript, Python 
                 </li>
                 
                <li className="text-[#59606E] text-lg"> <span className="text-black font-semibold"> Front-End:</span>
                 HTML, CSS, CSS Tailwind, JavaScript, ReactJS 
                 </li>
                 <li className="text-[#59606E] text-lg"> <span className="text-black font-semibold"> Back-End:</span>
                 Django, Django Restframework, Python, JavaScript 
                 </li>
                 <li className="text-[#59606E] text-lg"> <span className="text-black font-semibold"> Databases:</span>
                 PostgresSql, MongoDB 
                 </li>
                 <li className="text-[#59606E] text-lg"> <span className="text-black font-semibold"> Others Tools:</span>
                 Git, GitHub, Vercel, Render, VsCode  
                 </li>
                 
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Skills