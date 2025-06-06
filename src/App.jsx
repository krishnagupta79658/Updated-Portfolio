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
import LoadingPage from "./component/loadingPage.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setloading] =useState(true)
  const [isdark , setIsDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isdark);
  },[isdark]);

  useEffect(()=>{
    const timer=setTimeout(() => {
      setloading(false)
    }, 2000);
    return ()=>clearTimeout(timer)
  })
  return (
    <div>
    {loading ? <LoadingPage/>:<>
    <div className="fixed right-0 bottom-2 h-fit p-4  rounded-tl-xl rounded-bl-xl roun dark:bg-white text-white shadow-lg shadow-black/50 bg-black z-50" onClick={()=>setIsDark(!isdark)}>
      
      <img src={isdark?closeEye:openEye} className="w-8 h-8 "  alt="" />
    </div>
      <NavBar />
      <Home />
      <Offer />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <FooterForm />
      <ToastContainer />
    </>}
    
    </div>
  );
}

export default App;

