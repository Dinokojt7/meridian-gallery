export function formatPrice(n) {
  return "R" + n.toLocaleString("en-ZA");
}

const RAW = [
  {
    id: 1,
    title: "Veld at First Light",
    artist: "Marguerite Hahn",
    year: 2023,
    medium: "Oil on canvas",
    size: "120 × 90 cm",
    price: 18500,
    category: "Painting",
    signed: "Signed lower right",
    image: "/artworks/artwork-1-veld.png",
    description:
      "A wide, low landscape worked in thin glazes of ochre and grey-green. Hahn paints the hour before sunrise, when the veld holds its colour back; the horizon is barely a decision. Built up over many sittings, the surface keeps a quiet, breathing light.",
  },
  {
    id: 2,
    title: "Harbour, Evening",
    artist: "Tomas Reyneke",
    year: 2022,
    medium: "Oil on linen",
    size: "100 × 80 cm",
    price: 14200,
    category: "Painting",
    signed: "Signed verso",
    image: "/artworks/artwork-2-harbour.png",
    description:
      "Reyneke returns again and again to working harbours at dusk. Masts, reflections and the last warm windows are reduced to a handful of confident marks. Painted alla prima on a warm ground that glows through the cooler blues.",
  },
  {
    id: 3,
    title: "Study in Ochre",
    artist: "Naledi Mokoena",
    year: 2024,
    medium: "Acrylic & sand on board",
    size: "60 × 60 cm",
    price: 6800,
    category: "Mixed media",
    signed: "Signed and dated verso",
    image: "/artworks/artwork-3-ochre-study.png",
    description:
      "A dense, tactile square where pigment is mixed directly with fine sand. Mokoena scrapes back and rebuilds the ochre field until it reads almost as earth itself — a small painting that holds an enormous amount of looking.",
  },
  {
    id: 4,
    title: "Interior with Window",
    artist: "Élise Caron",
    year: 2021,
    medium: "Oil on canvas",
    size: "90 × 110 cm",
    price: 21000,
    category: "Painting",
    signed: "Signed lower left",
    image: "/artworks/artwork-4-interior.png",
    description:
      "A quiet domestic interior flooded from a single window. Caron is a painter of light on ordinary surfaces — a table, a wall, the edge of a chair — and of the stillness that gathers in a room when no one is in it.",
  },
  {
    id: 5,
    title: "Figures, Resting",
    artist: "Johan de Wet",
    year: 2023,
    medium: "Charcoal & chalk on paper",
    size: "70 × 50 cm",
    price: 4200,
    category: "Works on paper",
    signed: "Signed lower right",
    image: "/artworks/artwork-5-figures.png",
    description:
      "A drawing of two reclining figures, built from confident charcoal and lifted with white chalk. De Wet works quickly from life; the economy of line is the whole pleasure of the sheet.",
  },
  {
    id: 6,
    title: "Coastline No. 4",
    artist: "Imani Dlamini",
    year: 2024,
    medium: "Mixed media on panel",
    size: "80 × 80 cm",
    price: 9500,
    category: "Mixed media",
    signed: "Signed verso",
    image: "/artworks/artwork-6-coastline.png",
    description:
      "Part of Dlamini's ongoing coastline series, layering torn paper, wash and oil stick. The horizon line is the only fixed thing; everything below it is weather, tide and memory of a particular shore.",
  },
  {
    id: 7,
    title: "Still Life with Pears",
    artist: "Marguerite Hahn",
    year: 2022,
    medium: "Oil on board",
    size: "45 × 55 cm",
    price: 5600,
    category: "Painting",
    signed: "Signed lower right",
    image: "/artworks/artwork-7-pears.png",
    description:
      "A small, generous still life. Three pears, a cloth, a grey wall — and Hahn's particular gift for making weight and ripeness felt in paint. An intimate work made to be lived with up close.",
  },
  {
    id: 8,
    title: "Night Garden",
    artist: "Tomas Reyneke",
    year: 2024,
    medium: "Oil on canvas",
    size: "130 × 100 cm",
    price: 24800,
    category: "Painting",
    signed: "Signed verso",
    image: "/artworks/artwork-8-night-garden.png",
    description:
      "Reyneke's largest available work: a garden at night, almost abstract, with deep greens swallowing a single lit window. A painting that rewards distance and then pulls you close.",
  },
  {
    id: 9,
    title: "Portrait of M.",
    artist: "Naledi Mokoena",
    year: 2023,
    medium: "Watercolour on paper",
    size: "50 × 40 cm",
    price: 3800,
    category: "Works on paper",
    signed: "Signed lower left",
    image: "/artworks/artwork-9-portrait.png",
    description:
      "A direct, tender watercolour portrait. Mokoena lets the white of the paper do the work of light, leaving the sitter half-emerged from the page. Framed behind UV glass.",
  },
];

const SOLD_IDS = [4, 7];

export const CATEGORIES = ["All", "Painting", "Works on paper", "Mixed media"];

export const artworks = RAW.map((a) => ({
  ...a,
  sold: SOLD_IDS.includes(a.id),
  priceLabel: formatPrice(a.price),
}));

export function getArtwork(id) {
  return artworks.find((a) => String(a.id) === String(id)) || null;
}

export function relatedTo(id, count = 3) {
  return artworks.filter((a) => String(a.id) !== String(id)).slice(0, count);
}

export const featured = artworks.slice(0, 3);
export const heroArtwork = artworks[7]; // "Night Garden"

export const team = [
  {
    name: "Eleanor Whitfield",
    role: "Founder & Director",
    bio: "Opened Meridian in 2009. Spends most days in the viewing rooms and answers her own email.",
    image: "/team/team-eleanor.png",
  },
  {
    name: "Sipho Ndlovu",
    role: "Senior Curator",
    bio: "Builds the gallery's programme and works closely with each represented artist on new bodies of work.",
    image: "/team/team-sipho.png",
  },
  {
    name: "Clara Bennett",
    role: "Head of Sales",
    bio: "Your first point of contact for acquisitions, viewings and collection advice.",
    image: "/team/team-clara.png",
  },
  {
    name: "Daniel Roux",
    role: "Registrar & Logistics",
    bio: "Handles condition, framing, insured shipping and the paperwork that travels with every work.",
    image: "/team/team-daniel.png",
  },
];

export const gallery = {
  name: "Meridian",
  tagline: "Modern & Contemporary",
  address: ["14 Loop Street", "City Centre"],
  hours: ["Tuesday – Friday, 10 – 6", "Saturday, 10 – 2"],
  email: "hello@meridian.art",
  phone: "+27 21 555 0148",
};
