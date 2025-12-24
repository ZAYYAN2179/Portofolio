import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition cursor-pointer h-full flex flex-col relative">

        {/* Project Type Badge (tetap biru) */}
        {project.type && (
          <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
            {project.type}
          </span>
        )}

        {/* Title → PUTIH (fokus utama) */}
        <h3 className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm flex-grow text-justify">
          {project.description}
        </p>

        {/* Tech Stack → NETRAL (abu-abu, bukan biru) */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
};

export default ProjectCard;
