import React from "react";
import { useState,useEffect } from "react";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import useCartStore from "../../util/zustandCartState";
export default function CardOrder({ cart }) {
  const { updateQuantity, removeFromCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(cart.quantity);
  }, [cart.quantity]);
  // Handle quantity increment and decrement
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(cart.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(cart.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(cart.id);
    console.log(removeFromCart(cart.id));
    
  };

  return (
    <div className="shadow rounded-md p-4 max-w-sm h-76 w-full flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row h-[150px]">
      <div className="flex space-x-4 w-full">
        <div className="h-full w-[30%]">
          <img src={cart?.image} className="h-full w-full object-contain rounded-lg" />
        </div>
        <div className="flex-1 space-y-1 py-1">
          <div className="flex justify-between">
            <p className="font-bold text-[14px] overflow-hidden whitespace-nowrap	text-ellipsis w-[80%]">{cart.name}</p>
            <p>${cart.price}</p>
          </div>
          <div>
            <div className="group relative flex text-[#96a3b3] text-[12px]">Color:
              <div
                key={cart.color}
                className="m-1 flex items-center rounded-full border-2 border-[#96a3b3] p-[5px] cursor-pointer z-0"
                style={{ backgroundColor: cart.color }}
              ></div>
            </div>
          </div>
          <p className="text-[#96a3b3] text-[12px] mb-1">
            Type: {cart.type ? cart.type : "None"}
          </p>
          <div className="flex item-center mt-1 space-x-2">
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
            <DeleteIcon handleRemove={handleRemove}/>
          </div>
        </div>
      </div>
    </div>
  );
}
