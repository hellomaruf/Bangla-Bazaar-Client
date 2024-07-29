import heroImg from "../../assets/Imgs/bazar-banner.png";
function Hero() {
  return (
    <div className='pt-12'>
      <div
        className="bg-cover min-h-[500px]"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        
        <div className=" flex items-center min-h-[500px] max-w-7xl  mx-auto ">
          <div className=" ">
            <h1 className="mb-5 text-gray-900 max-w-xl text-5xl font-bold">Grocery Delivered at your Doorstep</h1>
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
