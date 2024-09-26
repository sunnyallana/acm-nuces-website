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
    <Router>
      <NavBarComponent /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
