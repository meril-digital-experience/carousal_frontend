// components/RFQDetails.tsx
import React from "react";

{/*const Field = ({ label }: { label: string }) => (
  <div className="flex flex-col text-xs gap-1 min-w-[150px]">
    <span className="text-gray-600">{label}</span>
    <div className="border border-gray-300 rounded-xl px-3 py-1.5 bg-gray-50 text-sm" />
  </div>
);

const RFQDetails = () => {
  const logisticFields = [
    "RFQ CutOff", "RFQ Date", "Mode of Shipment", "Destination Port", "Port Code", "Port of Loading",
    "Inco Terms", "Ship to Address", "Package Type", "No of Pkg Units", "Product Category",
    "Vol Weight(KG)", "Actual Weight(KG)", "Invoice Date", "Invoice No", "Shipment Date",
    "Shipment Type", "Consignee Name", "Remarks"
  ];
  const totalCells = 20;
  const remainingEmptyCells = totalCells - (logisticFields.length + 1);*/}

   {/*return (
   <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">RFQ Details</h3>
      <div className="border border-gray-300 rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {logisticFields.map((label, i) => <Field key={i} label={label} />)}

        <div className="flex flex-col text-xs gap-1 min-w-[150px]">
          <span className="text-gray-600">File Attachment</span>
          <div className="text-blue-600 flex items-center gap-1 cursor-pointer">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Download File</span>
          </div>
        </div>

        {Array.from({ length: remainingEmptyCells }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default RFQDetails;*/}


/// app/rfq/page.tsx
const Info = ({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="text-sm">
    <div className="grid grid-cols-2 gap-4 items-start">
      <span className="text-gray-500 font-medium">{label}</span>
      <span
        className={`text-left break-words ${
          highlight ? "text-gray-800 font-medium" : "text-gray-800 font-medium"
        }`}
      >
        {value || "—"}
      </span>
    </div>
    <hr className="border-blue-200 mt-1" />
  </div>
);

const RFQDisplay = () => {
  return (
    
      <div className="max-w-screen-xl mx-auto bg-white rounded-xl p-8 space-y-8 border border-gray-300">
        {/* RFQ Ref No */}
        <section className="text-lg font-semibold text-gray-700">
          RFQ Ref No:{" "}
          <span className="text-blue-600 font-bold">PUR-RFQ-2025-00024</span>
        </section>

        {/* RFQ Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-700">
          {/* Column 1 */}
          <div className="space-y-1">
            <Info label="Sr No. :" value="122" />
            <Info label="RFQ Type :" value="Logistic Vendor" />
            <Info label="Service Type :" value="Category1" />
            <Info label="Company Name :" value="—" />
            <Info label="RFQ Date :" value="2025-07-28" />
            <Info label="RFQ CutOff :" value="2025-07-31 00:00:00" />
            <Info label="Mode of Shipment :" value="Road" />
            <Info
              label="Remarks :"
              value="This is to be shipped jaldi"
              highlight
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-1">
            <Info label="Destination Port :" value="001 - Mumbai Port" />
            <Info label="Country :" value="Dhiram-DH" />
            <Info label="Port Code :" value="001 - Mumbai Port" />
            <Info label="Port of Loading :" value="001 - Mumbai Port" />
            <Info label="Inco Terms :" value="—" />
            <Info label="Package Type :" value="001" />
            <Info label="Product Category :" value="Hardware" />
          </div>

          {/* Column 3 */}
          <div className="space-y-1">
            <Info label="Vol Weight (KG) :" value="23" />
            <Info label="Actual Weight (KG) :" value="33" />
            <Info label="Invoice Date :" value="2025-07-31" />
            <Info label="Invoice No :" value="21345324t" />
            <Info label="Invoice Value :" value="23456" />
            <Info label="Expected Date of Arrival" value="2025-07-31" />
          </div>
        </section>
      </div>
    
  );
};

export default RFQDisplay;
