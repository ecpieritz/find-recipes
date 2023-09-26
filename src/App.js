import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container fr-main">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
