import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export default function Socials({cuteMode, projectOpen}) {
    

    return (<div className={`fixed left-6 bottom-0 flex flex-col items-center space-y-4 z-50
        ${cuteMode ? "text-[#9C7777]" : "text-[#B7AABF]"}
        ${projectOpen ? "hidden sm:flex" : "flex"}`}>
        
        <a href="https://github.com/saltivity" target="_blank" className= { cuteMode ? "hover:text-[#bf9393]" : "hover:text-[#9884A3]"}>
            <Github className="w-8 h-8"/>
        </a>
        <a href="https://www.linkedin.com/in/allison-wang-9a7267277/" target="_blank" className= { cuteMode ? "hover:text-[#bf9393]" : "hover:text-[#9884A3]"}>
            <Linkedin className="w-8 h-8"/>
        </a>
        <a href="mailto:allisonqingwang@gmail.com" className= { cuteMode ? "hover:text-[#bf9393]" : "hover:text-[#9884A3]"}>
            <Mail className="w-8 h-8"/>
        </a>
        <div className= {
            cuteMode ? "w-[2px] h-30 bg-[#9C7777]"
            : "w-[2px] h-30 bg-[#B7AABF]"}></div>
    </div>);
}