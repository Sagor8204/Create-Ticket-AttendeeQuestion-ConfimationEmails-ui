import { attendeeData } from "@/common/data";
import { FaEyeSlash } from "react-icons/fa";
import Table from "./Table";

const attendeeColumns = [
  { header: "FIELD", field: "title" },
  { header: "ASSIGNED TICKETS", field: "assignedTickets", className: "text-left" },
  { header: "INCLUDE", field: "include", className: "text-center" },
  { header: "INCLUDE", field: "include", className: "text-center" },
]

export default function AttendeeQuestionTable() {
  const renderAttendeeRow = (data) => (
    <>
      <td>
        <div>
          <h3>{data.title}</h3>
          <span className="text-sm text-gray-500">{data.subTitle}</span>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-5 text-gray-500">
          <FaEyeSlash className="text-2xl" />
          <span className="text-lg">{data.assignedTickets}</span>
        </div>
      </td>
      <td className="text-center">
        <input type="checkbox" />
      </td>
      <td className="text-center">
        <input type="checkbox" />
      </td>
    </>
  );

  return <Table columns={attendeeColumns} data={attendeeData} renderRow={renderAttendeeRow} style="min-w-[768px] w-full attendeeTable"  />
}
