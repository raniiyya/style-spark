import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./sections/HeroSection";
import Wheel from "./components/Wheel/Wheel";
import IdeaSection from "./sections/IdeaSection";
import Quiz from "./components/Quiz/Quiz";
import StylesSection from "./sections/StylesSection";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <Wheel />
        <IdeaSection />
        <Quiz />
        <StylesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
