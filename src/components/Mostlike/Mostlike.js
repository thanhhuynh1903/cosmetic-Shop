import React from "react";
import Card from "../Card/Card";
import useProductStore from "../../util/zustandfetch";
import { useEffect } from "react";
import {Autoplay, Navigation , Scrollbar, A11y } from 'swiper/modules';
import "swiper/css/navigation"; // Import CSS cho navigation (nếu cần)
import './Mostlike.css'
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react"; // Import các component cần thiết từ Swiper
import "swiper/css"; // Import CSS cơ bản của Swiper
export default function Mostlike() {
  const { products, fetchProducts, isLoading, error } = useProductStore();

  // Fetch dữ liệu khi component được mount
  useEffect(() => {
    fetchProducts(); // Gọi hàm fetchProducts từ Zustand store
  }, [fetchProducts]); // Dependency array đảm bảo chỉ chạy một lần khi component mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-center text-center text-[#C28B7A] my-6 text-[35px]">
        Most liked products
      </div>
      <Swiper
        className="h-[350px]"
          modules={[Autoplay,Navigation, Scrollbar]}
          spaceBetween={18}
          slidesPerView={5}
          navigation
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }}
          loop
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
