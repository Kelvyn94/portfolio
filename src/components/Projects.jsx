import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Music Band EPK Platform",
      description:
        "Professional Electronic Press Kit platform for musicians with gig management and booking system",
      tech: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600",
      category: "Featured",
      github: "#",
      demo: "#",
    },
    {
      title: "TaskFlow Pro",
      description:
        "Advanced task management application with drag-and-drop functionality and team collaboration",
      tech: ["React", "DnD Kit", "LocalStorage", "Framer"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
      category: "Productivity",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with 5-day forecast and interactive maps",
      tech: ["JavaScript", "API Integration", "Chart.js", "Geolocation"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600",
      category: "Tool",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Store",
      description:
        "Full-featured online store with product filtering, cart management, and checkout",
      tech: ["React", "Context API", "Tailwind CSS", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
      category: "E-commerce",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio 2025",
      description:
        "Modern developer portfolio with 3D animations and interactive elements",
      tech: ["React", "Three.js", "GSAP", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      category: "Design",
      github: "#",
      demo: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat app with user authentication, rooms, and message reactions",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
      category: "Social",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here's some of my best work. Each project represents a unique
            challenge solved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
