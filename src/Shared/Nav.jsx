import { CgClose, CgMenuLeft } from "react-icons/cg";
import logo from "../assets/Imgs/BanglaBazar.png";
import fruitslogo from "../assets/Imgs/fruitlogo.png";
import vegetable from "../assets/Imgs/vegetable.png";
import dishclean from "../assets/Imgs/dish-soap.png";
import toiletclean from "../assets/Imgs/toilet.png";
import tea from "../assets/Imgs/green-tea.png";
import drink from "../assets/Imgs/drink.png";
import heathCare from "../assets/Imgs/cardiogram.png";
import meat from "../assets/Imgs/meat.png";
import { useContext, useState } from "react";
import SignInModal from "../Components/Modals/SignInModal";
import profile from "../assets/Imgs/profile.jpeg";
import { AuthContaxt } from "../Services/AuthProvider";
import { LuBell } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaRegLightbulb, FaRegStar } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import {
  MdBorderBottom,
  MdOutlineAccountCircle,
  MdOutlineSell,
} from "react-icons/md";
import { PlaceholdersAndVanishInput } from "../Components/ui/placeholders-and-vanish-input";
import useCart from "../Hooks/useCart";
import useUser from "../Hooks/useUser";
import Spinner2 from "../Utils/Spinner2";

function Nav() {
  const { cartLength } = useCart();
  const { userData } = useUser();
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
                  {userData ? (
                    <div className="flex items-center gap-3 border-2 py-1 px-3 rounded-xl border-gray-300 hover:bg-gray-100 transition">
                      <h4>{user && userData?.name}</h4>
                      <div className="w-10 rounded-full ">
                        <img
                          alt="Img"
                          className="rounded-full"
                          src={user ? userData?.photo : profile}
                        />
                      </div>
                    </div>
                  ) : (
                    <Spinner2 />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-6 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-64"
              >
                <li className="">
                  <Link
                    to={"/profile"}
                    className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]"
                  >
                    <MdOutlineAccountCircle className="text-xl" /> My Profile
                  </Link>
                </li>
                <li>
                  <a className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]">
                    <MdOutlineSell className="text-xl" /> Sell On BanglaBazar
                  </a>
                </li>
                <li className="">
                  <Link
                    to={"/orders"}
                    className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]"
                  >
                    <MdBorderBottom className="text-xl" /> Orders
                  </Link>
                </li>
                <li className="">
                  <Link
                    to={"/wishlist"}
                    className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]"
                  >
                    <FaRegLightbulb className="text-xl" /> Wishlist
                  </Link>
                </li>
                <li className="">
                  <Link
                    to={"/best-selling-product"}
                    className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]"
                  >
                    <AiOutlineProduct className="text-xl" /> Bestselling
                    Products
                  </Link>
                </li>
                <li className="">
                  <Link
                    to={"/rating"}
                    className=" py-3 text-sm hover:bg-slate-100 hover:text-[#36A853]"
                  >
                    <FaRegStar className="text-xl" /> Rating
                  </Link>
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
              src={user ? userData?.photo : profile}
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
                <Link to={"/products/Fresh Fruits"} className="">
                  <img className="w-6" src={fruitslogo} alt="" />
                  <a className="text-base">Fresh Fruits</a>
                </Link>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <Link to={"/products/Fresh Vegetables"} className="">
                  <img className="w-6" src={vegetable} alt="" />
                  <a className="text-base">Fresh Vegetables</a>
                </Link>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <Link to={"/products/Dish Washing"} className="">
                  <img className="w-6" src={dishclean} alt="" />
                  <a className="text-base">Dish Washing</a>
                </Link>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <Link to={"/products/Toilet Cleaners"} className="">
                  <img className="w-6" src={toiletclean} alt="" />
                  <a className="text-base">Toilet Cleaners</a>
                </Link>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <Link to={"/products/Snacks"} className="">
                  <img className="w-6" src={tea} alt="" />
                  <a className="text-base">Snacks</a>
                </Link>
              </li>
              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <Link to={"/products/Drinks"} className="">
                  <img className="w-6" src={drink} alt="" />
                  <a className="text-base">Drinks</a>
                </Link>
              </li>

              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <Link to={"/products/HealthCare"} className="">
                  <img className="w-6" src={heathCare} alt="" />
                  <a className="text-base">HealthCare</a>
                </Link>
              </li>

              <li className=" hover:bg-gradient-to-r from-[#fff] via-[#fff] to-[#dedede]  rounded-lg">
                <Link to={"/products/Meat"} className="">
                  <img className="w-6" src={meat} alt="" />
                  <a className="text-base">Meat</a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
