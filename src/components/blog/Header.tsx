import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-5 flex items-baseline justify-between">
        <Link
          href="/"
          className="font-heading text-sm font-bold uppercase tracking-widest text-neutral-950 dark:text-neutral-50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          Cameron Fleet
        </Link>

        <nav className="flex items-baseline gap-8">
          <Link
            href="/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors"
          >
            Writing
          </Link>
          <Link
            href="/about"
            className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
