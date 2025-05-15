import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState,useEffect } from "react"
import './skeletonLoading.css'
// Skeleton for Product Categories (Soup, Lotion, etc.)
export const ProductCategorySkeleton = () => {
  return (
    <div className="my-5">
      <div>
        <div className="w-[88%] h-full m-auto p-auto grid grid-cols-2 gap-4">
          {/* Left large category (Soup) */}
          <div className="rounded-lg relative">
            <Skeleton height={400} borderRadius={8} />
            <div className="absolute bottom-[15px] right-[40%]">
              <Skeleton width={100} height={36} borderRadius={6} />
            </div>
          </div>

          {/* Right grid of categories */}
          <div className="grid grid-cols-2 gap-4">
            {/* Lotion */}
            <div className="rounded-lg relative">
              <Skeleton height={190} borderRadius={8} />
              <div className="absolute bottom-[15px] right-[30%]">
                <Skeleton width={100} height={36} borderRadius={6} />
              </div>
            </div>

            {/* Shower */}
            <div className="rounded-lg relative">
              <Skeleton height={190} borderRadius={8} />
              <div className="absolute bottom-[15px] right-[30%]">
                <Skeleton width={100} height={36} borderRadius={6} />
              </div>
            </div>

            {/* Natural (spans 2 columns) */}
            <div className="col-span-2 rounded-lg relative">
              <Skeleton height={190} borderRadius={8} />
              <div className="absolute bottom-[15px] right-[40%]">
                <Skeleton width={100} height={36} borderRadius={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Skeleton for Most Liked Products Carousel
export const MostlikeProductsSkeleton = () => {
  // Responsive slidesPerView
  const [slides, setSlides] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlides(1);
      else if (window.innerWidth < 900) setSlides(2);
      else if (window.innerWidth < 1200) setSlides(3);
      else setSlides(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div className="flex justify-center text-center text-[#C28B7A] my-6 text-[28px] md:text-[35px]">
        <Skeleton width={220} />
      </div>
      <Swiper
        className="h-[320px] md:h-[430px]"
        spaceBetween={12}
        slidesPerView={slides}
      >
        {Array(slides)
          .fill()
          .map((_, index) => (
            <SwiperSlide key={index}>
              <CardSkeleton />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

// Skeleton for Product Card
export const CardSkeleton = ({ expired = false }) => {
  return (
    <div className="flex">
      <div
        className={`${
          expired
            ? "min-w-[320px] max-w-[320px] h-[460px] shadow-custom mx-5 mb-5"
            : "min-w-[280px] max-w-[280px] h-[385px] shadow-lg"
        } p-3 rounded-lg`}
      >
        {/* Product Image */}
        <div className="w-full h-[270px]">
          <Skeleton height="100%" borderRadius={8} />
        </div>

        {/* Product Name */}
        <div className={`${expired ? "h-[40px] mt-3" : ""}`}>
          <Skeleton height={20} width="80%" />
        </div>

        {/* Brand */}
        <div className="mt-1">
          <Skeleton height={16} width="60%" />
        </div>

        {/* Rating Stars (if expired) */}
        {expired && (
          <div className="flex items-center my-1">
            <Skeleton height={16} width={100} />
          </div>
        )}

        {/* Price and Button */}
        <div className="flex justify-between mt-2">
          <div>
            <Skeleton height={20} width={50} />
          </div>
          {!expired && (
            <div>
              <Skeleton height={36} width={100} borderRadius={8} />
            </div>
          )}
        </div>

        {/* Add to bag button (if expired) */}
        {expired && (
          <div className="flex justify-center w-full mt-2">
            <Skeleton height={36} width={150} borderRadius={8} />
          </div>
        )}
      </div>
    </div>
  )
}

// Skeleton for Products Grid
export const ProductsListSkeleton = () => {
  // Responsive columns
  const [cards, setCards] = useState(6);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCards(2);
      else if (window.innerWidth < 900) setCards(4);
      else setCards(6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array(cards)
        .fill()
        .map((_, index) => (
          <CardSkeleton key={index} expired={true} />
        ))}
    </div>
  );
};

// Skeleton for Sidebar Categories
export const SidebarSkeleton = () => {
  return (
    <div>
      <aside
        className="top-0 left-0 z-40 w-100 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-3xl border-[1px] border-[#c28b7a]">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg">
                <span className="flex-1 ms-3 whitespace-nowrap">
                  <Skeleton height={20} width={120} />
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3">
                  <Skeleton circle height={24} width={24} />
                </span>
              </div>
            </li>
            {Array(6)
              .fill()
              .map((_, index) => (
                <li key={index}>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg">
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      <Skeleton height={20} width={100 + Math.random() * 50} />
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3">
                      <Skeleton circle height={24} width={24} />
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

// Skeleton for Tags
export const TagsSkeleton = () => {
  return (
    <div className="mt-3">
      <p className="text-md">
        <Skeleton height={20} width={50} />
      </p>
      <div className="flex flex-wrap">
        {Array(12)
          .fill()
          .map((_, index) => (
            <div key={index} className="m-1">
              <Skeleton height={28} width={50 + Math.random() * 50} borderRadius={4} />
            </div>
          ))}
      </div>
    </div>
  )
}

// Main Shopping Page Skeleton
export const ShoppingPageSkeleton = () => {
  return (
    <div className="m-5">
      <h2 className="text-center my-6">
        <Skeleton height={40} width={400} />
      </h2>

      {/* Product Categories */}
      <ProductCategorySkeleton />

      {/* Most Liked Products */}
      <MostlikeProductsSkeleton />

      <h2 className="text-center mt-3 mb-2">
        <Skeleton height={40} width={300} />
      </h2>

      {/* Products Grid with Sidebar */}
      <div className="grid grid-cols-10 gap-4 p-4">
        <div className="col-span-2 p-4 rounded-lg">
          <SidebarSkeleton />
          <TagsSkeleton />
        </div>
        <div className="col-span-8 p-4 rounded-lg">
          <ProductsListSkeleton />
        </div>
      </div>
    </div>
  )
}

// Usage example for individual components
export default function SkeletonLoading() {
  return <ShoppingPageSkeleton />
}
