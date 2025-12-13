import { useState, useEffect } from "react";
import { projects } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";

export default function Projects({setProjectOpen}) {
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => { setProjectOpen(activeProject !== null);}, [activeProject]);

    return (
        <section className="py-20 px-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center pb-20">Projects</h2>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project) => (<ProjectCard key={project.id} project={project} onClick={setActiveProject} />))}
            </div>

            <ProjectPopup project={activeProject} onClose={() => setActiveProject(null)}/>
        </section>
    );
}
