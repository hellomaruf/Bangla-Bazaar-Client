import About from "../Components/Home/About";
import Categoris from "../Components/Home/Categoris";
import Companis from "../Components/Home/companis";
import FAQs from "../Components/Home/FAQs";
import Hero from "../Components/Home/Hero";
import Offers from "../Components/Home/Offers";
import Stats from "../Components/Home/Stats";
import '../Style/customScroll.css'

function Home() {
  return (
    <div className="custom-scrollbar">
      <Hero />
      <Stats />
      <Categoris />
      <About />
      <Companis />
      <Offers />
      <FAQs />
    </div>
  );
}

export default Home;
