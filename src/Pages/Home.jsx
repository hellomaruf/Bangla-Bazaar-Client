
import About from "../Components/Home/About";
import Categoris from "../Components/Home/Categoris";
import Companis from "../Components/Home/companis";
import Hero from "../Components/Home/Hero";
import Stats from "../Components/Home/Stats";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Categoris />
      <About />
      <Companis/>
    </div>
  );
}

export default Home;
