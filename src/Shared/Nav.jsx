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
import { ImSpinner9 } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
function Nav() {
  let [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const { user, loading } = useContext(AuthContaxt);
  console.log(user?.displayName);

  function signInOpen() {
    setIsOpenSignIn(true);
  }

  function signInClose() {
    setIsOpenSignIn(false);
  }

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
          <img className="w-56 ml-4" src={logo} alt="" />
        </div>
        <div className="flex-none gap-2">
          <button>
            <IoCartOutline className="text-3xl mr-2 text-gray-900" />
          </button>
          {user ? (
            <button className="btn bg-[#36a853] text-white">Logout<IoMdLogOut className="text-xl"/></button>
          ) : (
            <button
              onClick={signInOpen}
              className="btn text-white bg-[#3aa753]"
            >
              Sign In
              <RiLogoutCircleLine className="text-xl" />
            </button>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {loading ? (
                  <div className=" flex items-center justify-center ">
                    <ImSpinner9 className=" text-2xl pt-1 animate-spin text-[#36A853]" />
                  </div>
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user ? user?.photoURL : profile}
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
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
