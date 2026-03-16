export default function SearchBar() {
  return (
    <div className="group relative mx-auto mt-12 w-full max-w-3xl">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--glow-primary)] via-[var(--glow-secondary)] to-[var(--glow-primary)] blur-xl opacity-80 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        <div className="pl-5 text-[var(--text-muted)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search for prompts (e.g. 'minimalist logo design')..."
          className="h-16 w-full border-none bg-transparent px-4 text-base text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none"
        />

        <div className="pr-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-[var(--text-main)] shadow-[0_0_25px_rgba(168,85,247,0.4)] transition hover:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}