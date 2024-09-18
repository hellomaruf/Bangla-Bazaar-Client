import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Spinner from "../../Utils/Spinner";
import { Rate } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContaxt } from "../../Services/AuthProvider";
import useCart from "../../Hooks/useCart";
import snacks_banner from "../../assets/Imgs/Snacks-banner.webp";
import snacks_banner1 from "../../assets/Imgs/Snacks-banner2.webp";

function Products() {
  const categoryName = useParams();
  const { user } = useContext(AuthContaxt);
  const { refetch } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: productData, isLoading } = useQuery({
    queryKey: ["productData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/prodects/${categoryName?.name}`
      );
      return data;
    },
  });


  const handleCart = async (data) => {
    if (!user) {
      return navigate("/signin", { state: { from: location } });
    } else {
      const userEmail = user?.email;
      const userName = user?.displayName;
      const addToCartProduct = data;
      const orderCount = 1;
      const totalLatestPrice = data?.price?.latestPrice;
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
            toast(`${data?.productName} Added in Cart Successfully!`, {
              duration: 6000,
            });
            refetch();
          }
        })
        .catch((error) => {
          toast.error(error?.message)
        });
    }
  };

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="">
          {/* {productData[0]?.categoryName === "Snacks" && (
          )} */}
          <div className="grid grid-cols-2 mx-4 mb-6 gap-1 ">
            <img src={snacks_banner} alt="" />
            <img src={snacks_banner1} alt="" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-4 gap-2 md:gap-4">
            {productData?.map((data, index) => (
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
                        onClick={() => handleCart(data)}
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
