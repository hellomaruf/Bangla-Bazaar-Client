
import { RxCross2 } from "react-icons/rx";
function FailPayment() {
  return (
    <div className="mt-28 flex items-center justify-center h-[400px]">
    <div className="flex flex-col items-center space-y-4">
      <div className=" h-28 w-28 rounded-full bg-red-200 flex items-center justify-center">
        <div className="bg-red-500 h-16 w-16 rounded-full flex items-center justify-center">
          <RxCross2   className="text-white text-xl" />
        </div>
      </div>

      <div className=" text-center">
       

        <h2 className="text-2xl font-semibold text-gray-800">
        Your payment process has been Failed
        </h2>
      </div>
    </div>
  </div>
  )
}

export default FailPayment
