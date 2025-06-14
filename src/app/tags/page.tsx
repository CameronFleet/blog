import { getAllTags, getPostsByTag } from '@/lib/posts'
import Layout from '@/components/blog/Layout'
import Link from 'next/link'

export default function Tags() {
  const tags = getAllTags()

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          All Tags
        </h1>
        
        {tags.length > 0 ? (
          <div className="space-y-8">
            {tags.map((tag) => {
              const posts = getPostsByTag(tag)
              return (
                <div key={tag} className="border-b border-gray-200 pb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {tag} ({posts.length})
                  </h2>
                  <div className="grid gap-4">
                    {posts.map((post) => (
                      <Link 
                        key={post.slug}
                        href={`/posts/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <time className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        {post.excerpt && (
                          <p className="text-gray-600 text-sm mt-1">
                            {post.excerpt}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No tags found. Create some posts with tags!
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
} 