import {create} from 'zustand';

const useCount = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  categoryCount: {},
  updateCategoryCount: () =>
    set((state) => {
      const categoryCount = {};
      state.products.forEach((product) => {
        const category = product.category;
        if (category) {
          categoryCount[category] = (categoryCount[category] || 0) + 1;
        }
      });
      return { categoryCount };
    }),
}));
export default useCount;
