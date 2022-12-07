// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { StoreProduct } from "../../types/models";

const Slider = ({ products }: any) => {
  return (
    <section className="mx-4 p-4 border-2 border-gray-300 rounded-lg">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >

        {products.slice(10, 20).map((product: StoreProduct) => (
          <SwiperSlide key={product.id}>
            <img src={product.image} alt="" />
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  )
}

export default Slider