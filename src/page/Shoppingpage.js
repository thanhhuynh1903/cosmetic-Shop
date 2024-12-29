import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Mostlike from "../components/Mostlike/Mostlike";
import Product from "./Products/Product";
import ProductsList from "./Products/ProductsList";
import Tags from "../components/Tags/Tags";
import useAllProductStore from "../util/zustandfetchAllproduct";
import useCount from "../util/zustandCount";
import { useEffect } from "react";
import FloatingCart from "../components/CartFloat/FloatingCart";
import Drawer from "../components/Drawer/Drawer";
export default function Shoppingpage() {
  const { products, fetchAllProducts, isLoading, error,categoryFilter, setCategoryFilter,tagFilter, setTagFilter } = useAllProductStore();
  const { setProducts, updateCategoryCount, categoryCount } = useCount();

  // Fetch dữ liệu khi component được mount
  useEffect(() => {
    fetchAllProducts(); // Gọi hàm fetchProducts từ Zustand store
  }, [fetchAllProducts]); // Dependency array đảm bảo chỉ chạy một lần khi component mount

  useEffect(() => {
    if (products.length > 0) {
      setProducts(products); // Set products state
      updateCategoryCount(); // Update category count based on products state
    }
  }, [products, setProducts, updateCategoryCount]); // Ensure this runs when products are updated

  const filteredProducts = products.filter(product => {
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    const matchesTag = tagFilter ? product.tag_list?.includes(tagFilter) : true;
    return matchesCategory && matchesTag;
  });

  return (
    <div className="m-5 ">
      <h2 className="text-center text-[#C28B7A] my-6 text-[35px] ">
        Choosing type of products
      </h2>
      <Product />
      <Mostlike />
      <h2 className="text-center text-[#C28B7A] mt-3 mb-2 text-[35px] ">
        All products
      </h2>
      <div className="grid grid-cols-10 gap-4 p-4">
        <div className="col-span-2 p-4 rounded-lg">
          <Sidebar categorys={products} categoryCount={categoryCount} setCategoryFilter={setCategoryFilter}/>
          <Tags tags={products} setTagFilter={setTagFilter}/>
        </div>
        <div className="col-span-8 p-4 rounded-lg">
        {categoryFilter && <p className="text-[15px] text-start mb-2">Result for <strong>{categoryFilter}</strong></p>}
        {tagFilter && <p className="text-[15px] text-start mb-2">Tag: <strong>{tagFilter}</strong></p>}
          <ProductsList products={filteredProducts} loading={isLoading}/>
        </div>
      </div>
      <Drawer/>
      <FloatingCart/>
    </div>
  );
}
