import { Link } from "react-router-dom";
import img from "../assets/Imgs/coming.png";

function Rating() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="flex flex-col items-center justify-center mx-4">
        <img className="w-[500px]" src={img} alt="" />
        <h5 className="text-base md:text-lg font-semibold max-w-xl text-center text-gray-600">
          The page you are looking for doesnt exist. Here are some helpful
          links.
        </h5>
        <Link
          to={"/"}
          className="btn mt-4 bg-[#36a853] hover:bg-[#2c9246] text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Rating;
