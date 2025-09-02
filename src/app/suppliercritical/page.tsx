'use client'
import React, { useState } from "react";

export default function SupplierEvaluationForm() {
  const evaluationTable = [
    ["Conformance to Specification", 40, "On / before time delivery", 20, "ISO / OMS/Applicable Certfication", 15, "100% Commitment", 15, "Grade A", "overall score > 70"],
    ["Quality of documents (CoA/CoC/documentation etc.)", 10, "Delayed by ≤ one month", 15, "", "", "< 100 to 90 % commitment", 5, "Grade B", "overall score 41 to 89"],
    ["", "", "Delayed by > one month", 10, "", "", "< 90 % commitment>", 5, "Grade C", "overall score < 40"],
    ["Total", 50, "Total", 20, "Total", 15, "Total", 15, "-", "-"],
  ];

  const evaluationTables = [
    ["Conformance to Specification", , "On / before time delivery", , "ISO / OMS/Applicable Certfication", , "100% Commitment", , "Grade A"],
    ["Quality of documents (CoA/CoC/documentation etc.)", , "Delayed by ≤ one month", , "", "", "< 100 to 90 % commitment", , "Grade B"],
    ["", "", "Delayed by > one month", , "", "", "< 90 % commitment>", , "Grade C"],
    ["Total", , "Total", , "Total", , "Total", , "Total", ,],
  ];

  const parameters = [
    "Quality",
    "Delivery Performance",
    "Quality System of Supplier",
    "Quantity Commitment",
    "Grade and Acceptance Criteria"
  ];
  const parameterss = [
    "Quality",
    "Delivery Performance",
    "Quality System of Supplier",
    "Quantity Commitment",
    "Overall Score",
    "Grade"
  ];

  

  // ✅ Har consignment ka alag grade state
    const [selectedGrades, setSelectedGrades] = useState({
      consignment1: "",
      consignment2: "",
      consignment3: "",
      consignment4: "",
    });
  
    const handleGradeChange = (consignment, grade) => {
      setSelectedGrades((prev) => ({
        ...prev,
        [consignment]: grade,
      }));
    };

  const Box = ({ w = 32 }) => (
    <span className="inline-block align-middle h-5 border border-black" style={{ width: w }} />
  );

  return (
    <div className="w-[297mm] h-full bg-white mx-auto p-8 text-[11px] leading-tight print:w-[297mm] print:h-[210mm]">

      {/* Header */}
      <div className="grid grid-cols-3 items-center ">
        {/* Left block */}
        <div className="flex items-center">
          <div className="bg-black text-white px-4 py-3 font-semibold tracking-wide ">
            Meril
          </div>
        </div>

        {/* Center title */}
        <div className="text-center col-span-1">
          <h2 className="text-base font-bold">Supplier Evaluation</h2>
          <p className="text-xs font-semibold">Critical Supplier</p>
        </div>

        {/* Right block */}
        <div className="text-[10px] text-right leading-tight">
          <p>Format No.: F/MT/MM/QPA/Q/025/004</p>
          <p>Issue No.: 01, Rev No.: 04</p>
        </div>
      </div>

      {/* Supplier Info */}
      <div className="grid grid-cols-3 border border-black mt-5 text-mt ">
        <div className="border-r border-black p-5 flex items-start gap-2">
          <span className="whitespace-nowrap">Supplier Name:</span>
          <input type="text" className="outline-none" />
        </div>
        <div className="border-r border-black p-5 flex items-start gap-2">
          <span className="whitespace-nowrap">Material/Service to Meril:</span>
          <input type="text" className="outline-none" />
        </div>
        <div className="p-5 flex items-start gap-2">
          <span className="whitespace-nowrap">Supplier Evaluation Period:</span>
          <input type="text" className="outline-none" />
        </div>
      </div>

      {/* Evaluation Criteria */}
      <table className="mt-2 w-full border-collapse ">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th colSpan={8} className="border p-2 text-center font-semibold">
              Evaluation Criteria
            </th>
            <th colSpan={2} className="border p-2 text-center font-semibold"></th>
          </tr>

          {/* Parameters row */}
          <tr>
            {parameters.map((param, i) => (
              <th key={i} colSpan={2} className="border p-2">
                {param}
              </th>
            ))}
          </tr>

          {/* Criteria / Score row */}
          <tr>
            {parameters.map((_, i) =>
              i === 4 ? (
                <React.Fragment key={i}>
                  <th className="border p-2"></th>
                  <th className="border p-2"></th>
                </React.Fragment>
              ) : (
                <React.Fragment key={i}>
                  <th className="border p-2">Criteria</th>
                  <th className="border p-2">Score</th>
                </React.Fragment>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {evaluationTable.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {[0, 1, 2, 3, 4].map((colIndex) => (
                <React.Fragment key={colIndex}>
                  <td className="border p-2">{row[colIndex * 2]}</td>
                  <td className="border p-2">
                    {colIndex === 4 ? (
                      <>
                        {row[colIndex * 2 + 1]}
                        {row[8] === "Grade A" && row[9] && (
                          <>
                            <hr className="my-1 border-t border-black" />
                            <div>Continue as Approved Supplier</div>
                          </>
                        )}
                        {row[8] === "Grade B" && row[9] && (
                          <>
                            <hr className="my-1 border-t border-black" />
                            <div>Warn – So Improve</div>
                          </>
                        )}
                        {row[8] === "Grade C" && row[9] && (
                          <>
                            <hr className="my-1 border-t border-black" />
                            <div>Discontinue</div>
                          </>
                        )}
                      </>
                    ) : (
                      row[colIndex * 2 + 1]
                    )}
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Consignment 1, Date of receipt */}
      <table className="mt-2 w-full border-collapse ">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th colSpan={11} className="border p-2 text-center font-semibold">
              Consignment 1, Date of receipt
            </th>
          </tr>

          {/* Parameters row */}
          <tr>
            {parameterss.map((param, i) =>
              i === 4 ? (
                <th key={i} className="border p-2">Overall Score</th>
              ) : i === 5 ? (
                <th key={i} className="border p-2">{param}</th>
              ) : (
                <th key={i} colSpan={2} className="border p-2">{param}</th>
              )
            )}
          </tr>

          {/* Criteria / Score row */}
          <tr>
            {parameterss.map((_, i) =>
              i === 4 ? (
                <th key={i} className="border p-2"></th>
              ) : i === 5 ? (
                <th key={i} className="border p-2"></th>
              ) : (
                <React.Fragment key={i}>
                  <th className="border p-2">Criteria</th>
                  <th className="border p-2">Score</th>
                </React.Fragment>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {evaluationTables.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {[0, 1, 2, 3].map((colIndex) => (
                <React.Fragment key={colIndex}>
                  <td className="border p-2">{row[colIndex * 2]}</td>
                  <td className="border p-2">{row[colIndex * 2 + 1]}</td>
                </React.Fragment>
              ))}

              {/* Overall Score column (empty now) */}
              <td className="border p-2"></td>

              {/* Grade checkboxes row-wise */}
              <td className="border p-2 text-center">
                {rowIndex === 0 && (
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedGrades.consignment1 === "A"}
                      onChange={() => handleGradeChange("consignment1", "A")}
                    /> Grade A
                  </label>
                )}
                {rowIndex === 1 && (
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedGrades.consignment1 === "B"}
                      onChange={() => handleGradeChange("consignment1", "B")}
                    /> Grade B
                  </label>
                )}
                {rowIndex === 2 && (
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedGrades.consignment1 === "C"}
                      onChange={() => handleGradeChange("consignment1", "C")}
                    /> Grade C
                  </label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Page break */}
      <div className="page-break"></div>

        {/* Consignment 2, Date of receipt */}
              <table className="mt-5 w-full border-collapse ">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th colSpan={11} className="border p-2 text-center font-semibold">
                      Consignment 2, Date of receipt
                    </th>
                  </tr>
                </thead>
        
                <tbody>
                  {evaluationTables.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {[0, 1, 2, 3].map((colIndex) => (
                        <React.Fragment key={colIndex}>
                          <td className="border p-2">{row[colIndex * 2]}</td>
                          <td className="border p-2">{row[colIndex * 2 + 1]}</td>
                        </React.Fragment>
                      ))}
        
                      {/* Overall Score column (empty) */}
                      <td className="border p-2"></td>
        
                      {/* Grade checkboxes row-wise */}
                      <td className="border p-2 text-center">
                        {rowIndex === 0 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment2 === "A"}
                              onChange={() => handleGradeChange("consignment2", "A")}
                            /> Grade A
                          </label>
                        )}
                        {rowIndex === 1 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment2 === "B"}
                              onChange={() => handleGradeChange("consignment2", "B")}
                            /> Grade B
                          </label>
                        )}
                        {rowIndex === 2 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment2 === "C"}
                              onChange={() => handleGradeChange("consignment2", "C")}
                            /> Grade C
                          </label>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        
              {/* Consignment 3, Date of receipt */}
              <table className="mt-2 w-full border-collapse ">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th colSpan={11} className="border p-2 text-center font-semibold">
                      Consignment 3, Date of receipt
                    </th>
                  </tr>
                </thead>
        
                <tbody>
                  {evaluationTables.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {[0, 1, 2, 3].map((colIndex) => (
                        <React.Fragment key={colIndex}>
                          <td className="border p-2">{row[colIndex * 2]}</td>
                          <td className="border p-2">{row[colIndex * 2 + 1]}</td>
                        </React.Fragment>
                      ))}
        
                      {/* Overall Score column (empty now) */}
                      <td className="border p-2"></td>
        
                      {/* Grade checkboxes row-wise */}
                      <td className="border p-2 text-center">
                        {rowIndex === 0 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment3 === "A"}
                              onChange={() => handleGradeChange("consignment3", "A")}
                            /> Grade A
                          </label>
                        )}
                        {rowIndex === 1 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment3 === "B"}
                              onChange={() => handleGradeChange("consignment3", "B")}
                            /> Grade B
                          </label>
                        )}
                        {rowIndex === 2 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment3 === "C"}
                              onChange={() => handleGradeChange("consignment3", "C")}
                            /> Grade C
                          </label>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        
              {/* Consignment 4, Date of receipt */}
              <table className="mt-2 w-full border-collapse ">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th colSpan={11} className="border p-2 text-center font-semibold">
                      Consignment 4, Date of receipt
                    </th>
                  </tr>
                </thead>
        
                <tbody>
                  {evaluationTables.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {[0, 1, 2, 3].map((colIndex) => (
                        <React.Fragment key={colIndex}>
                          <td className="border p-2">{row[colIndex * 2]}</td>
                          <td className="border p-2">{row[colIndex * 2 + 1]}</td>
                        </React.Fragment>
                      ))}
        
                      {/* Overall Score column (empty now) */}
                      <td className="border p-2"></td>
        
                      {/* Grade checkboxes row-wise */}
                      <td className="border p-2 text-center">
                        {rowIndex === 0 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment4 === "A"}
                              onChange={() => handleGradeChange("consignment4", "A")}
                            /> Grade A
                          </label>
                        )}
                        {rowIndex === 1 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment4 === "B"}
                              onChange={() => handleGradeChange("consignment4", "B")}
                            /> Grade B
                          </label>
                        )}
                        {rowIndex === 2 && (
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.consignment4 === "C"}
                              onChange={() => handleGradeChange("consignment4", "C")}
                            /> Grade C
                          </label>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

      {/* Footer */}
      <div className="mt-5 text-[11px]">
        <p>Effective Date: As on Master Copy</p>
        <p>Review Date: After 3 Years of Effective Date</p>
      </div>

      {/* Signatures */}
      <div className="flex justify-between mt-6">
        <div className="border border-black p-2 w-[60mm]">
          <p className="font-semibold">MASTER COPY</p>
          <div className="mt-1">
            Date: <input type="date" />
            </div>
          <div className="mt-1">
            Sign: <input type="text"/>
            </div>
        </div>
      </div>
    </div>
  );
}
