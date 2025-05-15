"use client"
import { useNavigate } from "react-router-dom"
import { Star,ShoppingBag } from "lucide-react"
import useCartStore from "../../util/zustandCartState"
export default function Card({ key, product, expired,isSwiper = false }) {
  const navigate = useNavigate()
  const { addToCart,updateQuantity } = useCartStore();
  const handleNavigate = () => {
    navigate(`/products/${product.id}`)
  }

  const getStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? "filled" : "empty")
    }
    return stars
  }

  const stars = getStars(product.rating) // Assuming product.rating is a number between 0 and 5

  return (
    <div className="flex ">
      <div
        onClick={handleNavigate}
        key={key}
        className={`${
          expired
            ? "w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-auto sm:h-[460px] shadow-custom mx-0 sm:mx-2 mb-5 hover:shadow-shadowhover transition-shadow duration-500 ease-in-out"
            : "w-full sm:w-[250px] md:w-[280px] h-auto sm:h-[385px] shadow-lg"
        } p-3 rounded-lg cursor-pointer flex flex-col`}
      >
        <div className="w-full h-[200px] sm:h-[270px] overflow-hidden rounded-md">
          <img
            src={product?.api_featured_image || "/placeholder.svg"}
            alt={product?.name}
            className="w-full h-full rounded-md object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p
          className={`${
            expired ? "h-auto sm:h-[40px] mt-3" : ""
          } text-sm sm:text-base text-gray-700 font-semibold dark:text-gray-400 line-clamp-2`}
        >
          {product.name}
        </p>

        <p className={`mt-1 text-xs sm:text-sm text-[#96a3b3] dark:text-gray-400 font-semibold`}>
          Brand: {product.brand}
        </p>

        {expired && (
          <div className="flex items-center my-1">
            {stars.map((star, index) => (
              <Star
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${star === "filled" ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-auto">
          <div>
            <p className="text-sm sm:text-base font-medium">
              {product.price_sign}
              {product.price}
            </p>
          </div>

          {!expired && (
            <div>
              <button
                onClick={handleNavigate}
                className="mt-2 inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium font-semibold text-center text-weight-brown outline outline-1 outline-weight-brown bg-[#fffff] rounded-lg hover:bg-weight-brown hover:text-white hover:outline-0 transition-all duration-300"
              >
                Buy now 
                <svg
                  className="rtl:rotate-180 w-3 h-3 ms-1 sm:ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

       {expired && (
            <div className="flex justify-center w-full mt-2">
              <button
                onClick={handleNavigate}
                className="inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#c28b7a] border border-[#c28b7a] rounded-lg hover:bg-[#c28b7a] hover:text-white transition-all duration-300 w-full justify-center"
              >
                <ShoppingBag size={14} className="mr-1 sm:mr-2" />
                Add to bag
              </button>
            </div>
          )}
      </div>
    </div>
  )
}
