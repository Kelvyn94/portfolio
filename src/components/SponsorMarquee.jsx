import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function SponsorMarquee() {
  const marqueeRef = useRef(null);

  const sponsors = [
    { name: "Google", logo: "🔍", color: "from-blue-500 to-blue-600" },
    { name: "Microsoft", logo: "💻", color: "from-blue-600 to-blue-700" },
    { name: "Amazon", logo: "📦", color: "from-orange-500 to-orange-600" },
    { name: "Stripe", logo: "💳", color: "from-purple-500 to-purple-600" },
    { name: "Netflix", logo: "🎬", color: "from-red-500 to-red-600" },
    { name: "Spotify", logo: "🎵", color: "from-green-500 to-green-600" },
    { name: "Apple", logo: "🍎", color: "from-gray-500 to-gray-600" },
    { name: "Meta", logo: "📱", color: "from-blue-600 to-blue-700" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth / 2;

      gsap.to(marqueeRef.current, {
        x: -totalWidth,
        duration: 25,
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
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-8 my-8 rounded-2xl shadow-inner">
      <h3 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-4 font-semibold">
        Trusted by innovative companies worldwide
      </h3>
      <div ref={marqueeRef} className="flex gap-8 whitespace-nowrap">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-3 bg-gradient-to-r ${sponsor.color} px-8 py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <span className="text-3xl">{sponsor.logo}</span>
            <span className="text-white font-bold text-lg">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SponsorMarquee;
