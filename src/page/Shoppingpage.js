"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Mostlike from "../components/Mostlike/Mostlike";
import Product from "./Products/Product";
import ProductsList from "./Products/ProductsList";
import Tags from "../components/Tags/Tags";
import useAllProductStore from "../util/zustandfetchAllproduct";
import useCount from "../util/zustandCount";
import FloatingCart from "../components/CartFloat/FloatingCart";
import Drawer from "../components/Drawer/Drawer";
import { ShoppingPageSkeleton } from "../components/SkeleteLoading/SkeletonLoading";

export default function Shoppingpage() {
  const {
    products,
    fetchAllProducts,
    isLoading,
    error,
    categoryFilter,
    setCategoryFilter,
    tagFilter,
    setTagFilter,
  } = useAllProductStore();

  const { setProducts, updateCategoryCount, categoryCount } = useCount();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  useEffect(() => {
    if (products.length > 0) {
      setProducts(products);
      updateCategoryCount();
    }
  }, [products, setProducts, updateCategoryCount]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryFilter
      ? product.category === categoryFilter
      : true;
    const matchesTag = tagFilter ? product.tag_list?.includes(tagFilter) : true;
    const matchesSearch = debouncedSearchTerm
      ? product.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        product.description
          ?.toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesTag && matchesSearch;
  });

  if (isLoading) {
    return <ShoppingPageSkeleton />;
  }

  return (
    <div className="mx-3 md:mx-5 my-4 md:my-5">
      <h2 className="text-center text-[#C28B7A] my-4 md:my-6 text-2xl md:text-3xl lg:text-[35px] font-medium">
        Choosing type of products
      </h2>

      <Product />
      <Mostlike />

      <h2 className="text-center text-[#C28B7A] mt-3 mb-5 text-2xl md:text-3xl lg:text-[35px] font-medium">
        All products
      </h2>

      {/* Search Bar Section */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center bg-white rounded-xl border-2 border-[#E8D5CC] focus-within:border-[#C28B7A] focus-within:ring-2 focus-within:ring-[#F8F0ED] transition-all duration-300 px-3 py-2">
          {/* Search Icon */}
          <svg
            className="w-5 h-5 text-[#C28B7A] mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-[#7D6E67] placeholder-[#C28B7A]/60 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Clear Button */}
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
                setDebouncedSearchTerm("");
              }}
              className="text-[#C28B7A] hover:text-[#A06E5F] transition-colors ml-2"
              type="button"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Mobile filter toggle button */}
      <div className="md:hidden flex justify-center my-5">
        <button
          onClick={() =>
            document.getElementById("mobile-filters").classList.toggle("hidden")
          }
          className="px-4 py-2 bg-[#C28B7A] text-white rounded-md text-sm font-medium hover:bg-[#A06E5F] transition-colors"
        >
          Filter Products
        </button>
      </div>

      {/* Mobile filters */}
      <div
        id="mobile-filters"
        className="md:hidden hidden mb-6 p-4 bg-white rounded-lg shadow-md"
      >
        <Sidebar
          categorys={products}
          categoryCount={categoryCount}
          setCategoryFilter={setCategoryFilter}
        />
        <Tags tags={products} setTagFilter={setTagFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 p-2 md:p-4">
        {/* Sidebar */}
        <div className="hidden md:block md:col-span-3 lg:col-span-2 p-4 bg-white rounded-lg shadow-sm">
          <Sidebar
            categorys={products}
            categoryCount={categoryCount}
            setCategoryFilter={setCategoryFilter}
          />
          <Tags tags={products} setTagFilter={setTagFilter} />
        </div>

        {/* Products list */}
        <div className="col-span-1 md:col-span-7 lg:col-span-8 p-2 md:p-4 rounded-lg">
          {/* Filter indicators */}
          <div className="flex flex-wrap gap-2 mb-3">
            {categoryFilter && (
              <div className="inline-flex items-center px-3 py-1.5 bg-[#f8f0ed] text-[#C28B7A] rounded-full text-sm">
                <span>
                  Category: <strong>{categoryFilter}</strong>
                </span>
                <button
                  onClick={() => setCategoryFilter(null)}
                  className="ml-2 text-[#C28B7A] hover:text-[#a06e5f]"
                >
                  ✕
                </button>
              </div>
            )}

            {tagFilter && (
              <div className="inline-flex items-center px-3 py-1.5 bg-[#f8f0ed] text-[#C28B7A] rounded-full text-sm">
                <span>
                  Tag: <strong>{tagFilter}</strong>
                </span>
                <button
                  onClick={() => setTagFilter(null)}
                  className="ml-2 text-[#C28B7A] hover:text-[#a06e5f]"
                >
                  ✕
                </button>
              </div>
            )}

            {debouncedSearchTerm && (
              <div className="inline-flex items-center px-3 py-1.5 bg-[#f8f0ed] text-[#C28B7A] rounded-full text-sm">
                <span>
                  Search: <strong>{debouncedSearchTerm}</strong>
                </span>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setDebouncedSearchTerm("");
                  }}
                  className="ml-2 text-[#C28B7A] hover:text-[#a06e5f]"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <ProductsList products={filteredProducts} loading={isLoading} />
        </div>
      </div>

      <Drawer />
      <FloatingCart />
    </div>
  );
}
