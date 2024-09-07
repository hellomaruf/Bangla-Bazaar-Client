import img1 from "../../assets/Imgs/shopper.png";
import img2 from "../../assets/Imgs/cashless-payment.png";
import img3 from "../../assets/Imgs/delivery-man.png";
import img4 from "../../assets/Imgs/pay.png";
function Stats() {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 items-center justify-center gap-4 ">
        <div className="flex rounded-xl  p-6 gap-5  border-2 border-gray-300  items-center justify-center">
          <img className="w-10" src={img1} alt="" />
          <p className="text-xl">
            <span className="font-bold text-[#3aa753]">+15000 products</span> to
            shop from
          </p>
        </div>
        <div className="flex rounded-xl p-6 gap-5  border-2 border-gray-300 items-center justify-center">
          <img className="w-10" src={img2} alt="" />
          <p className="text-xl">
            <span className="font-bold text-[#3aa753]">Pay after</span>{" "}
            receiving products
          </p>
        </div>
        <div className="flex rounded-xl p-6 gap-5  border-2 border-gray-300 items-center justify-center">
          <img className="w-10" src={img3} alt="" />
          <p className="text-xl">
            Get your delivery within{" "}
            <span className="font-bold text-[#3aa753]">1 hour</span>
          </p>
        </div>
        <div className="flex rounded-xl p-6 gap-5  border-2 border-gray-300 items-center justify-center">
          <img className="w-10" src={img4} alt="" />
          <p className="text-xl">
            <span className="font-bold text-[#3aa753]">Get offers</span> that
            Save Money
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
