import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import { useState } from "react";
import { Flower } from "lucide-react";

function App() {
  const [cuteMode, setCuteMode] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  return <div
  className={
    cuteMode
      ? "min-h-screen bg-[#D7CBBA] text-black overflow-hidden transition-all duration-500"
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
    <Navbar cuteMode={cuteMode}/>
    <Home cuteMode={cuteMode}/>
    <Projects cuteMode={cuteMode} setProjectOpen={setProjectOpen}/>
    <Socials cuteMode={cuteMode} projectOpen={projectOpen} />
    <Pricing cuteMode={cuteMode}  projectOpen={projectOpen}/>
    <Contact cuteMode={cuteMode}/>
    <Footer cuteMode={cuteMode}/>

  </div>;
}

export default App
