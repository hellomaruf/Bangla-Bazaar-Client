import About from "../Components/Home/About";
import Categoris from "../Components/Home/Categoris";
import Companis from "../Components/Home/companis";
import FAQs from "../Components/Home/FAQs";
import Hero from "../Components/Home/Hero";
import Offers from "../Components/Home/Offers";
import Stats from "../Components/Home/Stats";
import Footer from "../Shared/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Categoris />
      <About />
      <Companis />
      <Offers />
      {/* <FAQs/> */}
      <FAQs />
      <Footer />
    </div>
  );
}

export default Home;
