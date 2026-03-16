import Link from "next/link";
import { getAllPrompts } from "@/lib/prompts";
import PromptCard from "@/components/prompts/PromptCard";

export default function PromptsPage() {
  const prompts = getAllPrompts();

  return (
    <main className="min-h-screen bg-[#12051f] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            Prompt Library
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Explore Prompts
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Browse prompt templates for marketing, coding, writing, image
            generation, and more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
         {prompts.map((prompt) => (
            <PromptCard key={prompt.slug} prompt={prompt} />
          ))}
        </div>
      </div>
    </main>
  );
}