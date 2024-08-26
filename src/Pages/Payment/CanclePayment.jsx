
import { TiCancel } from "react-icons/ti";
function CanclePayment() {
  return (
    <div className="mt-28 flex items-center justify-center h-[400px]">
      <div className="flex flex-col items-center space-y-4">
        <div className=" h-28 w-28 rounded-full bg-orange-200 flex items-center justify-center">
          <div className="bg-orange-500 h-16 w-16 rounded-full flex items-center justify-center">
            <TiCancel  className="text-white text-2xl" />
          </div>
        </div>

        <div className=" text-center">
          {/* <h2 className="text-2xl font-semibold text-gray-800">Thank You</h2> */}

          <h2 className="text-2xl font-semibold text-gray-800">
          Your payment process has been cancelled
          </h2>
        </div>
      </div>
    </div>
  )
}

export default CanclePayment
