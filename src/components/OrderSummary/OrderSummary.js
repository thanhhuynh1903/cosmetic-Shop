import React from "react";
import useCartStore from "../../util/zustandCartState";
export default function OrderSummary() {
  const { cart } = useCartStore();
  return (
    <>
      {cart.map((item) => (
        <div className=" rounded-md p-4 max-w-sm h-76 w-full flex flex-col rounded-lg md:max-w-xl md:flex-row h-[150px]">
          {/* Repeat for each item in the order */}

          <div className="flex space-x-4 w-full">
            <div className="h-full w-[30%]">
              <img
                src={item?.image}
                className="h-full w-full object-contain rounded-lg"
              />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">
                Name: {item.name}
              </p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
