import { CgMenuLeft } from "react-icons/cg";
import logo from "../assets/Imgs/BanglaBazar.png";

function Nav() {
  return (
    <div>
      <div className="navbar z-10 bg-base-100 fixed">
        <div className="flex-1 ml-6">
          <label className="text-2xl cursor-pointer" htmlFor="my-drawer">
            <CgMenuLeft />
          </label>
          {/* <a className=" ml-4 text-2xl font-semibold">BanglaBazaar</a> */}
          <img className="w-56 ml-4" src={logo} alt="" />
          {/* <div className=" w-full mx-6">
            <label className=" relative  w-full flex items-center gap-2">
              <input
                type="text"
                className="  grow py-2 px-4 outline-none rounded-xl border-2 border-gray-300 focus:border-[#3aa753]"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 absolute right-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div> */}
        </div>
        <div className="flex-none gap-2">
          <button className="btn text-white bg-[#3aa753]">Sign In</button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
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
      {/* sidebar */}

      {/* <div
        className={
          showSidebar
            ? `left-0 z-10 bg-white mt-16 absolute w-[250px] mt-[calc(100% - 57.6px)]  md:fixed flex flex-col justify-between overflow-x-hidden space-y-6 px-2 py-4  inset-y-0  transform transition-all duration-700`
            : `-left-[100%] z-10 bg-white mt-16 absolute w-[250px] mt-[calc(100% - 57.6px)]  md:fixed flex flex-col justify-between overflow-x-hidden space-y-6 px-2 py-4  inset-y-0  transform transition-all duration-700`
        }
      >
        hello
      </div> */}

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4 pt-28">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
