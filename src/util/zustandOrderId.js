import { create } from "zustand";

const useOrderStore = create((set) => ({
    order: "",
    setOrder: (orders) => set({ order : orders }),
    clearOrder: () => set({ order: null }),
}));

export default useOrderStore;