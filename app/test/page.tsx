"use client";

import { useEffect, useState } from "react";

type Prompt = {
  id: number;
  title: string;
  description: string | null;
  prompt_text: string;
  rank?: number; // 👈 importante
};

export default function TestPage() {
  const [query, setQuery] = useState("");
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  async function search(q: string) {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setPrompts(data.results || []);
  }

  useEffect(() => {
    search("");
  }, []);

  return (
    <main className="px-10 pt-32 pb-10 text-white">
      <h1 className="mb-6 text-3xl font-bold">🔍 LIONIXY Search Test</h1>

      <input
        type="text"
        placeholder="Search prompts..."
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          search(value);
        }}
        className="mb-6 w-full rounded border border-white/20 bg-white/10 p-3 outline-none"
      />

      <div className="space-y-4">
        {prompts.map((p) => (
            <div
            key={p.id}
            className="rounded-lg border border-white/20 p-4"
            >
            <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{p.title}</h2>

                {p.rank !== undefined && (
                <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded">
                    rank: {p.rank.toFixed(3)}
                </span>
                )}
            </div>

            <p className="text-sm opacity-70">{p.description}</p>

            <pre className="mt-2 whitespace-pre-wrap text-xs opacity-60">
                {p.prompt_text}
            </pre>
            </div>
        ))}
        </div>
    </main>
  );
}