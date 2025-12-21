import { CircleX } from 'lucide-react';

export default function ProjectPopup({ project, onClose, cuteMode }) {
  if (!project) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className={`relative rounded-xl max-w-xl w-full p-6 animate-fadeIn
          ${cuteMode ? "bg-[#e6daca] border-[2px] border-[#9C7777]" : "bg-gray-900 border-[2px] border-[#B7AABF]"}
        `}>
          <button onClick={onClose} className="absolute text-2xl right-2 top-2 hover:cursor-pointer">
            <CircleX className={ cuteMode ? "text-[#9C7777] hover:text-[#bf9393]": "text-[#B7AABF] hover:text-[#9884A3]"}/>
          </button>

          <img src={project.image} className="w-full h-56 object-cover rounded-lg mb-4"/>

          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className={`mt-2 ${cuteMode ? "text-gray-800" : "text-gray-200"}`}>{project.details}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span key={t} className={`px-2 py-1 rounded text-sm ${cuteMode ? "bg-[#9C7777]" : "bg-[#B7AABF]"}`}>{t}</span>
            ))}
          </div>

          {project.link && (
            <a href={project.link} target="_blank" className={`inline-block mt-4 px-4 py-2 rounded-lg ${cuteMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"}`}>View Project</a>
          )}
        </div>
      </div>
    </>
  );
}
