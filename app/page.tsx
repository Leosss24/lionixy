import SearchBar from "@/components/search/SearchBar";

export default function Home() {
  return (
   <main className="min-h-screen bg-[#12051f] text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-16 text-center md:pt-24">

        <p className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          AI Prompt Search Engine
        </p>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          LIONIXY
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Search and discover high-performing prompts for ChatGPT, Midjourney,
          coding, marketing and more.
        </p>

        <SearchBar />

      </section>
    </main>
  );
}