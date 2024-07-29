import Marquee from "react-fast-marquee";
import fresh from "../../assets/Imgs/fresh.webp";
import godrej from "../../assets/Imgs/godrej-seeklogo.webp";
import marico from "../../assets/Imgs/marico.webp";
import nestle from "../../assets/Imgs/nestle.webp";
import pran from "../../assets/Imgs/pran.webp";
import rec from "../../assets/Imgs/reckitt.webp";
import uni from "../../assets/Imgs/uniliver.webp";

function Companis() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl text-center pb-8">Popular in BanglaBazar</h2>
      <Marquee gradient gradientColor="#fff">
        <div className="flex items-center gap-16">
          <img src={fresh} alt="" />
          <img src={godrej} alt="" />
          <img src={marico} alt="" />
          <img src={nestle} alt="" />
          <img src={pran} alt="" />
          <img src={rec} alt="" />
          <img src={uni} alt="" />
        </div>
      </Marquee>
    </div>
  );
}

export default Companis;
