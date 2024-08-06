import { useQuery } from "@tanstack/react-query";
import { Rate } from "antd";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { BsBookmarks } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { RiAwardLine } from "react-icons/ri";
function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const { data: productDetailsData } = useQuery({
    queryKey: ["productDetailsData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/productDetails/${id}`
      );
      return data;
    },
  });
  console.log(productDetailsData);

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-8 gap-6">
        <div
          id="megnifyImg_Area"
          className="border border-gray-300 overflow-hidden relative col-span-2  flex items-center justify-center "
        >
          <img id="megnify_Img" src={productDetailsData?.productImg} alt="" />
        </div>
        <div className=" col-span-4 flex justify-between">
          <div className="">
            <h2 className="text-2xl font-medium">
              {productDetailsData?.productName}
            </h2>
            <div className="flex items-center gap-3 pt-3">
              <Rate defaultValue={productDetailsData?.rating}></Rate>
              <p className="text-sm">({productDetailsData?.rating})</p>
              <p className="text-sm">18 Reviews</p>
            </div>
            <div className="pt-3">
              <h3>
                Category :{" "}
                <span className="text-green-600">
                  {productDetailsData?.categoryName}
                </span>
              </h3>
            </div>
            <div className=" flex items-center gap-5 pt-5">
              <h1 className="text-3xl font-medium text-[#36A853]">
                {" "}
                ৳ {productDetailsData?.price.latestPrice}
              </h1>
              <h1 className="text-gray-500 line-through">
                {" "}
                ৳ {productDetailsData?.price.oldPrice}
              </h1>
              <p className="bg-red-600 text-white px-2 py-1 rounded-full rounded-r-none font-semibold">
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
                Unilever BD এর প্রতিটি পণ্যের সাথে নিশ্চিত ১টি 35ml Rin liquid
                ফ্রি! এছাড়াও ২৯% পর্যন্ত ছাড়!
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
                    আমাদের অনলাইন শপিং সেলে আপনাকে স্বাগতম! এখানে আপনার পছন্দের
                    পণ্যগুলো সবচেয়ে সাশ্রয়ী মূল্যে পেতে পারেন। আমাদের বিশেষ অফার
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button className="btn text-white bg-[#36a853]">
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
        <div className=" col-span-2 bg-gray-50 p-4">
          <div className="flex items-center justify-between text-sm font-medium text-gray-500">
            <p>Devlivery Options</p>
            <BiErrorAlt />
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3">
              <IoLocationOutline className="text-2xl" />
              <p>Barishal, Barishal - Agailjhara, Gaila</p>
            </div>
            <div className="flex items-center gap-3">
              <BsCashCoin className="text-xl" />
              <p>Cash on Delivery Available</p>
            </div>
          </div>
          <div className="py-6">
            <hr />
          </div>
          <div className="flex items-center justify-between text-sm font-medium text-gray-500">
            <p>Return & Warranty </p>
            <BiErrorAlt />
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3">
              <MdOutlineKeyboardReturn className="text-xl" />
              <p>7 Days Return</p>
            </div>
            <div className="flex items-center gap-3">
              <RiAwardLine className="text-xl" />
              <p>Warranty not available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
