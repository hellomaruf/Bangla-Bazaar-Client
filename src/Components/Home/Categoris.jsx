import img1 from "../../assets/Imgs/dishwashing-supplies.webp";
import img2 from "../../assets/Imgs/fresh-fruits.webp";
import img3 from "../../assets/Imgs/fresh-vegetables.webp";
import img4 from "../../assets/Imgs/healthCare.webp";
import img5 from "../../assets/Imgs/juice.webp";
import img6 from "../../assets/Imgs/meat.webp";
import img8 from "../../assets/Imgs/kitchen-appliances.webp";
import img9 from "../../assets/Imgs/toilet-cleaners.webp";
import img10 from "../../assets/Imgs/plain-biscuits.webp";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function Categoris() {
  const category = [
    {
      categoryImg: img1,
      categoryName: "DishWashing",
    },
    {
      categoryImg: img10,
      categoryName: "Snacks",
    },
    {
      categoryImg: img2,
      categoryName: "Fruits",
    },
    {
      categoryImg: img3,
      categoryName: "Vegetables",
    },
    {
      categoryImg: img4,
      categoryName: "HealthCare",
    },
    {
      categoryImg: img8,
      categoryName: "Kitchen",
    },
    {
      categoryImg: img5,
      categoryName: "Drinks",
    },
    {
      categoryImg: img6,
      categoryName: "Meat",
    },
    {
      categoryImg: img9,
      categoryName: "Cleaners",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-10 -z-10">
      <h2 className="text-2xl text-center pb-8">Categories</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
  breakpoints={{
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  modules={[Navigation, Autoplay]}
  className="mySwiper"
>
  {category?.map((item, index) => (
    <SwiperSlide className="h-full" key={index}>
      <Link className="h-full" to={`/products/${item?.categoryName}`}>
        <div className="text-center h-full p-5 border-2 rounded-xl hover:scale-95 hover:border-[#36A853] transition cursor-pointer">
          <img src={item?.categoryImg} alt="" />
          <h3>{item?.categoryName}</h3>
        </div>
      </Link>
    </SwiperSlide>
  ))}

  <div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>
</Swiper>;
    </div>
  );
}

export default Categoris;
