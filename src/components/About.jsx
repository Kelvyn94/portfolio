import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>

          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate frontend developer based in Kenya, dedicated to
              creating exceptional web experiences. With a strong foundation in
              modern JavaScript frameworks and a keen eye for design, I
              transform ideas into beautiful, functional applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I graduated in{" "}
              <span className="font-bold text-blue-600">
                2024 with a Bachelor's degree in Information Technology (IT)
              </span>
              . My academic journey equipped me with a solid foundation in
              software development, database management, and system design.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              My journey in web development started during my university years,
              and since then, I've worked on various projects ranging from
              business websites to complex web applications. I believe in
              writing clean, maintainable code and staying updated with the
              latest technologies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Projects
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600">2024</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Graduated
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Clients
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600">IT</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Degree
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
