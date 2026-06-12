import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueeSkills from "./MarqueeSkills";

function Skills() {
  const skillsRef = useRef(null);
  const barsRef = useRef([]);

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "JavaScript/ES6+", level: 85, icon: "⚡" },
        { name: "HTML5/CSS3", level: 90, icon: "🌐" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85, icon: "📝" },
        { name: "Figma", level: 75, icon: "🎨" },
        { name: "Vite/Webpack", level: 80, icon: "📦" },
        { name: "REST APIs", level: 80, icon: "🔌" },
      ],
    },
  ];

  useEffect(() => {
    barsRef.current.forEach((bar, index) => {
      const skill = skillCategories.flatMap((cat) => cat.skills)[index];
      if (skill) {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${skill.level}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
  }, []);

  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Marquee Skills Section - Running right to left */}
        <div className="mb-16">
          <MarqueeSkills />
        </div>

        {/* Detailed Skills with Progress Bars */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const globalIndex =
                      skillCategories
                        .slice(0, catIndex)
                        .flatMap((c) => c.skills).length + skillIndex;
                    return (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold text-gray-700">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-blue-600 font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            ref={(el) => (barsRef.current[globalIndex] = el)}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full relative overflow-hidden transition-all duration-500"
                            style={{ width: "0%" }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
