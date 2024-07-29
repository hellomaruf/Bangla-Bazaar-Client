// import offers1 from "../../assets/Imgs/offers1.jpg";
// import offers2 from "../../assets/Imgs/offers2.jpg";
import offers from "../../assets/Imgs/offers1.jpg";
import offers1 from "../../assets/Imgs/offers2.png";
import offers2 from "../../assets/Imgs/offers3.jpg";
import offers3 from "../../assets/Imgs/offers4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

function Offers() {
  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full rounded-2xl" src={offers1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full rounded-2xl" src={offers} />
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full rounded-2xl" src={offers2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full rounded-2xl" src={offers3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Offers;
