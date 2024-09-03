import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCartStore } from "../store";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string;
}

const bestSellers: Product[] = [
  {
    id: 1,
    title: "PuffPuff Mix",
    price: 3000,
    image: "/puffpuff.jpg",
    size: "700grms",
  },
  {
    id: 2,
    title: "Multipurpose seasoning",
    price: 2000,
    image: "/multipurpose.jpg",
    size: "100grms",
  },
  {
    id: 3,
    title: "Aromatic seasoning",
    price: 2000,
    image: "/aromatic.jpg",
    size: "100grms",
  },
  {
    id: 4,
    title: "Red Velvet Cake Mix",
    price: 3700,
    image: "/red velvet.jpg",
    size: "630grms",
  },
  {
    id: 5,
    title: "Zobo(Hibiscus) Tea",
    price: 2000,
    image: "/zobo.jpg",
    size: "20 teabags",
  },
  {
    id: 6,
    title: "Yaji seasoning",
    price: 2000,
    image: "/yaji.jpg",
    size: "100grms",
  },
  {
    id: 7,
    title: "Black Seeds and Mint Tea",
    price: 2000,
    image: "/blasmin.jpg",
    size: "20 teabags",
  },
  {
    id: 8,
    title: "Vanilla Cake Mix",
    price: 3500,
    image: "/vanilla.jpg",
    size: "730grms",
  },
];

const BestSeller: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="py-12 overflow-x-hidden">
      {" "}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
        <div className="relative">
          <Slider {...settings}>
            {bestSellers.map((product) => (
              <div key={product.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 xl:h-72 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-center">
                      {product.title}
                    </h3>
                    <p className="text-gray-600">{product.size}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600 text-lg font-bold">
                        #{product.price}
                      </p>
                      <button
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded-full"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
