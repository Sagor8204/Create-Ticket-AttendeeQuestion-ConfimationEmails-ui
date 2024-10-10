import { tickesData } from "@/common/data";
import { FaArrowsToDot } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Table from "./Table";

const ticketColumns = [
  { header: "TICKET", field: "name" },
  { header: "PRICE", field: "price" },
  { header: "FEES", field: "fees" },
  { header: "ATTENDEE PAYS", field: "attendeePays", className: "text-center" },
  {
    header: "ORGANIZER RECEIVES",
    field: "organizerReceives",
    className: "text-center",
  },
  { header: "SALES", field: "sales" },
];

export default function TicketTable() {
  const renderTicketRow = (data) => (
    <>
      <td>
        <div className="flex gap-10 items-center text-lg">
          <span>
            <FaArrowsToDot className="text-[20px]" />
          </span>
          <h3 className="">{data.name}</h3>
        </div>
      </td>
      <td>
        <span className="text-lg text-gray-500">{data.price}</span>
      </td>
      <td>
        <h3>${data.fees}</h3>
      </td>
      <td className="text-center">
        <h3>${data.attendeePays}</h3>
      </td>
      <td className="text-center">
        <h3>${data.organizerReceives}</h3>
      </td>
      <td>
        <div className="flex items-center justify-between">
          <h3>${data.sales}</h3>
          <button className="w-8 h-8 rounded-full transition-all duration-300 hover:bg-gray-200 flex items-center justify-center">
            <HiOutlineDotsVertical />
          </button>
        </div>
      </td>
    </>
  );

  return (
    <Table
      columns={ticketColumns}
      data={tickesData}
      renderRow={renderTicketRow}
      style="min-w-[1024px] w-full"
    />
  );

  // return (
  //   <table className="min-w-[1024px] w-full text-left ticket_table border border-gray-300">
  //     <thead>
  //       <tr>
  //         <th>TICKET</th>
  //         <th>PRICE</th>
  //         <th>FEES</th>
  //         <th className="text-center">
  //           ATTENDEE <br /> PAYS
  //         </th>
  //         <th className="text-center">
  //           ORGANIZER <br /> RECEIVES
  //         </th>
  //         <th>SALES</th>
  //       </tr>
  //     </thead>
  //     <tbody className="text-lg">
  //       {tickesData.map((data) => (
  //         <tr key={data.name}>
  //           <td>
  //             <div className="flex gap-10 items-center text-lg">
  //               <span>
  //                 <FaArrowsToDot className="text-[20px]" />
  //               </span>
  //               <h3 className="">{data.name}</h3>
  //             </div>
  //           </td>
  //           <td>
  //             <span className="text-lg text-gray-500">{data.price}</span>
  //           </td>
  //           <td>
  //             <h3>${data.fees}</h3>
  //           </td>
  //           <td>
  //             <h3>${data.attendeePays}</h3>
  //           </td>
  //           <td>
  //             <h3>${data.organizerReceives}</h3>
  //           </td>
  //           <td>
  //             <div className="flex items-center justify-between">
  //               <h3>${data.sales}</h3>
  //               <button className="w-8 h-8 rounded-full transition-all duration-300 hover:bg-gray-200 flex items-center justify-center">
  //                 <HiOutlineDotsVertical />
  //               </button>
  //             </div>
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );
}
