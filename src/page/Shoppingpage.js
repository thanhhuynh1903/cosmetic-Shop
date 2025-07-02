"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Mostlike from "../components/Mostlike/Mostlike";
import Product from "./Products/Product";
import ProductsList from "./Products/ProductsList";
import useAllProductStore from "../util/zustandfetchAllproduct";
import useCount from "../util/zustandCount";
import FloatingCart from "../components/CartFloat/FloatingCart";
import Drawer from "../components/Drawer/Drawer";
import { ShoppingPageSkeleton } from "../components/SkeleteLoading/SkeletonLoading";
import { Link } from "react-router-dom";
import '../components/layouts/Header/Header.css';
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setProducts(products);
      updateCategoryCount();
    }
  }, [products, setProducts, updateCategoryCount]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileFiltersOpen]);

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
    <div className="mx-3 md:mx-5 my-4 md:my-5 relative">
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

      {/* Mobile Filter Button - chỉ hiển thị trên mobile */}
      <div className="mobile-filter-button md:hidden">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="inline-flex items-center px-6 py-2 bg-[#C28B7A] text-white rounded-lg text-sm font-medium hover:bg-[#A06E5F] focus:outline-none focus:ring-2 focus:ring-[#C28B7A]/50 transition-all duration-200 shadow-md"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter Products
        </button>
      </div>

      {/* Mobile filters drawer - mở từ bên trái */}
      {mobileFiltersOpen && (
        <>
          {/* Overlay */}
          <div
            className={`mobile-drawer-overlay md:hidden ${
              mobileFiltersOpen ? "open" : ""
            }`}
            onClick={() => setMobileFiltersOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`mobile-drawer md:hidden ${
              mobileFiltersOpen ? "open" : ""
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#E8D5CC]">
              <div className="flex items-center justify-center">
                <Link to="/">
                  <h1 className="custom-logo text-2xl md:text-3xl" style={{ color: "#C28B7A" }}>Beauty</h1>
                </Link>
              </div>
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-[#C28B7A] hover:bg-[#F8F0ED] rounded-lg transition-colors"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-4">
              <Sidebar
                categorys={products}
                categoryCount={categoryCount}
                setCategoryFilter={setCategoryFilter}
                tags={products}
                setTagFilter={setTagFilter}
                onClose={() => setMobileFiltersOpen(false)}
                isMobile={true}
              />
            </div>
          </div>
        </>
      )}

      {/* Desktop layout */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 p-2 md:p-4">
        {/* Desktop Sidebar - ẩn trên mobile */}
        <div className="hidden md:block md:col-span-3 lg:col-span-2 p-4 bg-white rounded-lg shadow-sm">
          <Sidebar
            categorys={products}
            categoryCount={categoryCount}
            setCategoryFilter={setCategoryFilter}
            tags={products}
            setTagFilter={setTagFilter}
            isMobile={false}
          />
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
