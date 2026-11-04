
import { create } from "zustand";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  items: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  clearCheckout: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getCartItemCount: () => number;
}

const useCartStore = create<StoreState>((set, get) => ({
  items: [],
  cart: [],

  addToCart: (item, quantity = 1) => {
    const existingItem = get().cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      set((state) => ({
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem
        ),
      }));
    } else {
      set((state) => ({
        cart: [
          ...state.cart,
          { ...item, quantity },
        ],
      }));
    }

    toast.success(
      quantity > 1
        ? `${quantity} items added to cart!`
        : "Item added to cart!"
    );
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));

    toast.info("Item removed from cart");
  },

  clearCart: () => {
    set({ cart: [] });
    toast.info("Cart cleared");
  },

  clearCheckout: () => {
    set({ cart: [] });
    toast.info("Order placed");
  },

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  getCartItemCount: () =>
    get().cart.reduce(
      (total, item) => total + item.quantity,
      0
    ),
}));

export { useCartStore };
