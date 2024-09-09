import { FaCheck } from "react-icons/fa";

function SuccessPayment() {
  return (
    <div className="mt-28 flex items-center justify-center h-[400px] mx-4">
      <div className="flex flex-col items-center space-y-4">
        <div className=" h-28 w-28 rounded-full bg-green-200 flex items-center justify-center">
          <div className="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center">
            <FaCheck className="text-white text-xl" />
          </div>
        </div>

        <div className=" text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Thank You</h2>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Your Payment Successfully Processed
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SuccessPayment;
