import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Spinner from "../../Utils/Spinner";
import { Rate } from "antd";
import { Slide } from "react-awesome-reveal";
import { FiFilter, FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/Imgs/_mpimage.webp";
import { Autoplay } from "swiper/modules";
import Slider from "@material-ui/core/Slider";
import { styled } from "@material-ui/core";

function SearchProducts() {
  const location = useLocation();
  const query = location?.pathname.split("/")[2];
  const [filteredData, setFilteredData] = useState([]);
  const CustomSlider = styled(Slider)({
    color: "#36A853", // This sets the color for both the track and thumb
    "& .MuiSlider-thumb": {
      backgroundColor: "#36A853",
    },
    "& .MuiSlider-track": {
      backgroundColor: "#36A853",
    },
  });
  // Our States
  const [value, setValue] = useState([10, 100]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const { data: allProduct, isLoading } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/allProducts`
      );
      return data;
    },
  });

  // Added search functionality by city name*****************
  useEffect(() => {
    // Filter data based on search query***********
    if (query === "") {
      setFilteredData(allProduct);
    } else {
      const filtered = allProduct?.filter((item) =>
        item.productName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, allProduct]);

  return (
    <div className="mt-24 max-w-7xl mx-auto">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper mb-6"
          >
            <SwiperSlide>
              <img className="w-full" src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={img1} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="mb-6">
            <h5 className="text-gray-600">
              {filteredData?.length} items found for <strong>{query}</strong>
            </h5>
          </div>
            <div className="grid grid-cols-9 gap-3">
              {/************************ Filtering ************************/}
            <div className="col-span-7">
              <div className="grid grid-cols-4 gap-4">
                {filteredData?.map((data, index) => (
                  <div key={index} className="overflow-hidden relative group">
                    <a
                      href="#"
                      className="group relative block overflow-hidden  border border-gray-200"
                    >
                      <img
                        src={data?.productImg}
                        alt=""
                        className=" w-full object-cover transition duration-500 group-hover:scale-105 h-52 p-4 "
                      />

                      <div className="relative bg-white p-6 space-y-1">
                        <div className=" flex items-center gap-4">
                          <p className="mt-1.5 text-sm text-gray-500 line-through">
                            ৳ {data?.price?.oldPrice}
                          </p>
                          <p className="mt-1.5  text-gray-900">
                            ৳ {data?.price?.latestPrice}
                          </p>
                          <p className="mt-1.5 text-sm text-red-500">
                            {data?.price?.off} %
                          </p>
                        </div>

                        <h3 className=" text-base font-medium text-gray-900">
                          {data?.productName}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Rate
                            style={{ fontSize: "16px" }}
                            className="text-orange-400"
                            defaultValue={data?.rating}
                          />{" "}
                          <p className="text-sm">({data?.rating})</p>
                        </div>
                      </div>
                    </a>
                    {/* Overlay section */}
                    <div className="left-0 absolute  text-white top-[100%] duration-500 opacity-0 group-hover:opacity-100 group-hover:top-0  w-full h-full bg-[#36a853]/50 group-hover:backdrop-blur-md">
                      <div className="flex items-center justify-center gap-2 absolute top-[40%] left-1/3">
                        <Slide direction="down" duration={1000}>
                          <button className="bg-white rounded-full text-gray-900 h-10 w-10 flex items-center justify-center">
                            <FiShoppingCart className="" />
                          </button>
                          <button className="bg-white rounded-full text-gray-900 h-10 w-10 flex items-center justify-center">
                            <FaRegHeart className="" />
                          </button>
                        </Slide>
                      </div>
                      <Link
                        to={`/productDetails/${data?._id}`}
                        className=" bg-[#36a853] absolute  w-full text-white text-sm py-2 cursor-pointer text-center bottom-0"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              <div className="col-span-2 p-4 border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[12px] font-semibold text-gray-500">Filtering</h2>
                  <FiFilter className="text-[14px] text-gray-500"/>
                </div>
              <div className="">
                <CustomSlider
                  className="text-[#36A853] text-sm"
                  value={value}
                  onChange={rangeSelector}
                  min={10}
                  max={500}
                  valueLabelDisplay="auto"
                />
                <span className="text-[13px]">
                  {" "}
                  Price Range between {value[0]} /- and {value[1]} /-
                </span>
                </div>
                <select
                  // onChange={(e) => setSelectedCategory(e.target.value)}
                  // value={selectedCategory}
                  id="category"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm mt-3 rounded-lg  block w-full p-2.5 "
                >
                  <option value={""} selected>
                    All Category
                  </option>
                  <option value="Tea">Tea</option>
                  <option value="Milk">Milk</option>
                  <option value="Oil">Oil</option>
                  <option value="Rice">Rice</option>
                </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchProducts;
