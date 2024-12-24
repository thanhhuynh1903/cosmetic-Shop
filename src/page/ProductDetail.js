import React, { useState } from "react";
import { useParams } from "react-router-dom";
import suatam from "../assets/imgs/suatam.png";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import FloatingCart from "../components/CartFloat/FloatingCart";
import Drawer from "../components/Drawer/Drawer";
import CardOrder from "../components/CardOrder.js/CardOrder";
import ColorPicker from "../components/ColorPicker/ColorPicker";
export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Handle quantity increment and decrement
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
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
              src={suatam}
              alt="Product"
              className="w-full max-w-xs object-contain md:max-w-md rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Rituals</h1>
            <h2 className="text-lg text-gray-700">Homme</h2>
            <p className="text-sm text-gray-500 mt-2">Solid antiperspirant</p>

            {/* Rating */}
            <div className="flex items-center mt-4">
              <div className="flex space-x-1">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
              </div>
              <span className="ml-2 text-gray-500">(4/5)</span>
            </div>

            {/* Price */}
            <div className="flex justify-between items-center my-3">
              <h1 className="text-2xl font-bold">$13.65</h1>
              <p>100ml</p>
            </div>
            <div className="h-full">
              <div><ColorPicker/></div>
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
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="text-black font-medium border-b-2 border-black pb-2">
                Description
              </button>
              <button className="text-gray-500 hover:text-black pb-2">
                Characteristics
              </button>
              <button className="text-gray-500 hover:text-black pb-2">
                Application method
              </button>
              <button className="text-gray-500 hover:text-black pb-2">
                Rating
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-600 mt-4">
              Rituals Homme is a necessary helper in the daily fight against
              sweating.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Protects against unpleasant odors</li>
              <li>Effectively protects against sweating</li>
              <li>Gives a feeling of freshness over a long period of time</li>
              <li>Does not leave stains on clothes</li>
              <Drawer>
                <CardOrder/>
                <CardOrder/>
                <CardOrder/>
                <CardOrder/>
                <CardOrder/>
              </Drawer>
            </ul>
          </div>
        </div>
      </div>

      <FloatingCart />
    </div>
  );
}
