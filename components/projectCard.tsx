import Image from "next/image";


interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  tools: string[];
  liveDemo: string;
  github: string;
}

export default function ProjectCard({
  image,
  name,
  description,
  tools,
  liveDemo,
  github,
}: ProjectCardProps) {
  return (
    <div className="w-[350px] md:w-[450px] xl:w-[400px] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Project name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md hover:shadow-lg transition-all"
          >
             Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg font-semibold border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
