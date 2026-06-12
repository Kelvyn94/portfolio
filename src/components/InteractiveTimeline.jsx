import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function InteractiveTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const milestones = [
    {
      year: "2023",
      title: "Started Coding",
      description: "Began my journey in web development",
      icon: "🚀",
    },
    {
      year: "2024",
      title: "First Freelance Project",
      description: "Completed first client project",
      icon: "💼",
    },
    {
      year: "2025",
      title: "React Specialist",
      description: "Mastered React ecosystem",
      icon: "⚛️",
    },
    {
      year: "2026",
      title: "Full Stack Ready",
      description: "Expanded to backend technologies",
      icon: "🌐",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A timeline of my professional growth and achievements
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              style={{ scale, opacity }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-4xl mb-2">{milestone.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </motion.div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InteractiveTimeline;
