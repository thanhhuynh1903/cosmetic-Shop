import { create } from "zustand";

const useUserState = create((set) => ({
    user: [],
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}));

export default useUserState;