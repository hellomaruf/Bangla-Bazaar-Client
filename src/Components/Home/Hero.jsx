import heroImg from "../../assets/Imgs/bazar-banner.png";
import { FlipWords } from "../ui/flip-words";
function Hero() {
  const words = ["Fresh-Groceries", "Organic-Foods"];
  return (
    <div className="pt-12">
      <div
        className="bg-cover min-h-[500px]"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div
          className=" flex items-center min-h-[500px] max-w-7xl  mx-auto 
         "
        >
          <div className="mx-4 ">
            <FlipWords
              className="max-w-xl text-4xl md:text-5xl font-bold pb-2 z-0"
              words={words}
            />
            <h1 className="mb-5 text-gray-900 max-w-xl text-4xl md:text-5xl font-bold ">
              {" "}
              Delivered with Love
            </h1>
            <p className="mb-5 text-gray-600 max-w-2xl">
              Experience the convenience of shopping for fresh, quality
              groceries from the comfort of your home. At BanglaBazar, we
              deliver the finest products straight to your doorstep!
            </p>
            <button className="btn bg-[#3aa753] hover:bg-[#2d9547] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
