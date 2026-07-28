import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-1 text-sm text-mist">
          <a
            href="https://www.linkedin.com/in/andrewmj"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo transition-colors hover:text-ink"
          >
            Connect on LinkedIn
          </a>
          <span>andrew [at] andrewmjones.com</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wide text-mist">
          <Link href="/design" className="transition-colors hover:text-ink">
            Design explorations
          </Link>
          <span>&copy; {new Date().getFullYear()} Andrew Jones</span>
        </div>
      </div>
    </footer>
  );
}
