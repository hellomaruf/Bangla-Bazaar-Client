import useTotalPrice from "../Hooks/useTotalPrice";

function ProceedToCheckout() {
  const { sumOfLatestPrice } = useTotalPrice();

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <div className="">
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
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
    </div>
  );
}

export default ProceedToCheckout;
