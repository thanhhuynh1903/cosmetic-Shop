import { create } from "zustand";

const useCartStore = create((set) => ({
    isOpen : false,
    cartItems: [],
    toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
    addToCart: (item) => {
        set((state) => ({
            cartItems: [...state.cartItems, item],
        }));
    },
    removeFromCart: (id) => {
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
        }));
    },
}));

export default useCartStore;