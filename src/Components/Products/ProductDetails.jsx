import { useQuery } from "@tanstack/react-query";
import { Rate } from "antd";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BsBookmarks } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { RiAwardLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import rating from "../../assets/Imgs/ratings.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Slide } from "react-awesome-reveal";
import Spinner from "../../Utils/Spinner";
import { AuthContaxt } from "../../Services/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

function ProductDetails() {
  const { refetch } = useCart();
  const { id } = useParams();
  const { user } = useContext(AuthContaxt);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: productDetailsData, isLoading } = useQuery({
    queryKey: ["productDetailsData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/productDetails/${id}`
      );
      return data;
    },
  });

  const { data: relatedProducts } = useQuery({
    queryKey: ["relatedProducts"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/prodects/${
          productDetailsData?.categoryName
        }`
      );
      return data;
    },
  });

  const handleCart = async () => {
    if (!user) {
      return navigate("/signin", { state: { from: location } });
    } else {
      const userEmail = user?.email;
      const userName = user?.displayName;
      const addToCartProduct = productDetailsData;
      const orderCount = 1;
      const totalLatestPrice = productDetailsData?.price?.latestPrice;
      const addToCartProductInfo = {
        userEmail,
        userName,
        addToCartProduct,
        orderCount,
        totalLatestPrice,
      };
      await axios
        .post(
          `${import.meta.env.VITE_LOCALHOST_URL}/cartData`,
          addToCartProductInfo
        )
        .then((res) => {
          if (res.data) {
            toast(
              `${productDetailsData?.productName} Added in Cart Successfully!`,
              {
                duration: 6000,
              }
            );
            refetch();
          }
        })
        .catch((error) => {
          toast.error(error?.message)
        });
    }
  };
  return (
    <div className="">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-28 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mx-4">
            <div
              id="megnifyImg_Area"
              className="border border-gray-300 overflow-hidden relative col-span-1 md:col-span-2  flex items-center justify-center "
            >
              <img
                id="megnify_Img"
                src={productDetailsData?.productImg}
                alt=""
              />
            </div>
            <div className=" col-span-1 md:col-span-4 flex justify-between">
              <div className="">
                <h2 className="text-xl lg:text-2xl font-medium">
                  {productDetailsData?.productName}
                </h2>
                <div className="flex items-center gap-3 pt-3 flex-wrap">
                  <Rate
                    className="text-orange-400 text-base lg:text-lg"
                    defaultValue={productDetailsData?.rating}
                  ></Rate>
                  <p className="text-sm">({productDetailsData?.rating})</p>
                  <p className="text-sm">18 Reviews</p>
                </div>
                <div className="pt-3">
                  <h3 className="text-sm lg:text-base">
                    Category :{" "}
                    <span className="text-green-600">
                      {productDetailsData?.categoryName}
                    </span>
                  </h3>
                </div>
                <div className=" flex items-center gap-5 pt-5 flex-wrap">
                  <h1 className="text-2xl lg:text-3xl font-medium text-[#36A853]">
                    {" "}
                    ৳ {productDetailsData?.price.latestPrice}
                  </h1>
                  <h1 className="text-gray-500 line-through">
                    {" "}
                    ৳ {productDetailsData?.price.oldPrice}
                  </h1>
                  <p className="bg-red-600 text-white px-2 py-1 text-sm lg:text-base rounded-full rounded-r-none font-semibold">
                    {productDetailsData?.price?.off} % Off
                  </p>
                </div>
                <div className="pt-5 space-y-1">
                  <p className="text-orange-500 text-sm flex items-center gap-2">
                    <BsBookmarks />
                    প্রথম অর্ডারেই অতিরিক্ত ৭% ছাড়! (IAMNEW কোড ব্যবহারে)
                  </p>
                  <p className="text-orange-500 text-sm flex items-center gap-2">
                    <BsBookmarks />
                    Unilever BD এর প্রতিটি পণ্যের সাথে নিশ্চিত ১টি 35ml Rin
                    liquid ফ্রি! এছাড়াও ২৯% পর্যন্ত ছাড়!
                  </p>
                </div>
                <div className="pt-5 text-white hidden">
                  <div className="bg-orange-500  rounded-xl p-4 grid grid-cols-4 gap-2">
                    <div className="col-span-1">
                      <h2 className="text-2xl font-semibold">
                        Sale ৳ {productDetailsData?.price?.latestPrice}
                      </h2>
                      <p>Start in 1 days</p>
                    </div>
                    <div className="col-span-3 space-y-1">
                      <h3 className=" text-xl font-semibold">Eid Festival</h3>
                      <p className=" text-sm">
                        আমাদের অনলাইন শপিং সেলে আপনাকে স্বাগতম! এখানে আপনার
                        পছন্দের পণ্যগুলো সবচেয়ে সাশ্রয়ী মূল্যে পেতে পারেন।
                        আমাদের বিশেষ অফার
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    onClick={handleCart}
                    className="btn text-white bg-[#36a853] hover:bg-[#30984a] "
                  >
                    <FiShoppingCart className="text-xl" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className=" flex  gap-3">
                <FiShare2 className="text-2xl text-gray-500" />
                <FaRegHeart className="text-2xl text-gray-500" />
              </div>
            </div>
            <div className=" col-span-1 md:col-span-2 bg-gray-50 p-4">
              <div className="flex items-center justify-between text-xs lg:text-sm font-medium text-gray-500">
                <p>Devlivery Options</p>
                <BiErrorAlt />
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <IoLocationOutline className="text-2xl" />
                  <p className="text-sm lg:text-base">
                    Barishal, Barishal - Agailjhara, Gaila
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <BsCashCoin className="text-xl" />
                  <p className="text-sm lg:text-base">
                    Cash on Delivery Available
                  </p>
                </div>
              </div>
              <div className="py-6">
                <hr />
              </div>
              <div className="flex items-center justify-between  font-medium text-gray-500 text-xs lg:text-sm">
                <p>Return & Warranty </p>
                <BiErrorAlt />
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <MdOutlineKeyboardReturn className="text-xl" />
                  <p className="text-sm lg:text-base">7 Days Return</p>
                </div>
                <div className="flex items-center gap-3">
                  <RiAwardLine className="text-xl" />
                  <p className="text-sm lg:text-base">Warranty not available</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-500" />

          {/* ***************Added releted products*************** */}
          <div className="hidden">
            <div className="">
              <h2 className="text-xl">Products related to this item</h2>
            </div>

            <div className="">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {relatedProducts?.slice(0, 10).map((data, index) => (
                  <SwiperSlide className="my-10 h-full" key={index}>
                    <div
                      key={index}
                      className="overflow-hidden h-full relative group "
                    >
                      <a
                        href="#"
                        className="group h-full relative block overflow-hidden  border border-gray-200"
                      >
                        <img
                          src={data?.productImg}
                          alt=""
                          className=" w-full object-cover transition duration-500 group-hover:scale-105 h-52 p-4 "
                        />

                        <div className="relative bg-white p-6 h-full space-y-1">
                          <div className=" flex items-center gap-4">
                            <p className="mt-1.5 text-sm text-gray-500 line-through">
                              ৳ {data?.price?.oldPrice}
                            </p>
                            <p className="mt-1.5 text-sm text-gray-900">
                              ৳ {data?.price?.latestPrice}
                            </p>
                            <p className="mt-1.5 text-sm text-red-500">
                              {data?.price?.off} %
                            </p>
                          </div>

                          <h3 className=" text-md py-2 font-medium text-gray-900">
                            {data?.productName}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Rate
                              style={{ fontSize: "14px" }}
                              className="text-orange-400 text-xs"
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
                          className=" bg-[#36a853] hover:bg-[#2f9047] transition absolute  w-full text-white text-sm py-2 cursor-pointer text-center bottom-0"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/****************** Reviews and Ratings ******************/}
          <div className="mt-6 mx-4">
            <div className="">
              <h2 className="text-xl">Reviews and Ratings</h2>
              <p className="pt-2 max-w-2xl text-gray-500 text-sm">
                Ratings & Reviews of Elegant Accessory - Elevate Your Style with
                a Fashionable Wallet thats as Comfortable as it is Stylish and
                Easy To Clean.
              </p>
            </div>

            <div className="flex justify-between mt-12  flex-wrap gap-4  ">
              <div className="space-y-2">
                <h2 className="text-lg 0">Rate this Product</h2>
                <button className=" py-1 hover:bg-gray-100 transition px-3 border-2 border-[#36a853] text-[#36a853]">
                  Write Review
                </button>
              </div>
              <div className="flex gap-8 flex-wrap">
                <div className="space-y-1">
                  <h1 className="text-3xl ">{productDetailsData?.rating}</h1>
                  <Rate
                    className="text-[#36a853]"
                    defaultValue={productDetailsData?.rating}
                  ></Rate>
                  <p className="text-sm text-gray-500">
                    56 Ratings and 37 Reviews
                  </p>
                </div>
                <img src={rating} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
