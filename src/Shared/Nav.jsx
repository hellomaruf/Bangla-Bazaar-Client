import { CgClose, CgMenuLeft } from "react-icons/cg";
import logo from "../assets/Imgs/BanglaBazar.png";
import fruitslogo from "../assets/Imgs/fruitlogo.png";
import vegetable from "../assets/Imgs/vegetable.png";
import dishclean from "../assets/Imgs/dish-soap.png";
import toiletclean from "../assets/Imgs/toilet.png";
import tea from "../assets/Imgs/green-tea.png";
import drink from "../assets/Imgs/drink.png";
import heathCare from "../assets/Imgs/cardiogram.png";
import juice from "../assets/Imgs/orange-juice.png";
import meat from "../assets/Imgs/meat.png";
import { useContext, useState } from "react";
import SignInModal from "../Components/Modals/SignInModal";
import profile from "../assets/Imgs/profile.jpeg";
import { AuthContaxt } from "../Services/AuthProvider";
import { LuBell } from "react-icons/lu";
// import { IoCartOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { FaRegLightbulb, FaRegStar } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import {
  MdBorderBottom,
  MdOutlineAccountCircle,
  MdOutlineSell,
} from "react-icons/md";
import { PlaceholdersAndVanishInput } from "../Components/ui/placeholders-and-vanish-input";
import useCart from "../Hooks/useCart";
function Nav() {
  const { cartLength } = useCart();
  console.log(cartLength);

  let [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const { user, logout, setUser } = useContext(AuthContaxt);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // input search placeholder************
  const placeholders = [
    "Search Fresh Groceries....",
    "Search Organic Foods....",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  function signInOpen() {
    setIsOpenSignIn(true);
  }

  function signInClose() {
    setIsOpenSignIn(false);
  }

  const handleLogout = () => {
    logout();
    setUser(null);
    toast.success("Successfully Logout!");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div>
      <SignInModal
        isOpenSignIn={isOpenSignIn}
        signInOpen={signInOpen}
        signInClose={signInClose}
      />

      <div className="navbar z-10 bg-base-100 fixed pr-4">
        <div className="flex-1 ml-6 ">
          <label className="text-2xl cursor-pointer" htmlFor="my-drawer">
            <CgMenuLeft />
          </label>
          <Link to={"/"}>
            <img className="w-56 ml-4" src={logo} alt="" />
          </Link>

          {/* Search input */}
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>

        <div className="flex-none gap-2">
          <Link to={"/cart"} className="flex items-center mr-2 relative">
            <div className="relative">
              <HiOutlineShoppingBag className="text-2xl mr-2 text-gray-900" />
              {cartLength > 0 && (
                <div className="absolute -top-1 right-1 ">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-[10px] items-center justify-center">
                      {cartLength}
                    </span>
                  </span>
                </div>
              )}
            </div>
            <h4>Cart</h4>
          </Link>
          <button>
            <LuBell className="text-2xl mr-2 text-gray-900" />
          </button>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-[#36a853] text-white hidden"
            >
              Logout
              <IoMdLogOut className="text-xl" />
            </button>
          ) : (
            <button
              onClick={signInOpen}
              className="btn text-white bg-[#3aa753]"
            >
              Sign In
              <RiLogoutCircleLine className="text-xl" />
            </button>
          )}
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <div className="flex items-center ">
                  <div className="flex items-center gap-3 border-2 py-1 px-3 rounded-xl border-gray-300 hover:bg-gray-100 transition">
                    <h4>Maruf Ahmed</h4>
                    <div className="w-10 rounded-full ">
                      <img
                        alt="Tailwind CSS Navbar component"
                        className="rounded-full"
                        src={user ? user?.photoURL : profile}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-6 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-64"
              >
                <li className="">
                 
                    <Link to={"/profile"} className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]">
                      <MdOutlineAccountCircle className="text-xl" /> My Profile
                    </Link>
                
                </li>
                <li>
                  <a className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]">
                    <MdOutlineSell className="text-xl" /> Sell On BanglaBazar
                  </a>
                </li>
                <li className="">
                  <a className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]">
                    <MdBorderBottom className="text-xl" /> Orders
                  </a>
                </li>
                <li className="">
                  <a className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]">
                    <FaRegLightbulb className="text-xl" /> Wishlist
                  </a>
                </li>
                <li className="">
                  <a className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]">
                    <AiOutlineProduct className="text-xl" /> Bestselling
                    Products
                  </a>
                </li>
                <li className="">
                  <a className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]">
                    <FaRegStar className="text-xl" /> Rating
                  </a>
                </li>
                <li className="mt-2" onClick={handleLogout}>
                  <a className="btn bg-[#36a853] text-white">
                    Logout <IoMdLogOut className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <img
              alt="Tailwind CSS Navbar component"
              className="w-10 rounded-full"
              src={user ? user?.photoURL : profile}
            />
          )}
        </div>
      </div>

      <div className="drawer z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4 ">
            <div className=" flex items-center ml-2 gap-4">
              <label className="cursor-pointer" htmlFor="my-drawer">
                <CgClose className="text-2xl" />
              </label>
              <img className="w-52" src={logo} alt="" />
            </div>
            <div className="mt-4">
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={fruitslogo} alt="" />
                  <a className="text-base">Fresh Fruits</a>
                </div>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={vegetable} alt="" />
                  <a className="text-base">Fresh Vegetables</a>
                </div>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={dishclean} alt="" />
                  <a className="text-base">Dish Washing</a>
                </div>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={toiletclean} alt="" />
                  <a className="text-base">Toilet Cleaners</a>
                </div>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={tea} alt="" />
                  <a className="text-base">Tea</a>
                </div>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={drink} alt="" />
                  <a className="text-base">Soft Drinks</a>
                </div>
              </li>

              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={heathCare} alt="" />
                  <a className="text-base">HealthCare</a>
                </div>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={juice} alt="" />
                  <a className="text-base">Juice</a>
                </div>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <div className="">
                  <img className="w-6" src={meat} alt="" />
                  <a className="text-base">Meat</a>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
