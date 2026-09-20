export type ProductSize = {
  size: string;
  price: number;
};

export type ProductCategory = "Classic" | "Probiotic" | "Kefir";

export type Product = {
  slug: string;
  name: string;
  flavor: string;
  category: ProductCategory;
  sizes: ProductSize[];
  culture: string;
  image: string;
  description: string;
  tags: string[];
};

export const products: Product[] = [
  // Classic line
  {
    slug: "vanilla-bean",
    name: "Vanilla Bean",
    flavor: "Vanilla",
    category: "Classic",
    sizes: [
      { size: "1L", price: 200 },
      { size: "5L", price: 1000 },
    ],
    culture: "3-day set",
    image: "/images/vanillayogurt.jpeg",
    description:
      "Silky, creamy yoghurt infused with delicate vanilla flavour for a smooth, naturally indulgent spoonful.",
    tags: ["Live cultures", "House favourite"],
  },
  {
    slug: "strawberry",
    name: "Strawberry",
    flavor: "Strawberry",
    category: "Classic",
    sizes: [
      { size: "1L", price: 200 },
      { size: "5L", price: 1000 },
    ],
    culture: "2-day set",
    image: "/images/strawberryyoghurt1.jpeg",
    description:
      "Creamy yoghurt swirled with sweet strawberry for a fruity, classic favourite.",
    tags: ["Live cultures", "Real fruit"],
  },
  {
    slug: "passion",
    name: "Passion",
    flavor: "Passion fruit",
    category: "Classic",
    sizes: [
      { size: "1L", price: 200 },
      { size: "5L", price: 1000 },
    ],
    culture: "2-day set",
    image: "/images/passionyoghurt.jpeg",
    description:
      "Creamy yoghurt meets the bright, tropical zing of real passion fruit.",
    tags: ["Live cultures", "Real fruit"],
  },
  {
    slug: "blueberry",
    name: "Blueberry",
    flavor: "Blueberry",
    category: "Classic",
    sizes: [
      { size: "1L", price: 200 },
      { size: "5L", price: 1000 },
    ],
    culture: "2-day set",
    image: "/images/mixedflavor.jpeg",
    description:
      "Velvety yoghurt layered with juicy blueberry goodness for a delicious blend of creamy, fruity and slightly tangy.",
    tags: ["Live cultures", "Layered"],
  },
  {
    slug: "lemon",
    name: "Lemon",
    flavor: "Lemon",
    category: "Classic",
    sizes: [
      { size: "1L", price: 200 },
      { size: "5L", price: 1000 },
    ],
    culture: "2-day set",
    image: "/images/lemonyoghurt.jpeg",
    description:
      "Lusciously creamy yoghurt with a bright, refreshing citrus finish.",
    tags: ["Live cultures", "Seasonal"],
  },
  {
    slug: "orange",
    name: "Orange",
    flavor: "Orange",
    category: "Classic",
    sizes: [
      { size: "1L", price: 200 },
      { size: "5L", price: 1000 },
    ],
    culture: "2-day set",
    image: "/images/mixedflavor.jpeg",
    description: "Creamy yoghurt with a zesty, sunny orange flavour.",
    tags: ["Live cultures", "Real fruit"],
  },
  {
    slug: "mango",
    name: "Mango",
    flavor: "Mango",
    category: "Classic",
    sizes: [
      { size: "1L", price: 230 },
      { size: "5L", price: 1150 },
    ],
    culture: "2-day set",
    image: "/images/mixedflavor.jpeg",
    description: "Lusciously creamy with the sweet tropical taste of ripe mango.",
    tags: ["Live cultures", "Seasonal"],
  },
  {
    slug: "blackcurrant",
    name: "Blackcurrant",
    flavor: "Blackcurrant",
    category: "Classic",
    sizes: [
      { size: "1L", price: 230 },
      { size: "5L", price: 1150 },
    ],
    culture: "2-day set",
    image: "/images/blackcurrentyoghurt.jpeg",
    description:
      "Rich, creamy yoghurt with the deep, tangy sweetness of blackcurrant.",
    tags: ["Live cultures", "Seasonal"],
  },

  // Probiotic line
  {
    slug: "probiotic-vanilla",
    name: "Probiotic Vanilla",
    flavor: "Vanilla",
    category: "Probiotic",
    sizes: [
      { size: "1L", price: 250 },
      { size: "5L", price: 0 }, // TODO: confirm 5L price
    ],
    culture: "Probiotic",
    image: "/images/vanillayogurt.jpeg",
    description:
      "Smooth vanilla yoghurt boosted with added probiotic cultures for extra gut-friendly goodness.",
    tags: ["Probiotic", "Live cultures"],
  },
  {
    slug: "probiotic-strawberry",
    name: "Probiotic Strawberry",
    flavor: "Strawberry",
    category: "Probiotic",
    sizes: [
      { size: "1L", price: 250 },
      { size: "5L", price: 0 }, // TODO: confirm 5L price
    ],
    culture: "Probiotic",
    image: "/images/strawberryyoghurt.jpeg",
    description:
      "Creamy strawberry yoghurt boosted with added probiotic cultures for extra gut-friendly goodness.",
    tags: ["Probiotic", "Live cultures"],
  },
  {
    slug: "probiotic-plain",
    name: "Probiotic Plain",
    flavor: "Unsweetened",
    category: "Probiotic",
    sizes: [
      { size: "1L", price: 250 },
      { size: "5L", price: 0 }, // TODO: confirm 5L price
    ],
    culture: "Probiotic",
    image: "/images/plainyoghurt.png",
    description:
      "Smooth, naturally tangy plain yoghurt boosted with added probiotic cultures for extra gut-friendly goodness.",
    tags: ["Probiotic", "Live cultures", "No sugar"],
  },

  // Kefir line
  {
    slug: "kefir-plain",
    name: "Kefir Plain",
    flavor: "Plain",
    category: "Kefir",
    sizes: [{ size: "1L", price: 0 }], // TODO: confirm price
    culture: "Kefir",
    image: "/images/plainyoghurt.png",
    description: "Traditional plain kefir, tangy and packed with live cultures.",
    tags: ["Kefir", "Live cultures"],
  },
  {
    slug: "kefir-naturally-tangy",
    name: "Kefir Naturally Tangy",
    flavor: "Naturally tangy",
    category: "Kefir",
    sizes: [{ size: "1L", price: 0 }], // TODO: confirm price
    culture: "Kefir",
    image: "/images/plainyoghurt.png",
    description: "Naturally tangy kefir with no added sweetness, just the pure ferment.",
    tags: ["Kefir", "Live cultures"],
  },
  {
    slug: "kefir-lightly-sweetened",
    name: "Kefir Unsweetened / Lightly Sweetened",
    flavor: "Unsweetened / Lightly sweetened",
    category: "Kefir",
    sizes: [{ size: "1L", price: 0 }], // TODO: confirm price
    culture: "Kefir",
    image: "/images/plainyoghurt.png",
    description: "A gentler kefir, left unsweetened or lightly sweetened to taste.",
    tags: ["Kefir", "Live cultures"],
  },
  {
    slug: "kefir-strawberry",
    name: "Kefir Strawberry",
    flavor: "Strawberry",
    category: "Kefir",
    sizes: [{ size: "1L", price: 0 }], // TODO: confirm price
    culture: "Kefir",
    image: "/images/strawberryyoghurt.jpeg",
    description: "Creamy kefir swirled with sweet strawberry.",
    tags: ["Kefir", "Live cultures", "Real fruit"],
  },
  {
    slug: "kefir-passion",
    name: "Kefir Passion",
    flavor: "Passion fruit",
    category: "Kefir",
    sizes: [{ size: "1L", price: 0 }], // TODO: confirm price
    culture: "Kefir",
    image: "/images/passionyoghurt.png",
    description: "Tangy kefir with the bright, tropical zing of real passion fruit.",
    tags: ["Kefir", "Live cultures", "Real fruit"],
  },
  {
    slug: "kefir-vanilla",
    name: "Kefir Vanilla",
    flavor: "Vanilla",
    category: "Kefir",
    sizes: [{ size: "1L", price: 0 }], // TODO: confirm price
    culture: "Kefir",
    image: "/images/vanillayoghurt.png",
    description: "Smooth kefir infused with delicate vanilla flavour.",
    tags: ["Kefir", "Live cultures"],
  },
];
