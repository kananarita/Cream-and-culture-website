export type Product = {
  slug: string;
  name: string;
  flavor: string;
  price: number;
  size: string;
  culture: string;
  image: string;
  description: string;
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "plain-cultured",
    name: "Plain Cultured",
    flavor: "Unsweetened",
    price: 180,
    size: "500ml",
    culture: "3-day set",
    image: "/images/plainyoghurt.png",
    description:
      "Smooth, naturally tangy and wonderfully creamy. A simple, wholesome yoghurt made to be enjoyed just as it is.",
    tags: ["Live cultures", "No sugar"],
  },
  {
    slug: "passion-honey",
    name: "Passion & Honey",
    flavor: "Passion fruit",
    price: 220,
    size: "500ml",
    culture: "2-day set",
    image: "/images/passionyoghurt.png",
    description:
      "Creamy yoghurt meets the bright, tropical zing of real passion fruit, gently balanced with a touch of natural honey.",
    tags: ["Live cultures", "Real fruit"],
  },
  {
    slug: "berry-compote",
    name: "Berry Compote",
    flavor: "Blueberry",
    price: 220,
    size: "500ml",
    culture: "2-day set",
    image: "/images/blueberryyoghurt.png",
    description:
      "Velvety yoghurt layered with juicy blueberry goodness for a delicious blend of creamy, fruity and slightly tangy.",
    tags: ["Live cultures", "Layered"],
  },
  {
    slug: "lemon-zest",
    name: "Lemon",
    flavor: "Lemon",
    price: 230,
    size: "500ml",
    culture: "2-day set",
    image: "/images/lemonyoghurt.png",
    description:
      "Lusciously creamy with the sweet tropical taste of ripe mango and a gentle hint of turmeric for a bright, refreshing finish.",
    tags: ["Live cultures", "Seasonal"],
  },
  {
    slug: "vanilla-bean",
    name: "Vanilla Bean",
    flavor: "Vanilla",
    price: 210,
    size: "500ml",
    culture: "3-day set",
    image: "/images/vanillayoghurt.png",
    description:
      "Silky, creamy yoghurt infused with delicate vanilla flavour for a smooth, naturally indulgent spoonful.",
    tags: ["Live cultures", "House favourite"],
  },
  {
    slug: "greek-thick",
    name: "Greek-Style Thick",
    flavor: "sweetened",
    price: 260,
    size: "500ml",
    culture: "Strained 3x",
    image: "/images/strawberryyoghurt.jpeg",
    description:
      "Extra thick, rich and luxuriously creamy. Strained for a satisfying texture and a beautifully smooth, naturally tangy taste.",
    tags: ["Live cultures", "High protein"],
  },
];
