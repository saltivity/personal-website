export default function ProjectCard({ project, onClick }) {
  return (
    <button onClick={() => onClick(project)}
      className="text-left rounded-xl overflow-hidden hover:scale-[1.03] transition-all shadow-md hover:shadow-xl"
    >
      <img src={project.image} alt={project.title} className="w-full h-55 object-cover"
      />

      <div className="p-4 bg-white">
        <h3 className="font-semibold text-black text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.shortDesc}</p>
      </div>
    </button>
  );
}
