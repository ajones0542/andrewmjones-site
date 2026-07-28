import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Andrew Jones
        </Link>
        <nav className="flex items-center gap-6 font-mono text-sm uppercase tracking-wide text-mist">
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
