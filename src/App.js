import HeroSection from "./components/HeroSection";
import ImproveSkillsSection from "./components/ImproveSkillsSection";
import Navbar from "./components/Navbar";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopChefsSection from "./components/TopChefsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container fr-main">
        <HeroSection />
        <ImproveSkillsSection />
        <TopChefsSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
