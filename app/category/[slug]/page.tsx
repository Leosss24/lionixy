import PromptCard from "@/components/prompts/PromptCard";
import { getPromptsByCategory } from "@/lib/prompts";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryPrompts = getPromptsByCategory(slug);

  if (categoryPrompts.length === 0) {
    return (
      <main className="min-h-screen bg-[#12051f] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black tracking-tight">
            Category not found
          </h1>
          <p className="mt-4 text-white/70">
            We couldn&apos;t find prompts for this category.
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
            Category
          </p>

          <h1 className="text-4xl font-black tracking-tight capitalize md:text-5xl">
            {slug} Prompts
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Explore AI prompts in the {slug} category.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryPrompts.map((prompt) => (
            <PromptCard key={prompt.slug} prompt={prompt} />
          ))}
        </div>
      </div>
    </main>
  );
}