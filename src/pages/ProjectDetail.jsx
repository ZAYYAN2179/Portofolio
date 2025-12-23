import { useParams } from "react-router-dom"
import { projects } from "../data/projects"

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <p className="text-center mt-20">Project not found</p>
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} ${i}`}
              className="rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
