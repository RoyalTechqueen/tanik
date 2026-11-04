
import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMinus,
  FaPlus,
  FaRegTrashAlt,
  FaShoppingBag,
} from "react-icons/fa";

import { useCartStore } from "../store";
import Header from "../header";
import Footer from "../footer";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header />

      <main className="section-container pb-20 pt-28 md:pt-32">
        {/* Page heading */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174D32] transition hover:text-[#F36B35]"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
            Almost there!
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#174D32] md:text-5xl">
            Your Shopping Cart
          </h1>

          <p className="mt-3 text-sm text-gray-500 md:text-base">
            Review your selected products before proceeding to checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty cart */
          <div className="rounded-3xl border border-[#174D32]/10 bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#F5C64B]/20">
              <FaShoppingBag className="text-4xl text-[#174D32]" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#174D32]">
              Your cart is looking a little empty!
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 md:text-base">
              Your journey to delicious and wholesome meals starts here.
              Explore our natural seasonings, pastry mixes, teas and healthy
              meal options.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#174D32] px-8 py-3 font-semibold text-white transition hover:bg-[#103923]"
            >
              Explore Our Products
              <FaArrowLeft className="rotate-180" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Cart items */}
            <section className="space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#174D32]">
                  Cart Items ({totalItems})
                </h2>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm font-semibold text-red-500 transition hover:text-red-700"
                >
                  Clear Cart
                </button>
              </div>

              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-[#174D32]/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >
                  {/* Product image */}
                  <Link
                    to={`/product/${item.id}`}
                    className="flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F7F1E5] sm:h-32 sm:w-32"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain p-2"
                    />
                  </Link>

                  {/* Product information */}
                  <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        className="font-bold text-[#174D32] transition hover:text-[#F36B35]"
                      >
                        {item.title}
                      </Link>

                      <p className="mt-1 text-sm text-gray-500">
                        Package: {item.size}
                      </p>

                      <p className="mt-2 font-bold text-[#292929]">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      {/* Quantity controls */}
                      <div className="flex items-center rounded-full border border-[#174D32]/15">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.title}`}
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full text-[#174D32] transition hover:bg-[#174D32]/10"
                        >
                          <FaMinus className="text-xs" />
                        </button>

                        <span className="min-w-8 text-center text-sm font-bold text-[#292929]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.title}`}
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full text-[#174D32] transition hover:bg-[#174D32]/10"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>

                      {/* Remove item */}
                      <button
                        type="button"
                        aria-label={`Remove ${item.title} from cart`}
                        onClick={() => removeFromCart(item.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-red-500 transition hover:bg-red-50"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Order summary */}
            <aside className="rounded-2xl border border-[#174D32]/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-[#174D32]">
                Order Summary
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
              </p>

              <div className="my-6 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-[#292929]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {item.size} × {item.quantity}
                      </p>
                    </div>

                    <span className="shrink-0 font-semibold text-[#292929]">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-gray-200 pt-5">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <div className="mt-4 flex justify-between text-lg font-extrabold text-[#174D32]">
                  <span>Order Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <p className="mt-5 rounded-xl bg-[#FFF8EC] p-3 text-xs leading-6 text-gray-600">
                Delivery arrangements and payment details will be confirmed
                with you during WhatsApp checkout.
              </p>

              <Link
                to="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#174D32] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#103923]"
              >
                Proceed to Checkout
                <FaArrowLeft className="rotate-180" />
              </Link>

              <Link
                to="/shop"
                className="mt-4 block text-center text-sm font-semibold text-[#174D32] transition hover:text-[#F36B35]"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
