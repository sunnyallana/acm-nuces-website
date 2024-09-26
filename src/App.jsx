import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { PastEvents } from "./pages/PastEvents";
import { OurTeam } from "./pages/OurTeam";
import { ContactUs } from "./pages/ContactUs";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Router>
        <NavBarComponent />
        <div className="flex-grow"> {/* Ensures the main content takes up remaining space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
