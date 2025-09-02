"use client";

import React, { useState } from "react";

export default function SummaryAndEvaluation() {
  const evaluationTable = [
    ["Conformance to specification", 40, "On/before time delivery", 20, "ISO/QMS/Applicable certification", 15, "100 % Commitment", 15],
    ["Quality of documents (CoA/CoC/documentation etc.)", 10, "Delayed by ≤ one month", 15, "", "", "< 100 to 90 % Commitment", 10],
    ["", "", "Delayed by > one month", 10, "", "", "< 90 % Commitment", 5],
    ["Total", 50, "Total", 20, "Total", 15, "Total", 15],
  ];

  const [selectedIndices, setSelectedIndices] = useState(Array(4).fill(-1));

  const handleSelection = (col, rowIndex) => {
    const updated = [...selectedIndices];
    updated[col] = rowIndex;
    setSelectedIndices(updated);
  };

  const getScore = (col) => {
    const rowIndex = selectedIndices[col];
    return rowIndex >= 0 ? evaluationTable[rowIndex][col * 2 + 1] : 0;
  };

  const totalScore = [0, 1, 2, 3].reduce((sum, col) => sum + getScore(col), 0);
  const grade = totalScore === 0 ? "" : totalScore >= 70 ? "Grade-A" : totalScore >= 41 ? "Grade-B" : "Grade-C";

  const parameters = [
    "Quality",
    "Delivery Performance",
    "Quality System of Supplier",
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
                      <div className="flex flex-col gap-2 items-center">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={grade === "Grade-A"}
                            readOnly
                            className={`mr-2 ${grade === "Grade-A" ? "bg-green-500 text-green-500" : ""}`}
                          />
                          Grade-A
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={grade === "Grade-B"}
                            readOnly
                            className={`mr-2 ${grade === "Grade-B" ? "bg-green-500 text-green-500" : ""}`}
                          />
                          Grade-B
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={grade === "Grade-C"}
                            readOnly
                            className={`mr-2 ${grade === "Grade-C" ? "bg-green-500 text-green-500" : ""}`}
                          />
                          Grade-C
                        </label>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Evaluation Table */}
      <div className="overflow-x-auto mb-10 ">
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
                {[0, 1, 2, 3].map((colIndex) => (
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

      {/* Grade Criteria */}
      <div className="mb-6S">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Grade and Acceptance Criteria</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li><strong>Grade-A:</strong> Total score 70 & above — <em>Continued as approved supplier</em></li>
          <li><strong>Grade-B:</strong> Total score between 41 to 69 — <em>Warning to improve</em></li>
          <li><strong>Grade-C:</strong> Total score ≤ 40 — <em>Discontinue</em></li>
        </ul>
      </div>

      <div className="p-2 border border-gray-700">
        <p className="text-sm text-left mb-20 font-bold">
          If Supplier received Grade B or C, document the action taken (attach additional sheet if required):
        </p>
      </div>
    </>
  );
}