export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="text-xs text-neutral-400 dark:text-neutral-600 font-heading uppercase tracking-wider">
          © {new Date().getFullYear()} Cameron Fleet
        </span>

        <div className="flex gap-6">
          <a
            href="https://github.com/cameronfleet"
            className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/cameronfleet"
            className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/cameronfleet"
            className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
