import { useState } from "react";
import { scrollToSection } from "../../utils/scrollToSection";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const selectSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="px-8 fixed top-0 w-full bg-cream-50/95 backdrop-blur-sm border-b border-cream-200 z-50">
      <div className="container-luxury">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="heading-luxury text-2xl">
              <span className="script-text text-xl italic font-thin">
                Style
              </span>
              <span className="ml-2">SPARK</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-12">
            <button
              onClick={() => selectSection("hero")}
              className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300"
            >
              HOME
            </button>
            <button
              onClick={() => selectSection("wheel")}
              className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300"
            >
              WHEEL
            </button>
            <button
              onClick={() => selectSection("idea")}
              className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300"
            >
              ABOUT
            </button>
            <button
              onClick={() => selectSection("quiz")}
              className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300"
            >
              QUIZ
            </button>
            <button
              onClick={() => selectSection("styles")}
              className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300"
            >
              STYLES
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal-600 hover:text-charcoal-800 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-cream-200">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => selectSection("hero")}
                className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300 text-left"
              >
                HOME
              </button>
              <button
                onClick={() => selectSection("wheel")}
                className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300 text-left"
              >
                WHEEL
              </button>
              <button
                onClick={() => selectSection("idea")}
                className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300 text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => selectSection("quiz")}
                className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300 text-left"
              >
                QUIZ
              </button>
              <button
                onClick={() => selectSection("styles")}
                className="subheading-luxury text-xs hover:text-charcoal-600 transition-colors duration-300 text-left"
              >
                STYLES
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
