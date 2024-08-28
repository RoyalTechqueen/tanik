import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "../productdata";
import { useCartStore } from "../store";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
  }));

  const price =
    typeof product.price === "string"
      ? parseFloat(product.price)
      : product.price;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-full h-60 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
        <FaShoppingCart
          className="text-gray-700"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from firing on the card itself
            addToCart({
              id: product.id,
              title: product.title,
              price: price,
              image: product.image,
              size: product.size,
            });
          }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 mb-2">{product.size}</p>
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg text-gray-900 font-semibold">
            {formatPrice(price)}
          </p>
          <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id: product.id,
                title: product.title,
                price: price,
                image: product.image,
                size: product.size,
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
