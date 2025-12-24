import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!project) {
    return <p className="text-center mt-20 text-gray-400">Project not found</p>;
  }

  return (
    <section className="min-h-screen bg-gray-950 text-white px-5 md:px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-gray-900 text-gray-300 border border-gray-800 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition">
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Kembali</span>
        </button>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h1>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base text-left md:text-justify">{project.description}</p>

        {/* Info Section */}
        <div className="space-y-8 mb-12">
          {/* Role */}
          {project.role && (
            <div className="bg-gray-900 rounded-xl p-5">
              <h2 className="text-lg font-semibold mb-2 text-blue-400">Peran</h2>
              <p className="text-gray-300 text-sm md:text-base">{project.role}</p>
            </div>
          )}

          {/* Responsibilities */}
          {project.responsibilities && (
            <div className="bg-gray-900 rounded-xl p-5">
              <h2 className="text-lg font-semibold mb-3 text-blue-400">Kontribusi Saya</h2>

              <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm md:text-base">
                {project.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* GitHub */}
          {project.githubLink && (
            <div className="bg-gray-900 rounded-xl p-5">
              <h2 className="text-lg font-semibold mb-3 text-blue-400">GitHub Project</h2>

              {Array.isArray(project.githubLink) ? (
                <ul className="space-y-2">
                  {project.githubLink.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 underline break-all text-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 underline break-all text-sm">
                  {project.githubLink}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs md:text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Gallery */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full rounded-xl break-inside-avoid hover:opacity-90 transition" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
