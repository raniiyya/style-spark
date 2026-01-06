import { useEffect } from "react";

const StyleModal = ({ isOpen, onClose, style }) => {
  useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !style) return null;

  // ✅ Defensive defaults to prevent .map() crashes
  const { images = [], categories = [], description = "", name = "" } = style;

  // Generate detailed description based on style data
  const getDetailedDescription = (style) => {
    const baseDescription = style.description || "";

    const detailedDescriptions = {
      "Minimalist / Classy": `${baseDescription} This style is based on simplicity, balance, and long-lasting design. It avoids trends and excessive decoration, focusing instead on clean lines, neutral colors, and precise tailoring. The aesthetic communicates elegance through restraint and intentional design choices.`,

      "Old Money": `${baseDescription} Old Money style represents understated luxury and traditional elegance. It is rooted in classic fashion principles, emphasizing quality, heritage, and discretion. The look avoids visible branding and trends, signaling status through craftsmanship and timeless design.`,

      "Corporate Chic": `${baseDescription} This style reimagines professional wear with a bold and authoritative edge. It emphasizes power, confidence, and presence through sharp tailoring and expressive silhouettes. The aesthetic balances formality with modern femininity and intention.`,

      "Casual Chic / Streetwear": `${baseDescription} Casual Chic combines comfort with intentional styling. It blends everyday clothing with modern silhouettes and streetwear influences, creating an effortless yet curated appearance. The style reflects individuality and urban lifestyle.`,

      "Romantic / Coquette": `${baseDescription} This style emphasizes softness, femininity, and emotional expression. It is characterized by delicate materials, decorative details, and gentle silhouettes. The aesthetic often references vintage or fairytale elements and focuses on visual lightness.`,

      Sporty: `${baseDescription} Sporty style is inspired by athletic wear and active lifestyles. It prioritizes comfort, movement, and functionality while maintaining a modern and clean appearance. The aesthetic reflects energy, practicality, and ease.`,

      "Vintage-Inspired": `${baseDescription} Vintage-Inspired style draws from past fashion eras while adapting them to modern wear. It values nostalgia, individuality, and classic craftsmanship, often referencing recognizable silhouettes or patterns from specific decades.`,

      Y2K: `${baseDescription} Y2K style is inspired by early 2000s fashion and pop culture. It embraces boldness, experimentation, and playful self-expression. The aesthetic is nostalgic, trend-driven, and visually expressive.`,

      "Boho / Bohemian": `${baseDescription} Boho style is inspired by free-spirited, artistic, and nature-oriented lifestyles. It emphasizes comfort, individuality, and layered textures. The aesthetic feels organic, relaxed, and expressive.`,
    };

    return detailedDescriptions[style.name] || baseDescription;
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-3xl font-bold text-gray-900 font-lora text-center">
            {name}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Grid */}
          {images.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Style Inspiration
              </h3>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                  <div key={index} className="break-inside-avoid mb-4">
                    <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`Style inspiration ${index + 1}`}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">About This Style</h3>
            <p className="leading-relaxed text-base">
              {getDetailedDescription(style)}
            </p>
          </div>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-col gap-[1px]">
              {categories.map((category, index) => (
                <span key={index} className="leading-relaxed text-base">
                  <span className="font-bold">{category.key}:</span>{" "}
                  {category.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleModal;
