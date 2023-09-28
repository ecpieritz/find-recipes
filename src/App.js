import HeroSection from "./components/HeroSection";
import ImproveSkillsSection from "./components/ImproveSkillsSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container fr-main">
        <HeroSection />
        <ImproveSkillsSection />
      </div>
    </>
  );
}

export default App;
