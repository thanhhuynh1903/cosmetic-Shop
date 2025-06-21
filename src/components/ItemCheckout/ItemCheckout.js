import React from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import useCartStore from "../../util/zustandCartState";
import { useEffect } from "react";
export default function ItemCheckout({ onProductsChange }) {
  const { cart } = useCartStore();
  const shippingFee = 0; // Miễn phí vận chuyển
  const taxRate = 0.08; // Thuế 8%
  function calculateSubtotal(items) {
    // Calculate item totals and overall subtotal
    const itemTotals = items?.map((item) => {
      const price = parseFloat(item.price);
      const total = price * item.quantity;
      return {
        name: item.name,
        price: price,
        quantity: item.quantity,
        total: total,
      };
    });
    const subtotal = itemTotals.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const taxFee = Math.round(subtotal * taxRate);
    const totalCost = subtotal + shippingFee + taxFee;
    return totalCost.toFixed(2);
  }
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
          <p className="text-sm font-medium text-gray-900">
            ${calculateSubtotal(cart)-(taxRate*100)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-900">Tax</p>
          <p className="text-sm font-medium text-gray-900">
            ${taxRate * 100}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="text-sm font-medium text-gray-900">FREE</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-medium text-gray-900">Total</p>
          <p className="text-lg font-medium text-gray-900">
            ${calculateSubtotal(cart)}
          </p>
        </div>
      </div>
    </div>
  );
}
