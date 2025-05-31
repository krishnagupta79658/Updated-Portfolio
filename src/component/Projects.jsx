import chatbot from "../assets/image/projects/chatbot.png"
import weather from "../assets/image/projects/weather.png"
import ATM_Banking from "../assets/image/projects/ATM_Banking.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Projects=()=>{
    

// Register plugin


useGSAP(() => {
  // Optional: Fix for mobile viewport resizing
  ScrollTrigger.addEventListener("refreshInit", () => window.scrollTo(0, 0));
  ScrollTrigger.refresh();

  const vh = window.innerHeight;
  const vw = window.innerWidth;

  ScrollTrigger.matchMedia({

    // Desktop (min-width: 768px)
    "(min-width: 768px)": () => {
      gsap.from('.projectImg1', {
        x: 1 * vw, // Replaces '90%'
        y: -0.7 * vh, // Replaces '-70%'
        opacity: 0,
        scrollTrigger: {
          trigger: '.projectImg1',
          start: "top 30%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          
          scrub: 1
        }
      });

      gsap.from('.projectImg2', {
        x: -900,
        y: -0.7 * vh, // Replaces '-200%'
        opacity: 0,
        scrollTrigger: {
          trigger: '.projectImg2',
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          
          scrub: 1
        }
      });

      gsap.from('.projectImg3', {
        x: 800,
        y: -0.5 * vh, // Replaces '-295%'
        opacity: 0,
        scrollTrigger: {
          trigger: '.projectImg3',
          start: "top 70%",
         end: "bottom 40%",
          toggleActions: "play none none reverse",
          scrub: 1
        }
      });
    },

    // Mobile (max-width: 767px)
    "(max-width: 767px)": () => {
      gsap.from('.projectImg1', {
        x: 100,
        y: -0.3 * vh, // Replaces '-30%'
        opacity: 0,
        scrollTrigger: {
          trigger: '.projectImg1',
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          
          scrub: 1
        }
      });

      gsap.from('.projectImg2', {
        x: -100,
        y: -0.4 * vh, // Replaces '-40%'
        opacity: 0,
        scrollTrigger: {
          trigger: '.projectImg2',
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          scrub: 1
        }
      });

      gsap.from('.projectImg3', {
        x: 100,
        y: -0.5 * vh, // Replaces '-50%'
        opacity: 0,
        scrollTrigger: {
          trigger: '.projectImg3',
          start: "top 0%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          scrub: 1
        }
      });
    }

  });
}, []);
    return(
        <div id="projects" className="w-[98%] dark:bg-black mx-auto mt-10 flex flex-col gap-1 sm:p-6 p-3 bg-white rounded-lg dark:border-2 dark:border-[#2D3236]">   
            <h3 className="text-xl text-[hsl(157,60%,30%)] flex  items-center justify-center w-fit"> <span className="bg-[hsl(157,60%,30%)] h-1.5 w-1.5 rounded-full mr-2"></span> Projects</h3>
            <h1 className="text-4xl font-semibold text-[#111928] dark:text-[#DEE7F6]"> My Recent Works</h1>
            
            {/* projects 1 */}
            <div className="lg:w-11/12 dark:bg-black bg-white mx-auto h-fit flex flex-col gap-4 justify-center items-center mt-10 z-30 ">
                <div className="w-full  flex flex-row justify-between lg:gap-4 rounded-lg border-2 border-[#737373] p-4">
                    <div className="w-4/12 hidden lg:block">
                    <img src={chatbot} className="rounded-lg h-full projectImg1 z-30 " alt="" />
                    </div>
                    <div className="lg:w-7/12 h-fit">
                    <h1 className="sm:text-3xl text-2xl text-[#1F7B57]">
                        Ai integrated into the Website Chatbot
                    </h1>
                    <p className="mt-2 md:w-5/6 text-[#59606E] text-lg text-justify lg:text-start"> 
                        A website chatbot that uses the Gemini API to answer user queries based on the content of a given website.
                        </p>

                    <p className="mt-5 text-[#F86465] text-lg"> Project Info</p>
                    <img src={chatbot} className="rounded-lg h-full lg:hidden  z-30 smProjectImg1 " alt="" />
                    <div className="mt-7 w-full">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E]  dark:text-[#DEE7F6]  text-lg">Project Name:</p>
                                <p className="text-[#59606E]  dark:text-[#DEE7F6] text-lg">Chatbot</p>
                            </div>

                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E]  dark:text-[#DEE7F6] text-lg">Completion Time:</p>
                                <p className="text-[#59606E]  dark:text-[#DEE7F6] text-lg">3 months</p>
                            </div>

                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E]  dark:text-[#DEE7F6] text-lg">Technologies:</p>
                                <p className="text-[#59606E]  dark:text-[#DEE7F6] text-lg flex-shrink">Django, Django Restframework, ReactJS and MongoDB</p>
                            </div>
                            <div className="flex mt-7 gap-2 ">
                                <a href="https://chatbot-alpha-mauve-80.vercel.app/" target="_blank" className="underline text-[#1F7B57] text-xl hover:text-[rgb(248,100,101)] mr-7 "> Live Demo</a>
                                <a href="https://github.com/Abhicoder983/CHATBOT" target="_blank" className="hover:text-[rgb(248,100,101)] text-xl underline text-black  dark:text-[#DEE7]">View on Github</a>
                            </div>

                        </div>
                    </div>

                    </div>
                </div>
            
            </div>


            {/* project 2 */}
            <div className="lg:w-11/12 dark:bg-black bg-white mx-auto h-fit flex flex-col gap-4 justify-center items-center mt-10 z-20 ">
                <div className="w-full  flex flex-row-reverse justify-between lg:gap-4 rounded-lg border-2 border-[#737373] p-4">
                    <div className="w-4/12 hidden lg:block">
                    <img src={weather} className="rounded-lg h-full projectImg2 z-20 " alt="" />
                    </div>
                    <div className="lg:w-7/12 h-fit">
                    <h1 className="md:text-3xl text-2xl text-[#1F7B57]">
                        Giving Currect Weather of the City
                    </h1>
                    <p className="mt-2 md:w-5/6 text-[#59606E] text-lg text-justify lg:text-start"> 
                    A weather web application that fetches real-time weather data using the OpenWeather API to display current conditions and forecasts based on user location.
                        </p>

                    <p className="mt-5 text-[#F86465] text-lg"> Project Info</p>
                    <img src={weather} className="rounded-lg h-full lg:hidden z-20 smProjectImg2 " alt="" />
                    <div className="mt-7 w-full">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6] ">Project Name:</p>
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6]">Weather Web Application</p>
                            </div>

                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6] ">Completion Time:</p>
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6]">3 days</p>
                            </div>

                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6] ">Technologies:</p>
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6]  flex-shrink">Django, ReactJS, openweather API</p>
                            </div>
                            <div className="flex mt-7 gap-2 ">
                                <a href="https://weather-app-one-neon-69.vercel.app/" target="_blank" className="underline text-[#1F7B57] text-xl hover:text-[rgb(248,100,101)] mr-7 "> Live Demo</a>
                                <a href="https://github.com/Abhicoder983/weather_app" target="_blank" className="hover:text-[rgb(248,100,101)] text-xl underline text-black  dark:text-[#DEE7]">View on Github</a>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            
            </div>


            {/* project 3 */}
            <div className="lg:w-11/12 dark:bg-black bg-white mx-auto h-fit flex flex-col gap-4 justify-center items-center mt-10 z-10 ">
                <div className="w-full  flex flex-row justify-between lg:gap-4 rounded-lg border-2 border-[#737373] p-4">
                    <div className="w-4/12 hidden lg:block">
                    <img src={ATM_Banking} className="rounded-lg h-full object-cover projectImg3 z-10 " alt="" />
                    </div>
                    <div className="lg:w-7/12 h-fit">
                    <h1 className="sm:text-3xl text-[#1F7B57] text-2xl">
                        Two Projects Railway and another Banking Management System
                    </h1>
                    <p className="mt-2 md:w-5/6 text-[#59606E] text-lg text-justify lg:text-start"> 
                       Railway and Banking Management System are two projects that include all the features and fuctionalities of a railway and banking system, respectively.
                       </p>

                    <p className="mt-5 text-[#F86465] text-lg"> Project Info</p>
                    <img src={ATM_Banking} className="rounded-lg h-full lg:hidden z-10 smProjectImg3 " alt="" />
                    <div className="mt-7 w-full">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6] ">Project Name:</p>
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6 dark:text-[#DEE7]]">Railway and Banking Management System</p>
                            </div>

                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6] ">Completion Time:</p>
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6] ">6 days </p>
                            </div>

                            <div className="flex flex-row gap-3 justify-between border-b-2 border-[#c3c4c5] pb-2">
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6] ">Technologies:</p>
                                <p className="text-[#59606E] text-lg dark:text-[#DEE7F6]  flex-shrink">Python, Mysql</p>
                            </div>

                            <div className="flex mt-7 gap-2 ">
                                
                                <a href="https://github.com/Abhicoder983/Project-Related-to-Python" target="_blank" className="hover:text-[rgb(248,100,101)] text-xl underline text-black  dark:text-[#DEE7]">View on Github</a>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            
            </div>
            


        </div>
    )
}

export default Projects