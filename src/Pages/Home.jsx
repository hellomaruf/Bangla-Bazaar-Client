import { useContext } from "react";
import About from "../Components/Home/About";
import Categoris from "../Components/Home/Categoris";
import Companis from "../Components/Home/companis";
import FAQs from "../Components/Home/FAQs";
import Hero from "../Components/Home/Hero";
import Offers from "../Components/Home/Offers";
import Stats from "../Components/Home/Stats";
import "../Style/customScroll.css";
import { AuthContaxt } from "../Services/AuthProvider";
import Hero2 from "../Components/Home/Hero2";
import BestOffersProducts from "../Components/Home/BestOffersProducts";
import Baner from "../Components/Home/Baner";
import TopRatedProducts from "../Components/Home/TopRatedProducts";

function Home() {
  const { user } = useContext(AuthContaxt);

  return (
    <div className="custom-scrollbar">
      {user ? (
        <div className="">
          <Hero2 />
          <Categoris />
          <Baner/>
          <BestOffersProducts />
          <TopRatedProducts/>
        </div>
      ) : (
        <div className="">
          <Hero />
          <Stats />
          <Categoris />
          <About />
          <Companis />
          <Offers />
          <FAQs />
        </div>
      )}
    </div>
  );
}

export default Home;
