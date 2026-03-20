import Link from "next/link";
import SearchBar from "@/components/search/SearchBar";
import FeaturedCategories from "@/components/home/FeaturedCategories";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--glow-primary),transparent_34%),radial-gradient(circle_at_80%_18%,var(--glow-secondary),transparent_22%),linear-gradient(180deg,var(--bg-secondary)_0%,var(--bg-main)_100%)]" />
      <div className="absolute left-1/2 top-[-80px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--glow-primary)] blur-[120px]" />
      <div className="absolute left-[10%] top-[220px] h-[220px] w-[220px] rounded-full bg-[var(--glow-secondary)] blur-[100px]" />
      <div className="absolute bottom-[80px] right-[8%] h-[260px] w-[260px] rounded-full bg-[var(--glow-secondary)] blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-6 pb-20 pt-28 text-center md:pt-32">
        <section className="w-full">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-soft)] backdrop-blur-md">
              <span className="text-[var(--primary-strong)]">✦</span>
              Discover prompts for ChatGPT, Midjourney, coding, marketing and more
            </div>

            <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white via-[#f3ecff] to-[#b7a9d6] bg-clip-text text-5xl font-black leading-[0.95] tracking-[-0.04em] text-transparent md:text-7xl lg:text-[84px]">
              Find the perfect AI prompt
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)] md:text-xl">
              A curated, searchable library of high-performing prompts for
              generative AI. Built for creators, marketers, developers and curious
              brains.
            </p>
          </div>

          <SearchBar />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="mr-1 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Trending
            </span>

            <Link
              href="/category/marketing"
              className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-4 py-1.5 text-sm font-medium text-[var(--text-main)] transition hover:opacity-90"
            >
              Marketing
            </Link>
            <Link
              href="/category/coding"
              className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-4 py-1.5 text-sm font-medium text-[var(--text-main)] transition hover:opacity-90"
            >
              Coding
            </Link>
            <Link
              href="/category/image-generation"
              className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-4 py-1.5 text-sm font-medium text-[var(--text-main)] transition hover:opacity-90"
            >
              Art
            </Link>
            <Link
              href="/category/productivity"
              className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-4 py-1.5 text-sm font-medium text-[var(--text-main)] transition hover:opacity-90"
            >
              Productivity
            </Link>
          </div>
        </section>

        <FeaturedCategories />
      </div>
    </main>
  );
}