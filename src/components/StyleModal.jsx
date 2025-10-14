import React, { useState } from 'react';

const StyleModal = ({ isOpen, onClose, style }) => {
  const [imageErrors, setImageErrors] = useState({});

  if (!isOpen || !style) return null;

  // Generate detailed description based on style data
  const getDetailedDescription = (style) => {
    const baseDescription = style.description || '';
    
    // Create detailed descriptions for each style
    const detailedDescriptions = {
      'Old Money Style': `${baseDescription} This sophisticated aesthetic draws from generations of refined taste, emphasizing quality over quantity. Think cashmere sweaters, tailored blazers, and timeless accessories that never go out of style. The color palette typically includes navy, camel, cream, and subtle patterns like houndstooth or pinstripes. Key elements include structured silhouettes, natural fabrics, and understated luxury that speaks volumes without being flashy.`,
      
      'Stockholm Style': `${baseDescription} This Nordic approach to design emphasizes functionality, sustainability, and natural beauty. The aesthetic is characterized by light-filled spaces, natural materials like wood and stone, and a neutral color palette with occasional pops of muted color. Think clean lines, cozy textures, and a "less is more" philosophy that creates serene, uncluttered environments.`,
      
      'Streetwear': `${baseDescription} This urban fashion movement has evolved from underground subcultures to mainstream style, emphasizing comfort, self-expression, and cultural relevance. Key elements include oversized silhouettes, bold graphics, sneaker culture, and a mix of high and low fashion. The aesthetic celebrates individuality while maintaining a sense of community and cultural awareness.`,
      
      'Office Siren': `${baseDescription} This powerful professional aesthetic combines authority with allure, creating a commanding presence in the workplace. Think sharp tailoring, figure-flattering silhouettes, and strategic use of color and accessories. The style balances professionalism with femininity, using structured pieces, quality fabrics, and attention to detail to project confidence and competence.`,
      
      'Soft Girl': `${baseDescription} This romantic, dreamy aesthetic embraces femininity with a modern twist. The style features pastel colors, flowy fabrics, delicate accessories, and a whimsical approach to fashion. Think cottagecore meets contemporary style, with elements like floral prints, lace details, and soft textures that create an ethereal, approachable look.`,
      
      'Bohemian': `${baseDescription} This free-spirited style celebrates artistic expression and cultural diversity. The aesthetic combines flowing fabrics, rich textures, and eclectic accessories from around the world. Think layered jewelry, embroidered details, and a mix of patterns and colors that reflect a nomadic, artistic lifestyle.`,
      
      'Classy': `${baseDescription} This timeless approach to style emphasizes elegance, sophistication, and enduring appeal. The aesthetic focuses on quality pieces, classic silhouettes, and refined details that never go out of fashion. Think tailored pieces, neutral colors, and understated accessories that create a polished, put-together look.`,
      
      'Preppy': `${baseDescription} This traditional American style draws from Ivy League aesthetics and classic collegiate fashion. The look emphasizes clean lines, conservative cuts, and timeless patterns like stripes, plaids, and nautical themes. Think polo shirts, khakis, blazers, and loafers that create a polished, academic appearance.`,
      
      '90s Style': `${baseDescription} This nostalgic aesthetic captures the bold, experimental spirit of the 1990s. The style features grunge elements, oversized silhouettes, and statement pieces that defined the decade. Think denim everything, platform shoes, chokers, and a mix of high and low fashion that celebrated individuality and rebellion.`
    };

    return detailedDescriptions[style.name] || baseDescription;
  };

  // Function to handle image loading errors
  const handleImageError = (imageKey) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  // Function to get image source with fallback
  const getImageSrc = (imageKey) => {
    if (imageErrors[imageKey]) {
      return '/images/placeholder.jpg';
    }
    return style[imageKey] || '/images/placeholder.jpg';
  };

  // Get available images (up to 3)
  const getAvailableImages = () => {
    const images = [];
    for (let i = 1; i <= 3; i++) {
      const imageKey = `image${i}`;
      if (style[imageKey] || !imageErrors[imageKey]) {
        images.push({
          key: imageKey,
          src: getImageSrc(imageKey),
          alt: `${style.name} - Image ${i}`
        });
      }
    }
    return images;
  };

  const availableImages = getAvailableImages();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-3xl font-bold text-gray-900 font-lora text-center">
            {style.name}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Pinterest-style Image Gallery */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Style Inspiration</h3>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {/* Image placeholders with varying heights for Pinterest effect */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="break-inside-avoid mb-4">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div 
                      className="w-full bg-gray-300 flex items-center justify-center"
                      style={{ 
                        height: `${Math.floor(Math.random() * 200) + 200}px`,
                        background: `linear-gradient(135deg, ${['#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280'][Math.floor(Math.random() * 5)]}, ${['#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563'][Math.floor(Math.random() * 5)]})`
                      }}
                    >
                      <div className="text-center p-4">
                        <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-600 text-sm font-medium">Inspiration {index}</p>
                        <p className="text-gray-500 text-xs mt-1">Coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Style</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {getDetailedDescription(style)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleModal;
