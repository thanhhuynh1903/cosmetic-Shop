import React, { useState } from "react";
import ItemCheckout from "../components/ItemCheckout/ItemCheckout";
import { Link } from "react-router-dom";
import "../components/layouts/Header/Header.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import useUserState from "../util/zustandUserState";
import useOrderStore from "../util/zustandOrderId";
export default function Checkout() {
  const navigate = useNavigate();
  const { user, setUser } = useUserState();
  // State cho form data và errors
  const { order, setOrder } = useOrderStore();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    country: "Vietnam",
    newsOffers: false,
    textOffers: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [cartItems, setCartItems] = useState([]);

  // callback nhận cartItems từ ItemCheckout
  const handleProductsChange = (items) => {
    setCartItems(items);
  };

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Validate khi người dùng thay đổi giá trị
    validateField(name, type === "checkbox" ? checked : value);
  };

  // Đánh dấu field đã được chạm vào
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    validateField(name, formData[name]);
  };

  // Validate từng field
  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "email":
        if (!value) {
          newErrors.email = "Email là bắt buộc";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email không hợp lệ";
        } else {
          delete newErrors.email;
        }
        break;

      case "firstName":
        if (!value) {
          newErrors.firstName = "Họ là bắt buộc";
        } else {
          delete newErrors.firstName;
        }
        break;

      case "lastName":
        if (!value) {
          newErrors.lastName = "Tên là bắt buộc";
        } else {
          delete newErrors.lastName;
        }
        break;

      case "address":
        if (!value) {
          newErrors.address = "Địa chỉ là bắt buộc";
        } else {
          delete newErrors.address;
        }
        break;

      case "city":
        if (!value) {
          newErrors.city = "Thành phố là bắt buộc";
        } else {
          delete newErrors.city;
        }
        break;

      case "province":
        if (!value) {
          newErrors.province = "Tỉnh/thành là bắt buộc";
        } else {
          delete newErrors.province;
        }
        break;

      case "postalCode":
        if (!value) {
          newErrors.postalCode = "Mã bưu điện là bắt buộc";
        } else if (!/^\d{5,6}$/.test(value)) {
          newErrors.postalCode = "Mã bưu điện không hợp lệ";
        } else {
          delete newErrors.postalCode;
        }
        break;

      case "phone":
        if (!value) {
          newErrors.phone = "Số điện thoại là bắt buộc";
        } else if (!/^[0-9]{10,11}$/.test(value.replace(/[^0-9]/g, ""))) {
          newErrors.phone = "Số điện thoại không hợp lệ";
        } else {
          delete newErrors.phone;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate toàn bộ form
  const validateForm = () => {
    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "address",
      "city",
      "province",
      "postalCode",
      "phone",
    ];
    let newErrors = {};
    let newTouched = {};

    requiredFields.forEach((field) => {
      newTouched[field] = true;
      if (!formData[field]) {
        newErrors[field] = `${field} là bắt buộc`;
      } else {
        validateField(field, formData[field]);
      }
    });

    setTouched(newTouched);
    setErrors({ ...newErrors, ...errors });

    return Object.keys(newErrors).length === 0;
  };

  const handleCancelCheckout = () => {
    navigate("/products");
  };

  const handleConfirmCheckout = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setUser(formData);

      const emailSent = await handleSendEmail();

      if (emailSent) {
        navigate("/complete");
        console.log("Đơn hàng đã được gửi thành công!");
      } else {
        console.log(emailSent);

        alert("Lỗi khi gửi email!");
      }
    } else {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc");
    }
  };
  console.log(cartItems);

  const handleSendEmail = async () => {
    try {
      // Tạo mảng các sản phẩm
      const orderItems = cartItems.map((item) => ({
        name: item.name,
        image_url: item.image,
        price: item.price,
        units: item.quantity,
      }));

      // Tính tổng giá trị đơn hàng
      const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // Giả sử phí vận chuyển và thuế
      // Trong thực tế, bạn nên tính toán các giá trị này
      const shippingFee = 0; // Miễn phí vận chuyển
      const taxRate = 0.08; // Thuế 10%
      const taxFee = Math.round(subtotal * taxRate);
      const totalCost = subtotal + shippingFee + taxFee;
      const orderInitial = "ORD_" + Date.now();
      setOrder(orderInitial);
      const orderData = {
        order_id: orderInitial,
        orders: orderItems, // Mảng các sản phẩm
        cost: {
          shipping: shippingFee,
          tax: taxFee,
          total: totalCost,
        },
        email: formData.email,
      };

      const result = await emailjs.send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        orderData,
        `${process.env.REACT_APP_USER_ID}`
      );

      console.log(result.text);
      return true;
    } catch (error) {
      console.error("Lỗi khi gửi email:", error);
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center ">
        <Link to="/">
          <h1
            className="custom-logo "
            style={{ color: "#c28b7a", font: "bold", fontSize: "40px" }}
          >
            Beauty
          </h1>
        </Link>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-7xl lg:max-w-7xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900">
            Express Checkout
          </h2>
          <form className="space-y-6" onSubmit={handleConfirmCheckout}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <label
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:border-gray-400 cursor-pointer"
                    htmlFor="cod"
                  >
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="COD"
                      checked={true}
                      readOnly
                      className="h-4 w-4 text-[#07174f]"
                    />
                    <span className="font-semibold text-gray-800">
                      Cash on Delivery (COD)
                    </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <p className="text-[#CB0404] text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="newsOffers"
                      name="newsOffers"
                      checked={formData.newsOffers}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="newsOffers"
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
                      Country/Region <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Vietnam</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="First name"
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="text-[#CB0404] text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Last name"
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="text-[#CB0404] text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
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
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.address && touched.address
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Address"
                  />
                  {errors.address && touched.address && (
                    <p className="text-[#CB0404] text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
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
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.city && touched.city
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="City"
                    />
                    {errors.city && touched.city && (
                      <p className="text-[#CB0404] text-xs mt-1">
                        {errors.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="province"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Province <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.province && touched.province
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Province"
                    />
                    {errors.province && touched.province && (
                      <p className="text-[#CB0404] text-xs mt-1">
                        {errors.province}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.postalCode && touched.postalCode
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Postal Code"
                    />
                    {errors.postalCode && touched.postalCode && (
                      <p className="text-[#CB0404] text-xs mt-1">
                        {errors.postalCode}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.phone && touched.phone
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Phone"
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-[#CB0404] text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="textOffers"
                    name="textOffers"
                    checked={formData.textOffers}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="textOffers" className="text-sm text-gray-600">
                    Text me with news and offers
                  </label>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handleCancelCheckout}
                    type="button"
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold"
                  >
                    Cancel Checkout
                  </button>
                  <button
                    type="submit"
                    className="bg-[#07174f] text-white py-2 px-4 rounded-lg font-semibold"
                  >
                    Complete checkout
                  </button>
                </div>
              </div>
              <ItemCheckout onProductsChange={handleProductsChange} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
