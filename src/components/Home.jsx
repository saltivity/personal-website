import { useEffect, useState, forwardRef } from "react"

const Home = forwardRef(( {cuteMode}, ref ) => {
    const [mousePosition, setMousePosition] = useState({x:0, y: 0});

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:pg-8 overflow-hidden">
            {cuteMode && (<img className="absolute z-0 fade-in" src="src/assets/flowers.png"/>)}
            <div className="max-w-7xl mx-auto text-center relative w-full z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">  
                    <div className="flex flex-col sm:items-center lg:items-start text-left px-30">
                        <h1 className= {"whitespace-normal sm:whitespace-nowrap text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-6 leading-tight"}>
                            <span> {cuteMode ? "hi, i'm allison!" : "Hi, I'm Allison!"}</span>
                        </h1>
                        <p className="text-md sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
                                I'm a computer science student currently studying at the University of Washington. YAPYAPYAP!!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
                            <button className={`"group h-10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 ] rounded-lg font-semibold text-sm sm:text-base hover:scale-102 hover:bg-[#9884A3] hover:cursor-pointer flex items-center justify-center"
                                ${cuteMode ? "bg-[#9C7777] hover:bg-[#bf9393] hover:cursor-pointer" : "bg-[#B7AABF] hover:bg-[#9884A3] hover:cursor-pointer"}`}>
                                <span>Resume</span>
                            </button>
                        </div>
                    </div> 
                    <img className="relative z-20" src="A.png"/>
                </div>
                
            </div>


            {/* <div className="absolute inset-0 opacity-30" style={{
                // background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
            }}/>

            {/* <div className="absolute top-20 left-4 sm:left-10 w-48 sm: w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"/>
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm: w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"/>
        
            <div>
                <div>
                    <div>
                        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-white/10">TEST</div>
                    </div>
                </div>
            </div> */}
        </section>
    );
});

export default Home;