import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import { useState, useRef } from "react";
import { Flower, User } from "lucide-react";

function App() {
  const [cuteMode, setCuteMode] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToContact = () => { 
    contactRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return <div
  className={
    cuteMode
      ? "min-h-screen bg-[#e6daca] text-black overflow-hidden transition-all duration-500"
      : "min-h-screen bg-gray-900 text-white overflow-hidden transition-all duration-500"
  }
>

    
    <button onClick={() => setCuteMode(!cuteMode)} className={
      cuteMode ? "fixed bottom-4 right-4 p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg z-50 transition-colors"
      : "fixed bottom-4 right-4 p-3 bg-[#7A6983] hover:bg-[#9884A3] rounded-full shadow-lg z-50 transition-colors"}>
      <Flower className= {
        cuteMode ? "w-5 h-5 text-[#9C7777]"
        : "w-5 h-5 text-white-300"}/>
    </button>
    <Navbar cuteMode={cuteMode} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} scrollToHome={scrollToHome}/>
    <Home cuteMode={cuteMode} ref={homeRef}/>
    <Projects cuteMode={cuteMode} setProjectOpen={setProjectOpen} ref={projectsRef}/>
    <Socials cuteMode={cuteMode} projectOpen={projectOpen}/>
    <Contact cuteMode={cuteMode} ref={contactRef}/>
    <Footer cuteMode={cuteMode}/>

  </div>;
}

export default App
