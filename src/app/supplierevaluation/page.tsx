"use client";

import React from "react";
import Header from "../components/suppliercomponent/Header";
import SupplierDetailsForm from "../components/suppliercomponent/SupplierDetailsForm";
import SummaryAndEvaluation from "../components/suppliercomponent/SummaryAndEvaluation";
import SignatureSection from "../components/suppliercomponent/SignatureSection";

export default function SupplierEvaluationPage() {
  return (
    
      <div className="w-[297mm] h-[210mm] bg-white mx-auto p-8 text-[11px] leading-tight print:w-[297mm] print:h-[210mm]">

        <Header />
        <SupplierDetailsForm />
        <SummaryAndEvaluation />
        <SignatureSection />
      </div>
    
  );
}