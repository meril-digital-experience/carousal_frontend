'use client'
import React from "react";
import { useState } from "react";

export default function SupplierEvaluationForms() {
  return (
    <div className="w-[210mm] h-full bg-white mx-auto p-8 text-[11px] leading-tight print:w-[210mm] print:h-[297mm]">
      {/* Header */}
      <div className="text-center text-neutral-400 mb-6 text-[11px]">
        <h2 className="font-bold text-[16px]">QUALITY AGREEMENT</h2>
        <p className="font-semibold text-[16px]">Meril Life Sciences Pvt. Ltd & _______</p>
      </div>

      {/* Agreement Body */}
      <div className="space-y-3 text-[12px]">
        <p><span className="font-bold">This Agreement </span>(hereinafter <span className="font-bold">“Agreement”</span>) is made and entered into on this 28th day of Jan 2023 by and between:</p>

        <p><span className="font-bold">Meril Life Sciences Pvt. Ltd.</span> with its principal office located at <span className="font-bold"> Bilakhia House, Survey No. 135/139, Muktanad Marg, Chala, Vapi 396191, Gujarat, India (hereinafter “Meril” or “Buyer”)</span> represented by its Head QA <span className="font-bold"> Mr. Narendra Patel.</span></p>

        <p> <span className="font-bold">And</span></p>

        <p>__________ with its principal office located at _________ <span className="font-bold">(hereinafter “Supplier/Distributor”)</span> represented by its___________.</p>

        <p>(Hereinafter referred to individually as <span className="font-bold">“Party” </span>and collectively as <span className="font-bold">“Parties”</span> )</p>

        <p>WHEREAS Meril is desirous of buying ________ from the Supplier/Distributor of specified quality standard (referred to as “the Raw Material” hereinafter);</p>

        <p>and WHEREAS the Supplier/Distributor is desirous and capable to supply the raw material of the specified quality to Meril;</p>

        <p><span className="font-bold">NOW, THEREFORE,</span> the Parties mutually agree as follows:</p>

        <ol className="list-decimal ml-6 space-y-2 text-[12px]">
          <li>The Supplier shall maintain and provide <span className="font-bold">ISO</span>_______ accreditation and local regulatory approvals for the material supplied and shall ensure renewal of such Regulatory Approvals at required time intervals to maintain the continuity of those regulatory approvals. In case any of the Regulatory Approvals is withdrawn or not renewed before expiry, the Supplier shall intimate Meril immediately.</li>
          <li>Meril and the Supplier have agreed to specifications of the material supplied. The Supplier shall ensure that the material meets the Meril specifications. The Supplier shall not change the Specifications without notifying Meril. The Supplier shall inform Meril of such modification/s in advance and take Meril’s approval in writing before effecting any such change.</li>
          <li>The Products shall be manufactured by the Supplier in compliance with the accreditations and other applicable regulations. The Supplier shall not make any change in the manufacturing process for the Products without notifying Meril. The Supplier shall inform Meril of such modification/s in advance and shall take prior written approval from Meril before making any such change.</li>
          <li>The Supplier shall not change the raw materials used for manufacturing the supplied raw material without notifying Meril. The Supplier shall inform Meril of such modification/s in advance and shall take prior written approval from Meril before making any such change.</li>
          <li>Each lot of the material supplied by the Supplier to Meril shall accompany a Certificate of Compliance to the Specifications. It is implied that the Certificate of Compliance is issued only if the material supplied are manufactured in compliance with the specification provided by Meril.</li>
          <li>In case the Supplier wishes to ship the raw material with any deviation from the Specifications, the Supplier shall inform Meril and shall take prior written authorization from Meril to ship such deviated Products.</li>
          <li>Supplier ensures to maintain Technical Documents (Examples: specification/drawings, manufacturing records, test reports, certificate of analysis etc.) related to raw material supplied for the Products for a minimum period of 15 years from the date of manufacture. Supplier agrees to provide with each shipment any and all documents required by Meril to meet its requirements for document filing. Supplier will store records in accordance with its own requirements and will make those documents available to Meril or its Notifying Body (NB) and Regulatory Authority (RA) within the term of storage. In the event that the business relationship is terminated, the Supplier shall maintain and provide Meril access to the appropriate Technical Documents or shall transfer the ownership of the appropriate Technical Documents to Meril. Alternatively, the Supplier can send a copy of representative Technical Documents to Meril with each shipment, and Meril shall archive the Technical Documents for the required period of time.</li>
          <li>Supplier confirms that it has conducted testing for the raw material as per applicable standards required by the Regulatory Bodies. The Supplier shall give Meril access to such test reports.</li>
          <li>If Meril gets any complaint from its customer/s which is attributed to the raw material and calls into question the Certificate of Compliance issued in relation to the raw material, Meril shall forward such complaint/s to the Supplier. The Supplier shall investigate such complaint/s and give the investigation report to Meril in reasonable time. The Supplier shall cooperate with Meril in establishing the root cause of the complaint and in resolving the issue.</li>
          <li>Meril as well as its Notifying Body (NB) and Regulatory Authority (RA) reserves the right to audit the Quality System of the Supplier. The Supplier agrees to allow Meril’s designated persons, its NB, and RA to conduct such audits. Meril shall inform the Supplier of such audit well in advance, and the time of audit shall be decided as per mutual convenience. However, NB and RA can audit with pre-notifications or conduct unannounced audits. In either case, Supplier shall immediately notify Meril. Supplier agrees to carry out corrective action for nonconformance issues noticed during such audit/s. All audits under this clause 10 shall be carried out in compliance with the Supplier’s health and safety procedures and having due regard to the Supplier’s operational practicalities.</li>
          <li>Supplier agrees to supply any non-proprietary information needed by Meril for registration of its products where the Products are used. The Supplier will assist Meril in replying to the queries from registration authorities which are related to the Products.</li>
          <li>Supplier shall notify Meril promptly of any change/s in the ownership of the Supplier and any significant change/s in Supplier’s top management structure.</li>
          <li>Supplier‘s change control management system should ensure evaluation of any critical changes in supplied materials(s) by subcontractors if applicable. The Supplier shall notify such changes to Meril.</li>
        </ol>

        <p className="mt-4 font-bold text-[12px] underline">DURATION OF AGREEMENT</p>
        <p>This Agreement shall take effect on the date of the Agreement and shall be valid for an unlimited period. This Agreement may be terminated by any Party with a notice of three months to the other Party by registered postal mail or e-mail. This Agreement may be modified / amended only with mutual agreement of the Parties in writing.</p>

        <p className="mt-2 font-bold text-[12px] underline">APPLICABLE LAW AND JURISDICTION</p>
        <p>This Agreement shall be governed by and construed in accordance with Indian Law and Parties hereby submit to the jurisdiction of the Courts of Gujarat, India.</p>

        <div className="mt-6 text-[12px] break-before-page">
        <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className=" p-2"></th>
                <th className="border border-gray-300 p-2">On behalf of Supplier</th>
                <th className="border border-gray-300 p-2">On behalf of Buyer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2">Meril Life Sciences Pvt. Ltd.</td>
              </tr>
              <tr>
                
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Name</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2">Mr. Narendra Patel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Designation</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2">Head - RA & QA</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Signature</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Date</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}