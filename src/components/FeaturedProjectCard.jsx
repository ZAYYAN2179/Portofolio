import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="relative rounded-2xl border-2 border-blue-500/60 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950/50 p-6 md:p-8 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-blue-500 text-white">
            {project.featuredLabel || "Featured"}
          </span>
          {project.type && (
            <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">{project.type}</span>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 max-w-3xl">{project.descriptionCard}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:gap-3 transition-all">
          Lihat detail project
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
};

export default FeaturedProjectCard;
