import { Link } from "react-router-dom"

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer h-full">
        
        {/* Cover Image with Blur Background */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-800">
          
          {/* Blur background */}
          <img
            src={project.cover}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
          />

          {/* Main image */}
          <img
            src={project.cover}
            alt={project.title}
            className="relative z-10 max-h-full max-w-full object-contain mx-auto"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          
          {/* Title */}
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mt-2 text-sm">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
