import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured); // tambah ini

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-500">Projects</h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {featuredProjects.length > 0 && (
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={`featured-${project.id}`} project={project} />
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => ( // ganti projects jadi otherProjects
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;