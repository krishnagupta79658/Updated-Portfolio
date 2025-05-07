import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Education from "./component/Education.jsx";
import Offer from "./component/Offer.jsx";
import Experience from "./component/Experience.jsx";
import Skills from "./component/Skills.jsx"
import Projects from "./component/Projects.jsx";
import FooterForm from "./component/FooterForm.jsx"

function App() {
  return (
    <>
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

