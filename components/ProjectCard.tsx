import Image from "next/image";
import { SiHtml5, SiCss3, SiJavascript, SiP5Dotjs } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const techIcons: { [key: string]: { icon: JSX.Element; color: string } } = {
  "HTML5": { icon: <SiHtml5 className="w-5 h-5" />, color: "#E34F26" },
  "CSS3": { icon: <SiCss3 className="w-5 h-5" />, color: "#1572B6" },
  "JavaScript": { icon: <SiJavascript className="w-5 h-5" />, color: "#F7DF1E" },
  "p5.js": { icon: <SiP5Dotjs className="w-5 h-5" />, color: "#ED225D" }
};

export default function ProjectCard({ title, description, image, technologies, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden neu-elevated transition-all duration-300">
      <div className="relative h-56 overflow-hidden bg-dev-hub-bg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">{title}</h3>
        <p className="text-dev-hub-text-secondary text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {technologies.map((tech, index) => {
            const techInfo = techIcons[tech];
            return techInfo ? (
              <div
                key={index}
                className="flex items-center justify-center w-8 h-8 rounded transition-all duration-300 hover:scale-110"
                style={{ color: techInfo.color }}
                title={tech}
              >
                {techInfo.icon}
              </div>
            ) : null;
          })}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <button className="flex-1 bg-accent-gold text-dev-hub-bg py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-md">
              Ver Proyecto
            </button>
          )}
          {repoUrl && (
            <button className="flex-1 bg-transparent border-2 border-dev-hub-border text-dev-hub-text-primary py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300 hover:border-accent-gold hover:text-accent-gold active:scale-95">
              Ver Código
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
