import { useState } from "react";
import StyleModal from "../components/StyleModal/StyleModal.jsx";
import { triggerWheelSpin } from "../components/Wheel/Wheel.jsx";
import { scrollToSection } from "../utils/scrollToSection.js";
import { stylesData } from "../stylesData.js";

const StylesSection = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (style) => {
    setSelectedStyle(style);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="styles"
        className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
              Explore Our Style Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover nine distinct artistic styles, each with its own unique
              characteristics, inspiration sources, and creative challenges.
              Click on any style to learn more and get inspired.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stylesData.map((style) => (
              <div
                key={style.id}
                onClick={() => openModal(style)}
                className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-3 h-48">
                    {[0, 1, 2].map((_, i) => (
                      <img
                        src={style.images[i]}
                        alt={style.name + " image"}
                        className="h-full object-cover"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {style.description}
                  </p>
                  {style.tags && style.tags.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Tags:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {style.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {style.tags.length > 3 && (
                          <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                            +{style.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  <button className="btn-primary w-full mt-auto">
                    Explore Style
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StyleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          style={selectedStyle}
        />
      </section>
      <div className="text-center my-16">
        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-lora">
            Ready to Start Creating?
          </h3>
          <p className="text-gray-600 mb-6">
            Choose a style that speaks to you, or let our wheel decide for you.
            Every style offers unique challenges and endless creative
            possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary" onClick={triggerWheelSpin}>
              Spin the Wheel
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("quiz")}
            >
              Take the Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StylesSection;
