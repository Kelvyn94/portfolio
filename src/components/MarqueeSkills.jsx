import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function MarqueeSkills() {
  const marqueeRef = useRef(null);

  const skills = [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-yellow-600" },
    { name: "Tailwind CSS", icon: "💨", color: "from-teal-500 to-teal-600" },
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-orange-600" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-blue-600" },
    { name: "Git", icon: "📝", color: "from-red-500 to-red-600" },
    { name: "Node.js", icon: "🚀", color: "from-green-500 to-green-600" },
    { name: "Figma", icon: "🎯", color: "from-purple-500 to-purple-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-800" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth / 2;

      gsap.to(marqueeRef.current, {
        x: -totalWidth,
        duration: 30,
        repeat: -1,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-6 my-4 rounded-2xl shadow-xl">
      <div ref={marqueeRef} className="flex gap-6 whitespace-nowrap">
        {/* Double the skills for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-3 bg-gradient-to-r ${skill.color} px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110`}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-white font-bold text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeSkills;
