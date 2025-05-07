import myPhoto from '../assets/image/home/myPhoto.jpg';
import calendar from '../assets/image/home/calendar.png';
import project from '../assets/image/home/project.png';
import certificate from '../assets/image/home/certificate.png';
import skills from '../assets/image/home/skills.png';
import twitter from '../assets/image/home/twitter.png';
import linkedin from '../assets/image/home/linkedin.png';
import reddit from '../assets/image/home/reddit.png';
import instagram from '../assets/image/home/instagram.png';
function Home(){
    return(
        <div id="home">
        <div className="flex w-[98%] dark:bg-black bg-white min-h-[25rem] mx-auto gap-6 mt-24 sm:p-6 p-3 flex-col-reverse lg:flex-row justify-center items-center  inset-0 rounded-lg relative">

            <div className="lg:w-4/12 w-4/6 h-64 sm:h-80 lg:h-96  mx-4 flex flex-col justify-center  "> 
                <img src={myPhoto} className=" h-full w-full inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden"  alt="my photo"/>
                <div className="flex flex-row gap-7 justify-evenly mt-6">
                    <a href="https://x.com/Abhishe7716700"><img src={twitter} className="w-6 h-6 hover:scale-125 transition-all duration-150" alt="twitter" /></a>
                    <a href="https://www.linkedin.com/in/abhishek-kumar983/"><img src={linkedin} className="w-6 h-6 hover:scale-125 transition-all duration-150" alt="linkedin" /></a>
                    <a href="https://www.reddit.com/user/Potential_Bee_4426/"><img src={reddit} className="w-6 h-6 hover:scale-125 transition-all duration-150" alt="reddit" /></a>
                    <a href="https://www.instagram.com/yourabhishek_a1/"><img src={instagram} className="w-6 h-6 hover:scale-125 transition-all duration-150"  alt="instagram" /></a>
                
                </div>
            </div>
            <div className=" w-full sm:w-xl sm:mx-auto ">
                <div className='h-fit flex flex-col justify-center p-1 lg:pr-4 '>
                    <h3 className=' text-sm text-[#767D84] dark:text-[#FFFFFF] lg:text-lg'> <span className='text-[rgb(248,100,101)]'>{"<span>"}</span> Hey  I'm Abhishek Kumar <span className='text-[#F86465]'>{"</span>"}</span></h3>
                    <p className='text-xl text-[#111928] dark:text-white mt-5 lg:text-3xl '> Junior <span className='text-[#1F7B57]'>{'{Frontend Developer}'}</span> | ReactJS &</p>
                    <p className='text-xl text-[#111928]  lg:text-3xl dark:text-white '> <span className='text-[hsl(157,60%,30%)]'> {'{Backend Developer}'}</span> | Django </p>
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
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center '> 6+  </h3>
            <p className='text-lg text-[#5F6673]'> Hey, months Experience </p>
            </div>
            <div className='sm:w-2/12 md:3/12 h-fit my-6 '>
            <img src={project} className='w-8 h-8 mx-auto sm:mx-0' alt="" />
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center'> 3+  </h3>
            <p className='text-lg text-[#5F6673]'> Projects Completed </p>
            </div>
            <div className='sm:w-2/12 md:3/12 h-fit my-6 '>
            <img src={certificate} className='w-8 h-8 mx-auto sm:mx-0' alt="" />
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center'> 5+  </h3>
            <p className='text-lg text-[#5F6673] '> Certificates Achieved </p>
            </div>
            <div className='sm:w-2/12 md:3/12 h-fit my-6 '>
            <img src={skills} className='w-8 h-8 mx-auto sm:mx-0' alt="" /> 
            <h3 className='text-black dark:text-white text-4xl font-semibold py-2 sm:text-start text-center'>6+  </h3>
            <p className='text-lg text-[#5F6673] '> Technicals Skills </p>
            </div>
        </div>
        </div>
        
    )
}
export default Home;

