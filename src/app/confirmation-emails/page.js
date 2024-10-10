import { FaPlus } from "react-icons/fa6";
import TopTitle from "@/components/TopTitle";
import ButtonAndText from "@/components/ButtonAndText";
import ConfirmationEmailsTable from "@/components/ConfrimationEmailsTable";

export default function ConfirmationEmails() {
  return (
    <div className="px-3 md:7 lg:px-10 py-4">
      <main className="border border-gray-300 rounded-md">
        <TopTitle>Confirmation Emails</TopTitle>
        <ButtonAndText
          subTitle="Create and customize each question form for attendee registration."
          btnText="Create new confirmation email"
          icon={FaPlus}
        />

        <div className="p-4 md:p-6">
          <h2 className="text-2xl mb-3">Speaker live polls</h2>

          <div className="overflow-x-scroll md:overflow-x-hidden">
            <ConfirmationEmailsTable />
          </div>
        </div>
      </main>
    </div>
  );
}
