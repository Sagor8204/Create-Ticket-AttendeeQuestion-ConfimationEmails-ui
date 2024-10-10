import { GoDownload } from "react-icons/go";
import TopTitle from "@/components/TopTitle";
import ButtonAndText from "@/components/ButtonAndText";
import AttendeeQuestionTable from "@/components/AttendeeQuestionTable";

export default function Home() {
  return (
    <div className="px-3 md:7 lg:px-10 py-4">
      <main className="border border-gray-300 rounded-md">
        <TopTitle>Attendee Question Forms</TopTitle>
        <ButtonAndText
          subTitle="Create and customize each question form for attendee registration."
          btnText="Export responses"
          icon={GoDownload}
        />

        <div className="p-4 md:p-6">
          <div className="overflow-x-scroll lg:overflow-x-hidden">
            <AttendeeQuestionTable />
          </div>
        </div>
      </main>
    </div>
  );
}
