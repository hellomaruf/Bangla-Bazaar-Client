import { Rate } from "antd";
import { IoBookmarksSharp, IoLocationOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import axios from "axios";
import { Link } from "react-router-dom";
import useTotalPrice from "../../Hooks/useTotalPrice";
import emptycart from "../../assets/Imgs/emptycart.png";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

function Cart() {
  const { cartData, refetch } = useCart();
  const { sumOfLatestPrice } = useTotalPrice();

  const handleIncrementOrder = async (id) => {
    await axios
      .put(`${import.meta.env.VITE_LOCALHOST_URL}/incrementOrder/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDecrementOrder = async (id) => {
    await axios
      .put(`${import.meta.env.VITE_LOCALHOST_URL}/decrementOrder/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this item?",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#36A853",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${import.meta.env.VITE_LOCALHOST_URL}/delete-cart/${id}`)
          .then((res) => {
            if (res.data) {
              toast.success("Delete Successfully!");
              refetch();
            }
          })
          .catch((error) => {
            console.log(error.message);
            refetch();
          });
      }
    });
  };

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 mx-4">
        <div className="col-span-1 lg:col-span-4 ">
          <div className="">
            {cartData?.map((data, index) => (
              <div className=" mb-4" key={index}>
                <div className="grid grid-cols-6 items-center border border-gray-400  ">
                  <div className="col-span-2 md:col-span-1 p-4  ">
                    <img src={data?.addToCartProduct?.productImg} alt="" />
                  </div>
                  <div className="col-span-4 md:col-span-5  p-4 flex justify-between">
                    <div className="">
                      <h2 className="font-semibold pb-2 text-sm md:text-base">
                        {data?.addToCartProduct?.productName}
                      </h2>
                      <h4 className="text-xs md:text-sm">
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
                        <h2 className="text-xl md:text-2xl text-[#36A853]">
                          ৳ {data?.addToCartProduct?.price?.latestPrice}{" "}
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
                    <div className="flex flex-col justify-between items-end">
                      <div className="flex items-center gap-2">
                        <button>
                          <FaHeart className="text-lg text-gray-400 hover:text-[#36A853]" />
                        </button>
                        <button onClick={() => handleDelete(data?._id)}>
                          <MdDelete className="text-xl text-gray-400 hover:text-red-600" />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleIncrementOrder(data?._id)}
                          className="h-6 md:h-8 w-6 md:w-8 bg-gray-300 hover:bg-slate-400 hover:text-white transition rounded-l-full"
                        >
                          +
                        </button>
                        <input
                          type="number"
                          value={data?.orderCount}
                          id="Line2Qty"
                          className="h-6 md:h-8 w-8 md:w-11 rounded border-gray-200 bg-gray-100  p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />
                        <button
                          onClick={() => handleDecrementOrder(data?._id)}
                          className="h-6 md:h-8 w-6 md:w-8 bg-gray-300 hover:bg-slate-400 hover:text-white transition rounded-r-full"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartData?.length < 1 && (
            <div className=" py-10">
              <div className="flex flex-col items-center justify-center ">
                <img className="w-[200px] md:w-[270px]" src={emptycart} alt="" />
                <h3 className="text-xl md:text-2xl mt-4 text-gray-600 font-semibold">
                  Your Basket is lonely
                </h3>
                <h5 className="text-gray-500">Add some items to cheer it up</h5>
              </div>
            </div>
          )}
        </div>
        <div className="lg:col-span-2 col-span-1 border h-[420px]  border-gray-400 p-4">
          <div className="">
            <h3 className="text-gray-400 text-xs md:text-sm font-medium">Location</h3>
            <div className="flex items-center gap-2 pt-2 text-gray-600">
              <IoLocationOutline className="text-xl" />
              <h4 className="text-sm md:text-base"> Add Shipping Address</h4>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="">
            <h2 className="text-gray-500 font-semibold text-base md:text-lg">
              Order Summary
            </h2>
            <div className="mt-2">
              <div className="flex items-center justify-between space-y-3">
                <h5 className="text-gray-500">
                  Subtotal ({cartData?.length} items)
                </h5>
                <h6 className="text-lg font-medium text-gray-500">
                  ৳ {sumOfLatestPrice > 0 ? sumOfLatestPrice : 0}
                </h6>
              </div>
              <div className="flex items-center justify-between">
                <h5 className="text-gray-500">Shipping Fee</h5>
                <h6 className="text-lg font-medium text-gray-500">
                  ৳ {cartData?.length > 0 ? 90 : 0}
                </h6>
              </div>
            </div>
            <div className="flex my-4">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                disabled
                className=" input-bordered border placeholder:text-sm pl-4 focus:border-[#36A853] rounded-l-full w-full max-w-xs rounded-none outline-none "
              />
              <button className="btn rounded-none bg-[#36A853] text-white rounded-r-full">
                Apply
              </button>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-lg font-semibold">Total</h5>
              <h6 className="text-lg font-semibold text-[#36A853]">
                ৳ {sumOfLatestPrice + (cartData?.length > 0 ? 90 : 0)}
              </h6>
            </div>
            <Link
              disabled={cartData?.length < 1}
              to={"/proceed-to-checkout"}
              className="btn w-full mt-4 disabled:text-gray-200 disabled:bg-gray-400 text-[#36A853] border-2 hover:bg-[#36A853] hover:text-white hover:border-white border-[#36A853] bg-white"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
