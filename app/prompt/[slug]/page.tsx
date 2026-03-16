import { getPromptBySlug } from "@/lib/prompts";

export default async function PromptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    return (
      <main className="min-h-screen bg-[#12051f] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold">Prompt not found</h1>
          <p className="mt-4 text-white/70">
            We couldn&apos;t find the prompt you&apos;re looking for.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#12051f] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
          {prompt.aiTool} · {prompt.category} · {prompt.subcategory}
        </p>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          {prompt.title}
        </h1>

        <p className="mt-4 text-lg text-white/70">{prompt.description}</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-3 text-xl font-semibold">Prompt</h2>
          <p className="whitespace-pre-line text-white/80">{prompt.prompt}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Variables</h3>
            <ul className="space-y-2 text-white/70">
              {prompt.variables.map((variable) => (
                <li key={variable}>• {variable}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Use cases</h3>
            <ul className="space-y-2 text-white/70">
              {prompt.useCases.map((useCase) => (
                <li key={useCase}>• {useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}