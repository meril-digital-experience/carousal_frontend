export default function Dashboard() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Shipment Status Process</h2>
         <hr className=" border-t-2 border-blue-500" /> {/* Blue hr */}
        <div className="bg-white p-6 shadow">
          {/* Example Single Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Enter Document No
              </label>
              <select
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Search By</option>
              </select>
            </div>

            {/* Field 1 */}
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                RFQ Number & Date
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>

            {/* Field 2 */}
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                JRN & Date
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>

            {/* Field 3 */}
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Consignee Name
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Field 4 */}
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Consignee Name
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Consignor Name
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Port Of Loading
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Port Of Discharge
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                INCOTERMS
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Shipment Mode
              </label>
              <select
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Search By</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                House Bill #
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Master Bill #
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Master Airway Bill Number"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                House Bill Date
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                MAWB Date
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Estimated Arrival
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Estimated Departure
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Actual Dep at Origin
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Booking Date
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Estimated Pickup
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Actual Pickup
              </label>
              <input
                type="date"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Number of Packs
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Packs Unit
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Actual Weight
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Actual Weight/Gross Weight"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Chargeable Weight
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Actual Chargeable Weight"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Carrier Name
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                CHA Name
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Shipment Status
              </label>
              <select
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Search By</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Actual Volume
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-40 text-sm font-medium text-gray-700">
                Month/Year:
              </label>
              <input
                type="text"
                className="flex-1 w-full border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder=""
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Remark
              </label>
              <textarea
                rows={3}
                className="w-full border border-gray-300 rounded-md p-2 hover:border-blue-500 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Enter remarks here..."
              ></textarea>
            </div>
          </div>
           <div className="mt-6 flex justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
