'use client'

import { useState } from 'react'
import PostCard from './PostCard'
import { PostMetadata } from '@/lib/posts'

interface PostListProps {
  posts: PostMetadata[]
  tags: string[]
}

export default function PostList({ posts, tags }: PostListProps) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? posts.filter((p) => p.tags.includes(active)) : posts

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-6 pb-3 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          Writing
        </h2>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(active === tag ? null : tag)}
                className={`text-xs font-heading uppercase tracking-wider transition-colors ${
                  active === tag
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-neutral-400 dark:text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        {filtered.length > 0 ? (
          filtered.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-sm text-neutral-400 dark:text-neutral-600 py-4">
            No posts tagged &ldquo;{active}&rdquo;.
          </p>
        )}
      </div>
    </div>
  )
}
