import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center gap-4 py-3">
      <Link href="/">Home</Link>
      <Link href="/ticket">Ticket</Link>
      <Link href="/confirmation-emails">Confirmation Emails</Link>
    </div>
  );
}
