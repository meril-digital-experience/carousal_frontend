"use client";

import React from "react";

export default function Header() {
  return (
    <div className="w-full border-b-2 border-gray-300 p-4 md:p-6 flex flex-col lg:flex-row justify-between items-center bg-white mb-4
      [@media_print]:p-2 [@media_print]:mb-2">
      <div className="flex flex-col items-center lg:items-start">
        <img
          className="h-16 w-16 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeWQPPw3D0A-4GbBqyuGJa6KHFOa6cO3giQ&s"
          alt="logo"
        />
        <p className="text-gray-600 mt-1 text-xs italic">Diagnostics</p>
      </div>
      <div className="text-center lg:flex-1 mt-2 lg:mt-0">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 uppercase tracking-wide">
          Supplier Evaluation Form
        </h1>
      </div>
      <div className="text-xs text-gray-700 text-right mt-2 lg:mt-0">
        <p><span className="font-semibold">Format No:</span> XYZ-123</p>
        <p><span className="font-semibold">Supersedes No:</span> ABC-456</p>
      </div>
    </div>
  );
}