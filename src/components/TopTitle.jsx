export default function TopTitle({ children }) {
  return (
    <div className="p-4 md:p-6 border border-gray-300 rounded-md">
      <h2 className="text-2xl">{children}</h2>
    </div>
  );
}
