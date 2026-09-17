import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/40 to-stone-950/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-[fadeIn_1s_ease-out]">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Available for Rent
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            A Home That Feels
            <br />
            <span className="italic font-light">Like a Retreat</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A beautifully designed 2-bedroom apartment in the heart of the city.
            Bright, spacious, and thoughtfully furnished for modern living.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#gallery"
              className="px-8 py-3.5 bg-white text-stone-900 rounded-full font-semibold text-sm tracking-wide hover:bg-stone-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              View Gallery
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-sm tracking-wide border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Schedule a Visit
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">2</span>
              <span>Bedrooms</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">1,250</span>
              <span>sq ft</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">$2,800</span>
              <span>/month</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </a>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
