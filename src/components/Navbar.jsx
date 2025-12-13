import { Menu, X } from "lucide-react";
import { useState, useEffect, forwardRef } from "react";


export default function Navbar( {cuteMode, scrollToProjects, scrollToContact, scrollToHome} ) {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <button onClick={scrollToHome} className={cuteMode ? "text-[#9C7777] hover:text-[#bf9393] hover:cursor-pointer" : "text-[#B7AABF] hover:text-[#9884A3] hover:cursor-pointer"}>
                            {cuteMode ? "allison wang" : "Allison Wang"}
                        </button>
                    </span>
                </div>

                {/* Nav Links */}
                <div className="hidden text-small lg:text-base font-medium md:flex items-center space-x-6 lg:space-x-8">
                    <button onClick={scrollToProjects} className={cuteMode ? "text-[#9C7777] hover:text-[#bf9393] hover:cursor-pointer" : "text-[#B7AABF] hover:text-[#9884A3] hover:cursor-pointer"}>
                        {cuteMode ? "my projects" : "My Projects"}
                    </button>
                    <button onClick={scrollToContact} className={cuteMode ? "text-[#9C7777] hover:text-[#bf9393] hover:cursor-pointer" : "text-[#B7AABF] hover:text-[#9884A3] hover:cursor-pointer"}>
                        {cuteMode ? "contact" : "Contact"}
                    </button>
                </div>

                <button className="md:hidden p-2 text-gray-300 hover:text-[#bf9393]" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                    
                    {mobileMenuIsOpen ? (<X className="w-5 h-5 sm:w-6 sm:h-6 text-[#9C7777]"/>) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#9C7777]"/>
                    )}
                </button>
            </div>
        </div>
        
        {mobileMenuIsOpen && 
            <div className={`"md:hidden backdrop-blur-lg border-t animate-in slide-in-from-top duration-300"
                ${cuteMode ? "bg-[#D7CBBA] border-[#9C7777]" : "border-gray-800 bg-gray-900/95"}`}>
                <div className="px-4 py-4 sm:py-6 flex flex-col space-y-3 sm:space-y-4">
                    <button onClick={() => {scrollToProjects(); setMobileMenuIsOpen(false)}} 
                        className={`"block text-small text-left lg:text-base" ${cuteMode ? "text-[#9C7777] hover:text-[#bf9393] hover:cursor-pointer" : "text-white"}`}>
                        {cuteMode ? "my projects" : "My Projects"}
                    </button>
                    <button onClick={() => {scrollToContact(); setMobileMenuIsOpen(false)}} 
                        className={`"block text-small text-left lg:text-base" ${cuteMode ? "text-[#9C7777] hover:text-[#bf9393] hover:cursor-pointer" : "text-white"}`}>
                        {cuteMode ? "contact" : "Contact"}
                    </button>
                </div>
            </div>}
    </nav>;
}