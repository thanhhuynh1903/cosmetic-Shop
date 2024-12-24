import React from "react";
import suatam from "../../assets/imgs/suatam.png";
import { useState } from "react";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
export default function CardOrder() {
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
    <div className="shadow rounded-md p-4 max-w-sm h-76 w-full flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row h-[150px]">
      <div className="flex space-x-4 w-full">
        <div className="h-full w-50">
          <img src={suatam} className="h-full w-full rounded-lg" />
        </div>
        <div className="flex-1 space-y-2 py-1">
          <div className="flex justify-between">
            <p className="font-bold">Ritual</p>
            <p>$12.00</p>
          </div>
          <div>
            <p className="text-[#96a3b3] text-[12px]">Color: Black</p>
          </div>
          <p className="text-[#96a3b3] text-[12px] mb-1">Type: Lipstick</p>
          <div className="flex item-center mt-1 space-x-2" >
            <div
              className="flex items-center rounded-[20px]  border-2 border-[#96a3b3] justify-around"
              style={{ width: "40%" }}
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
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
