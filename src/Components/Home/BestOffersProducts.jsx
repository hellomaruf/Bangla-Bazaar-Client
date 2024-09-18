import { useQuery } from "@tanstack/react-query";
import { Rate } from "antd";
import axios from "axios";
import { Slide } from "react-awesome-reveal";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function BestOffersProducts() {
  const { data: allProduct } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/allProducts`
      );
      return data;
    },
  });

  const productsWithMoreThan20Off = allProduct?.filter(
    (product) => parseInt(product.price.off) > 23
  );

  return (
    <div>
      <div className="mx-4">
        <div className=" max-w-7xl mx-auto h-full  rounded-lg pt-6">
          <div className="">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
              Best Offer View Up to{" "}
              <span className="bg-[#36a853] text-white p-1 text-xl rounded-lg">
                23% Off
              </span>{" "}
            </h3>
          </div>
          <Swiper
            slidesPerView={2}
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
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {productsWithMoreThan20Off?.map((data, index) => (
              <SwiperSlide className="my-10 h-[500px]" key={index}>
                <div className="" key={index}>
                  <div
                    key={index}
                    className="overflow-hidden relative group h-full"
                  >
                    <Link
                      to={`/productDetails/${data?._id}`}
                      className="group relative block overflow-hidden h-full  "
                    >
                      <img
                        src={data?.productImg}
                        alt=""
                        className=" w-full object-cover transition duration-500 group-hover:scale-105 h-52 p-4 "
                      />

                      <div className="relative bg-white p-6 space-y-1">
                        <div className=" flex items-center gap-4 ">
                          <p className="mt-1.5 text-xs md:text-sm text-gray-500 line-through ">
                            ৳ {data?.price?.oldPrice}
                          </p>
                          <p className="mt-1.5 text-xs md:text-sm text-gray-900">
                            ৳ {data?.price?.latestPrice}
                          </p>
                        </div>
                        <p className="mt-1.5 text-xs md:text-sm text-red-500">
                          {data?.price?.off} %
                        </p>

                        <h3 className=" text-sm lg:text-base font-medium text-gray-900 py-2">
                          {data?.productName}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Rate
                            style={{ fontSize: "12px" }}
                            className="text-orange-400"
                            defaultValue={data?.rating}
                          />{" "}
                          <p className="text-xs md:text-sm">({data?.rating})</p>
                        </div>
                      </div>
                    </Link>
                    {/* Overlay section */}
                    <div className="left-0 hidden md:flex  absolute  text-white top-[100%] duration-500 opacity-0 group-hover:opacity-100 group-hover:top-0  w-full h-full bg-[#36a853]/50 group-hover:backdrop-blur-md">
                      <div className="flex items-center justify-center gap-2 absolute top-[40%] left-1/3">
                        <Slide direction="down" duration={1000}>
                          <button
                            // onClick={() => handleCart(data)}
                            className="bg-white hover:bg-[#36a853] hover:border-2 hover:text-white hover:border-white transition rounded-full text-gray-900 h-10 w-10 flex items-center justify-center"
                          >
                            <FiShoppingCart className="" />
                          </button>
                          <button className="bg-white hover:bg-[#36a853] hover:border-2 hover:text-white hover:border-white transition rounded-full text-gray-900 h-10 w-10 flex items-center justify-center">
                            <FaRegHeart className="" />
                          </button>
                        </Slide>
                      </div>
                      <Link
                        to={`/productDetails/${data?._id}`}
                        className=" bg-[#36a853] hover:bg-[#2f9047] transition absolute  w-full text-white text-sm py-2 cursor-pointer text-center bottom-0"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BestOffersProducts;
