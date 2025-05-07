import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Education from "./component/Education.jsx";
import Offer from "./component/Offer.jsx";
import Experience from "./component/Experience.jsx";
import Skills from "./component/Skills.jsx"
import Projects from "./component/Projects.jsx";
import FooterForm from "./component/FooterForm.jsx"
import openEye from "./assets/image/darkModeEye/openEye.png";
import closeEye from "./assets/image/darkModeEye/closeEye.png";
import { useEffect , useState } from "react"; 


function App() {

  const [isdark , setIsDark] = useState(false);
  useEffect(() => {
    console.log('abhishek')
    console.log(isdark)
    document.documentElement.classList.toggle('dark', isdark);
  },[isdark]);
  return (
    <>
    <div className="fixed right-0 bottom-2 h-fit p-2 z-20 rounded-tl-xl rounded-bl-xl roun dark:bg-white text-white shadow-lg shadow-black/50 bg-black" onClick={()=>setIsDark(!isdark)}>
      {/* {isdark?'<img src={openEye} classname="w-8 h-8" onclick={()=>setIsDark(!isdark)} alt="" />':'<img src={closeEye} classname="w-8 h-8" onclick={()=>setIsDark(!isdark)} alt="" />'} */}
      <img src={isdark?closeEye:openEye} className="w-8 h-8"  alt="" />
    </div>
      <NavBar />
      <Home />
      <Offer />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <FooterForm />
      
    </>
  );
}

export default App;

