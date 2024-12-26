import { create } from "zustand";
//Phai tim hieu ro ve cac trang thai trong cart "NOTE : phai hieu code khuc nay quan trong"
const useCartStore = create((set) => ({
    isOpen : false,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
    addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((item) => item.id === product.id);
          let updatedCart;
          if (existingProduct) {
            updatedCart = state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            updatedCart = [...state.cart, { ...product, quantity: 1 }];
          }
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const updatedCart = state.cart.filter((item) => item.id !== productId);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }),
    
}));

export default useCartStore;