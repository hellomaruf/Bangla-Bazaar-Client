import { useQuery } from "@tanstack/react-query";
import { Rate } from "antd";
import axios from "axios";
import { Slide } from "react-awesome-reveal";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function TopRatedProducts() {
  const { data: allProduct } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/allProducts`
      );
      return data;
    },
  });


  const snacks = allProduct?.filter(
    (product) => product.categoryName === "Snacks"
  );
  const healthCare = allProduct?.filter(
    (product) => product.categoryName === "HealthCare"
  );
  const fruits = allProduct?.filter(
    (product) => product.categoryName === "Fruits"
  );

  return (
    <div>
      <div className=" max-w-7xl mx-auto ">
        <h3 className="text-2xl font-semibold text-gray-700">
          Our Top Rated Products🔥
        </h3>
        <div className="grid grid-cols-5 gap-6 mt-8">
          {snacks?.slice(0, 5).map((data, index) => (
            <div className="" key={index}>
              <div
                key={index}
                className="overflow-hidden relative group h-full"
              >
                <Link
                  to={`/productDetails/${data?._id}`}
                  className="group relative block overflow-hidden h-full  border border-gray-200"
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
          ))}
        </div>
        <div className="grid grid-cols-5 gap-6 mt-8">
          {healthCare?.slice(0, 5).map((data, index) => (
            <div className="" key={index}>
              <div
                key={index}
                className="overflow-hidden relative group h-full"
              >
                <Link
                  to={`/productDetails/${data?._id}`}
                  className="group relative block overflow-hidden h-full  border border-gray-200"
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
          ))}
        </div>
        <div className="grid grid-cols-5 gap-6 mt-8">
          {fruits?.slice(0, 5).map((data, index) => (
            <div className="" key={index}>
              <div
                key={index}
                className="overflow-hidden relative group h-full"
              >
                <Link
                  to={`/productDetails/${data?._id}`}
                  className="group relative block overflow-hidden h-full  border border-gray-200"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRatedProducts;
