export default function ButtonAndText({ subTitle, btnText, icon: Icon }) {
  return (
    <div className="mb-3 md:mb-7">
      <span className="p-4 md:p-6 text-lg inline-block text-gray-500 font-semibold">
        {subTitle}
      </span>

      <div className="ml-5 md:ml-10">
        <button className="text-[15px] md:text-base border border-purple-600 py-3 rounded-md text-purple-500 font-semibold px-6 flex gap-3 justify-center">
          <Icon className="text-xl md:text-2xl" />
          {btnText}
        </button>
      </div>
    </div>
  );
}
