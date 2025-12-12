import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

function App() {
  return <div className="min-h-screen bg-[#D7CBBA] text-white overflow-hidden">
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <Testimonials />
    <Footer />
    <Socials />

  </div>;
}

export default App
