// store/useProductStore.js
import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [], // Trạng thái lưu trữ danh sách sản phẩm
  isLoading: false, // Trạng thái loading
  error: null, // Trạng thái lỗi
  // Hàm fetch dữ liệu từ API
  fetchProducts: async (retryCount = 0) => {
    set({ isLoading: true, error: null }); // Bắt đầu loading
    try {
      const response = await fetch('https://66ed176d380821644cdb4c2b.mockapi.io/cosmetic');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      const limitedData = data.slice(0, 10); // Chỉ lấy 10 sản phẩm đầu tiên
      
      set({ products: limitedData, isLoading: false }); // Lưu dữ liệu vào state
    } catch (error) {
      if (retryCount < 5) { // Thử lại tối đa 5 lần
        const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff delay
        setTimeout(() => {
          useProductStore.getState().fetchProducts(retryCount + 1);
        }, delay);
      } else {
        set({ error: error.message, isLoading: false }); // Lưu lỗi vào state, reset retry count
      }
    }
  },
}));

export default useProductStore;

