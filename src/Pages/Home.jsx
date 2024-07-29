
import About from "../Components/Home/About";
import Categoris from "../Components/Home/Categoris";
import Companis from "../Components/Home/companis";
import Hero from "../Components/Home/Hero";
import Offers from "../Components/Home/Offers";
import Stats from "../Components/Home/Stats";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Categoris />
      <About />
      <Companis />
      <Offers/>
    </div>
  );
}

export default Home;
