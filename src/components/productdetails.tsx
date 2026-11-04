
import React, { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMinus,
  HiPlus,
  HiShoppingBag,
} from "react-icons/hi2";

import Header from "../header";
import Footer from "../footer";
import { products, ProductVariant } from "../productdata";
import { useCartStore } from "../store";

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

const ProductDetails: React.FC = () => {
  const { id } = useParams();
 

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const addToCart = useCartStore((state) => state.addToCart);

  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | null>(
      product?.variants[0] ?? null
    );

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedVariant(product?.variants[0] ?? null);
    setQuantity(1);
  }, [product]);

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen bg-[#FFF8EC]">
        <Header />

        <div className="section-container py-24 text-center">
          <h2 className="text-3xl font-black text-[#103923]">
            Product not found
          </h2>

          <p className="mt-3 text-gray-500">
            Sorry, we couldn't find this product.
          </p>

          <Link
            to="/shop"
            className="primary-button mt-8 inline-flex"
          >
            Back to Shop
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: selectedVariant.price,
        size: selectedVariant.size,
        image: product.image,
      },
      quantity
    );
  };

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  const totalPrice = selectedVariant.price * quantity;

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header />

      <main>
        <section className="section-container pt-32 pb-12 md:pt-36 md:pb-16">
         <div className="mb-8 flex flex-wrap items-center gap-5">


  <Link
    to="/"
    className="inline-flex items-center gap-2 rounded-full bg-[#174D32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#103923]"
  >
    <HiArrowLeft />
    Back to Homepage
  </Link>
</div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <div className="overflow-hidden rounded-[2rem] bg-white p-6 md:p-10">
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto h-[350px] w-full object-contain md:h-[480px]"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <span className="w-fit rounded-full bg-[#F5C64B]/30 px-4 py-2 text-sm font-bold text-[#174D32]">
                {product.category}
              </span>

              <h1 className="mt-5 text-3xl font-black leading-tight text-[#103923] md:text-5xl">
                {product.title}
              </h1>

              <p className="mt-4 leading-7 text-gray-600">
                Discover the goodness of Tanik Foods. Carefully
                selected ingredients to bring natural flavour and
                goodness to your everyday meals.
              </p>

              {/* Price */}
              <div className="mt-7">
                <p className="text-sm font-medium text-gray-500">
                  Price
                </p>

                <p className="mt-1 text-3xl font-black text-[#174D32]">
                  {formatPrice(selectedVariant.price)}
                </p>
              </div>

              {/* Package Sizes */}
              <div className="mt-8">
                <h3 className="mb-4 font-bold text-[#292929]">
                  Select Package Size
                </h3>

                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-xl border px-5 py-3 text-sm font-bold transition ${
                        selectedVariant.id === variant.id
                          ? "border-[#174D32] bg-[#174D32] text-white"
                          : "border-[#DED6C9] bg-white text-[#174D32] hover:border-[#174D32]"
                      }`}
                    >
                      {variant.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <h3 className="mb-4 font-bold text-[#292929]">
                  Quantity
                </h3>

                <div className="inline-flex items-center gap-5 rounded-xl border border-[#DED6C9] bg-white p-2">
                  <button
                    onClick={() =>
                      setQuantity((previous) =>
                        Math.max(1, previous - 1)
                      )
                    }
                    disabled={quantity <= 1}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF8EC] text-[#174D32] disabled:opacity-40"
                    aria-label="Decrease quantity"
                  >
                    <HiMinus />
                  </button>

                  <span className="min-w-6 text-center font-bold">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((previous) => previous + 1)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF8EC] text-[#174D32]"
                    aria-label="Increase quantity"
                  >
                    <HiPlus />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mt-8 flex items-center justify-between border-t border-[#E5DCCF] pt-6">
                <span className="font-semibold text-gray-600">
                  Total
                </span>

                <span className="text-2xl font-black text-[#103923]">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="primary-button mt-7 flex w-full items-center justify-center gap-3 py-4"
              >
                <HiShoppingBag className="text-xl" />
                Add to Cart
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Order through WhatsApp. Payment arrangements are
                made after ordering.
              </p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-white py-16">
            <div className="section-container">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#F36B35]">
                    You may also like
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-[#103923] md:text-3xl">
                    More from this collection
                  </h2>
                </div>

                <Link
                  to="/shop"
                  className="hidden items-center gap-2 font-bold text-[#174D32] sm:inline-flex"
                >
                  View all
                  <HiArrowRight />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="group overflow-hidden rounded-2xl border border-[#EDE5D7] bg-[#FFF8EC] p-4 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-40 items-center justify-center rounded-xl bg-white p-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain transition group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-4 font-bold text-[#103923]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      From{" "}
                      {formatPrice(
                        Math.min(
                          ...item.variants.map(
                            (variant) => variant.price
                          )
                        )
                      )}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
