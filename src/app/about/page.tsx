import Layout from '@/components/blog/Layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading font-bold text-3xl text-neutral-950 dark:text-neutral-50 mb-10">
          About
        </h1>

        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
          <p>
            I&apos;m a staff software engineer at{' '}
            <a
              href="https://paxos.com"
              className="text-teal-600 dark:text-teal-400 hover:underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paxos
            </a>
            , currently working on the blockchain team. Before that I was on the experience team.
          </p>

          <p>
            I write about distributed systems, blockchain infrastructure, and the engineering
            problems I find interesting. Most posts are things I wish existed when I was figuring
            something out.
          </p>

          <p>
            If something I wrote was useful, or if you just want to talk — reach out.
          </p>
        </div>

        <div className="flex gap-6 mt-12">
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
    </Layout>
  )
}
