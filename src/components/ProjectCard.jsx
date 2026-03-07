import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group border-2 border-cyan-500/30 rounded-lg overflow-hidden bg-slate-900/50 hover:border-cyan-400 transition-all backdrop-blur-sm cursor-pointer"
      onClick={() => navigate(`/projects/${project.slug?.current || project.id}`)}
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-green-500/20 overflow-hidden">
        {project.projectImages?.[0] && (
          <img
            src={project.projectImages[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
        {!project.projectImages?.[0] && (
          <div className="w-full h-full flex items-center justify-center text-3xl">
            ⚙️
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-yellow-500/80 text-black px-3 py-1 rounded text-sm font-bold">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-green-400 transition-colors">
          {project.title}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {project.shortDescription || project.description}
        </p>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                {typeof tech === 'string' ? tech : tech.name}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-500">+{project.technologies.length - 3}</span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-cyan-500/10">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}