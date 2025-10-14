import React, { useState, useRef, useEffect } from 'react';
import StyleModal from './StyleModal';

const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const currentRotation = useRef(0);
  const targetRotation = useRef(0);

  const styles = [
    { 
      id: 1, 
      name: 'Old Money Style', 
      description: 'Classic, sophisticated fashion inspired by traditional wealth and elegance. Think timeless pieces, quality fabrics, and understated luxury.',
      inspiration: ['Traditional wealth', 'Ivy League', 'Country clubs'],
      color: '#FFFFFF',
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
      inspiration: ['Nordic design', 'Hygge philosophy', 'Natural materials'],
      color: '#6B7280',
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
      inspiration: ['Hip-hop culture', 'Skateboarding', 'Street art'],
      color: '#000000',
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
      inspiration: ['Power dressing', 'Corporate fashion', 'Feminine tailoring'],
      color: '#FFFFFF',
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
      inspiration: ['Cottagecore', 'Pastel aesthetics', 'Romantic fashion'],
      color: '#6B7280',
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
      inspiration: ['Hippie culture', 'Moroccan design', 'Indian textiles'],
      color: '#000000',
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
      inspiration: ['Timeless elegance', 'Quality materials', 'Sophisticated cuts'],
      color: '#FFFFFF',
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
      inspiration: ['Ivy League', 'Traditional patterns', 'Conservative cuts'],
      color: '#6B7280',
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
      inspiration: ['Grunge music', '90s fashion', 'Nostalgic trends'],
      color: '#000000',
      tags: ['90s', 'grunge', 'nostalgic', 'retro'],
      likes_count: 47,
      downloads_count: 26,
      image1: '/images/90s1.jpg',
      image2: '/images/90s2.jpg',
      image3: '/images/90s3.jpg',
      category: 'Retro'
    }
  ];

  const drawWheel = (ctx, rotation = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    const segmentAngle = (2 * Math.PI) / styles.length;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save context
    ctx.save();

    // Rotate the entire wheel
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);

    // Draw wheel segments
    styles.forEach((style, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;

      // Create gradient for each segment
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0, style.color);
      gradient.addColorStop(1, adjustColorBrightness(style.color, -30));

      // Draw segment
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw segment border
      ctx.strokeStyle = '#1F2937';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw text
      const textAngle = startAngle + segmentAngle / 2;
      const textRadius = radius * 0.7;
      const textX = Math.cos(textAngle) * textRadius;
      const textY = Math.sin(textAngle) * textRadius;

      ctx.save();
      ctx.translate(textX, textY);
      ctx.rotate(textAngle + Math.PI / 2 + Math.PI / 2); // Add 90 degrees rotation
      
      // Choose text color based on background color
      let textColor, strokeColor, lineWidth;
      
      if (style.color === '#000000') {
        textColor = '#FFFFFF';
        strokeColor = '#000000';
        lineWidth = 1;
      } else if (style.color === '#6B7280') {
        textColor = '#FFFFFF';
        strokeColor = '#FFFFFF';
        lineWidth = 0; // No shadow for gray background
      } else {
        textColor = '#000000';
        strokeColor = '#FFFFFF';
        lineWidth = 1;
      }
      
      ctx.fillStyle = textColor;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.font = '13px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Draw text with outline (only if lineWidth > 0)
      if (lineWidth > 0) {
        ctx.strokeText(style.name, 0, 0);
      }
      ctx.fillText(style.name, 0, 0);
      
      ctx.restore();
    });

    // Draw center circle
    ctx.restore();
    ctx.save();
    ctx.translate(centerX, centerY);
    
    // Outer center circle
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#F9FAFB';
    ctx.fill();
    ctx.strokeStyle = '#1F2937';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Inner center circle
    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, 2 * Math.PI);
    ctx.fillStyle = '#1F2937';
    ctx.fill();

    // Center text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('S', 0, 0);

    ctx.restore();
  };

  const adjustColorBrightness = (color, amount) => {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  const animate = () => {
    const diff = targetRotation.current - currentRotation.current;
    const speed = 0.1;
    
    if (Math.abs(diff) > 0.01) {
      currentRotation.current += diff * speed;
      drawWheel(canvasRef.current.getContext('2d'), currentRotation.current);
      animationRef.current = requestAnimationFrame(animate);
    } else {
      currentRotation.current = targetRotation.current;
      drawWheel(canvasRef.current.getContext('2d'), currentRotation.current);
      setIsSpinning(false);
    }
  };

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSelectedStyle(null);
    setShowPopup(false);
    
    // Calculate random rotation (5-10 full rotations + random final position)
    const baseRotations = 5 + Math.random() * 5; // 5-10 rotations
    const finalAngle = Math.random() * (2 * Math.PI); // Random final position
    targetRotation.current = baseRotations * (2 * Math.PI) + finalAngle;
    
    // Start animation
    animate();
    
    // Show popup after 2 seconds
    setTimeout(() => {
      const segmentAngle = (2 * Math.PI) / styles.length;
      const normalizedAngle = (2 * Math.PI - (finalAngle % (2 * Math.PI))) % (2 * Math.PI);
      const selectedIndex = Math.floor(normalizedAngle / segmentAngle);
      setSelectedStyle(styles[selectedIndex]);
      setShowPopup(true);
    }, 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const size = 500;
    canvas.width = size;
    canvas.height = size;
    
    // Set canvas display size
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    
    // Initial draw
    drawWheel(ctx);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-luxury text-center">
        <div className="mb-16">
          <h2 className="heading-luxury text-5xl md:text-6xl mb-6 font-lora">
            TRY ME 
          </h2>
          <p className="body-luxury text-lg max-w-2xl mx-auto text-gray-600">
            for brave experiments!
          </p>
        </div>

        <div className="relative mx-auto w-[500px] h-[500px] mb-16">
          {/* Canvas Wheel */}
          <div className="relative w-full h-full">
            <canvas
              ref={canvasRef}
              className={`w-full h-full cursor-pointer transition-all duration-300 ${
                isSpinning ? 'cursor-not-allowed' : 'hover:scale-105'
              }`}
              onClick={spinWheel}
            />
          </div>
        </div>

        {/* Spin Button */}
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={`btn-primary text-lg${
            isSpinning
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : ''
          }`}
        >
          {isSpinning ? 'SPINNING...' : 'SPIN THE WHEEL'}
        </button>
      </div>

      {/* Style Modal */}
      <StyleModal
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        style={selectedStyle}
      />
    </div>
  );
};

export default Wheel;