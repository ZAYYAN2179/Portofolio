import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-gray-900 rounded-xl p-5 md:p-6 hover:scale-[1.03] transition cursor-pointer h-full flex flex-col relative">

        {/* Project Type Badge */}
        {project.type && (
          <span className="absolute top-4 right-4 text-[10px] md:text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
            {project.type}
          </span>
        )}

        {/* Title */}
        <h3
          className="
            text-lg md:text-xl 
            font-semibold 
            mb-2 
            text-white
            line-clamp-2
            leading-snug
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            text-gray-400 
            text-sm 
            flex-grow
            line-clamp-3
            leading-relaxed
          "
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-[11px] md:text-xs"
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
