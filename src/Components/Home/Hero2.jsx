import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import heroslide1 from "../../assets/Imgs/heroslide1.png";
import heroslide2 from "../../assets/Imgs/heroslide2.png";
import heroslide3 from "../../assets/Imgs/heroslide3.png";
import img1 from "../../assets/Imgs/shopper.png";
import img2 from "../../assets/Imgs/cashless-payment.png";
import img3 from "../../assets/Imgs/delivery-man.png";

function Hero2() {
  return (
    <div className="mt-28 mx-4">
      <div className="grid grid-cols-8 gap-4 max-w-7xl mx-auto ">
        <div className="col-span-6">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="rounded-2xl" src={heroslide1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={heroslide2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={heroslide3} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2">
          <div className=" grid grid-cols-1  items-center justify-center gap-2 ">
            <div className="flex rounded-xl  p-6 gap-5  border-2 border-gray-300  items-center justify-center">
              <img className="w-8" src={img1} alt="" />
              <p className="text-lg md:text-lg">
                <span className="font-bold text-[#3aa753]">
                  +15000 products
                </span>{" "}
                to shop from
              </p>
            </div>
            <div className="flex rounded-xl p-6 gap-5  border-2 border-gray-300 items-center justify-center">
              <img className="w-8" src={img2} alt="" />
              <p className="text-lg md:text-lg">
                <span className="font-bold text-[#3aa753]">Pay after</span>{" "}
                receiving products
              </p>
            </div>
            <div className="flex rounded-xl p-6 gap-5  border-2 border-gray-300 items-center justify-center">
              <img className="w-8" src={img3} alt="" />
              <p className="text-lg md:text-lg">
                Get your delivery within{" "}
                <span className="font-bold text-[#3aa753]">1 hour</span>
              </p>
            </div>
            {/* <div className="flex rounded-xl p-6 gap-5  border-2 border-gray-300 items-center justify-center">
              <img className="w-10" src={img4} alt="" />
              <p className="text-lg md:text-lg">
                <span className="font-bold text-[#3aa753]">Get offers</span>{" "}
                that Save Money
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
