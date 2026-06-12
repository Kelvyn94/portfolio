import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LaptopNavigator() {
  const laptopRef = useRef(null);
  const screenContentRef = useRef(null);
  const [screenText, setScreenText] = useState(
    '// Welcome to my portfolio\n\nconst developer = {\n  name: "Kelvin",\n  role: "Frontend Dev",\n  location: "Kenya",\n  passion: "Creating magic with code"\n}\n\n// Scroll down to explore ✨',
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation - laptop floats in
      gsap.fromTo(
        laptopRef.current,
        { opacity: 0, y: 100, rotation: -10 },
        { opacity: 1, y: 0, rotation: 0, duration: 1.5, ease: "back.out(1.7)" },
      );

      // Create scroll-triggered animation for laptop rotation and movement
      gsap.to(laptopRef.current, {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          onUpdate: (self) => {
            // Change screen content based on scroll position
            const progress = self.progress;

            if (progress < 0.2) {
              setScreenText(
                '// Hero Section\n\nconst kelvin = {\n  greeting: "Hello World! 👋",\n  role: "Frontend Developer",\n  location: "Nairobi, Kenya",\n  passion: "Building amazing web apps",\n  motto: "Code. Create. Innovate."\n}\n\n// Welcome to my journey 🚀',
              );
            } else if (progress < 0.4) {
              setScreenText(
                '// About Me\n\nconst about = {\n  experience: "2+ years",\n  projects: "15+ completed",\n  clients: "10+ happy",\n  mission: "Build elegant solutions",\n  philosophy: "Clean code, happy life",\n  learning: "Next.js & Three.js"\n}\n\n// Let me introduce myself 👋',
              );
            } else if (progress < 0.6) {
              setScreenText(
                '// Featured Projects\n\nconst projects = [\n  {\n    name: "Music Band EPK",\n    tech: "React + Tailwind + GSAP",\n    year: 2025,\n    featured: true\n  },\n  {\n    name: "TaskFlow Pro",\n    tech: "React + DnD + Framer",\n    year: 2025,\n    featured: true\n  },\n  {\n    name: "Weather Dashboard",\n    tech: "JS + API + Charts",\n    year: 2024\n  }\n]\n\n// Check out my work below 🎯',
              );
            } else if (progress < 0.8) {
              setScreenText(
                '// Tech Stack & Skills\n\nconst skills = {\n  frontend: ["React", "Vue.js", "Angular"],\n  styling: ["Tailwind CSS", "CSS3", "SASS"],\n  tools: ["Git", "Figma", "Vite", "Webpack"],\n  backend: ["Node.js", "Express"],\n  learning: ["Next.js", "Three.js", "TypeScript"]\n}\n\n// Skills in motion ⚡',
              );
            } else {
              setScreenText(
                '// Let\'s Connect!\n\nconst contact = {\n  email: "kelvin@example.com",\n  github: "@kelvyn94",\n  location: "Nairobi, Kenya",\n  availability: "Open for work",\n  message: "Let\'s build something amazing together!"\n}\n\n// Get in touch 📫',
              );
            }
          },
        },
        x: () => {
          const progress = ScrollTrigger.getById("laptopScroll")?.progress || 0;
          return progress * 400; // Move right as you scroll
        },
        y: () => {
          const progress = ScrollTrigger.getById("laptopScroll")?.progress || 0;
          return progress * 100; // Move down slightly
        },
        rotationY: () => {
          const progress = ScrollTrigger.getById("laptopScroll")?.progress || 0;
          return progress * 360; // Full rotation
        },
        scale: () => {
          const progress = ScrollTrigger.getById("laptopScroll")?.progress || 0;
          return 1 - progress * 0.2; // Slight scale down
        },
      });

      // Add scroll trigger ID
      ScrollTrigger.create({
        id: "laptopScroll",
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={laptopRef}
        className="relative w-[380px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Laptop Screen */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl overflow-hidden shadow-2xl border border-gray-700">
          {/* Webcam */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>

          {/* Screen Content */}
          <div
            ref={screenContentRef}
            className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 m-1 rounded-lg p-4 min-h-[280px]"
          >
            <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap overflow-hidden">
              {screenText}
            </pre>
          </div>

          {/* Screen Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Laptop Keyboard Base */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl p-2 shadow-xl">
          <div className="bg-gray-600 rounded-lg p-2">
            <div className="grid grid-cols-12 gap-1 mb-2">
              {[...Array(60)].map((_, i) => (
                <div key={i} className="h-1.5 bg-gray-500 rounded"></div>
              ))}
            </div>
            <div className="w-20 h-3 bg-gray-500 rounded mx-auto"></div>
          </div>
        </div>

        {/* 3D Shadow */}
        <div className="absolute -bottom-6 left-10 right-10 h-4 bg-black/30 blur-xl rounded-full"></div>
      </div>
    </div>
  );
}

export default LaptopNavigator;
