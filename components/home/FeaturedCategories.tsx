import Link from "next/link";

const categories = [
  {
    title: "Marketing",
    description:
      "Campaign ideas, ad copy, product positioning, email funnels and more.",
    href: "/category/marketing",
    icon: "✦",
  },
  {
    title: "Coding",
    description:
      "Debugging, refactoring, architecture help, tests and clean code prompts.",
    href: "/category/coding",
    icon: "</>",
  },
  {
    title: "Art & Design",
    description:
      "Image prompts, visual styles, logo concepts and aesthetic direction.",
    href: "/category/image-generation",
    icon: "◌",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="mt-24 w-full max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight text-[var(--text-main)] md:text-2xl">
          Featured categories
        </h3>

        <Link
          href="/prompts"
          className="text-sm font-medium text-[var(--primary-strong)] transition-colors hover:text-[var(--text-main)]"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-[var(--chip-border)] hover:bg-[var(--surface-strong)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--chip-bg)] to-[var(--surface)] text-[var(--primary-strong)]">
              <span className="text-lg font-bold">{category.icon}</span>
            </div>

            <h4 className="text-lg font-bold text-[var(--text-main)]">
              {category.title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
              {category.description}
            </p>

            <div className="mt-5 text-sm font-medium text-[var(--primary-strong)] transition-colors group-hover:text-[var(--text-main)]">
              Explore prompts →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}