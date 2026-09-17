export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export const apartmentImages: GalleryImage[] = [
  {
    url: '/images/IMG_comedor.jpg',
    alt: 'Spacious modern living room featuring elegant chandeliers, plush sofa, and contemporary decor.',
    category: 'Living Room',
  },
  {
    url: '/images/IMG_balcon_HDR.jpg',
    alt: 'Modern living room with comfortable big sofa and dining zone with creative lamps and mirror in daylight.',
    category: 'Living Room',
  },
  {
    url: '/images/IMG_balcon.jpg',
    alt: 'Elegant modern living room with corner sofa and minimalist decor.',
    category: 'Living Room',
  },
  {
    url: '/images/IMG_cocina1.jpg',
    alt: 'Stylish kitchen with wooden table, chairs, modern cupboards and appliances.',
    category: 'Kitchen',
  },
  {
    url: '/images/IMG_cocina2.jpg',
    alt: 'Modern apartment kitchen with glossy cabinets and adjacent living area.',
    category: 'Kitchen',
  },
  {
    url: '/images/IMG_cocina3.jpg',
    alt: 'Modern light kitchen with minimalist furniture and illumination.',
    category: 'Kitchen',
  },
  {
    url: '/images/IMG_dormitorio1.jpg',
    alt: 'Contemporary bedroom featuring a stylish brick accent wall and elegant decor.',
    category: 'Bedroom',
  },
  {
    url: '/images/IMG_dormitorio2.jpg',
    alt: 'Contemporary bedroom with white built-in wardrobe and shelves behind bed.',
    category: 'Bedroom',
  },
  {
    url: '/images/IMG_dormitorio3.jpg',
    alt: 'Cozy modern bedroom with green bedding and soft lighting.',
    category: 'Bedroom',
  },
  {
    url: '/images/IMG_balcon_HDR.jpg',
    alt: 'Spacious terrace with glass barrier and metal railings overlooking the city.',
    category: 'Balcony',
  },
  {
    url: '/images/IMG_balcon.jpg',
    alt: 'Spacious city balcony with table and chairs overlooking a scenic urban view.',
    category: 'Balcony',
  },
  {
    url: '/images/IMG_bano1.jpg',
    alt: 'Modern minimalist bathroom with glass shower cabin and shiny tiled walls.',
    category: 'Bathroom',
  },
  {
    url: '/images/IMG_bano2.jpg',
    alt: 'Bright washroom with washing machine, shower, and sink.',
    category: 'Bathroom',
  },
  {
    url: '/images/IMG_pasillo.jpg',
    alt: 'Bright washroom with washing machine, shower, and sink.',
    category: 'Bathroom',
  },
];

export const galleryCategories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Balcony', 'Bathroom'];

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
