"use client";

import React, { useState, useRef, useEffect } from "react";

export default function SignatureSection() {
  const [preparedSignature, setPreparedSignature] = useState("");
  const [approvedSignature, setApprovedSignature] = useState("");
  const preparedCanvasRef = useRef<HTMLCanvasElement>(null);
  const approvedCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawingPrepared, setIsDrawingPrepared] = useState(false);
  const [isDrawingApproved, setIsDrawingApproved] = useState(false);

  const startDrawing = (
    e: React.MouseEvent,
    canvasRef: React.RefObject<HTMLCanvasElement>,
    setIsDrawing: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (
    e: React.MouseEvent,
    canvasRef: React.RefObject<HTMLCanvasElement>,
    isDrawing: boolean
  ) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = (
    setIsDrawing: React.Dispatch<React.SetStateAction<boolean>>
  ) => setIsDrawing(false);

  const saveSignature = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    setSignature: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const canvas = canvasRef.current!;
    setSignature(canvas.toDataURL());
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const clearSignature = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    setSignature: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignature("");
  };

  const resizeCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const parentWidth = canvas.parentElement!.offsetWidth;
    const ctx = canvas.getContext("2d")!;
    canvas.width = parentWidth;
    canvas.height = 100;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
  };

  useEffect(() => {
    resizeCanvas(preparedCanvasRef);
    resizeCanvas(approvedCanvasRef);

    const handleResize = () => {
      resizeCanvas(preparedCanvasRef);
      resizeCanvas(approvedCanvasRef);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-10 px-4">
      {/* Prepared By */}
      <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center gap-4">
            <label className="w-25 font-semibold">Prepared By:</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="flex-1 p-2 border rounded-md border-gray-300 
                         hover:border-blue-500 focus:outline-none 
                         focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

        <label className="block font-medium">Signature:</label>
        <canvas
          ref={preparedCanvasRef}
          className="w-full h-[100px] border border-gray-300 rounded-md hover:border-blue-400 focus-within:ring-blue-300 transition-shadow duration-200"
          onMouseDown={(e) =>
            startDrawing(e, preparedCanvasRef, setIsDrawingPrepared)
          }
          onMouseMove={(e) => draw(e, preparedCanvasRef, isDrawingPrepared)}
          onMouseUp={() => stopDrawing(setIsDrawingPrepared)}
          onMouseOut={() => stopDrawing(setIsDrawingPrepared)}
        />

        <div className="flex gap-2">
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:scale-95 transition-transform duration-150"
            onClick={() => saveSignature(preparedCanvasRef, setPreparedSignature)}
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 active:scale-95 transition-transform duration-150"
            onClick={() => clearSignature(preparedCanvasRef, setPreparedSignature)}
          >
            Clear
          </button>
        </div>

        <div className="flex items-center gap-4">
            <label className="w-10 font-semibold">Date:</label>
            <input
              type="date"
              className="flex-1 p-2 border rounded-md border-gray-300 
                         hover:border-blue-500 focus:outline-none 
                         focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
      </div>

      {/* Approved By */}
      <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center gap-4">
            <label className="w-30 font-semibold">Approved By:</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="flex-1 p-2 border rounded-md border-gray-300 
                         hover:border-blue-500 focus:outline-none 
                         focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

        <label className="block font-medium">Signature:</label>
        <canvas
          ref={approvedCanvasRef}
          className="w-full h-[100px] border border-gray-300 rounded-md hover:border-blue-400 focus-within:ring-blue-300 transition-shadow duration-200"
          onMouseDown={(e) =>
            startDrawing(e, approvedCanvasRef, setIsDrawingApproved)
          }
          onMouseMove={(e) => draw(e, approvedCanvasRef, isDrawingApproved)}
          onMouseUp={() => stopDrawing(setIsDrawingApproved)}
          onMouseOut={() => stopDrawing(setIsDrawingApproved)}
        />

        <div className="flex gap-2">
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:scale-95 transition-transform duration-150"
            onClick={() => saveSignature(approvedCanvasRef, setApprovedSignature)}
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 active:scale-95 transition-transform duration-150"
            onClick={() => clearSignature(approvedCanvasRef, setApprovedSignature)}
          >
            Clear
          </button>
        </div>

          <div className="flex items-center gap-4">
            <label className="w-10 font-semibold">Date:</label>
            <input
              type="date"
              className="flex-1 p-2 border rounded-md border-gray-300 
                         hover:border-blue-500 focus:outline-none 
                         focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
      </div>
    </div>
  );
}
