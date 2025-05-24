import { useGSAP } from "@gsap/react";
import gsap from "gsap"

function Work(){
  useGSAP(()=>{
    gsap.from("#education",{
      opacity:0,
      x:-8,
      duration:0.5,
      ease:"power2.in",
      scrollTrigger:{
        trigger:'#education',
        start:"top 50%",
        toggleActions: "play none none reverse",
      }
    })
     gsap.from("#certification",{
      opacity:0,
      x:-8,
      duration:0.5,
      ease:"power2.in",
      scrollTrigger:{
        trigger:'#certification',
        start:"top 50%",
        toggleActions: "play none none reverse",
      }
    })
  }) 
    return(
      <div className=" w-[98%] mx-auto flex lg:flex-row flex-col gap-6 mt-10 ">
      {/* Education Section */}
      <div className="bg-white dark:bg-black dark:border-2 dark:border-[#575757] lg:w-3/6 shadow-md   rounded-lg p-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 dark:text-[#F4F4F6]">
          <span className="text-green-600">📘</span><p id="education">Education</p> 
        </h2>
        <ul className="space-y-4 text-xl">
          <li  >
            <p className="text-gray-500">2022–2026: <span className="text-green-700 font-medium">Ajay Kumar Garg Eng. College || AKTU</span></p>
            <div className="flex flex-col items-end w-full">
            <p className="text-xl sm:w-2/4 w-3/4 dark:text-[#F4F4F6]">Bachelor’s Degree in Computer Science</p>
            </div>
          </li>
          <li>
            <p className="text-gray-500">2020–2021: <span className="text-green-700 font-medium">B.K Senior Secondary School|| CBSE</span></p>
            <div className="flex flex-col items-end w-full">
            <p className="text-xl sm:w-2/4 w-3/4 dark:text-[#F4F4F6]">Intermediate through Science Stream</p>
            </div>
          </li>
          <li>
            <p className="text-gray-500">2019–2020: <span className="text-green-700 font-medium">B.K Senior Secondary School|| CBSE</span></p>
            <div className="flex flex-col items-end w-full">
            <p className="text-xl sm:w-2/4 w-3/4 dark:text-[#F4F4F6]">High School </p>
            </div>
          </li>
          
        </ul>
      </div>
    
      {/* Certifications Section */}
      <div className="bg-white dark:bg-black dark:border-2 dark:border-[#575757] dark:text-white lg:w-3/6 shadow-md rounded-lg p-4 ">
        <h2 className="text-2xl  dark:text-whitefont-semibold flex items-center gap-2 mb-4">
          <span className="text-green-600">📜</span> <p id="certification">Certifications</p>
        </h2>
        <ul className="space-y-4 text-xl">
          <li className="flex sm:flex-row flex-col justify-between sm:items-center items-end mb-7 sm:mb-0 border-b-2 border-gray-300 pb-3 sm:border-none">
            <div className="h-fit w-fit">
            <p className="text-gray-500">18th Apr. 2025: <span className="text-green-700 font-medium">API in Django Rest Framework</span></p>
            <div className="w-full flex flex-col items-end dark:text-white">
            <p className="text-xl sm:w-3/4  ">Certified in Django Rest Framework for developing APIs and it designed by META Community on coursera plateform</p>
            </div>
            </div>
            <div className="text-xl text-[#F86465] pr-4">
              <a href="https://www.coursera.org/account/accomplishments/verify/NXM77OBLJDCN" target="_blank" className="underline hover:text-[hsl(157,60%,30%)]">View</a>
            </div>
          </li>
          <li className="flex sm:flex-row flex-col justify-between sm:items-center items-end mb-7 sm:mb-0 border-b-2 border-gray-300 pb-3 sm:border-none ">
            <div className="h-fit w-fit">
            <p className="text-gray-500">14th Dec. 2024: <span className="text-green-700 font-medium">Django Web Framework</span></p>
            <div className="w-full flex flex-col items-end dark:text-white">
            <p className="text-xl sm:w-3/4  ">Certified in Django Web Framework for developing web applications and it designed by META Community on coursera plateform</p>
            </div>
            </div>
            <div className="text-xl text-[#F86465] pr-4">
              <a href="https://www.coursera.org/account/accomplishments/verify/GQE0R954TE99" target="_blank" className="underline hover:text-[hsl(157,60%,30%)]">View</a>
            </div>
          </li>
          <li className="flex sm:flex-row flex-col justify-between sm:items-center items-end mb-7 sm:mb-0 border-b-2 border-gray-300 pb-3 sm:border-none ">
            <div className="h-fit w-fit">
            <p className="text-gray-500">23th Mar. 2022: <span className="text-green-700 font-medium">Python Developer</span></p>
            <div className="w-full flex flex-col items-end dark:text-white">
            <p className="text-xl sm:w-3/4  ">Internship certifcate in Python developer and Certified by Technohacks Commmunity</p>
            </div>
            </div>
            <div className="text-xl text-[#F86465] pr-4">
              <a href="https://drive.google.com/file/d/1i-5f6U6eIdN7tlWpHITDVgyIhlp8dKpe/view?usp=sharing" target="_blank" className="underline hover:text-[hsl(157,60%,30%)]">View</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    )
}
export default Work;