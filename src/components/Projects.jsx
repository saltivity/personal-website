import { useState, useEffect, forwardRef } from "react";
import { projects } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";

const Projects = forwardRef(({setProjectOpen, cuteMode}, ref) => {
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => { setProjectOpen(activeProject !== null);}, [activeProject]);

    return (
        <section ref={ref} id="projects" className="py-20 px-20 max-w-7xl mx-auto">

            {cuteMode && (<img className="absolute w-50 translate-x-[30%] top-1/2 translate-y-[190%] rotate-45 z-0 animate-[shake_1.5s_steps(1)_infinite]" src="src/assets/flower sticker 8.png"/>)}
            {cuteMode && (<img className="absolute w-50 translate-x-[390%] top-1/2 translate-y-[190%] rotate-335 z-0 animate-[shake_1.5s_steps(1)_infinite]" src="src/assets/flower sticker 6.png"/>)}

            <div className="relative">
                {cuteMode && (<img className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-35 -translate-x-50 w-100 h-50" src="src/assets/ripped paper.png"/>)}
                
                <h2 className="relative text-3xl sm:text-5xl font-semibold mb-10 text-center pb-20 z-10">
                    { cuteMode ? "projects" : "Projects" }
                </h2>
            </div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 z-20">
                {projects.map((project) => (<ProjectCard key={project.id} project={project} onClick={setActiveProject} />))}
            </div>

            <ProjectPopup project={activeProject} onClose={() => setActiveProject(null)} cuteMode={cuteMode}/>
        </section>
    );
});

export default Projects;