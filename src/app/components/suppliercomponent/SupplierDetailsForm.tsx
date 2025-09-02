"use client";

import React from "react";

export default function SupplierDetailsForm() {
  return (
    <div className="mb-4 [@media_print]:mb-2">
      <h2 className="text-lg font-semibold text-blue-800 mb-2 [@media_print]:text-base">
        Supplier Details
      </h2>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <tbody>
          {/* Row 1 */}
          <tr>
            {/* Supplier Name */}
            <td className="p-2 border border-gray-700 align-top [@media_print]:p-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <label className="min-w-[120px] font-medium text-sm [@media_print]:text-xs">
                  Supplier Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Supplier Name"
                  className="flex-1 min-w-[150px] p-1 border rounded-md border-gray-200 text-sm
                             hover:border-blue-500 focus:outline-none 
                             focus:ring-blue-500 focus:border-blue-500 transition
                             [@media_print]:p-0.5 [@media_print]:text-xs"
                />
              </div>
            </td>

            {/* Period */}
            <td className="p-2 border border-gray-700 align-top [@media_print]:p-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <label className="min-w-[120px] font-medium text-sm [@media_print]:text-xs">
                  Period:
                </label>
                <div className="flex flex-1 flex-wrap gap-1">
                  <input
                    type="date"
                    className="flex-1 min-w-[120px] p-1 border rounded-md border-gray-200 text-sm
                               hover:border-blue-500 focus:outline-none 
                               focus:ring-blue-500 focus:border-blue-500 transition
                               [@media_print]:p-0.5 [@media_print]:text-xs"
                  />
                  <span className="flex items-center font-medium text-sm [@media_print]:text-xs">/</span>
                  <input
                    type="date"
                    className="flex-1 min-w-[120px] p-1 border rounded-md border-gray-200 text-sm
                               hover:border-blue-500 focus:outline-none 
                               focus:ring-blue-500 focus:border-blue-500 transition
                               [@media_print]:p-0.5 [@media_print]:text-xs"
                  />
                </div>
              </div>
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            {/* Product Supplied */}
            <td className="p-2 border border-gray-700 align-top [@media_print]:p-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <label className="min-w-[120px] font-medium text-sm [@media_print]:text-xs">
                  Product Supplied:
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  className="flex-1 min-w-[150px] p-1 border rounded-md border-gray-200 text-sm
                             hover:border-blue-500 focus:outline-none 
                             focus:ring-blue-500 focus:border-blue-500 transition
                             [@media_print]:p-0.5 [@media_print]:text-xs"
                />
              </div>
            </td>

            {/* Quantity Supplied */}
            <td className="p-2 border border-gray-700 align-top [@media_print]:p-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <label className="min-w-[120px] font-medium text-sm [@media_print]:text-xs">
                  Quantity Supplied:
                </label>
                <input
                  type="text"
                  placeholder="Enter Quantity Supplied"
                  className="flex-1 min-w-[150px] p-1 border rounded-md border-gray-200 text-sm
                             hover:border-blue-500 focus:outline-none 
                             focus:ring-blue-500 focus:border-blue-500 transition
                             [@media_print]:p-0.5 [@media_print]:text-xs"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
