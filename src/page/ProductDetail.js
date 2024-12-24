import React, { useState } from "react";
import { useParams } from "react-router-dom";
import suatam from "../assets/imgs/suatam.png";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import FloatingCart from "../components/CartFloat/FloatingCart";
import Drawer from "../components/Drawer/Drawer";
import CardOrder from "../components/CardOrder.js/CardOrder";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import useDetailStore from "../util/zustandfetchDetail";
import { useEffect } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description"); // State to track the selected tab
  const { product, isLoading, error, fetchProductDetail } = useDetailStore();

  useEffect(() => {
    if (id) {
      fetchProductDetail(id);
    }
  }, [id, fetchProductDetail]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Handle quantity increment and decrement
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span
          key={i}
          className={`text-${rating && rating >= i ? "" : "black-300"}`}
        >
          <Star width={32} height={32} fill={rating === null ? "none" : rating >= i ? "" : "black"} />
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col py-4 px-[10%]">
      <Breadcrumbs />
      {/* Container */}
      <div className="w-full my-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={product?.api_featured_image}
              alt="Product"
              className="w-full  object-contain md:max-w-md rounded-md"
              style={{ height: "470px" }}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">{product?.name}</h1>
            <h2 className="text-sm text-[#2C3741]">
              Type : {product?.product_type}
            </h2>
            <p className="text-sm text-[#2C3741] mt-2">
              Brand : {product?.brand}
            </p>
            {/* Price */}
            <div className="flex justify-between items-center my-3">
              <h1 className="text-2xl font-bold">
                {product?.price_sign}
                {product?.price}
              </h1>
              <p className="text-sm font-bold text-[#A9CCAD]">In Stock</p>
            </div>
            <div>
              <ColorPicker color={product} />
            </div>

            {/* Buttons */}
            <div className="flex items-end gap-6 mt-6">
              {/* Quantity Control */}
              <div
                className="flex items-center rounded-[20px]  border-2 border-[#96a3b3] justify-around"
                style={{ width: "17%" }}
              >
                <button
                  className="text-[#96a3b3] hover:text-gray-600 focus:outline-none"
                  aria-label="Decrease quantity"
                  onClick={handleDecrement}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </button>
                <span className="mx-2 text-center w-4">{quantity}</span>
                <button
                  className="text-[#96a3b3] hover:text-gray-600 focus:outline-none"
                  aria-label="Increase quantity"
                  onClick={handleIncrement}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <button className="bg-weight-brown outline outline-offset-2 outline-white  text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Buy now
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100">
                Add to cart
              </button>
            </div>
            {/* Tags */}
            <div>
              <div className="mt-5">
                <p className="text-sm">Tags</p>
                <div className="flex flex-wrap">
                  {product?.tag_list.map((tag) => (
                    <Link
                      key={tag}
                      className="border-solid border-2 border-indigo-600 m-1 text-[13px] p-1 hover:bg-black hover:text-white transition-background duration-500"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Tabs Section */}
            <div className="mt-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  <button
                    className={`${
                      selectedTab === "description"
                        ? "text-black font-medium border-b-2 border-black pb-2"
                        : "text-gray-500 pb-2"
                    } `}
                    onClick={() => setSelectedTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`${
                      selectedTab === "rating"
                        ? "text-black font-medium border-b-2 border-black pb-2"
                        : "text-gray-500  pb-2"
                    } `}
                    onClick={() => setSelectedTab("rating")}
                  >
                    Rating
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {selectedTab === "description" && (
                  <>
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className="text-gray-600 mt-4">
                      {product?.description
                        ? product?.description
                        : "This product don't have description"}
                    </p>
                  </>
                )}
                {selectedTab === "rating" && (
                  <div>
                    <h3 className="text-lg font-semibold">Rating</h3>
                    <div className="flex items-center mt-4 justify-center">
                      {renderStars(product?.rating)}
                      <span className="ml-2 text-gray-500">
                        ({product?.rating || "No rating"})
                      </span>
                    </div>
                  </div>
                )}
                <Drawer>
                  <CardOrder />
                  <CardOrder />
                  <CardOrder />
                  <CardOrder />
                  <CardOrder />
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingCart />
    </div>
  );
}
