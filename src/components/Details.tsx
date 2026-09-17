import {
  Maximize,
  DoorOpen,
  BedDouble,
  Bath,
  Building,
  KeyRound,
  MapPin,
  Calendar,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { apartmentDetails } from '@/data/apartment';

const iconMap: Record<string, LucideIcon> = {
  Maximize,
  DoorOpen,
  BedDouble,
  Bath,
  Building,
  KeyRound,
};

const highlights = [
  'Fully furnished with designer pieces',
  'Floor-to-ceiling windows with natural light',
  'In-unit washer and dryer',
  'Stainless steel kitchen appliances',
  'Private balcony with city views',
  'Dedicated parking space included',
];

export default function Details() {
  return (
    <section id="details" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-stone-500">
              Apartment Details
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
              Designed for Modern Living
            </h2>
            <p className="mt-5 text-stone-600 leading-relaxed text-lg">
              This spacious 2-bedroom apartment combines contemporary design with everyday comfort.
              Located in a vibrant neighborhood with easy access to cafes, parks, and public transit.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {apartmentDetails.map((detail) => {
                const Icon = iconMap[detail.icon];
                return (
                  <div
                    key={detail.label}
                    className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-300"
                  >
                    {Icon && <Icon className="w-6 h-6 text-stone-700 mb-3" />}
                    <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">
                      {detail.label}
                    </p>
                    <p className="text-lg font-bold text-stone-900 mt-1">{detail.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-stone-700 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                alt="Spacious living room with modern minimalist design and open kitchen layout"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-[280px]">
              <div className="w-12 h-12 rounded-xl bg-stone-900 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Prime Location</p>
                <p className="text-sm font-bold text-stone-900">Downtown District</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-stone-900 rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-[280px]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/60 font-medium">Available From</p>
                <p className="text-sm font-bold text-white">Immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
