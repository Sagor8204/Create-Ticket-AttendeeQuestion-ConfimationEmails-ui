import { attendeeData } from "@/common/data";
import { FaEyeSlash } from "react-icons/fa";

export default function AttendeeQuestionTable() {
  return (
    <table className="min-w-[900px] w-full text-left ticket_table border border-gray-300 attendeeTable">
      <thead>
        <tr>
          <th>FIELD</th>
          <th>ASSIGNED TICKETS</th>
          <th className="text-center">INCLUDE</th>
          <th className="text-center">INCLUDE</th>
        </tr>
      </thead>
      <tbody className="text-lg">
        {attendeeData.map((data) => (
          <tr key={data.title}>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
