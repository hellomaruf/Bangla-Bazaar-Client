import aboutImg from "../../assets/Imgs/organic.png";
import author from "../../assets/Imgs/author.png";
function About() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-4">
        <div className="col-span-1">
          <img src={aboutImg} alt="" />
        </div>
        <div className="col-span-1 space-y-5">
          <h3 className="text-lg md:text-xl font-nsw font-semibold text-[#3AA753]">
            About BanglaBazar
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 ">
            Organic and Healthy Foods Provider.
          </h2>
          <p className="text-sm">
            Holisticly unleash client-centric vortals rather than plug-and-play
            internal or organic sources. Monotonectally reconceptualize
            efficient outside the box thinking with standardized users.
            Phosfluorescently procrastinate quality services.Seamlessly
            pontificate competitive innovation before extensive metrics.
            Progressively incubate.
          </p>
          <div className="">
            <div className="flex items-center gap-4">
              <div className="">
                <img className="w-16" src={author} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg ">Md Maruf Ahmed</h3>
                <h5 className="text-[#3aa753]">CEO & Founder</h5>
              </div>
              <div className="">
                <h4 className="font-nsw underline text-xl">Maruf</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
