
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { Product } from "../productdata";
import { useCartStore } from "../store";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const firstVariant = product.variants[0];

  const lowestPrice = Math.min(
    ...product.variants.map((variant) => variant.price)
  );

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!firstVariant) return;

    addToCart({
      id: product.id,
      variantId: firstVariant.id,
      title: product.title,
      price: firstVariant.price,
      image: product.image,
      size: firstVariant.size,
    });
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#EAE3D7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#174D32]/30 hover:shadow-xl">
      <Link
        to={`/product/${product.id}`}
        onClick={onClick}
        className="block"
      >
        <div className="relative overflow-hidden bg-[#F8F5EE]">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-56 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 sm:h-60"
          />

          {product.variants.length > 1 && (
            <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#174D32] shadow-sm">
              {product.variants.length} sizes
            </span>
          )}

          <span className="absolute right-4 top-4 rounded-full bg-white p-3 text-[#174D32] shadow-md">
            <HiArrowUpRight className="text-xl" />
          </span>
        </div>
      </Link>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#F36B35]">
          {product.category}
        </p>

        <Link
          to={`/product/${product.id}`}
          onClick={onClick}
        >
          <h3 className="mt-2 min-h-[3rem] text-base font-bold leading-snug text-[#292929] transition-colors group-hover:text-[#174D32] sm:text-lg">
            {product.title}
          </h3>
        </Link>

        <p className="mt-4 text-lg font-extrabold text-[#174D32]">
          {product.variants.length > 1 ? "From " : ""}
          {formatPrice(lowestPrice)}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Available sizes:{" "}
          {product.variants.map((variant) => variant.size).join(", ")}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#174D32] py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#103923]"
        >
          <FaShoppingCart />
          Quick Add
        </button>

        <Link
          to={`/product/${product.id}`}
          className="mt-2 flex w-full items-center justify-center py-2 text-sm font-semibold text-[#174D32] transition-colors hover:text-[#F36B35]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
