// // store/useProductStore.js
// import { create } from "zustand";

// const useProductStoreTC = create((set) => ({
//   tags: [], // Trạng thái lưu trữ danh sách sản phẩm
//   categorys: [],
//   isLoading: false, // Trạng thái loading
//   error: null, // Trạng thái lỗi

//   // Hàm fetch dữ liệu từ API
//   fetchProductsTC: async () => {
//     set({ isLoading: true, error: null }); // Bắt đầu loading
//     try {
//       const response = await fetch(
//         "http://makeup-api.herokuapp.com/api/v1/products.json"
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       const dataLimited = data.slice(0, 10);
//       const limitedDataCate = dataLimited.category
//       const limitedDataTag = dataLimited.tag_list

//       set({
//         tags: limitedDataTag,
//         categorys: limitedDataCate,
//         isLoading: false,
//       }); // Lưu dữ liệu vào state
//     } catch (error) {
//       set({ error: error.message, isLoading: false }); // Lưu lỗi vào state
//     }
//   },
// }));

// export default useProductStoreTC;
