import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition cursor-pointer h-full flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm flex-grow text-justify">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
