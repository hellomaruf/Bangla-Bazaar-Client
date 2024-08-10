import { useContext } from "react";
import { AuthContaxt } from "../../Services/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rate } from "antd";
import { IoBookmarksSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function Cart() {
  const { user } = useContext(AuthContaxt);
  const email = user?.email;
  console.log(email, import.meta.env.VITE_LOCALHOST_URL);

  const { data: cartData } = useQuery({
    queryKey: ["cartData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/cartProduct/${email}`
      );
      return data;
    },
  });
  console.log(cartData);

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-4">
          <div className="">
            {cartData?.map((data, index) => (
              <div className=" mb-4" key={index}>
                <div className="grid grid-cols-6 items-center border border-gray-400  ">
                  <div className="col-span-1 p-4 ">
                    <img src={data?.addToCartProduct?.productImg} alt="" />
                  </div>
                  <div className="col-span-5  p-4 flex justify-between">
                    <div className="">
                      <h2 className="font-semibold pb-2">
                        {data?.addToCartProduct?.productName}
                      </h2>
                      <h4 className="text-sm">
                        Category :{" "}
                        <span className="font-medium text-[#36A853]">
                          {" "}
                          {data?.addToCartProduct?.categoryName}
                        </span>
                      </h4>
                      <div className="flex items-center gap-2">
                        <Rate
                          style={{ fontSize: "12px" }}
                          className="text-orange-400"
                          defaultValue={data?.addToCartProduct?.rating}
                        ></Rate>
                        <p className="text-sm">
                          {data?.addToCartProduct?.rating}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 py-3">
                        <h2 className="text-2xl text-[#36A853]">
                          ৳ {data?.addToCartProduct?.price?.latestPrice}
                        </h2>
                        <h2 className="text-sm line-through text-gray-500">
                          ৳ {data?.addToCartProduct?.price?.oldPrice}
                        </h2>
                      </div>
                      <div className="flex">
                        <h4 className="text-[10px] flex px-2 items-center gap-1 bg-[#36A853] text-white">
                          <IoBookmarksSharp />
                          Best Price
                        </h4>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center gap-2">
                        <button>
                          <FaHeart className="text-lg text-gray-600 hover:text-[#36A853]" />
                        </button>
                        <button>
                          <MdDelete className="text-xl text-red-500 hover:text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 border h-[400px] border-gray-400 p-4">
          world
        </div>
      </div>
    </div>
  );
}

export default Cart;
