import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-cream-50 border-t border-cream-200">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="heading-luxury text-2xl mb-6">
              <span className="script-text text-xl italic font-thin">
                Style
              </span>
              <span className="ml-2">SPARK</span>
            </h3>
            <p className="body-luxury mb-8 max-w-md">
              A sophisticated style challenge generator for creative discovery.
              Explore new artistic directions and unlock your creative potential
              through curated style exploration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="subheading-luxury text-xs mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="body-luxury text-sm hover:text-charcoal-800 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("wheel")}
                  className="body-luxury text-sm hover:text-charcoal-800 transition-colors duration-300"
                >
                  Style Wheel
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quiz")}
                  className="body-luxury text-sm hover:text-charcoal-800 transition-colors duration-300"
                >
                  Take Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("styles")}
                  className="body-luxury text-sm hover:text-charcoal-800 transition-colors duration-300"
                >
                  Browse Styles
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="subheading-luxury text-xs mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li className="body-luxury text-sm">
                rdavuro1@stu.vistula.edu.pl
              </li>
              <li className="body-luxury text-sm">Warsaw, Poland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-200 mt-12 pt-8 text-center">
          <p className="body-luxury text-sm text-charcoal-500">
            © 2025 Style Spark
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
