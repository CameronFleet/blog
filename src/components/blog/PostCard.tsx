import Link from 'next/link'
import { PostMetadata } from '@/lib/posts'

interface PostCardProps {
  post: PostMetadata
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="pb-6 border-b border-gray-200 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
            {post.category && (
              <>
                <span>•</span>
                <span className="text-blue-600 capitalize">{post.category}</span>
              </>
            )}
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          
          {post.excerpt && (
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
          )}
          
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
} 