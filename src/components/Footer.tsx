import { Home, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Maison</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-stone-400 text-sm">
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#details" className="hover:text-white transition-colors">Details</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4 text-stone-500 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Downtown
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> (555) 123-4567
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> rent@maison.com
            </span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Maison Apartments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
