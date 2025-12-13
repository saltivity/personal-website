import { CircleX } from 'lucide-react';

export default function ProjectPopup({ project, onClose }) {
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
        <div className="relative bg-gray-900 rounded-xl max-w-xl w-full p-6 animate-fadeIn border-[2px] border-[#B7AABF]">
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-black">
            <CircleX className="text-[#B7AABF] hover:text-[#9884A3]"/>
          </button>

          <img
            src={project.image}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />

          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-gray-700">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-[#B7AABF] px-2 py-1 rounded text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </>
  );
}
