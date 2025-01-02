// store/useProductStore.js
import { create } from 'zustand';

const useAllProductStore = create((set) => ({
  products: [], // Trạng thái lưu trữ danh sách sản phẩm
  isLoading: false, // Trạng thái loading
  error: null, // Trạng thái lỗi
  tagFilter: '', // State for tag filter
  categoryFilter: '',
  // Hàm fetch dữ liệu từ API
  fetchAllProducts: async (retryCount = 0) => {
    set({ isLoading: true, error: null }); // Bắt đầu loading
    try {
      const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      const limitedData = data.slice(10, 40); // Chỉ lấy 30 sản phẩm đầu tiên
      
      set({ products: limitedData, isLoading: false }); // Lưu dữ liệu vào state
    } catch (error) {
      if (retryCount < 5) { // Thử lại tối đa 5 lần
        const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff delay
        setTimeout(() => {
          useAllProductStore.getState().fetchAllProducts(retryCount + 1);
        }, delay);
      } else {
        set({ error: error.message, isLoading: false }); // Lưu lỗi vào state, reset retry count
      }
    }
  },
 
  setCategoryFilter: (category) => set({ categoryFilter: category }),
  setTagFilter: (tag) => set({ tagFilter: tag }), // Function to set tag filter
}));

export default useAllProductStore;

