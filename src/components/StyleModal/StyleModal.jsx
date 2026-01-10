import { useEffect } from "react";

const StyleModal = ({ isOpen, onClose, style }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !style) return null;

  const { images, categories, description, name } = style;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
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

        <div className="p-6">
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

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">About This Style</h3>
            <p className="leading-relaxed text-base">{description}</p>
          </div>

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
