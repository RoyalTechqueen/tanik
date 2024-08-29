import React from "react";
import { useCartStore } from "../store";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaArrowLeft } from "react-icons/fa";
import Header from "../header";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(price);
};

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => {
    const itemTotal = item.quantity * item.price;
    return sum + itemTotal;
  }, 0);

  return (
    <div className="container mx-auto bg-red-50 min-h-screen flex flex-col">
      <Header />
      <div className="p-4 flex-1 overflow-y-auto">
        <h1 className="text-xl font-bold mt-24 text-center">Cart Page</h1>
        <div className="flex items-center gap-4 ">
          <button className="flex items-center text-gray-700">
            <Link to="/">
              <FaArrowLeft className="mr-2" />
            </Link>
            <span>Back</span>
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center">
            <img
              src="/empty cart.png"
              alt="Empty Cart"
              className="w-72 h-48 object-contain"
            />
            <p className="text-xl font-semibold mt-4">
              Your Cart Is Currently Empty!
            </p>
            <p className=" mb-4 text-center text-lg">
              Your journey to living healthy begins here.{" "}
              <br className="hidden sm:flex" /> Click{" "}
              <Link
                to="/shop"
                className=" font-semibold text-red-500 underline"
              >
                here
              </Link>{" "}
              to explore our collection of spices and healthy meals{" "}
              <br className="hidden sm:flex" /> to begin living a healthy life.
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:px-16 md:py-4 gap-8">
            <div className="md:w-1/2 bg-red-50 p-6 shadow-lg rounded-md max-h-[calc(100vh-12rem)] overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center mb-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
                  />
                  <div className="ml-4 flex flex-col text-left items-center">
                    <h2 className="text-md font-semibold">{item.title}</h2>
                    <h3 className="text-lg font-bold ml-4">
                      {formatPrice(item.price)}
                    </h3>
                    <p className="text-md text-gray-600 mt-1">{item.size}</p>
                    <div className="flex items-center mt-2 sm:hidden">
                      <button
                        className="h-10 w-11 rounded-md bg-white border border-gray-300"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="mx-2 text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        className="h-10 w-11 rounded-md bg-white border border-gray-300"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="ml-4 px-2 py-1"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaRegTrashAlt className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center hidden md:flex ml-8">
                    <button
                      className="h-10 w-11 rounded-md bg-white border border-gray-300"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-2 text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      className="h-10 w-11 rounded-md bg-white border border-gray-300"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 px-2 py-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaRegTrashAlt className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 bg-red-50 p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              {cart.length > 0 && (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between mb-2">
                      <span>{item.title}</span>
                      <span>
                        {item.quantity} x {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                  <hr className="my-4" />
                  <div className="flex justify-between font-bold mb-4">
                    <span>Order Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <button className="w-full bg-red-500 text-white p-2 rounded-lg mb-4">
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </button>
                  <button
                    className="text-red-500 underline text-left w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
