export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export const apartmentImages: GalleryImage[] = [
  {
    url: '/images/IMG_comedor.jpg',
    alt: 'Living comedor amplio con excelente iluminación natural, perfecto para crear un espacio acogedor y funcional.',
    category: 'Living Room',
  },
  {
    url: '/images/IMG_balcon_HDR.jpg',
    alt: 'Balcón con salida directa desde el comedor y agradable vista exterior.',
    category: 'Living Room',
  },
  {
    url: '/images/IMG_pasillo.jpg',
    alt: 'Pasillo distribuidor que integra cada espacio del departamento.',
    category: 'Living Room',
  },
  {
    url: '/images/IMG_cocina1.jpg',
    alt: 'Ambiente de cocina funcional, con calefón, cocina a gas y sectores preparados para heladera y lavarropas. Incluye mesa plegable',
    category: 'Cocina',
  },
  {
    url: '/images/IMG_cocina2.jpg',
    alt: 'Espacio de cocina ventilado y cómodo, preparado para facilitar tus rutinas.',
    category: 'Cocina',
  },
  {
    url: '/images/IMG_cocina3.jpg',
    alt: 'Cocina práctica con muebles inferiores y alacena superior, ideal para almacenamiento.',
    category: 'Cocina',
  },
  {
    url: '/images/IMG_dormitorio1.jpg',
    alt: 'Habitación luminosa con vista a la calle, ubicada junto al baño y con piso de parquet.',
    category: 'Dormitorio',
  },
  {
    url: '/images/IMG_dormitorio2.jpg',
    alt: 'Habitaciones luminosas con ventana exterior, amplios placares y elegantes pisos de parquet.',
    category: 'Dormitorio',  
  },
  {
    url: '/images/IMG_dormitorio3.jpg',
    alt: 'Dormitorios con vista a la calle, placard de gran capacidad y pisos de parquet.',
    category: 'Dormitorio',
  },
  {
    url: '/images/IMG_balcon_HDR.jpg',
    alt: 'Balcón con salida directa desde el comedor y agradable vista exterior.',
    category: 'Balcón',
  },
  {
    url: '/images/IMG_balcon.jpg',
    alt: 'Balcón luminoso conectado al comedor, ideal para disfrutar del aire libre.',
    category: 'Balcón',
  },
  {
    url: '/images/IMG_bano2.jpg',
    alt: 'Baño funcional y completo, con bañera incorporada.',
    category: 'Baño',
  },
  {
    url: '/images/IMG_bano1.jpg',
    alt: 'Ambiente de baño equipado, incluye bañera.',
    category: 'Baño',
  },
  {
    url: '/images/IMG_pasillo.jpg',
    alt: 'Pasillo conector interno que organiza la distribución del hogar.',
    category: 'Baño', 
  },
];

export const galleryCategories = ['Todos', 'Living Room', 'Cocina', 'Dormitorio', 'Balcón', 'Baño'];

export interface Amenity {
  icon: string;
  label: string;
}

export const amenities: Amenity[] = [
  { icon: 'Wifi', label: 'High-Speed Wi-Fi' },
  { icon: 'WashingMachine', label: 'Washer & Dryer' },
  { icon: 'AirVent', label: 'Air Conditioning' },
  { icon: 'Thermometer', label: 'Central Heating' },
  { icon: 'Car', label: 'Private Parking' },
  { icon: 'Dumbbell', label: 'Fitness Center' },
  { icon: 'Tv', label: 'Smart TV' },
  { icon: 'Utensils', label: 'Full Kitchen' },
  { icon: 'ShowerHead', label: 'Modern Bathroom' },
  { icon: 'Trees', label: 'Garden Access' },
  { icon: 'ShieldCheck', label: '24/7 Security' },
  { icon: 'Bike', label: 'Bike Storage' },
];

export interface ApartmentDetail {
  icon: string;
  label: string;
  value: string;
}

export const apartmentDetails: ApartmentDetail[] = [
  { icon: 'Maximize', label: 'Size', value: '1,250 sq ft' },
  { icon: 'DoorOpen', label: 'Rooms', value: '3 Rooms' },
  { icon: 'BedDouble', label: 'Bedrooms', value: '2 Bedrooms' },
  { icon: 'Bath', label: 'Bathrooms', value: '2 Bathrooms' },
  { icon: 'Building', label: 'Floor', value: '5th Floor' },
  { icon: 'KeyRound', label: 'Available', value: 'Immediately' },
];
