import { Link } from "react-router-dom"

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="text-gray-400 mt-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
