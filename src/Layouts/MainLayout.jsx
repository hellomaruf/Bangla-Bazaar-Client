import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";
import SplashScreen from "../Pages/SplashScreen";
import '../Style/customScroll.css'
function MainLayout() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="custom-scrollbar">
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default MainLayout;
