import { stylesData } from "../../stylesData";

export const drawWheel = (canvas, rotation = 0) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 20;
  const segmentAngle = (2 * Math.PI) / stylesData.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(rotation);

  stylesData.forEach((style, index) => {
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

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    const textAngle = startAngle + segmentAngle / 2;
    const textRadius = radius * 0.6;

    ctx.save();
    ctx.translate(
      Math.cos(textAngle) * textRadius,
      Math.sin(textAngle) * textRadius
    );
    ctx.rotate(textAngle + Math.PI);
    ctx.fillStyle = textColor;
    ctx.strokeStyle = strokeColor;
    ctx.font = '17px "Mona Sans"';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (lineWidth > 0) ctx.strokeText(style.name, 0, 0);
    ctx.fillText(style.name, 0, 0);

    ctx.restore();
  });

  ctx.restore();
  ctx.save();
  ctx.translate(centerX, centerY);

  ctx.beginPath();
  ctx.arc(0, 0, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 25, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold italic 20px Pinyon";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("S", 0, 0);

  ctx.restore();
};
