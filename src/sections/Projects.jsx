import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
