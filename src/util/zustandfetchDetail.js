import { create } from 'zustand';

const useDetailStore = create((set) => ({
  product: null, // State to store the product detail
  isLoading: false, // Loading state
  error: null, // Error state

  // Function to fetch product detail from API
  fetchProductDetail: async (id) => {
    set({ isLoading: true, error: null }); // Start loading
    try {
      const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch product detail');
      }
      const data = await response.json();
      set({ product: data, isLoading: false }); // Save data to state
    } catch (error) {
      set({ error: error.message, isLoading: false }); // Save error to state
    }
  },
}));

export default useDetailStore;
