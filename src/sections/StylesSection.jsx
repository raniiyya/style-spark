import React, { useState } from 'react';
import StyleModal from '../components/StyleModal';

const StylesSection = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // All 9 styles stored in frontend
  const styles = [
    {
      id: 1,
      name: 'Old Money Style',
      description: 'Classic, sophisticated fashion inspired by traditional wealth and elegance. Think timeless pieces, quality fabrics, and understated luxury.',
      color: 'bg-amber-200',
      tags: ['old money', 'luxury', 'elegant', 'sophisticated'],
      likes_count: 45,
      downloads_count: 23,
      image1: '/images/oldmoney1.jpg',
      image2: '/images/oldmoney2.jpg',
      image3: '/images/oldmoney3.jpg',
      category: 'Classic'
    },
    {
      id: 2,
      name: 'Stockholm Style',
      description: 'Minimalist Scandinavian aesthetic characterized by clean lines, neutral colors, and functional design. Effortless and chic.',
      color: 'bg-gray-200',
      tags: ['stockholm', 'minimal', 'scandinavian', 'clean'],
      likes_count: 38,
      downloads_count: 19,
      image1: '/images/stockholm1.jpg',
      image2: '/images/stockholm2.jpg',
      image3: '/images/stockholm3.jpg',
      category: 'Minimalist'
    },
    {
      id: 3,
      name: 'Streetwear',
      description: 'Urban fashion influenced by hip-hop culture, skateboarding, and street art. Bold graphics, oversized fits, and casual-cool vibes.',
      color: 'bg-black',
      tags: ['streetwear', 'urban', 'hip-hop', 'casual'],
      likes_count: 52,
      downloads_count: 31,
      image1: '/images/streetwear1.jpg',
      image2: '/images/streetwear2.jpg',
      image3: '/images/streetwear3.jpg',
      category: 'Urban'
    },
    {
      id: 4,
      name: 'Office Siren',
      description: 'Professional yet alluring workwear that commands attention. Sharp tailoring meets feminine details for powerful confidence.',
      color: 'bg-red-200',
      tags: ['office siren', 'professional', 'powerful', 'tailored'],
      likes_count: 41,
      downloads_count: 27,
      image1: '/images/officesiren1.jpg',
      image2: '/images/officesiren2.jpg',
      image3: '/images/officesiren3.jpg',
      category: 'Professional'
    },
    {
      id: 5,
      name: 'Soft Girl',
      description: 'Sweet, romantic aesthetic with pastel colors, feminine silhouettes, and dreamy accessories. Think cottagecore meets modern femininity.',
      color: 'bg-pink-200',
      tags: ['soft girl', 'romantic', 'feminine', 'pastel'],
      likes_count: 48,
      downloads_count: 29,
      image1: '/images/softgirl1.jpg',
      image2: '/images/softgirl2.jpg',
      image3: '/images/softgirl3.jpg',
      category: 'Romantic'
    },
    {
      id: 6,
      name: 'Bohemian',
      description: 'Free-spirited, artistic style with flowing fabrics, earthy tones, and eclectic accessories. Inspired by 1960s counterculture and world travels.',
      color: 'bg-orange-200',
      tags: ['bohemian', 'artistic', 'eclectic', 'free-spirited'],
      likes_count: 44,
      downloads_count: 25,
      image1: '/images/bohemian1.jpg',
      image2: '/images/bohemian2.jpg',
      image3: '/images/bohemian3.jpg',
      category: 'Eclectic'
    },
    {
      id: 7,
      name: 'Classy',
      description: 'Timeless, elegant fashion that never goes out of style. Clean cuts, quality materials, and sophisticated color palettes.',
      color: 'bg-gray-300',
      tags: ['classy', 'elegant', 'timeless', 'sophisticated'],
      likes_count: 39,
      downloads_count: 22,
      image1: '/images/classy1.jpg',
      image2: '/images/classy2.jpg',
      image3: '/images/classy3.jpg',
      category: 'Classic'
    },
    {
      id: 8,
      name: 'Preppy',
      description: 'Traditional American collegiate style with clean lines, classic patterns, and conservative cuts. Think Ivy League meets modern polish.',
      color: 'bg-blue-200',
      tags: ['preppy', 'traditional', 'collegiate', 'ivy league'],
      likes_count: 36,
      downloads_count: 18,
      image1: '/images/preppy1.jpg',
      image2: '/images/preppy2.jpg',
      image3: '/images/preppy3.jpg',
      category: 'Traditional'
    },
    {
      id: 9,
      name: '90s Style',
      description: 'Nostalgic fashion inspired by the 1990s decade. Grunge elements, oversized silhouettes, and bold statement pieces.',
      color: 'bg-purple-200',
      tags: ['90s', 'grunge', 'nostalgic', 'retro'],
      likes_count: 47,
      downloads_count: 26,
      image1: '/images/90s1.jpg',
      image2: '/images/90s2.jpg',
      image3: '/images/90s3.jpg',
      category: 'Retro'
    }
  ];

  const openModal = (style) => {
    setSelectedStyle(style);
    setIsModalOpen(true);
  };

  return (
    <>
       <section id="styles" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            Explore Our Style Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover nine distinct artistic styles, each with its own unique characteristics, 
            inspiration sources, and creative challenges. Click on any style to learn more and get inspired.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {styles.map((style) => (
            <div
              key={style.id}
              onClick={() => openModal(style)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100 overflow-hidden"
            >
              {/* Style Image */}
              <div className="h-48 relative overflow-hidden">
                {style.image1 ? (
                  <img
                    src='/images/placeholder.jpg'
                    alt={`${style.name} preview`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder.jpg';
                    }}
                  />
                ) : (
                  <div className={`h-full ${style.color || 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">Style Preview</p>
                    </div>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Style Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-lora">
                  {style.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {style.description}
                </p>
                
                {/* Tags */}
                {style.tags && style.tags.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h4>
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

                {/* Action Button */}
                <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                  Explore Style
                </button>
              </div>
            </div>
            ))}
          </div>
      </div>

      {/* Style Modal */}
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
                Every style offers unique challenges and endless creative possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Spin the Wheel
                </button>
                <button className="btn-secondary">
                  Take the Quiz
                </button>
              </div>
            </div>
          </div></>
  );
};

export default StylesSection;
