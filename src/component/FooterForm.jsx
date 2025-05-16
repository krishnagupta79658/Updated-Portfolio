import instagram from "../assets/image/footerForm/instagram.png";
import twitter from "../assets/image/footerForm/twitter.png";
import linkedin from "../assets/image/footerForm/linkedin.png";
import reddit from "../assets/image/footerForm/reddit.png";
import{ useState} from "react";   
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const FooterForm = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        
        gsap.from(".contactField",{
            opacity:0,
            y:20,
            stagger:0.3,
            duration:.5,
            scrollTrigger:{
                trigger:'.contactField',
                start:"top 70%",
                toggleActions: "play none none reverse",
                once:true 
            
            }
        })
   

})


    
   
 


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const[submit,setSubmit]=useState('Send Message');
    let handleSubmit = async (e) => {

        e.preventDefault();
        if (name === "" || email === "" || message === "" || company === "" || designation === "") {
            toast.error("Please fill in all fields.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (message.length < 10) {
            toast.error("Message must be at least 10 characters long.");
            return;
        }
        // Handle form submission logic here
        const data={
            "name": name,
            "user_email": email
        }
        console.log(data)

        setSubmit('Sending...');
        emailjs.send("service_2r9mfgp","template_obkrxgq",data,"zv4yej4efIgH4bstZ")
        .then((result) => {
          console.log(result);
          
          toast.success('Message sent successfully!');
      }).catch((error) => {
          console.log(error);
        
          toast.error('Something went wrong. Please try again later.');
      });
    var yourEmailData={
        "name": name,
        "user_email": email,
        "company_name": company,
        "designation": designation,
    }
      emailjs.send("service_2r9mfgp","template_dqdke2o",yourEmailData,"zv4yej4efIgH4bstZ")
        setName("")
        setEmail("")
        setMessage("")
        setCompany("")
        setDesignation("")
        setSubmit('Send Message')
      
    }

    return (
        <div className=" dark:bg-[#161616] mx-auto p-3 flex flex-col-reverse md:flex-row gap-5 bg-[#d5d5d5] mt-10 pt-10 items-center" id="contact">
            <div className="md:w-5/12 h-fit p-1  flex flex-col justify-center items-center ">
                <div className="w-fit h-fit text-4xl mb-6">
                    <span className="text-[#1F7B57] mr-2">{'< >'}</span>
                    <p className="text-3xl inline dark:text-[#8B8F98]">Abhishek Kumar</p>
                </div>
                <div className="flex flex-row gap-7 justify-evenly mb-6 link-wrapper5">
                    <a href="https://x.com/Abhishe7716700"><img src={twitter} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-lg dark:p-1 bg-red link5" alt="twitter" /></a>
                    <a href="https://www.instagram.com/yourabhishek_a1/"><img src={instagram} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-full bg-red link5"   alt="instagram" /></a>
                    <a href="https://www.linkedin.com/in/abhishek-kumar983/"><img src={linkedin} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-full bg-red link5"  alt="linkedin" /></a>
                    <a href="https://www.reddit.com/user/Potential_Bee_4426/"><img src={reddit} className="w-6 h-6 hover:scale-125 transition-all duration-150 dark:bg-white dark:rounded-full bg-red link5"  alt="reddit" /></a>
 
                </div>
                <div className="text-lg flex gap-5 justify-between link-wrapper5">
                    <a href="#home" className="text-lg hover:text-[#1F7B57] hover:scale-125 transition-all duration-150 dark:text-[#8B8F98] p-2 link5 ">Home</a> 
                    <a href="https://drive.google.com/file/d/1pfShQ5tel4HmNN1Je9pxdMBJ3Z6D9fxi/view?usp=sharing" className="text-lg hover:text-[#1F7B57] p-2 hover:scale-125 transition-all duration-150 dark:text-[#8B8F98] link5 ">Resume</a>
                    <a href="#projects" className="text-lg hover:text-[#1F7B57] hover:scale-125 transition-all duration-150 dark:text-[#8B8F98] p-2 link5">Projects</a>
                </div>
            </div>
            <div className="md:w-6/12 h-git p-4 border-2 rounded-lg border-black dark:bg-black dark:border-[#2D3236]">
                <h1 className="text-3xl text-[#1F7B57] font-semibold">Contact Me</h1>
                <p className="text-lg text-[#59606E] mt-2">I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
                    <input type="text" placeholder="Your Name"  className="contactField  border-2 border-gray-500 focus:border-transparent  rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57] dark:text-[#a0a0a0] " onChange={(e)=>setName(e.target.value)} value={name} />
                    <input type="text" placeholder="Your Email"  className="contactField border-2 border-gray-500 focus:border-transparent  rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57] dark:text-[#a0a0a0]" onChange={(e)=>setEmail(e.target.value)} value={email} />
                    <input type="text" placeholder="your Designation" className="contactField border-2 border-gray-500 focus:border-transparent  rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57] dark:text-[#a0a0a0]" onChange={(e)=>setDesignation(e.target.value)} value={designation}  />
                    <input type="text" placeholder="your Company" className="contactField border-2 border-gray-500 focus:border-transparent  rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57] dark:text-[#a0a0a0]" onChange={(e)=>setCompany(e.target.value)} value={company} />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Your Message" className="contactField border-2 border-gray-500 focus:border-transparent  rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57] dark:text-[#a0a0a0]" onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                    <button className="bg-[#1F7B57] dark:bg-transparent dark:border-[#1F7B57] dark:border-2 dark:text-[#1F7B57] text-white py-2 px-4 rounded-lg  hover:text-white hover:bg-[#1F7B57] transition-all duration-150">{submit}</button>
                </form>
            </div> 
        </div>
    );
}

export default FooterForm;