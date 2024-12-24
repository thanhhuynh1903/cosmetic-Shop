import React from 'react'

export default function ItemCheckout() {
  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
    <div className="space-y-4">
      {/* Repeat for each item in the order */}
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="h-16 w-16 rounded object-cover"
            src="https://via.placeholder.com/64"
            alt="Product"
          />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Product Name</p>
            <p className="text-sm text-gray-500">Quantity: 1</p>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-900">$24.00</p>
      </div>
      {/* End repeat */}
    </div>
    <div className="border-t border-gray-200 mt-4 pt-4">
      <div className="flex justify-between">
        <p className="text-sm font-medium text-gray-900">Subtotal</p>
        <p className="text-sm font-medium text-gray-900">$157.00</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-medium text-gray-900">Shipping</p>
        <p className="text-sm font-medium text-gray-900">FREE</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-lg font-medium text-gray-900">Total</p>
        <p className="text-lg font-medium text-gray-900">$157.00</p>
      </div>
      <div className="mt-4">
        <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
          Discount code or gift card
        </label>
        <div className="flex mt-1">
          <input
            type="text"
            id="discount-code"
            name="discount-code"
            className="w-full px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Discount code"
          />
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-r-md font-semibold"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
