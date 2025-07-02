import { create } from 'zustand';

const useDetailStore = create((set) => ({
  product: null,
  isLoading: false,
  error: null,
  relatedProducts: [],
  isLoadingRelated: false,
  errorRelated: null,

  // Function to fetch product detail from API
  fetchProductDetail: async (id) => {
    console.log(id);
    
    set({ isLoading: true, error: null }); // Start loading
    try {
      const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
      console.log(response.data);
      
      if (!response.ok) {
        throw new Error('Failed to fetch product detail');
      }
      const data = await response.json();
      set({ product: data, isLoading: false }); // Save data to state
    } catch (error) {
      set({ error: error.message, isLoading: false }); // Save error to state
    }
  },
  fetchRelatedProducts: async (brand, productType, excludeId) => {
    set({ isLoadingRelated: true, errorRelated: null });
    try {
      const response = await fetch(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
      );
      let data = await response.json();
      
      // Filter out current product and limit to 4 items
      data = data.filter(product => product.id !== excludeId).slice(0, 4);
      set({ relatedProducts: data, isLoadingRelated: false });
    } catch (err) {
      set({ errorRelated: err.message, isLoadingRelated: false });
    }
  },

}));

export default useDetailStore;
//https://makeup-api.herokuapp.com/api/v1/products/${id}.json