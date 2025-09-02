"use client";

import React, { useState } from "react";

export default function SummaryAndEvaluation() {
  const evaluationTable = [
    ["100% Compliance", 30, "ISO/ANV Certification", 30, "On Time", 10, "Lowest (L1)", 20, "100% Commitment", 10],
    ["95% Compliance", 24, "Non ISO but Excellent system performance", 24, "1-2 Weeks Late", 8, "2nd Lowest (L2)", 16, "95% Commitment", 8],
    ["90% Compliance", 15, "Non ISO but Good system performance", 15, "3-4 Weeks Late", 5, "3rd Lowest (L3)", 10, "90% Commitment", 5],
    ["85% Compliance", 6, "Basic Quality Processes", 6, "4-5 Weeks Late", 2, "4th Lowest (L4)", 4, "85% Commitment", 2],
  ];

  const [selectedIndices, setSelectedIndices] = useState(Array(5).fill(-1));

  const handleSelection = (col, rowIndex) => {
    const updated = [...selectedIndices];
    updated[col] = rowIndex;
    setSelectedIndices(updated);
  };

  const getScore = (col) => {
    const rowIndex = selectedIndices[col];
    return rowIndex >= 0 ? evaluationTable[rowIndex][col * 2 + 1] : 0;
  };

  const totalScore = [0, 1, 2, 3, 4].reduce((sum, col) => sum + getScore(col), 0);
  const grade = totalScore === 0 ? "" : totalScore >= 70 ? "Grade-A" : totalScore >= 41 ? "Grade-B" : "Grade-C";

  const parameters = [
    "Quality of Items",
    "Quality System of Supplier",
    "Delivery Performance",
    "Price",
    "Quantity Commitment",
  ];

  return (
    <>
      {/* Summary Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border p-2 text-left">Parameters</th>
              <th className="border p-2 text-center">Individual Score Obtained</th>
              <th className="border p-2 text-center">Total Score</th>
              <th className="border p-2 text-center">Grade</th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param, index) => (
              <tr key={index}>
                <td className="border p-2">{param}</td>
                <td className="border p-2 text-center">{getScore(index)}</td>
                {index === 0 && (
                  <>
                    <td className="border p-2 text-center font-semibold" rowSpan={parameters.length}>
                      {totalScore}
                    </td>
                    <td className="border p-2 text-center font-semibold" rowSpan={parameters.length}>
                      {grade || ""}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Grade Criteria */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Grade and Acceptance Criteria</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li><strong>Grade-A:</strong> Total score 70 & above — <em>Continued as approved supplier</em></li>
          <li><strong>Grade-B:</strong> Total score between 41 to 69 — <em>Warning to improve</em></li>
          <li><strong>Grade-C:</strong> Total score ≤ 40 — <em>Discontinue</em></li>
        </ul>
      </div>

      {/* Evaluation Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-gray-300 text-center">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {parameters.map((param, i) => (
                <th key={i} colSpan={2} className="border p-2">{param}</th>
              ))}
            </tr>
            <tr>
              {parameters.map((_, i) => (
                <React.Fragment key={i}>
                  <th className="border p-2">Criteria</th>
                  <th className="border p-2">Score</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {evaluationTable.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {[0, 1, 2, 3, 4].map((colIndex) => (
                  <React.Fragment key={colIndex}>
                    <td
                      className="border p-2 cursor-pointer"
                      onClick={() => handleSelection(colIndex, rowIndex)}
                    >
                      {row[colIndex * 2]}
                    </td>
                    <td
                      className={`border p-2 cursor-pointer ${
                        selectedIndices[colIndex] === rowIndex ? "bg-green-100 font-semibold rounded-full" : ""
                      }`}
                      onClick={() => handleSelection(colIndex, rowIndex)}
                    >
                      {row[colIndex * 2 + 1]}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
