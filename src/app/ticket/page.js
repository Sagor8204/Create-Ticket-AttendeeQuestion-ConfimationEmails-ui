import { FaPlus } from "react-icons/fa6";
import TopTitle from "@/components/TopTitle";
import ButtonAndText from "@/components/ButtonAndText";
import TicketTable from "@/components/TicketTable";

export default function Ticket() {
  return (
    <div className="px-3 md:7 lg:px-10 py-4">
      <main className="border border-gray-300 rounded-md">
        <TopTitle>Attendee Tickets</TopTitle>
        <ButtonAndText
          subTitle="Create and customize each ticket type's pricing, quantities, limits,
            and more here."
          btnText="Create Ticket"
          icon={FaPlus}
        />

        <div className="p-4 md:p-6">
          <h2 className="text-2xl mb-3">Speaker live polls</h2>

          <div className="overflow-x-scroll lg:overflow-x-hidden">
            <TicketTable />
          </div>
        </div>
      </main>
    </div>
  );
}
