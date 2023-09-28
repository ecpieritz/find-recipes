import HeroSection from "./components/HeroSection";
import ImproveSkillsSection from "./components/ImproveSkillsSection";
import Navbar from "./components/Navbar";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopChefsSection from "./components/TopChefsSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="container fr-main">
        <HeroSection />
        <ImproveSkillsSection />
        <TopChefsSection />
      </div>
    </>
  );
}

export default App;
