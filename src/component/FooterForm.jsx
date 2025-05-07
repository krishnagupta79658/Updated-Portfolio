import instagram from "../assets/image/footerForm/instagram.png";
import twitter from "../assets/image/footerForm/twitter.png";
import linkedin from "../assets/image/footerForm/linkedin.png";
import reddit from "../assets/image/footerForm/reddit.png";
import { useState } from "react";   
const FooterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    let handleSubmit = async (e) => {

        e.preventDefault();
        // Handle form submission logic here
        var data={
            'name': name,
            'email': email,
            'message': message
        }

        try{
              const response = await fetch('https://your-api-endpoint.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
        }
        catch(error){
            console.error('Error:', error);
            alert('An error occurred.');
        }
    }

    return (
        <div className=" mx-auto p-3 flex flex-col-reverse md:flex-row gap-5 bg-[#d5d5d5] mt-10 pt-10 items-center" id="contact">
            <div className="md:w-5/12 h-fit p-1  flex flex-col justify-center items-center">
                <div className="w-fit h-fit text-4xl mb-6">
                    <span className="text-[#1F7B57] mr-2">{'< >'}</span>
                    <p className="text-3xl inline">Abhishek Kumar</p>
                </div>
                <div className="flex flex-row gap-7 justify-evenly mb-6">
                    <a href="https://x.com/Abhishe7716700"><img src={twitter} className="w-6 h-6 hover:scale-125 transition-all duration-150" alt="twitter" /></a>
                    <a href="https://www.instagram.com/yourabhishek_a1/"><img src={instagram} className="w-6 h-6 hover:scale-125 transition-all duration-150"  alt="instagram" /></a>
                    <a href="https://www.linkedin.com/in/abhishek-kumar983/"><img src={linkedin} className="w-6 h-6 hover:scale-125 transition-all duration-150" alt="linkedin" /></a>
                    <a href="https://www.reddit.com/user/Potential_Bee_4426/"><img src={reddit} className="w-6 h-6 hover:scale-125 transition-all duration-150" alt="reddit" /></a>

                </div>
                <div className="text-lg flex gap-5 justify-between">
                    <a href="#home" className="text-lg hover:text-[#1F7B57] hover:scale-125 transition-all duration-150">Home</a>
                    <a href="https://drive.google.com/file/d/1pfShQ5tel4HmNN1Je9pxdMBJ3Z6D9fxi/view?usp=sharing" className="text-lg hover:text-[#1F7B57] hover:scale-125 transition-all duration-150">Resume</a>
                    <a href="#projects" className="text-lg hover:text-[#1F7B57] hover:scale-125 transition-all duration-150">Projects</a>
                </div>
            </div>
            <div className="md:w-6/12 h-git p-4 border-2 rounded-lg border-black">
                <h1 className="text-3xl text-[#1F7B57] font-semibold">Contact Me</h1>
                <p className="text-lg text-[#59606E] mt-2">I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
                    <input type="text" placeholder="Your Name" className="border-2 border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57]" onChange={(e)=>setName(e.target.value)} value={name} />
                    <input type="email" placeholder="Your Email" className="border-2 border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57]"onChange={(e)=>setEmail(e.target.value)} value={email} />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Your Message" className="border-2 border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#1F7B57] " onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                    <button className="bg-[#1F7B57] text-white py-2 px-4 rounded-lg hover:bg-[#F86465] transition-all duration-150">Send Message</button>
                </form>
            </div>
        </div>
    );
}
 
export default FooterForm;