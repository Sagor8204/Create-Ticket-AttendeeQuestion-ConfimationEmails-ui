import { confirmationEamilsData } from "@/common/data";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Table from "./Table";

const confirmationEmailColumns = [
  { header: "FORM NAME", field: "formName", className: "w-1/2" },
  { header: "ASSIGNED TICKETS", field: "assignedTickets", className: "w-1/2" },
];

export default function ConfirmationEmailsTable() {
  const renderConfirmationRow = (data) => (
    <>
      <td>
        <div>
          <span className="text-lg text-gray-500">
            {data.title}
          </span>
        </div>
      </td>
      <td>
        <div className="flex justify-between">
          <h3>{data.asseignedTickets}</h3>
          <button className="w-8 h-8 rounded-full transition-all duration-300 hover:bg-gray-200 flex items-center justify-center">
            <HiOutlineDotsVertical />
          </button>
        </div>
      </td>
    </>
  );

  return <Table columns={confirmationEmailColumns} data={confirmationEamilsData} renderRow={renderConfirmationRow} style="min-w-[768px] w-full confirmation_table" />
}
