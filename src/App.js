import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import PartyCounter from "./components/PartyCounter";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/party" element={<PartyCounter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
