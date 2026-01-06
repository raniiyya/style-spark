import { useState, useRef, useEffect } from "react";
import StyleModal from "./StyleModal";
import { styles } from "../styles.ts";

export const triggerWheelSpin = () => {
  window.dispatchEvent(new Event("spin-wheel"));
};

const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [lastDraw, setLastDraw] = useState(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const currentRotation = useRef(0);
  const targetRotation = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleSpin = () => {
      if (isSpinning) return;

      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      if (!sectionRef) return;

      setTimeout(() => {
        spinWheel();
      }, 600);
    };

    window.addEventListener("spin-wheel", handleSpin);
    return () => window.removeEventListener("spin-wheel", handleSpin);
  }, [isSpinning]);

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

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      let color = "#CCCCCC";
      let textColor = "#000000";
      let strokeColor = "#FFFFFF";
      let lineWidth = 0;

      if (index % 3 === 1) color = "#FFFFFF";
      if (index % 3 === 2) {
        color = "#000000";
        textColor = "#FFFFFF";
        strokeColor = color;
        lineWidth = 1;
      }

      gradient.addColorStop(0, color);
      // gradient.addColorStop(1, adjustColorBrightness(style.canvasColor, -30));

      // Draw segment
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw text
      const textAngle = startAngle + segmentAngle / 2;
      const textRadius = radius * 0.6;
      const textX = Math.cos(textAngle) * textRadius;
      const textY = Math.sin(textAngle) * textRadius;

      ctx.save();
      ctx.translate(textX, textY);
      ctx.rotate(textAngle + Math.PI / 2 + Math.PI / 2); // Add 90 degrees rotation

      ctx.fillStyle = textColor;
      ctx.strokeStyle = strokeColor;
      ctx.font = '17px "Mona Sans"';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

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
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Inner center circle
    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();

    // Center text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold italic 20px Pinyon";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("S", 0, 0);

    ctx.restore();
  };

  const animate = () => {
    const diff = targetRotation.current - currentRotation.current;
    const speed = 0.1;

    if (Math.abs(diff) > 0.01) {
      currentRotation.current += diff * speed;
      drawWheel(canvasRef.current.getContext("2d"), currentRotation.current);
      animationRef.current = requestAnimationFrame(animate);
    } else {
      currentRotation.current = targetRotation.current;
      drawWheel(canvasRef.current.getContext("2d"), currentRotation.current);
      setIsSpinning(false);
    }
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedStyle(null);
    setShowPopup(false);

    // Calculate random rotation (5-10 full rotations + random final position)
    const baseRotations = 100 + Math.random() * 100;
    const finalAngle = Math.random() * (2 * Math.PI); // Random final position
    targetRotation.current = baseRotations * (2 * Math.PI) + finalAngle;

    animate();

    // Show popup after 2 seconds
    setTimeout(() => {
      const segmentAngle = (2 * Math.PI) / styles.length;
      const normalizedAngle =
        (2 * Math.PI - (finalAngle % (2 * Math.PI))) % (2 * Math.PI);
      let selectedIndex = Math.floor(normalizedAngle / segmentAngle);
      if (selectedIndex === lastDraw)
        selectedIndex = (selectedIndex + 1) % styles.length;
      setLastDraw(selectedIndex);
      setSelectedStyle(styles[selectedIndex]);
      setShowPopup(true);
    }, 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set canvas size responsively
    const updateCanvasSize = () => {
      const size = Math.min(window.innerWidth * 0.8, 600);
      canvas.width = size;
      canvas.height = size;

      // Set canvas display size
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      // Redraw wheel with new size
      drawWheel(ctx);
    };

    // Initial size setup
    updateCanvasSize();

    // Add resize listener
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
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

        <div
          className="flex justify-center items-center mb-16"
          ref={sectionRef}
        >
          <div className="w-full max-w-[600px] aspect-square flex justify-center items-center">
            <canvas
              ref={canvasRef}
              className={`w-full h-full max-w-[600px] cursor-pointer transition-all duration-300 ${
                isSpinning ? "cursor-not-allowed" : ""
              }`}
              onClick={spinWheel}
            />
          </div>
        </div>

        {/* Spin Button */}
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={`btn-primary text-lg ${
            isSpinning ? "bg-gray-300 text-gray-500" : ""
          }`}
        >
          SPIN THE WHEEL
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
