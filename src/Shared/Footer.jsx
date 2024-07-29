import logo from "../assets/Imgs/BanglaBazar.png";
function Footer() {
  return (
    <footer className=" bg-gray-50 mt-10">
      <div className="container px-6 py-12 mx-auto max-w-7xl">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl ">
            Subscribe our newsletter to get update.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="#"
              className="inline-flex btn items-center justify-center w-full px-4 py-2 text-sm text-white duration-300  rounded-lg gap-x-3 bg-[#3aa753] focus:ring-gray-300 focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-800 ">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Finance & Insurance
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Translation
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Proofreading & Editing
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                Content Creation
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                +880 768 473 4978
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-[#3aa753]"
              >
                info@banglabazaar.com
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
            {/* <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> */}
            <img className="w-48" src={logo} alt="" />
          </a>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
