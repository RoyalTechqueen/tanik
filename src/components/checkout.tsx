
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
  FaShoppingBag,
} from "react-icons/fa";
import { toast } from "react-toastify";

import { useCartStore } from "../store";
import Header from "../header";
import Footer from "../footer";

const WHATSAPP_NUMBER = "2347036104433";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};

const Checkout: React.FC = () => {
  const cart = useCartStore((state) => state.cart);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleCheckout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      toast.info("Please complete all your details.");
      return;
    }

    if (cart.length === 0) {
      toast.info("Your cart is empty. Add some products first.");
      return;
    }

    const customerName = `${name.trim()} ${lastName.trim()}`;

    const itemList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.title} (${item.size})\n   Quantity: ${
            item.quantity
          }\n   Unit Price: ${formatPrice(
            item.price
          )}\n   Subtotal: ${formatPrice(item.price * item.quantity)}`
      )
      .join("\n\n");

    const message = `Hello Tanik Foods!

I would like to place an order.

CUSTOMER DETAILS
Name: ${customerName}
Phone Number: ${phone.trim()}

ORDER DETAILS
${itemList}

ORDER SUMMARY
Total Items: ${itemCount}
Order Total: ${formatPrice(total)}

Please confirm my order and let me know the delivery arrangements and payment details.

Thank you!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    const whatsappWindow = window.open(whatsappUrl, "_blank");

    if (!whatsappWindow) {
      toast.error(
        "WhatsApp could not be opened. Please allow pop-ups and try again."
      );
      return;
    }

    whatsappWindow.opener = null;

    toast.success(
      "WhatsApp opened! Please send your order to complete the process."
    );

    // Cart is intentionally preserved until the customer confirms the order.
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header />

      <main className="section-container pb-20 pt-28 md:pt-32">
        {/* Page heading */}
        <div className="mb-10">
          <Link
            to="/cart"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174D32] transition hover:text-[#F36B35]"
          >
            <FaArrowLeft />
            Back to Cart
          </Link>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
            Just one more step
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#174D32] md:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Provide your details and send your order directly to Tanik Foods
            on WhatsApp. We'll confirm your order and delivery arrangements.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl border border-[#174D32]/10 bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F5C64B]/20">
              <FaShoppingBag className="text-3xl text-[#174D32]" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#174D32]">
              Nothing to checkout yet
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Your shopping cart is currently empty.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#174D32] px-7 py-3 font-semibold text-white transition hover:bg-[#103923]"
            >
              Explore Products
              <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
            {/* Customer information */}
            <section className="rounded-2xl border border-[#174D32]/10 bg-white p-5 shadow-sm sm:p-8 lg:col-span-3">
              <div className="mb-7">
                <h2 className="text-xl font-bold text-[#174D32]">
                  Your Information
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please provide the details we can use to contact you about
                  your order.
                </p>
              </div>

              <form onSubmit={handleCheckout} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      First Name *
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Enter your first name"
                      autoComplete="given-name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#FFF8EC]/40 px-4 py-3 text-sm outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-semibold text-[#292929]"
                    >
                      Last Name *
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder="Enter your last name"
                      autoComplete="family-name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#FFF8EC]/40 px-4 py-3 text-sm outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#292929]"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="e.g. 08012345678"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#FFF8EC]/40 px-4 py-3 text-sm outline-none transition focus:border-[#174D32] focus:ring-2 focus:ring-[#174D32]/10"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Enter a phone number where we can reach you.
                  </p>
                </div>

                <div className="rounded-xl bg-[#FFF8EC] p-4">
                  <div className="flex items-start gap-3">
                    <FaWhatsapp className="mt-1 shrink-0 text-xl text-[#174D32]" />

                    <div>
                      <p className="text-sm font-bold text-[#174D32]">
                        Order through WhatsApp
                      </p>
                      <p className="mt-1 text-xs leading-6 text-gray-600">
                        Your order details will be prepared automatically.
                        WhatsApp will open so you can review and send your
                        message to Tanik Foods.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#174D32] px-5 py-4 font-bold text-white transition hover:bg-[#103923]"
                >
                  <FaWhatsapp className="text-xl" />
                  Proceed to WhatsApp
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  Your order is not confirmed until you send the WhatsApp
                  message and Tanik Foods confirms it.
                </p>
              </form>
            </section>

            {/* Order summary */}
            <aside className="rounded-2xl border border-[#174D32]/10 bg-white p-5 shadow-sm lg:col-span-2 lg:sticky lg:top-28 sm:p-6">
              <h2 className="text-xl font-bold text-[#174D32]">
                Your Order
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {itemCount} {itemCount === 1 ? "item" : "items"} selected
              </p>

              <div className="my-6 max-h-[420px] space-y-5 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F7F1E5]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-[#174D32]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.size} · Qty: {item.quantity}
                      </p>

                      <p className="mt-2 text-sm font-bold text-[#292929]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-gray-200 pt-5">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <div className="mt-4 flex justify-between text-lg font-extrabold text-[#174D32]">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <p className="mt-5 rounded-xl bg-[#FFF8EC] p-3 text-xs leading-6 text-gray-600">
                Delivery charges and payment arrangements will be discussed
                and confirmed directly with you.
              </p>

              <Link
                to="/cart"
                className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#174D32] transition hover:text-[#F36B35]"
              >
                <FaArrowLeft />
                Edit Cart
              </Link>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
