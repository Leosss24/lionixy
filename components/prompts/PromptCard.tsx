import Link from "next/link";
import { Prompt } from "@/types/prompt";

export default function PromptCard({ prompt }: { prompt: Prompt }) {
  return (
    <Link
      href={`/prompt/${prompt.slug}`}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/50">
        {prompt.aiTool} · {prompt.category}
      </p>

      <h2 className="text-xl font-bold text-white">{prompt.title}</h2>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70">
        {prompt.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {prompt.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}