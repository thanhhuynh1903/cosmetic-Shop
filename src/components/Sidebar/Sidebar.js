import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './sidebar.css'
export default function Sidebar({
  categorys,
  categoryCount,
  setCategoryFilter,
}) {
  const [open, setOpen] = useState(false);
  const allCategories = categorys.flatMap((cate) => cate.category);
  const uniqueCates = [...new Set(allCategories)];
  const filterCate = uniqueCates.filter((cate) => cate !== "");

  // Toggle sidebar for mobile
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div>
      {/* Mobile Hamburger Button */}
      <button
        onClick={handleToggle}
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`
          fixed sm:static top-0 left-0 z-40 w-72 max-w-full h-screen transition-transform
          bg-gray-50 dark:bg-gray-800 rounded-3xl border-[1px] border-[#c28b7a]
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
        aria-label="Sidebar"
        style={{ transition: "transform 0.3s" }}
      >
        <div className="h-full w-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                onClick={() => {
                  setCategoryFilter("");
                  setOpen(false);
                }}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap text-[#c28b7a]">
                  All Products
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {/* Total count could go here */}
                </span>
              </Link>
            </li>
            {filterCate.map((item) => (
              <li key={item}>
                <Link
                  onClick={() => {
                    setCategoryFilter(item);
                    setOpen(false);
                  }}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-[#c28b7a]">
                    {item}
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    ({categoryCount.hasOwnProperty(item) ? categoryCount[item] : ""})
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 sm:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </div>
  );
}
