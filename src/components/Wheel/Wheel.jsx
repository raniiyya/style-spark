import { useState, useRef, useEffect } from "react";
import StyleModal from "../StyleModal/StyleModal.jsx";
import { stylesData } from "../../stylesData.js";
import { drawWheel } from "./drawWheel.js";

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

  const animate = () => {
    const diff = targetRotation.current - currentRotation.current;
    const speed = 0.1;

    if (Math.abs(diff) > 0.01) {
      currentRotation.current += diff * speed;
      drawWheel(canvasRef.current, currentRotation.current);
      animationRef.current = requestAnimationFrame(animate);
    } else {
      currentRotation.current = targetRotation.current;
      drawWheel(canvasRef.current, currentRotation.current);
      setIsSpinning(false);
    }
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedStyle(null);
    setShowPopup(false);

    const baseRotations = 100 + Math.random() * 100;
    const finalAngle = Math.random() * (2 * Math.PI);
    targetRotation.current = baseRotations * (2 * Math.PI) + finalAngle;

    animate();

    setTimeout(() => {
      const segmentAngle = (2 * Math.PI) / stylesData.length;
      const normalizedAngle =
        (2 * Math.PI - (finalAngle % (2 * Math.PI))) % (2 * Math.PI);
      let selectedIndex = Math.floor(normalizedAngle / segmentAngle);
      if (selectedIndex === lastDraw)
        selectedIndex = (selectedIndex + 1) % stylesData.length;
      setLastDraw(selectedIndex);
      setSelectedStyle(stylesData[selectedIndex]);
      setShowPopup(true);
    }, 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const size = Math.min(window.innerWidth * 0.8, 600);
      canvas.width = size;
      canvas.height = size;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      drawWheel(canvas);
    };
    updateCanvasSize();

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div
      id="wheel"
      className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50"
    >
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
      <StyleModal
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        style={selectedStyle}
      />
    </div>
  );
};

export default Wheel;
