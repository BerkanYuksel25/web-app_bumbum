import Link from "next/link";

export default function Page() {
  return (
    <h1 className="text-4xl font-bold mb-16 pb-16">
      <Link href="/home">
        <span className="text-primary-main">Bum</span>
        <span className="text-comp-main">bum</span>
      </Link>
    </h1>
  );
}
