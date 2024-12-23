// store/useProductStore.js
import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [], // Trạng thái lưu trữ danh sách sản phẩm
  isLoading: false, // Trạng thái loading
  error: null, // Trạng thái lỗi

  // Hàm fetch dữ liệu từ API
  fetchProducts: async () => {
    set({ isLoading: true, error: null }); // Bắt đầu loading
    try {
      const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      const limitedData = data.slice(0, 10); // Chỉ lấy 10 sản phẩm đầu tiên
      
      set({ products: limitedData, isLoading: false }); // Lưu dữ liệu vào state
    } catch (error) {
      set({ error: error.message, isLoading: false }); // Lưu lỗi vào state
    }
  },
}));

export default useProductStore;

