import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  if (!project) {
    return <p className="text-center mt-20 text-gray-400">Project not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-lg bg-gray-900 text-gray-300 border border-gray-800 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Kembali</span>
        </button>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-gray-400 mb-6">{project.description}</p>

        {/* Role */}
        {project.role && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Peran</h2>
            <p className="text-gray-400">{project.role}</p>
          </div>
        )}

        {/* Responsibilities */}
        {project.responsibilities && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kontribusi Saya</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Link Github */}
        {project.githubLink && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3">GitHub Project</h2>

            {Array.isArray(project.githubLink) ? (
              <ul className="space-y-2">
                {project.githubLink.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 underline break-all">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 underline break-all">
                {project.githubLink}
              </a>
            )}
          </div>
        )}

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Gallery */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full rounded-xl break-inside-avoid" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
