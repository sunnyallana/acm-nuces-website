import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { OurTeam } from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import NavBarComponent from "./components/GlobalComponents/NavBarComponent";
import Navbar2 from "./components/GlobalComponents/Navbar2";
import FooterComponent from "./components/GlobalComponents/FooterComponent";
import Loader from "./components/GlobalComponents/LoaderComponent"; // Import the loader
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavBarComponent />
            <div className="flex justify-center items-center w-[100%] mx-auto">
              <Navbar2/>
            </div>
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </div>
            <FooterComponent />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;