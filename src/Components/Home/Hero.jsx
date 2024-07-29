import heroImg from "../../assets/Imgs/bazar-banner.png";
import { FlipWords } from "./ui/flip-words";
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
        <div className=" flex items-center min-h-[500px] max-w-7xl  mx-auto ">
          <div className=" ">
          <FlipWords className='max-w-xl text-5xl font-bold pb-2 z-0' words={words} />
            <h1 className="mb-5 text-gray-900 max-w-xl text-5xl font-bold">
              {" "}
              Delivered with Love
            </h1>
            <p className="mb-5 text-gray-600 max-w-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#3aa753] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
