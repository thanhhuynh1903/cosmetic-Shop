"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Package,
  CreditCard,
  Calendar,
  ChevronRight,
  Copy,
  Truck,
  ShoppingBag,
  Heart,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { Tooltip } from "react-tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useCartStore from "../../util/zustandCartState";
import useUserState from "../../util/zustandUserState";
import ErrorPage404 from "../ErrorPage/ErrorPage";
// Format currency to USD
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};

const CompleteOrder = () => {
  const { user } = useUserState();
  const { cart, removeAllCart } = useCartStore();
  const [orderData, setorderData] = useState(cart);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("order-details");
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  // Calculate totals
  const subtotal = orderData?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  // Copy order number
  const copyOrderNumber = () => {
    navigator.clipboard.writeText(orderData.orderNumber);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  useEffect(() => {
    if (!cart || cart.length === 0) {
      setorderData(null);
    }
    // Remove cart only once after mount
    else {
      removeAllCart();
    }
    // eslint-disable-next-line
  }, []);

  return orderData && Array.isArray(orderData) && orderData.length > 0 ? (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/products")}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold">Order Complete</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Order Confirmation */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for shopping at Beauty Cosmetics. We've sent an order
            confirmation email to your email address.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Order Number:</span>
              <span className="font-medium text-pink-600">
                {orderData.orderNumber}
              </span>
              <button
                onClick={copyOrderNumber}
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                data-tooltip-id="copy-tooltip"
                data-tooltip-content={
                  copiedToClipboard ? "Copied!" : "Copy order number"
                }
              >
                <Copy size={16} />
              </button>
              <Tooltip id="copy-tooltip" />
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div>
              <span className="text-gray-600 mr-2">Order Date:</span>
              <span className="font-medium">{orderData.orderDate}</span>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>Confirmed</span>
            </div>
            <div className="flex items-center text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              <Package className="h-4 w-4 mr-1" />
              <span>Processing</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Details Tabs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b">
                <button
                  className={`flex-1 py-4 px-4 text-center font-medium ${
                    activeTab === "order-details"
                      ? "text-pink-600 border-b-2 border-pink-600"
                      : "text-gray-600 hover:text-pink-500"
                  }`}
                  onClick={() => setActiveTab("order-details")}
                >
                  Order Details
                </button>
                <button
                  className={`flex-1 py-4 px-4 text-center font-medium ${
                    activeTab === "shipping"
                      ? "text-pink-600 border-b-2 border-pink-600"
                      : "text-gray-600 hover:text-pink-500"
                  }`}
                  onClick={() => setActiveTab("shipping")}
                >
                  Shipping Information
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {/* Order Details Tab */}
                {activeTab === "order-details" && (
                  <div className="space-y-6">
                    {orderData?.map((item) => (
                      <div key={item.id} className="flex border-b pb-6">
                        <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{item?.name}</h3>
                            <p className="font-medium">
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Quantity: {item.quantity}
                          </p>
                          <div className="flex items-center mt-2">
                            <div>
                              <div className="group relative flex text-[#96a3b3] text-[12px]">
                                Color:
                                <div
                                  key={item.color}
                                  className="m-1 flex items-center rounded-full border-2 border-[#96a3b3] p-[5px] cursor-pointer z-0"
                                  style={{ backgroundColor: item.color }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Tax (8%)</span>
                        <span>{formatCurrency(tax)}</span>
                      </div>

                      <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
                        <span>Total</span>
                        <span>{formatCurrency(total)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Shipping Tab - Commented out in the original code */}
                {activeTab === "shipping" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
                        <Package className="h-6 w-6 mr-3 text-pink-600" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Shipping Address
                        </h3>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium text-gray-500">
                              Full Name
                            </label>
                            <p className="mt-1 text-gray-900 font-medium">
                              {user?.firstName} {user?.lastName}
                            </p>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-gray-500">
                              Address
                            </label>
                            <p className="mt-1 text-gray-600">
                              {user?.address}
                              {user?.apartment && `, ${user?.apartment}`}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-500">
                                City
                              </label>
                              <p className="mt-1 text-gray-600">{user?.city}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-500">
                                Province
                              </label>
                              <p className="mt-1 text-gray-600">
                                {user?.province}
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-500">
                                Postal Code
                              </label>
                              <p className="mt-1 text-gray-600">
                                {user?.postalCode}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-500">
                                Country
                              </label>
                              <p className="mt-1 text-gray-600">
                                {user?.country}
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-500">
                                Phone
                              </label>
                              <p className="mt-1 text-gray-600">
                                {user?.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium">{formatCurrency(subtotal)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium">Free</p>
                </div>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between text-base font-semibold">
                <p>Total</p>
                <p>{formatCurrency(total)}</p>
              </div>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-3 text-sm text-green-800">
                <p className="font-medium">Your order has been confirmed!</p>
                <p className="mt-1">
                  We'll send you an email when your order ships.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <p>Order confirmed</p>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <p>Payment successful</p>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Package className="h-4 w-4 text-blue-500 mr-2" />
                  <p>Processing order</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-3">Need help?</h3>
                <Link
                  to="/contact"
                  className="border-blue-500 block w-full py-2 px-3 bg-gray-100 text-gray-700 rounded-md text-sm font-medium text-center hover:bg-gray-200 transition-colors"
                >
                  Contact Support
                </Link>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ErrorPage404 />
  );
};

export default CompleteOrder;
