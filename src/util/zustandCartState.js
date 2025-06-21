import { create } from "zustand";
//Phai tim hieu ro ve cac trang thai trong cart "NOTE : phai hieu code khuc nay quan trong"
const useCartStore = create((set) => ({
  isOpen: false,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.id === product.id && item.color === product.color
      );
      let updatedCart;
      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id && item.color === product.color
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            ...product,
            quantity: product.quantity,
            uniqueId: `${product.id}-${product.color || "default"}`,
          },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  updateQuantity: (uniqueId, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.uniqueId === uniqueId ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeFromCart: (uniqueId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.uniqueId !== uniqueId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeAllCart: () =>
    set((state) => {
      const updatedCart = [];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
}));

export default useCartStore;
