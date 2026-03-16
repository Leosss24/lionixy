import PromptCard from "@/components/prompts/PromptCard";
import { getPromptsByTool } from "@/lib/prompts";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const toolPrompts = getPromptsByTool(slug);

  if (toolPrompts.length === 0) {
    return (
      <main className="min-h-screen bg-[#12051f] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black tracking-tight">
            Tool not found
          </h1>
          <p className="mt-4 text-white/70">
            We couldn&apos;t find prompts for this AI tool.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#12051f] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            AI Tool
          </p>

          <h1 className="text-4xl font-black tracking-tight capitalize md:text-5xl">
            {slug} Prompts
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Discover prompts designed for {slug}.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {toolPrompts.map((prompt) => (
            <PromptCard key={prompt.slug} prompt={prompt} />
          ))}
        </div>
      </div>
    </main>
  );
}