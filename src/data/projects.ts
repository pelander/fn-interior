export interface Project {
  slug: string;
  name: string;
  description: string;
  size: string;
  location: string;
  heroImage: string;
  images: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "finca-la-inika",
    name: "Finca La Inika",
    description: "A restored rural estate blending traditional architecture with contemporary comfort.",
    size: "340 m²",
    location: "Mallorca, Spain",
    heroImage: "/images/project1/entrance-finca-la-inika-ibiza-spain.webp",
    images: [
      { src: "/images/project1/entrance-finca-la-inika-ibiza-spain.webp", alt: "Entrance of Finca La Inika" },
      { src: "/images/project1/dining-finca-la-inika-ibiza-spain.webp", alt: "Dining area" },
      { src: "/images/project1/bar-finca-la-inika-ibiza-spain.webp", alt: "Bar area" },
      { src: "/images/project1/interior-finca-la-inika-ibiza-spain.webp", alt: "Interior details" },
      { src: "/images/project1/nook-finca-la-inika-ibiza-spain.webp", alt: "Reading nook" },
      { src: "/images/project1/art-finca-la-inika-ibiza-spain.webp", alt: "Art installation" },
      { src: "/images/project1/terrace-finca-la-inika-ibiza-spain.webp", alt: "Terrace view" },
    ],
  },
  {
    slug: "vestige-santa-ana",
    name: "Vestige Santa Ana",
    description: "A refined apartment renovation in the heart of Palma's historic quarter.",
    size: "120 m²",
    location: "Palma de Mallorca",
    heroImage: "/images/project2/vestige-santa-ana-living.webp",
    images: [
      { src: "/images/project2/vestige-santa-ana-living.webp", alt: "Living room" },
      { src: "/images/project2/vestige-santa-ana-interior.webp", alt: "Interior view" },
      { src: "/images/project2/vestige-santa-ana-dining-room-kitchen.webp", alt: "Dining room and kitchen" },
      { src: "/images/project2/vestige-santa-ana-bedroom-4.webp", alt: "Bedroom" },
    ],
  },
  {
    slug: "vista-verde",
    name: "Vista Verde",
    description: "A modern villa designed around natural light and Mediterranean landscape.",
    size: "280 m²",
    location: "Mallorca",
    heroImage: "/images/project3/kobu-vista-verde-mallorca-132.webp",
    images: [
      { src: "/images/project3/kobu-vista-verde-mallorca-132.webp", alt: "Villa interior" },
      { src: "/images/project3/kobu-vista-verde-mallorca-163.webp", alt: "Living space" },
      { src: "/images/project3/kobu-vista-verde-mallorca-terrace-2.webp", alt: "Terrace" },
      { src: "/images/project3/IMG_4090.webp", alt: "Kitchen detail" },
      { src: "/images/project3/IMG_4106-2.webp", alt: "Bathroom" },
      { src: "/images/project3/IMG_4109.webp", alt: "Bedroom view" },
    ],
  },
];
