import myPhoto from '../assets/image/home/myPhoto.jpg';
import calendar from '../assets/image/home/calendar.png';
import project from '../assets/image/home/project.png';
import certificate from '../assets/image/home/certificate.png';
import skills from '../assets/image/home/skills.png';
import twitter from '../assets/image/home/twitter.png';
import linkedin from '../assets/image/home/linkedin.png';
import reddit from '../assets/image/home/reddit.png';
import instagram from '../assets/image/home/instagram.png';
import gsap from 'gsap';
import { useEffect, useRef} from 'react';
import { useGSAP } from '@gsap/react';


function Home(){
    const spanBack=useRef()
    const spanFront=useRef()
   
    useEffect(() => {
  async function func() {
    spanBack.current.innerHTML = "{";
    spanFront.current.innerHTML = "{";

    const front = "Frontend Developer}";
    const back = "Backend Developer}";
    const splitFront = front.split("");
    const splitBack = back.split("");

    for (const e of splitBack) {
        if(e==="}"){
            spanBack.current.innerHTML += `<span>${e}</span>`;
        }
        else{
      spanBack.current.innerHTML += `<span class="animaBack">${e}</span>`;
        }
    }

    for (const e of splitFront) {
      if(e==="}"){
            spanFront.current.innerHTML += `<span>${e}</span>`;
        }
        else{
      spanFront.current.innerHTML += `<span class="animaBack">${e}</span>`;
        }
    }

    // Run GSAP after elements are in the DOM
    const tl = gsap.timeline({ defaults: { duration: 0.1, delay: 0.5 } });

    tl.to(".twitter", {
      y: -8,
      opacity: 1,
      duration: 0.4,
      ease: "power1.out",
      yoyo: true,
      repeat: 1,
    })

    tl.to(".insta", {
      y: -8,
      opacity: 1,
      duration: 0.4,
      ease: "power1.out",
      yoyo: true,
      repeat: 1,
    })

    tl.to(".linked", {
      y: -8,
      opacity: 1,
      duration: 0.4,
      ease: "power1.out",
      yoyo: true,
      repeat: 1,
    })

    tl.to(".reddit", {
      y: -8,
      opacity: 1,
      duration: 0.4,
      ease: "power1.out",
      yoyo: true,
      repeat: 1,
    })

  const tl1 = gsap.timeline({
  repeat: -1,           
     yoyo:true,
    repeatDelay: 0.5,
     delay:0.5, 
})

  tl1.from(".animaBack", {
  x: -10,
  opacity:0,
  stagger: 0.05,         
})

tl1.from(".animaFront", {
  x: -10,
  opacity:0,
  stagger: 0.05,         
}, "+=0.2")




    

  }

  func();
}, []);
    useEffect(()=>{
      const taskToCount = (count) => {
        var start =0;
        const end=parseInt(document.querySelector(`.${count}`).textContent.replace("+",""));
        console.log("abhishek",end)
        const duration=1;
        const timeToEachIncreament= duration/end
        const intervalID=setInterval(() => {
          start++;
          document.querySelector(`.${count}`).textContent = start+'+';
          if(start===end){
            clearInterval(intervalID);
          }
        }, timeToEachIncreament*100);

      }
      
      Promise.all([taskToCount('count1'),
        taskToCount('count2'),
        taskToCount('count3'),
        taskToCount('count4')
      ]).then(() => {
        console.log("All tasks completed");
      })
      
    },[])

useGSAP(() => {
    gsap.from(".photo", {
    
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    delay: 0.5,
})
})


    return(


        <div id="home">
        <div className="flex w-[98%] dark:bg-black bg-white min-h-[25rem] mx-auto gap-6 mt-24 sm:p-6 p-3 flex-col-reverse lg:flex-row justify-center items-center  inset-0 rounded-lg relative">

            <div className="md:w-2/6   mx-4 my-2  "> 
            <div className='flex flex-col justify-center w-fit h-fit mx-auto'>
                <img src={myPhoto} className="photo mx-auto w-[200px] h-[200px] md:h-[250px] md:w-[250px] lg:w-[300px] lg:h-[300px] rounded-full"  alt="my photo"/>
                <div className="flex flex-row gap-7 justify-between mt-5 mx-8 " >
                                    <a href="https://x.com/Abhishe7716700" className='twitter'><img src={twitter} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-lg dark:p-1" alt="twitter" /></a>
                                    <a href="https://www.instagram.com/yourabhishek_a1/" className='insta'><img src={instagram} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-full"  alt="instagram" /></a>
                                    <a href="https://www.linkedin.com/in/abhishek-kumar983/" className='linked'><img src={linkedin} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-full" alt="linkedin" /></a>
                                    <a href="https://www.reddit.com/user/Potential_Bee_4426/" className='reddit'><img src={reddit} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-full" alt="reddit" /></a>
                                    </div>
                </div>
            </div>
            <div className=" w-full sm:w-xl sm:mx-auto ">
                <div className='h-fit flex flex-col justify-center p-1 lg:pr-4 '>
                    <h3 className=' text-sm text-[#767D84] dark:text-[#FFFFFF] lg:text-lg'> <span className='text-[rgb(248,100,101)]'>{"<span>"}</span> Hey  I'm Abhishek Kumar <span className='text-[#F86465]'>{"</span>"}</span></h3>
                    <p className='text-xl text-[#111928] dark:text-white mt-5 lg:text-3xl '> Junior <span className='text-[#1F7B57] ' ref={spanFront}></span> | ReactJS &</p>
                    <p className='text-xl text-[#111928]  lg:text-3xl dark:text-white '> <span className='text-[hsl(157,60%,30%)] ' ref={spanBack}> </span> | Django </p>
                    <p className='mt-5 text-sm lg:text-lg text-wrap text-[#6D737F] dark:text-[#727989] text-justify '> <span className='text-[#F86465] pl-1'>{"<p>"}</span>I’m a developer focused on <span className='text-[#F86465] pr-1'>Django , Django Restframework and ReactJS.</span>
                       I build full-stack web applications with clean APIs, responsive UIs, 
                    and efficient data management. <span className='text-[#F86465]'>{"</p>"}</span></p>
                    
                </div>

            </div>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent  to-[#90EEBF]"></div>
        </div>
        <div className='w-[98%] mt-4 mx-auto flex justify-evenly py-3 bg-white dark:bg-[#121212] sm:flex-row flex-col gap-10 rounded-lg shadow-md items-center sm:items-start'>
            <div className='sm:w-2/12 md:3/12 h-fit my-6  '>
            <img src={calendar} className='w-8 h-8 mx-auto sm:mx-0' alt="" /> 
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center count1'> 6+  </h3>
            <p className='text-lg text-[#5F6673]'> Hey, months Experience </p>
            </div>
            <div className='sm:w-2/12 md:3/12 h-fit my-6 '>
            <img src={project} className='w-8 h-8 mx-auto sm:mx-0' alt="" />
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center count2'> 3+  </h3>
            <p className='text-lg text-[#5F6673]'> Projects Completed </p>
            </div>
            <div className='sm:w-2/12 md:3/12 h-fit my-6 '>
            <img src={certificate} className='w-8 h-8 mx-auto sm:mx-0' alt="" />
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center count3'> 5+  </h3>
            <p className='text-lg text-[#5F6673] '> Certificates Achieved </p>
            </div>
            <div className='sm:w-2/12 md:3/12 h-fit my-6 '>
            <img src={skills} className='w-8 h-8 mx-auto sm:mx-0' alt="" /> 
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center count4'>6+  </h3>
            <p className='text-lg text-[#5F6673] '> Technicals Skills </p>
            </div>
        </div>
        </div>
        
    )
}
export default Home;

