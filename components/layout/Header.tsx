export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-700/30">
          <span className="text-lg font-black">L</span>
        </div>

        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-white">
            LIONIXY
          </h2>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-10">
        <a className="text-sm font-medium text-white/70 transition-colors hover:text-white" href="#">
          Explore
        </a>
        <a className="text-sm font-medium text-white/70 transition-colors hover:text-white" href="#">
          Categories
        </a>
        <a className="text-sm font-medium text-white/70 transition-colors hover:text-white" href="#">
          Submit
        </a>
      </nav>

      <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-700/30 transition hover:scale-[1.02]">
        Log In
      </button>
    </header>
  );
}