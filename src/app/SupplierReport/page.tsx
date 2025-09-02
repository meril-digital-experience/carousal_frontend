"use client";

import React from "react";
import Header from "../components/SupplierReportcomponent/Header";
import SupplierDetailsForm from "../components/SupplierReportcomponent/SupplierDetailsForm";
import SummaryAndEvaluation from "../components/SupplierReportcomponent/SummaryAndEvaluation";
import SignatureSection from "../components/SupplierReportcomponent/SignatureSection";

export default function SupplierEvaluationPage() {
  return (
    
      <div className=" w-[297mm] h-full bg-white mx-auto p-8 text-[11px] leading-tight print:w-[297mm] print:h-[210mm]">

        <Header />
        <SupplierDetailsForm />
        <SummaryAndEvaluation />
        <SignatureSection />
      </div>
    
  );
}