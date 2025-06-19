"use client";

import { useEffect } from "react";
import Card from "../Card/Card";
import useProductStore from "../../util/zustandfetch";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "./Mostlike.css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MostlikeProductsSkeleton } from "../SkeleteLoading/SkeletonLoading";

export default function Mostlike() {
  const { products, fetchProducts, isLoading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) {
    return <MostlikeProductsSkeleton />;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-md my-4">
        Error loading products: {error}
      </div>
    );
  }

  return (
    <div className="my-8 px-2 md:px-4">
      <h2 className="text-center text-[#C28B7A] mb-4 md:mb-6 text-2xl md:text-3xl lg:text-[35px] font-medium">
        Most liked products
      </h2>

      {/* Mobile indicator for swipe */}
      <div className="flex justify-center md:hidden mb-3">
        <div className="text-xs text-gray-500 flex items-center">
          <span className="mr-1">←</span>
          Swipe to see more
          <span className="ml-1">→</span>
        </div>
      </div>

      <Swiper
        className="!pb-8"
        modules={[Autoplay, Navigation, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1.2}
        breakpoints={{
          360: { slidesPerView: 1.3 },
          480: { slidesPerView: 1.8 },
          640: { slidesPerView: 2.4 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        centeredSlides={false}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="h-auto !w-[300px] sm:!w-[320px]"
          >
            <Card product={product} isSwiper={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
