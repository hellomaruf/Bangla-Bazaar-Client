import { useContext, useState } from "react";
import useTotalPrice from "../Hooks/useTotalPrice";
import axios from "axios";
import useCart from "../Hooks/useCart";
import { AuthContaxt } from "../Services/AuthProvider";

function ProceedToCheckout() {
  const { user } = useContext(AuthContaxt);


  const { sumOfLatestPrice } = useTotalPrice();
  const [payInfo, setPayInfo] = useState(null);
  const { cartData } = useCart();
  const productName = cartData?.map(
    (item) => item?.addToCartProduct?.productName
  );
  const productImg = cartData?.map(
    (item) => item?.addToCartProduct?.productImg
  );
 

  const handlePaymentInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phoneNumber = form.number.value;
    const email = form.email.value;
    const address = form.address.value;
    const colony = form.colony.value;
    const ammount = sumOfLatestPrice + 90;
    const orderDate = new Date().toDateString();
    const paymentInfo = {
      name,
      phoneNumber,
      email,
      address,
      colony,
      ammount,
      productName,
      productImg,
      orderDate,
    };
    setPayInfo(paymentInfo);
  };
  const handleCreatePayment = () => {
    axios
      .post(`${import.meta.env.VITE_LOCALHOST_URL}/create-payment`, payInfo)
      .then((res) => {
       
        const redirectURL = res.data.paymentUrl;
        if (redirectURL) {
          window.location.replace(redirectURL);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
 

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 items-start mx-4">
        <div className="col-span-1 lg:col-span-4 border p-6 border-gray-400">
          {payInfo ? (
            <div className="">
              <div className="mb-5">
                <h2 className="text-md md:text-lg font-medium">Shipping & Billing</h2>
              </div>
              <div className="space-y-2">
                <div className="flex text-sm md:text-base items-center justify-between">
                  <h3>Name :</h3>
                  <p>{payInfo?.name}</p>
                </div>
                <div className="flex text-sm md:text-base items-center justify-between">
                  <h3>Email :</h3>
                  <p>{payInfo?.email}</p>
                </div>
                <div className="flex text-sm md:text-base items-center justify-between">
                  <h3>Phone :</h3>
                  <p>{payInfo?.phoneNumber}</p>
                </div>
                <div className="flex text-sm md:text-base items-center justify-between">
                  <h3>Address :</h3>
                  <p>
                    {payInfo?.address},{payInfo?.colony}
                  </p>
                </div>
                <div className="flex">
                  <h4 className="bg-green-500 text-xs md:text-base text-white  rounded-full px-3">
                    HOME
                  </h4>
                </div>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handlePaymentInfo}
              action="#"
              className=" grid grid-cols-6 gap-6 "
            >
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Name{" "}
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user?.displayName}
                  disabled
                  required
                  placeholder="Enter Full Name"
                  className="mt-1 w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-sm text-gray-700 outline-none focus:border-[#36A853]"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  type="number"
                  id="number"
                  required
                  name="number"
                  placeholder="Enter Phone Number"
                  className="mt-1 w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-sm text-gray-700 outline-none focus:border-[#36A853]"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  required
                  placeholder="Enter Email Address"
                  className="mt-1 w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-sm text-gray-700 outline-none focus:border-[#36A853]"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Address{" "}
                </label>

                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="For Example : House# 123, Street# 123, ABC Road"
                  className="mt-1 w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-sm text-gray-700 outline-none focus:border-[#36A853]"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Colony / Suburb / Locality / Landmark
                </label>

                <input
                  type="text"
                  id="colony"
                  name="colony"
                  required
                  placeholder="Please Enter"
                  className="mt-1 w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-sm text-gray-700 outline-none focus:border-[#36A853]"
                />
              </div>
              <div className="flex ">
                <button className="btn bg-[#36A853] text-white">
                  Save Details
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="col-span-1 lg:col-span-2 border h-[250px] border-gray-400 p-4 ">
          <div className="">
            <h2 className="text-gray-500 font-semibold text-md md:text-lg">
              Order Summary
            </h2>
            <div className="mt-2">
              <div className="flex items-center justify-between space-y-3">
                <h5 className="text-gray-500">
                  {/* Subtotal ({cartData?.length} items) */} Subtotal
                </h5>
                <h6 className="text-lg font-medium text-gray-500">
                  ৳ {sumOfLatestPrice > 0 ? sumOfLatestPrice : 0}
                </h6>
              </div>
              <div className="flex items-center justify-between">
                <h5 className="text-gray-500">Shipping Fee</h5>
                <h6 className="text-lg font-medium text-gray-500">
                  {/* ৳ {cartData?.length > 0 ? 90 : 0} */}  ৳ 90
                </h6>
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <h5 className="text-lg font-semibold">Total</h5>
              <h6 className="text-lg font-semibold text-[#36A853]">
                ৳ {sumOfLatestPrice + 90}
              </h6>
            </div>
            <button
              onClick={handleCreatePayment}
              disabled={!payInfo}
              className="btn w-full mt-4  text-white border-2 bg-[#36A853] hover:text-white hover:border-white border-[#36A853] "
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProceedToCheckout;
