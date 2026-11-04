
export interface ProductVariant {
  id: string;
  size: string;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  // NATURAL SEASONINGS
  {
    id: 1,
    title: "Aromatic Seasoning",
    category: "Natural Seasoning",
    image: "/aromatic.jpg",
    variants: [
      { id: "aromatic-40g", size: "40grms", price: 1500 },
      { id: "aromatic-80g", size: "80grms", price: 2500 },
      { id: "aromatic-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 2,
    title: "Chicken Seasoning",
    category: "Natural Seasoning",
    image: "/chicken.jpg",
    variants: [
      { id: "chicken-40g", size: "40grms", price: 1500 },
      { id: "chicken-80g", size: "80grms", price: 2500 },
      { id: "chicken-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 3,
    title: "Multipurpose Seasoning",
    category: "Natural Seasoning",
    image: "/multipurpose.jpg",
    variants: [
      { id: "multipurpose-40g", size: "40grms", price: 1500 },
      { id: "multipurpose-80g", size: "80grms", price: 2500 },
      { id: "multipurpose-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 4,
    title: "Ginger, Garlic and Onion Powder",
    category: "Natural Seasoning",
    image: "/ginger garlic.jpg",
    variants: [
      { id: "ginger-garlic-40g", size: "40grms", price: 2000 },
      { id: "ginger-garlic-90g", size: "90grms", price: 4000 },
    ],
  },
  {
    id: 5,
    title: "Curry Seasoning",
    category: "Natural Seasoning",
    image: "/curry.jpg",
    variants: [
      { id: "curry-40g", size: "40grms", price: 1500 },
      { id: "curry-80g", size: "80grms", price: 2500 },
      { id: "curry-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 6,
    title: "Rice Enchant Seasoning",
    category: "Natural Seasoning",
    image: "/rice enchant.jpg",
    variants: [
      { id: "rice-enchant-40g", size: "40grms", price: 1500 },
      { id: "rice-enchant-80g", size: "80grms", price: 2500 },
      { id: "rice-enchant-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 7,
    title: "Fish Seasoning",
    category: "Natural Seasoning",
    image: "/fish.jpg",
    variants: [
      { id: "fish-40g", size: "40grms", price: 1500 },
      { id: "fish-80g", size: "80grms", price: 2500 },
      { id: "fish-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 8,
    title: "Meat Seasoning",
    category: "Natural Seasoning",
    image: "/meat.jpg",
    variants: [
      { id: "meat-40g", size: "40grms", price: 1500 },
      { id: "meat-80g", size: "80grms", price: 2500 },
      { id: "meat-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 9,
    title: "Peppersoup Seasoning",
    category: "Natural Seasoning",
    image: "/peppersoup2.jpg",
    variants: [
      { id: "peppersoup-40g", size: "40grms", price: 2000 },
      { id: "peppersoup-90g", size: "90grms", price: 3000 },
    ],
  },
  {
    id: 10,
    title: "Yaji Seasoning",
    category: "Natural Seasoning",
    image: "/yaji.jpg",
    variants: [
      { id: "yaji-40g", size: "40grms", price: 1500 },
      { id: "yaji-80g", size: "80grms", price: 2500 },
      { id: "yaji-90g", size: "90grms", price: 2700 },
    ],
  },
  {
    id: 11,
    title: "Iru & Crayfish Mix",
    category: "Natural Seasoning",
    image: "/iru.jpeg",
    variants: [
      { id: "iru-40g", size: "40grms", price: 2000 },
      { id: "iru-90g", size: "90grms", price: 4000 },
    ],
  },
  {
    id: 12,
    title: "All Purpose Marinade",
    category: "Natural Seasoning",
    image: "/marinade.jpeg",
    variants: [
      { id: "marinade-40g", size: "40grms", price: 1500 },
      { id: "marinade-80g", size: "80grms", price: 2500 },
      { id: "marinade-90g", size: "90grms", price: 2700 },
    ],
  },

  // HEALTHY TEAS
  {
    id: 13,
    title: "Black Seed and Mint (BLASMIN)",
    category: "Healthy Teas",
    image: "/blasmin.jpg",
    variants: [
      { id: "blasmin-20", size: "20 teabags", price: 3000 },
    ],
  },
  {
    id: 14,
    title: "Zobo (Hibiscus)",
    category: "Healthy Teas",
    image: "/zobo.jpg",
    variants: [
      { id: "zobo-20", size: "20 teabags", price: 3000 },
    ],
  },
  {
    id: 15,
    title: "Ginger Tea",
    category: "Healthy Teas",
    image: "/ginger.jpg",
    variants: [
      { id: "ginger-tea-20", size: "20 teabags", price: 3000 },
    ],
  },
  {
    id: 16,
    title: "Green Tea",
    category: "Healthy Teas",
    image: "/cinger.jpg",
    variants: [
      { id: "green-20", size: "20 teabags", price: 3000 },
    ],
  },
  {
    id: 17,
    title: "Arabian Tea",
    category: "Healthy Teas",
    image: "/arabian.jpeg",
    variants: [
      { id: "arabian-tea-20", size: "20 teabags", price: 3000 },
    ],
  },
  {
    id: 18,
    title: "Sleepy Time Tea",
    category: "Healthy Teas",
    image: "/sleepy.jpeg",
    variants: [
      { id: "sleeping-tea-20", size: "20 teabags", price: 4000 },
    ],
  },
  {
    id: 19,
    title: "Spearmint Tea",
    category: "Healthy Teas",
    image: "/spearmint.jpeg",
    variants: [
      { id: "spearmint-tea-20", size: "20 teabags", price: 4000 },
    ],
  },

  // PASTRY MIXES
  {
    id: 20,
    title: "Chocolate Cake Mix",
    category: "Pastry Mix",
    image: "/chocolate.jpg",
    variants: [
      { id: "chocolate-400g", size: "400grms", price: 3000 },
    ],
  },
  {
    id: 21,
    title: "Puff Puff Mix",
    category: "Pastry Mix",
    image: "/puffpuff.jpg",
    variants: [
      { id: "puff-350g", size: "350grms", price: 2500 },
      { id: "puff-700g", size: "700grms", price: 4500 },
    ],
  },
  {
    id: 22,
    title: "Red Velvet Cake Mix",
    category: "Pastry Mix",
    image: "/red velvet.jpg",
    variants: [
      { id: "redvelvet-630g", size: "630grms", price: 4000 },
    ],
  },
  {
    id: 23,
    title: "Pancake and Buns Mix",
    category: "Pastry Mix",
    image: "/pancake.jpg",
    variants: [
      { id: "pancake-350g", size: "350grms", price: 2500 },
      { id: "pancake-700g", size: "700grms", price: 4500 },
    ],
  },
  {
    id: 24,
    title: "Vanilla Cake Mix",
    category: "Pastry Mix",
    image: "/vanilla.jpg",
    variants: [
      { id: "vanilla-730g", size: "730grms", price: 4000 },
    ],
  },

  // CEREAL & HEALTHY MEALS
  // Add your healthy meal products here.
   {
    id: 25,
    title: "Oats",
    category: "Healthy Meals",
    image: "/oats.jpeg",
    variants: [
      { id: "oats-halfbucket", size: "Half-bucket", price: 3750 },
      { id: "oats-1bucket", size: "1-bucket", price: 7500 },
    ],
  },
  {
    id: 26,
    title: "Tapioca",
    category: "Healthy Meals",
    image: "/tapioca.jpeg",
    variants: [
      { id: "tapioca-halfbucket", size: "Half-bucket", price: 2500 },
      { id: "tapioca-1bucket", size: "1-bucket", price: 5000 },
    ],
  },
  {
    id: 27,
    title: "3-in-1 Creamy Tea",
    category: "Healthy Meals",
    image: "/tea.png",
    variants: [
      { id: "tea", size: "400grms", price: 3500 },
      
    ],
  },
    {
    id: 28,
    title: "Golden Morn",
    category: "Healthy Meals",
    image: "/goldenmorn.png",
    variants: [
      { id: "gmorn-halfbucket", size: "Half-bucket", price: 4000 },
      { id: "gmorn-1bucket", size: "1-bucket", price: 8000 },
    ],
  },
    {
    id: 29,
    title: "CornFlakes",
    category: "Healthy Meals",
    image: "/cornflakes.png",
    variants: [
      { id: "cornf-halfbucket", size: "Half-bucket", price: 3750 },
      { id: "cornf-1bucket", size: "1-bucket", price: 7500 },
    ],
  },
    {
    id: 30,
    title: "SuperCow Milk",
    category: "Healthy Meals",
    image: "/super.png",
    variants: [
      { id: "scmilk-halfbucket", size: "400grms", price: 3800 },
      { id: "scmilk-1bucket", size: "250grms", price: 2300 },
    ],
  },
  {
    id: 31,
    title: "Lactorich Milk",
    category: "Healthy Meals",
    image: "/lactorich.png",
    variants: [
      { id: "lacmilk-halfbucket", size: "400grms", price: 4000 },
      { id: "lacmilk-1bucket", size: "250grms", price: 2400 },
    ],
  },
];
