import development from "../assets/image/offer/development.png";
import database from "../assets/image/offer/database.png";
import API from "../assets/image/offer/api.png";
import optimization from "../assets/image/offer/optimization.png";
import ai from "../assets/image/offer/ai.png";
import auth from "../assets/image/offer/auth.png";
const  Offer=() =>{
        return(
            <div className="dark:bg-black w-[98%] mx-auto my-10 bg-white rounded-lg flex flex-col dark:border-2 dark:border-[#2D3236] px-1">
                <div className="lg:w-5/6 mx-auto mt-10">
                    <p style={{ wordSpacing: "0.5rem" }} className=" font-semibold text-2xl text-[#1F7B57] text-center "> What do I offer </p>
                    <h1 className="text-center lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-semibold text-[#111928] dark:text-white">
                        Designing Solution <span className="text-[#47505F]"> Customized to meet your Requirements</span>
                    </h1>

                </div>
                <div className="lg:w-5/6 mx-auto mt-16 mb-6 grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                <div className="w-full h-full flex flex-col rounded-lg border-2 border-[#DDE0E4] p-3">
                    <img src={database} className="w-10 h-10" alt="" />
                    <div className="mt-3 flex-grow">
                        <h1 className="text-3xl font-semibold text-[#111928] dark:text-white"> Web Development</h1>
                        <p className="text-xl text-[#7C818C] text-justify">
                        Crafting visually appealling and user-friendly interface using HTML, CSS, CSS Tailwind, JavaScript and modern frameworks like ReactJS. 
                        
                             </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col rounded-lg border-2 border-[#DDE0E4] p-3">
                <img src={API} className="w-10 h-10" alt="" />
                    <div className="mt-3 flex-grow">
                        <h1 className="text-3xl font-semibold text-[#111928] dark:text-white"> Database Management</h1>
                        <p className="text-xl text-[#7C818C] text-justify"> 
                        Managing structured and unstructured data using SQLite, PostgreSQL, MongoDB, and Django ORM with efficient, secure integration.</p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col rounded-lg border-2 border-[#DDE0E4] p-3">
                    <img src={development} className="w-10 h-10" alt="" />
                    <div className="mt-3 flex-grow">
                        <h1 className="text-3xl font-semibold text-[#111928] dark:text-white"> API Development</h1>
                        <p className="text-xl text-[#7C818C] text-justify"> 
                        Developing secure and scalable RESTfulAPIs using Django REST Framework and Node.js for efficient data flow and integration.
                         </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col rounded-lg border-2 border-[#DDE0E4] p-3">
                    <img src={optimization} className="w-10 h-10" alt="" />
                    <div className="mt-3 flex-grow">
                        <h1 className="text-3xl font-semibold text-[#111928] dark:text-white"> Performance Optimization</h1>
                        <p className="text-xl text-[#7C818C] text-justify"> 
                        Enhancing application speed and efficiency through code optimization, database indexing, lazy loading, and resource management techniques.
                        </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col rounded-lg border-2 border-[#DDE0E4] p-3">
                    <img src={auth} className="w-10 h-10" alt="" />
                    <div className="mt-3 flex-grow">
                        <h1 className="text-3xl font-semibold text-[#111928] dark:text-white"> User Authentication</h1>
                        <p className="text-xl text-[#7C818C] text-justify"> 
                        Developing secure authentication systems using modern protocols, JWT, and incorporating OTP verification for enhanced security and user protection.
                        </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col rounded-lg border-2 border-[#DDE0E4] p-3">
                    <img src={ai} className="w-10 h-10" alt="" />
                    <div className="mt-3 flex-grow">
                        <h1 className="text-3xl font-semibold text-[#111928] dark:text-white"> AI Integration</h1>
                        <p className="text-xl text-[#7C818C] text-justify"> 
                        Integrating AI-driven solutions to enhance user experience, utilizing machine learning models and APIs for automation and real-time insights.</p>
                    </div>
                </div>
                </div>
                <div className="w-fit h-fit p-1 text-center mx-auto sm:text-xl text-sm">
                    <h1 className=" font-semibold text-[#47505F]">
                        Excited to take on new projects and collaborations,
                    </h1>
                    <h1 className=" mb-4 font-semibold text-[#47505F]">
                        let's chat about your ideas. <a href="#" className="inline text-[#1F7B57] hover:text-[#F86465] hover:underline">Reach Out</a>
                    </h1>
                </div>
            </div>
        )
}
export default Offer;