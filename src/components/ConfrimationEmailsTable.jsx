import { confirmationEamilsData } from "@/common/data";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function ConfirmationEmailsTable() {
  return (
    <table className="min-w-[768px] w-full text-left ticket_table border border-gray-300 confirmation_table">
      <thead>
        <tr>
          <th className="w-1/2">FORM NAME</th>
          <th className="w-1/2">ASSIGNED TICKETS</th>
        </tr>
      </thead>
      <tbody className="text-lg">
        {confirmationEamilsData.map((data) => (
          <tr key={data.title}>
            <td>
              <div>
                <span className="text-lg text-gray-500">
                  Your tickets for APAN53 - Bangladesh, 7th-11th March 2022
                </span>
              </div>
            </td>
            <td>
              <div className="flex justify-between">
                <h3>APAN53</h3>
                <button className="w-8 h-8 rounded-full transition-all duration-300 hover:bg-gray-200 flex items-center justify-center">
                  <HiOutlineDotsVertical />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
