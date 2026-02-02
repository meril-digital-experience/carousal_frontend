"use client";

import { useState } from "react";

export default function FileUploads() {
  const [fileName, setFileName] = useState<string>("");

  const handleExcelUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    console.log("file name :", file.name)

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://10.10.3.45:85/uploadExcel", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", response.status);

      if (!response.ok) throw new Error("Upload failed");

      alert("Excel uploaded successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Excel upload failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-50 flex items-center justify-center">
      
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-xl  border border-white/40 p-8">

        <h1 className="text-2xl font-semibold text-slate-800 text-center mb-2">
          Upload Excel File
        </h1>
        <p className="text-sm text-slate-500 text-center mb-6">
          Import your spreadsheet securely
        </p>

        {/* Upload Area */}
        <label className="group flex flex-col items-center justify-center gap-4 border-2 border-dashed border-blue-200 rounded-xl p-8 cursor-pointer transition-all hover:border-blue-400 hover:bg-blue-50">
          
          <input
            type="file"
            accept=".xls,.xlsx"
            onChange={handleExcelUpload}
            hidden
          />

          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 group-hover:scale-110 transition">
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-slate-700 font-medium">
              Click to upload Excel
            </p>
            <p className="text-xs text-slate-500 mt-1">
              .xls or .xlsx only
            </p>
          </div>

        </label>

        {/* File Name */}
        {fileName && (
          <div className="mt-5 text-center text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2 truncate">
            📄 {fileName}
          </div>
        )}

      </div>
    </div>
  );
}
