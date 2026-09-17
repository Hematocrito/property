import {
  Wifi,
  WashingMachine,
  AirVent,
  Thermometer,
  Car,
  Dumbbell,
  Tv,
  Utensils,
  ShowerHead,
  Trees,
  ShieldCheck,
  Bike,
  type LucideIcon,
} from 'lucide-react';
import { amenities } from '@/data/apartment';

const iconMap: Record<string, LucideIcon> = {
  Wifi,
  WashingMachine,
  AirVent,
  Thermometer,
  Car,
  Dumbbell,
  Tv,
  Utensils,
  ShowerHead,
  Trees,
  ShieldCheck,
  Bike,
};

export default function Amenities() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-500">
            Amenities
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Everything You Need
          </h2>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Thoughtfully equipped with modern conveniences to make your stay comfortable and effortless.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {amenities.map((amenity) => {
            const Icon = iconMap[amenity.icon];
            return (
              <div
                key={amenity.label}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-stone-50 hover:bg-stone-900 transition-all duration-500 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-white/10 flex items-center justify-center transition-all duration-500 mb-4 shadow-sm">
                  {Icon && <Icon className="w-6 h-6 text-stone-700 group-hover:text-white transition-colors duration-500" />}
                </div>
                <span className="text-sm font-semibold text-stone-800 group-hover:text-white transition-colors duration-500">
                  {amenity.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
