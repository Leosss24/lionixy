export default function PromptPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-[#12051f] text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold mb-6">
          Prompt: {params.slug}
        </h1>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/70">
            Prompt content will appear here.
          </p>
        </div>

      </div>
    </main>
  );
}