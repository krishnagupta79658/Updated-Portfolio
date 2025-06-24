import React, { useRef } from "react";
import leetCode from "../assets/image/nav/leetCode.png";
import gfg from "../assets/image/nav/gfg.svg";
import github from "../assets/image/nav/github.png";

import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
 
function NavBar() {
  const nav=useRef()
  
  
  useGSAP(() => {
    

  const tl = gsap.timeline({ delay:0.2 , defaults: { duration: 1 }});

  tl.fromTo('.nav', { y: -30, opacity: 0 }, { y: 0, opacity: 1 })
    .from('.link', { scale: 0, opacity: 0 })
    .from('.codeLink', { x: -10, opacity: 0 }, "<")
    .from('.name', { scale: 1, opacity: 0, x: 10 }, "<");

  

  });
  
  
  
 
  return (
    <div className=" w-[98%] left-0.5 sm:left-4 bg-[#E5E7EB] dark:bg-[#121212] h-fit fixed top-0 z-50 flex items-center justify-center " ref={nav}>
      <div className="hidden  dark:block bg-gradient-to-r from-[#31a169] to-[#000000] z-0 absolute bottom-0 left-0 h-full sm:h-16 rounded-lg w-full"></div>
      
    <nav className=" flex nav items-center flex-col gap-2 sm:gap-1 sm:flex-row 
    sm:justify-between bg-black text-white px-2 py-3 sm:mt-6 ml-0.5 mb-0.5 sm:m-0.5  rounded-lg w-full relative" > 

      {/* Logo or Brand */}
      <div className="m-1 sm:w-5/12 font-semibold text-xl z-10 name ">
        <span className="text-[#90EEBF] font-bold">{"<>"}</span> KRISHNA GUPTA
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row justify-between w-full sm:w-7/12 ">
      <div className="flex items-center sm:gap-6 gap-3.5 text-lg link ">
        <a href="#home" className="p-1 hover:text-[#90EEBF] border-2 border-transparent hover:border-[#90EEBF] hover:rounded-xl hover:scale-125 transition-all duration-150">Home</a>
        <a href="https://drive.google.com/file/d/1Bq_qRMItsaOdPoYp9zGdLRSOROyU9Eqr/view?usp=sharing" target="_blank" className="p-1 hover:scale-125 hover:text-[#90EEBF] border-2 border-transparent hover:border-[#90EEBF] hover:rounded-xl transition-all duration-150">Resume</a>
        <a href="#contact" className="p-1 hover:text-[#90EEBF] border-2 border-transparent hover:border-[#90EEBF] hover:rounded-xl hover:scale-125 transition-all duration-150">Contact</a>
      </div>

     
      <div className="flex items-center gap-3.5 sm:gap-6 codeLink  ">

        <a href="https://leetcode.com/u/winner_krishna/" target="_blank"><img src={leetCode} className="w-8 h-8 hover:scale-125 transition-all duration-150" alt="leetcode" /></a>
        <a href="https://www.geeksforgeeks.org/user/krishnaguprkx/" target="_blank"><img src={gfg} className="w-8 h-8 hover:scale-125 transition-all duration-150" alt="gfg" /></a>
        <a href="https://github.com/krishnagupta79658" target="_blank"><img src={github} className="w-8 h-8 hover:scale-125 transition-all duration-150" alt="github" /></a>
      </div>
      </div>
    </nav>
    </div>
  );
}
export default NavBar;