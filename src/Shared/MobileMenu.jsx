import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineHome, HiOutlineShoppingBag } from "react-icons/hi2";
import { MdBorderBottom } from "react-icons/md";
import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";

function MobileMenu() {
  const { cartLength } = useCart();

  return (
    <div className="">
      <div className="fixed bottom-0 w-full bg-white  flex justify-around py-3 shadow-lg z-50">
        <Link to={"/"} className="flex-grow text-center ">
          <div className="flex flex-col items-center justify-center">
            <HiOutlineHome className="text-xl" /> <h4>Home</h4>
          </div>
        </Link>
        <Link to={"/orders"} className="flex-grow text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <MdBorderBottom className="text-xl" />
            </div>
            <h4>Orders</h4>
          </div>
        </Link>
        <Link to={"/cart"} className="flex-grow text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="">
              {/* <HiOutlineShoppingBag className="text-xl" /> */}
              <div className="relative">
                <HiOutlineShoppingBag className="text-xl  text-gray-900" />
                {cartLength > 0 && (
                  <div className="absolute -top-1 -right-2 ">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-[10px] items-center justify-center">
                        {cartLength}
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <h4>Cart</h4>
          </div>
        </Link>
        <Link to={"profile"} className="flex-grow text-center">
          <div className="flex flex-col items-center justify-center">
            <AiOutlineUser className="text-xl" /> <h4>Profile</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
