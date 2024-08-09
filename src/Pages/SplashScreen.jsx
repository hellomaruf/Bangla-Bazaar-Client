import logo from "../assets/Imgs/BanglaBazar.png";

function SplashScreen() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="relative">
        <img className="w-96 z-20" src={logo} alt="" />
        <div className="h-36 w-36 z-0 bg-[#36A853] absolute -top-20 -left-20 blur-xl bg-opacity-30 rounded-full "></div>
        <div className="flex items-center  justify-center gap-2">
          <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-gray-400"></div>
          <h2 className="text-base  text-gray-400">
            Please Wait.....
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
