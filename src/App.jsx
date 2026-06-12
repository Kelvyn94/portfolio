import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LaptopNavigator from "./components/LaptopNavigator";
import InteractiveTimeline from "./components/InteractiveTimeline";
import LoadingScreen from "./components/LoadingScreen";
import CursorTrail from "./components/CursorTrail";
import BackgroundEffect from "./components/BackgroundEffect";

function App() {
  useEffect(() => {
    document.title = "Kelvin | Frontend Developer Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden">
        <LoadingScreen />
        <CursorTrail />
        <BackgroundEffect />
        <Navbar />
        <LaptopNavigator />
        <Hero />

        <About />

        <InteractiveTimeline />

        <Projects />

        <Skills />

        <Contact />

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; 2025 Kelvin. All rights reserved. | Built with React, GSAP,
              Framer Motion & Tailwind CSS
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
