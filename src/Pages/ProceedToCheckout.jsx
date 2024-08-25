import { Link } from "react-router-dom";
import useTotalPrice from "../Hooks/useTotalPrice";

function ProceedToCheckout() {
  const { sumOfLatestPrice } = useTotalPrice();

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-6 gap-5 items-center justify-center">
        <div className="col-span-4">
          <form action="#" className=" grid grid-cols-6 gap-6">
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
                placeholder="Please Enter"
                className="mt-1 w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-sm text-gray-700 outline-none focus:border-[#36A853]"
              />
            </div>
          </form>
        </div>
        <div className="col-span-2 border h-[250px] mt-8 border-gray-300 p-4 rounded-md">
          <div className="">
            <h2 className="text-gray-500 font-semibold text-lg">
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
                  {/* ৳ {cartData?.length > 0 ? 90 : 0} */} 90
                </h6>
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <h5 className="text-lg font-semibold">Total</h5>
              <h6 className="text-lg font-semibold text-[#36A853]">
                ৳ {sumOfLatestPrice + 90}
              </h6>
            </div>
            <Link
              to={"/proceed-to-checkout"}
              className="btn w-full mt-4 text-white border-2 bg-[#36A853] hover:text-white hover:border-white border-[#36A853] "
            >
              Proceed to Pay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProceedToCheckout;
