export default function SearchBar() {
  return (
    <div className="mt-10 flex w-full max-w-2xl items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <input
        type="text"
        placeholder="Search for prompts..."
        className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
      />
    </div>
  );
}