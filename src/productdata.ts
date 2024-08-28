export interface Product {
  id: number;
  title: string;
  price: number;
  size: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    image: "/aromatic.jpg",
    title: "Aromatic Seasoning",
    size: "Big Size(100grms)",
    price: 3000,
    category: "Natural Seasoning",
  },
  {
    id: 2,
    image: "blasmin.jpg",
    title: "Black Seed and Mint Tea",
    price: 2000,
    category: "Natural Teas",
    size: "",
  },
  {
    id: 3,
    image: "/chicken.jpg",
    title: "Chicken Seasoning",
    price: 3000,
    category: "Natural Seasoning",
    size: "Big size(100grms)",
  },
  {
    id: 4,
    image: "/chocolate.jpg",
    title: "Chocolate Cake Mix",
    price: 4000,
    category: "Pastry Mix",
    size: "",
  },
  {
    id: 5,
    image: "/cinger.jpg",
    title: "Cinnamon and Ginger Tea",
    price: 2000,
    category: "Natural Teas",
    size: "",
  },
  {
    id: 6,
    image: "/aromatic.jpg",
    title: "Aromatic Seasoning",
    price: 1500,
    category: "Natural Seasoning",
    size: "Small Size(50grms)",
  },
  {
    id: 7,
    image: "/curry.jpg",
    title: "Curry Seasoning",
    price: 3000,
    category: "Natural Seasoning",
    size: "Big size(100gms)",
  },
  {
    id: 8,
    image: "/fish.jpg",
    title: "Fish Seasoning",
    price: 3000,
    category: "Natural Seasoning",
    size: "Big size(100gms)",
  },
];
