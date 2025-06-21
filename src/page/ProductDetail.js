import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import FloatingCart from "../components/CartFloat/FloatingCart";
import Drawer from "../components/Drawer/Drawer";
import CardOrder from "../components/CardOrder.js/CardOrder";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import useDetailStore from "../util/zustandfetchDetail";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import useCartStore from "../util/zustandCartState";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ProductDetailSkeleton from "../components/SkeleteLoading/SketeLoadingDetail";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");
  const [selectedColor, setSelectedColor] = useState(null);
  const { product, isLoading, error, fetchProductDetail } = useDetailStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    if (id) {
      fetchProductDetail(id);
    }
  }, [id, fetchProductDetail]);

  if (isLoading) return <ProductDetailSkeleton />;

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
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-8 h-8 ${
            rating >= i ? "text-yellow-500 fill-current" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.api_featured_image,
      color: selectedColor,
      type: product.product_type,
      quantity,
      uniqueId: `${product.id}-${selectedColor}`
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.api_featured_image,
      color: selectedColor,
      type: product.product_type,
      quantity,
      uniqueId: `${product.id}-${selectedColor}`
    });
    navigate("/checkout");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col py-4 px-2 sm:px-4 md:px-8 lg:px-[10%]">
      <Breadcrumbs productName={product?.name} />
      {/* Container */}
      <div className="w-full py-5 md:py-[40px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-start">
            <img
              src={product?.api_featured_image}
              alt="Product"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-md"
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
              <ColorPicker
                color={product}
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />
            </div>

            {/* Buttons */}
            <div className="flex items-end gap-6 mt-6">
              {/* Quantity Control */}
              <div
                className="flex items-center rounded-[20px] border-2 border-[#96a3b3] justify-around"
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

              <button
                disabled={!selectedColor}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Choose Color!!"
                onClick={handleBuyNow}
                className="bg-weight-brown outline outline-offset-2 outline-white text-white px-6 py-2 rounded-md hover:bg-gray-800"
              >
                Buy now
              </button>

              <button
                disabled={!selectedColor}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Choose Color!!"
                onClick={handleAddToCart}
                className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100"
              >
                Add to cart
              </button>
              {!selectedColor && <Tooltip id="my-tooltip" place="bottom" />}
            </div>
            {/* Tags */}
            <div>
              <div className="mt-5">
                <p className="text-sm">Tags</p>
                <div className="flex flex-wrap">
                  {product?.tag_list?.map((tag) => (
                    <Link
                      key={tag}
                      className="inline-block m-1 px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-300 border border-[#C28B7A] text-[#C28B7A] hover:bg-[#f8f0ed]"
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
                        : "This product doesn't have a description"}
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
                <Drawer />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingCart />
    </div>
  );
}
