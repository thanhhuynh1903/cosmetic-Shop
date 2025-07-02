import React from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import useCartStore from "../../util/zustandCartState";
import { useEffect } from "react";

export default function ItemCheckout({ onProductsChange }) {
  const { cart } = useCartStore();
  const shippingFee = 0; // Miễn phí vận chuyển
  const taxRate = 0.08; // Thuế 8%

  // Calculate subtotal, tax, and total
  function calculateSummary(items) {
    // Only count items with positive price and quantity
    const validItems = (items || []).filter(
      (item) => Number(item.price) > 0 && Number(item.quantity) > 0
    );
    const subtotal = validItems.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0
    );
    const taxFee = Math.round(subtotal * taxRate);
    const totalCost = subtotal + shippingFee + taxFee;
    return {
      subtotal: subtotal.toFixed(2),
      taxFee: taxFee.toFixed(2),
      totalCost: totalCost.toFixed(2),
    };
  }

  const { subtotal, taxFee, totalCost } = calculateSummary(cart);

  useEffect(() => {
    if (onProductsChange && cart) {
      onProductsChange(cart);
    }
  }, [cart, onProductsChange]);

  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Order Summary
      </h3>
      <OrderSummary />
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="text-sm font-medium text-gray-900">${subtotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-900">Tax</p>
          <p className="text-sm font-medium text-gray-900">${taxFee}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="text-sm font-medium text-gray-900">FREE</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-medium text-gray-900">Total</p>
          <p className="text-lg font-medium text-gray-900">${totalCost}</p>
        </div>
      </div>
    </div>
  );
}