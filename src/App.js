import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import Wheel from './components/Wheel';
import IdeaSection from './sections/IdeaSection';
import Quiz from './components/Quiz';
import StylesSection from './sections/StylesSection';

/**
 * Main App Component for Style Spark
 * Single-page scrolling application with smooth transitions
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content - Single Page Scrolling */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Wheel Section */}
        <div id="wheel">
          <Wheel />
        </div>
        
        {/* Project Idea Section */}
        <IdeaSection />
        
        {/* Quiz Section */}
        <div id="quiz">
          <Quiz />
        </div>
        
        {/* Styles Section */}
        <StylesSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
