// src/components/Draw.jsx
import React, { useRef, useState } from 'react';

const Draw = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000');
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = () => setIsDrawing(true);
  const stopDrawing = () => setIsDrawing(false);

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  return (
    <div className="draw-page">
      <h2>Draw Something</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={() => setIsDrawing(false)}
        width="800"
        height="500"
        className="drawing-canvas "
      />
    </div>
  );
};

export default Draw;
