import React from "react";
import ItemCheckout from "../components/ItemCheckout/ItemCheckout";
import { Link } from "react-router-dom";
import "../components/layouts/Header/Header.css";
export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center ">
        {/* <img src={logo} className="w-16 h-16 object-cover" /> */}
        <Link to="/">
          <h1 className="custom-logo " style={{ color: "#c28b7a", font: "bold",fontSize:"40px" }}>Beauty</h1>
        </Link>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-7xl lg:max-w-7xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900">
            Express Checkout
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between mb-4">
                  <button className="bg-purple-600 text-black py-2 px-4 rounded-lg font-semibold">
                    Shop Pay
                  </button>
                  <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold">
                    PayPal
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email"
                  />
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="news-offers"
                      name="news-offers"
                      className="mr-2"
                    />
                    <label
                      htmlFor="news-offers"
                      className="text-sm text-gray-600"
                    >
                      Email me with news and offers
                    </label>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-4 text-gray-500">OR</span>
                  <hr className="flex-grow border-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Shipping Address
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  IMPORTANT: All international orders are subject to customs and
                  duty fees as defined by the country of import. Customs and
                  duty fees are not included in your ColourPop order and/or
                  shipping total. ColourPop is not responsible for fees
                  associated with import. All fees must be paid by the parcel
                  recipient.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country/Region
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {/* <option>Thailand</option> */}
                      <option>Vietnam</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address-2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    id="address-2"
                    name="address-2"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Apartment, suite, etc."
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="province"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Province
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Province"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Phone"
                  />
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="news-offers"
                    name="news-offers"
                    className="mr-2"
                  />
                  <label
                    htmlFor="news-offers"
                    className="text-sm text-gray-600"
                  >
                    Text me with news and offers
                  </label>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold"
                  >
                    Return to cart
                  </button>
                  <button
                    type="submit"
                    className="bg-[#07174f] text-white py-2 px-4 rounded-lg font-semibold"
                  >
                    Continue to shipping
                  </button>
                </div>
              </div>
              <ItemCheckout />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
