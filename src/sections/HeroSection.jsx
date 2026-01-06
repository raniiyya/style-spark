import { scrollToSection } from "../utils/scrollToSection.ts";

const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-cream-50 relative overflow-hidden pt-16"
      >
        {/* Minimal background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-cream-300 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-cream-300 rounded-full opacity-15"></div>
        </div>

        <div className="relative z-10 container-luxury text-center">
          {/* Main Heading with luxury typography */}
          <h1 className="heading-luxury text-7xl md:text-8xl lg:text-9xl mb-8 leading-none">
            <span className="script-text text-[4rem] md:text-[4.75rem] lg:text-[6.25rem] italic font-thin">
              Style
            </span>
            <br />
            <span className="display-serif">SPARK</span>
          </h1>

          {/* Impact statement */}
          <div className="mb-12">
            <p className="text-lg md:text-xl mb-4 font-normal">
              {/* BRAND MISSION IS UNVEILING TIMELESS & CHIC BEAUTY */}
              Brand Mission is Unveiling Timeless & Chic Beauty
            </p>
          </div>

          {/* Luxury CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              onClick={() => scrollToSection("styles")}
              className="btn-primary"
            >
              Discover Styles
            </button>
            <button
              onClick={() => scrollToSection("quiz")}
              className="btn-secondary"
            >
              Take Assessment
            </button>
          </div>
        </div>
      </section>
      {/* Minimalist features preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-24">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-charcoal-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-charcoal-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h3 className="subheading-luxury text-lg mb-3">RANDOM DISCOVERY</h3>
          <p className="body-luxury text-md">
            Let chance guide your creative journey
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 border-2 border-charcoal-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-charcoal-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="subheading-luxury text-lg mb-3">
            PERSONALIZED INSIGHT
          </h3>
          <p className="body-luxury text-md">
            Discover your unique creative preferences
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 border-2 border-charcoal-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-charcoal-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h3 className="subheading-luxury text-lg mb-3">CURATED COLLECTION</h3>
          <p className="body-luxury text-md">
            Explore nine distinct artistic styles
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
