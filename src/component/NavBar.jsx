import React from "react";
import leetCode from "../assets/image/nav/leetCode.png";
import gfg from "../assets/image/nav/gfg.svg";
import github from "../assets/image/nav/github.png";
function NavBar() {
  return (
    <div className=" w-[98%] left-0.5 sm:left-4 bg-[#E5E7EB] dark:bg-[#121212] h-16 fixed top-0 z-50 flex items-center justify-center">
    <nav className="flex items-center flex-col gap-2 sm:gap-1 sm:flex-row 
    sm:justify-between  mt-6 bg-black text-white px-2 py-3 
     rounded-lg w-full mx-auto ">   
      {/* Logo or Brand */}
      <div className="sm:w-5/12 font-semibold text-xl font-['acumin-pro, 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif']">
        <span className="text-[#90EEBF] font-bold">{"<>"}</span> ABHISHEK KUMAR
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row justify-between w-full sm:w-7/12 ">
      <div className="flex items-center sm:gap-6 gap-3.5 text-lg ">
        <a href="#home" className="hover:text-[#90EEBF] hover:scale-110  transition-all duration-150">Home</a>
        <a href="https://drive.google.com/file/d/1pfShQ5tel4HmNN1Je9pxdMBJ3Z6D9fxi/view?usp=sharing" target="_blank" className="hover:text-[#90EEBF] hover:scale-110 transition-all duration-150">Resume</a>
        <a href="#contact" className="hover:text-[#90EEBF] hover:scale-110 transition-all duration-150">Contact</a>
      </div>

     
      <div className="flex items-center gap-3.5 sm:gap-6 ">

        <a href="https://leetcode.com/u/abhishek_coder983/" target="_blank"><img src={leetCode} className="w-8 h-8" alt="leetcode" /></a>
        <a href="https://www.geeksforgeeks.org/user/ruhelab5q54/" target="_blank"><img src={gfg} className="w-8 h-8" alt="gfg" /></a>
        <a href="https://github.com/Abhicoder983" target="_blank"><img src={github} className="w-8 h-8" alt="github" /></a>
      </div>
      </div>
    </nav>
    </div>
  );
}
export default NavBar;