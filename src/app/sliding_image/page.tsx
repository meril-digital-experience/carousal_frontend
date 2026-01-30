"use client";
import { useEffect, useState } from "react";

interface ProductItem {
  id: number;
  product: string;
  ip: string;
  newPlan: number;
  newAchieved: number;
  newRfAchieved:number;
  newPending: number;
  total: number;
  date: string;
}

interface TotalItem {
  totalIp: number| null;
  totalPlan: number| null;
  totalAchieved: number| null;
  totalRfAchieved: number | null;
  totalPending: number| null;
  grandTotal: number| null;
}

const slides = [
  { type: "table" },
  {
    type: "img",
    src: "https://strapi.merillife.com/uploads/Auto_Quant_200_Excelus_V2_73bdb1a64e.png",
    title: "Auto Quant 200 Excelus",
    points: [
      "Fully automated analyzer with throughout of 200 tests per hour.",
      "Compact model with inbuilt laundry and cooling facility for Reagents.",
      "Ideal for a medium size laboratory for routine tests and as backup for bigger laboratories.",
      "Its unique software, feature offers user defined reflex action.",
      "User friendly Fully Auto Analyzer."
    ]
  },
  {
    type: "img",
    src: "https://strapi.merillife.com/uploads/Merilyzer_Cel_Quant_5_Plus_with_autoloader_1_a9a9edcad2.png",
    title: "Merilyzer Celquant 5 Plus™",
    points: [
      "CelQuant 5 plus™ is 5-Part WBC differential of WBC Hematology Analyzer which gives a total 25 parameters & 10 research parameters.",
      "CelQuant 5 plus™ exhibits a through put of 60 tests/hour & 2 scattergrams, 2 histograms.",
      "Adopts highly stable, long lasting and economical semiconductor laser light source.",
      "Screening out the abnormal cells, thus increasing the efficacy for abnormal samples."
    ]
  },
  {
    type: "img",
    src: "https://strapi.merillife.com/uploads/Celquant_3i_600by600_d9e9d8d3e4.png",
    title: "Merilyzer Celquant 3i™",
    points: [
      "Merilyzer Celquant 3i™ is a state-of-the-art 3-part differential hematology analyzer, designed for clinical laboratories aiming to achieve precision and efficiency in blood testing.", 
      "Equipped with advanced technology, it simplifies complex diagnostic procedures with its intuitive design and robust connectivity features.", 
      "The analyzer supports a wide range of tests and ensures rapid, reliable results, making it an indispensable tool for modern laboratories."
    ]
  }
];


export default function Home() {
  const [index, setIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [productData, setProductData] = useState<ProductItem[]>([]);
  const [totals, setTotals] = useState<TotalItem | null>(null);

  /* ---------------- FETCH TABLE DATA ---------------- */
  useEffect(() => {
      async function fetchproductData() {
        const response = await fetch("http://10.10.3.45:85/getExcelData"); 
        const data = await response.json();

        setProductData(data.productData);
        setTotals(data.totals);
      }
      fetchproductData();
    }, []);
    console.log("productData", productData);
    console.log("totals", totals);

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    const currentSlide = slides[index];
    const delay = currentSlide.type === "table" ? 20000 : 3000;

    const timer = setTimeout(() => {
      const next = (index + 1) % slides.length;

      
      if (slides[next].type === "img") {
        const img = new Image();
        const slide = slides[next];

        if (slide?.src) {
          img.src = slide.src;
        }

        img.onload = () => {
          setIndex(next);
          setVisibleIndex(next);
        };
      } else {
       
        setIndex(next);
        setVisibleIndex(next);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="fixed inset-0 bg-white">

      {/* ================= TABLE ================= */}
      {slides[index].type === "table" && (
          <div className="w-full h-full flex items-center justify-center p-6 animate-fadeIn">
            <div className="w-full max-w-7xl overflow-x-auto rounded-xl border border-gray-200 bg-white overflow-hidden">
              <table className="w-full table-auto border-collapse text-center text-sm text-gray-800 border border-gray-200 box-border">
                <thead className="bg-[#1E3A8A] text-white">
                  <tr>
                    <th rowSpan={2} className="px-5 py-3 font-semibold border-t border-r border-[#e5e5e5]">Product</th>
                    <th rowSpan={2} className="px-5 py-3 font-semibold border-t border-r border-[#e5e5e5]">IP</th>
                    <th rowSpan={2} className="px-5 py-3 font-semibold border-t border-r border-[#e5e5e5]">Plan</th>

                    <th colSpan={2} className="px-5 py-3 font-semibold border-t border-r border-[#e5e5e5]">
                      Achieved
                    </th>

                    <th rowSpan={2} className="px-5 py-3 font-semibold border-t border-r border-[#e5e5e5]">Pending</th>
                    <th rowSpan={2} className="px-5 py-3 font-semibold border-t border-r border-[#e5e5e5]">Total</th>
                    <th rowSpan={2} className="px-5 py-3 font-semibold border-t border-r border-[#e5e5e5]">Date</th>
                  </tr>

                  <tr>
                    <th className="px-5 py-2 font-semibold border-t border-r border-[#e5e5e5]">New</th>
                    <th className="px-5 py-2 font-semibold border-t border-r border-[#e5e5e5]">RF</th>
                  </tr>
                </thead>

                <tbody>
                  {productData.slice(0, 10).map((item: ProductItem) => (
                    <tr
                      key={item.id}
                      className="odd:bg-[#FBFCFD] even:bg-white hover:bg-blue-50 transition text-[#4A586C]"
                    >
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">{item.product}</td>
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">{item.ip}</td>
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">{item.newPlan}</td>
                      {/* Achieved Sub Columns */}
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">
                        {item.newAchieved}
                      </td>
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">
                        {item.newRfAchieved}
                      </td>
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">{item.newPending}</td>
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">{item.total}</td>
                      <td className="px-4 py-3 border-t border-[#e5e5e5]">{item.date}</td>
                    </tr>
                  ))}

                  {totals && (
                  <tr className="bg-[#F1F5F9] font-bold text-md">
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">Total</td>
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">{totals.totalIp ?? 0}</td>
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">{totals.totalPlan ?? 0}</td>
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">{totals.totalAchieved ?? 0}</td>
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">{totals.totalRfAchieved ?? 0}</td>
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">{totals.totalPending ?? 0}</td>
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">{totals.grandTotal ?? 0}</td>
                    <td className="px-4 py-3 border-t border-[#e5e5e5]">—</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      {/* ================= IMAGE ================= */}
      {slides[visibleIndex].type === "img" && (
        <div className="w-full h-full flex items-center px-12">
          <div className="w-1/2 h-[75vh] flex justify-center">
            <img
              src={slides[visibleIndex].src}
              className="h-full object-contain"
              alt=""
            />
          </div>

          <div className="w-1/2 pl-12">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              {slides[visibleIndex].title}
            </h1>
            <ul className="list-disc text-lg text-gray-700">
              {slides[visibleIndex].points?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
