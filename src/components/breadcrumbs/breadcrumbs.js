import React from "react";
import { Link, useLocation } from "react-router-dom";

const nameMap = {
  products: "Products",
  about: "About",
  blog: "Blog",
  content: "Content",
  // Add more mappings as needed
};

export default function Breadcrumbs({ productName }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="p-4 text-gray-600 text-sm">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      {pathnames.map((name, idx) => {
        const routeTo = "/" + pathnames.slice(0, idx + 1).join("/");
        const isLast = idx === pathnames.length - 1;
        // If this is a product detail page, show productName instead of ID
        const isProductId =
          pathnames.length >= 2 &&
          pathnames[0] === "products" &&
          idx === 1 &&
          productName;
        return (
          <span key={routeTo}>
            {" "}
            &gt;{" "}
            {isLast ? (
              <span className="font-semibold">
                {isProductId
                  ? productName
                  : nameMap[name] || decodeURIComponent(name)}
              </span>
            ) : (
              <Link to={routeTo} className="hover:underline">
                {nameMap[name] || decodeURIComponent(name)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}