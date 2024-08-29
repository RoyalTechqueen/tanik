import React, { useState } from "react";
import { useCartStore } from "../store";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import { toast } from "react-toastify";

const clearCheckout = useCartStore.getState().clearCheckout;
const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleCheckout = () => {
    if (!name || !lastName || !phone) {
      toast.info("Please fill out the form");
      return;
    }

    const itemList = cart
      .map(
        (item) =>
          `- ${item.title}(${item.size}): ${item.quantity} x ${formatPrice(
            item.price
          )}`
      )
      .join("\n");
    const message = `Good day, my name is ${name}. I just placed an order for the following items:\n${itemList}\nTotal: ${formatPrice(
      total
    )}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348055284718?text=${encodedMessage}`, "_blank");

    clearCheckout();
    setName("");
    setLastName("");
    setPhone("");
    navigate("/");
  };

  return (
    <div className="container mx-auto bg-red-50 min-h-screen">
      <Header />
      <div className="p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mt-24 text-center">Checkout Page</h1>
        <div className="flex items-center gap-4 mb-4">
          <button className="flex items-center text-gray-700">
            <Link to="/cart">
              <FaArrowLeft className="mr-2" />
            </Link>
            <span>Back</span>
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4 bg-red-50">
          <div className="md:col-span-1">
            <form className="max-w-lg mx-auto border border-2 rounded-md p-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="fName"
                    className="block text-sm font-medium text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fName"
                    name="fName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                    placeholder="Enter First Name:"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lName"
                    className="block text-sm font-medium text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lName"
                    name="lName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                    placeholder="Enter Last Name:"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                  placeholder="+123456789"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Proceed to WhatsApp
              </button>
            </form>
          </div>
          <div className="md-col-span-1">
            <div className="border border-2 shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Items:</span>
                <span>{itemCount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Total Price:</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
          <div className="border border-2 shadow-md p-6 max-h-[calc(100vh-12rem)] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Order Details</h3>
            <hr className="my-4" />
            {cart.map((item) => (
              <div key={item.id} className="flex mb-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div className="flex flex-col gap-2 justify-between">
                  <span className="font-medium">{item.title}</span>
                  <span>{item.size}</span>
                  <div className="px-3 py-2 border border-1">
                    <span>Quantity: {item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
