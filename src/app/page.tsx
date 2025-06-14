import { getAllPosts } from '@/lib/posts'
import Layout from '@/components/blog/Layout'
import PostCard from '@/components/blog/PostCard'

export default function Home() {
  const posts = getAllPosts()

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hey! I&apos;m Cameron Fleet.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            I&apos;m a software engineer who loves building things, learning new technologies, 
            and sharing what I discover along the way. Welcome to my corner of the internet.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Posts
            </h2>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
