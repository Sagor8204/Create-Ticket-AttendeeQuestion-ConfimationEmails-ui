export default function Button({ text, icon: Icon }) {
  return (
    <button className="text-[15px] md:text-base border border-purple-600 py-3 rounded-md text-purple-500 font-semibold px-6 flex gap-3 justify-center">
      <Icon className="text-xl md:text-2xl" />
      {text}
    </button>
  );
}
