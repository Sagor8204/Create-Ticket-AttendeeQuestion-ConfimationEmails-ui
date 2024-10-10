import Button from "./Button";

export default function ButtonAndText({ subTitle, btnText, icon }) {
  return (
    <div className="mb-3 md:mb-7">
      <span className="p-4 md:p-6 text-lg inline-block text-gray-500 font-semibold">
        {subTitle}
      </span>

      <div className="ml-5 md:ml-10">
        <Button text={btnText} icon={icon} />
      </div>
    </div>
  );
}
