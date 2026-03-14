import Link from 'next/link'
import { PostMetadata } from '@/lib/posts'

interface PostCardProps {
  post: PostMetadata
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.date)
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <article className="group border-b border-neutral-200 dark:border-neutral-800 last:border-0">
      <Link href={`/posts/${post.slug}`} className="flex items-baseline gap-6 py-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 -mx-6 px-6 transition-colors">
        <time
          dateTime={post.date}
          className="text-xs font-heading font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-600 shrink-0 w-28"
        >
          {formatted}
        </time>

        <div className="flex-1 min-w-0">
          <h2 className="font-heading font-bold text-base text-neutral-950 dark:text-neutral-50 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
              {post.excerpt}
            </p>
          )}
        </div>

        <span className="text-neutral-300 dark:text-neutral-700 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors shrink-0 text-sm">
          →
        </span>
      </Link>
    </article>
  )
}
