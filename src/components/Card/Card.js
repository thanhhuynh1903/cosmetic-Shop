import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
export default function Card({ key, product, expired }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product.id}`);
  };
  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? "filled" : "empty");
    }
    return stars;
  };

  const stars = getStars(product.rating); // Assuming product.rating is a number between 0 and 5

  return (
    <div className="flex">
      <div
        key={key}
        className={`${
          expired
            ? "min-w-[320px] max-w-[320px] h-[390px] shadow-custom mx-5 mb-5"
            : "min-w-[280px] max-w-[280px] h-[315px] shadow-lg"
        }  p-3 rounded-lg `}
      >
        <div className="w-full h-[200px] object-cover">
          <img
            src={product?.image_link}
            alt={product?.name}
            className="w-full h-full rounded-md"
          />
        </div>

        <p
          className={`${
            expired ? "h-[40px]" : ""
          } text-base text-gray-700 font-semibold dark:text-gray-400`}
        >
          {product.name}
        </p>
        <p className={`mt-3 text-sm text-gray-700 dark:text-gray-400`}>
          {product.brand}
        </p>
        {expired && (
          <div className="flex items-center my-1">
            {stars.map((star, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  star === "filled" ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}
        <div className="flex justify-between">
          <div>
            <p>
              {product.price_sign}
              {product.price}
            </p>
          </div>
          {!expired && (
            <div>
              <button
                onClick={handleNavigate}
                className="inline-flex items-center px-3 py-2 text-sm font-medium font-semibold text-center text-weight-brown outline outline-1 outline-weight-brown bg-[#fffff] rounded-lg hover:bg-weight-brown hover:text-white hover:outline-0"
              >
                Buy now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        {expired && (
          <div className="flex justify-center w-full">
            <button
              onClick={handleNavigate}
              className="inline-flex items-center px-3 py-2 text-sm font-medium font-semibold text-center text-weight-brown outline outline-1 outline-weight-brown bg-[#fffff] rounded-lg hover:bg-weight-brown hover:text-white hover:outline-0 transition-bg duration-300 ease-in-out"
            >
              Add to bag
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
}
