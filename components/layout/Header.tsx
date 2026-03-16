import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-[var(--text-main)] shadow-[0_0_30px_rgba(168,85,247,0.45)]">
            <span className="text-sm font-black">L</span>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-[var(--text-main)]">
              LIONIXY
            </h2>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            className="text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--text-main)]"
            href="/prompts"
          >
            Explore
          </Link>
          <Link
            className="text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--text-main)]"
            href="/category/marketing"
          >
            Categories
          </Link>
          <Link
            className="text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--text-main)]"
            href="#"
          >
            Submit
          </Link>
        </nav>

        <button className="rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-2.5 text-sm font-semibold text-[var(--text-main)] shadow-[0_0_30px_rgba(168,85,247,0.35)] transition hover:scale-[1.02]">
          Log In
        </button>
      </div>
    </header>
  );
}