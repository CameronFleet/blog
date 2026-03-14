import { getAllPosts, getAllTags } from '@/lib/posts'
import Layout from '@/components/blog/Layout'
import PostList from '@/components/blog/PostList'

export default function Home() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-10 sm:py-16">
        <div className="mb-16">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Staff engineer at{' '}
            <span className="text-teal-600 dark:text-teal-400 font-medium">Paxos</span>
            {' '}— blockchain infrastructure, distributed systems, and whatever I&apos;m thinking about.
          </p>
        </div>

        {posts.length > 0 ? (
          <PostList posts={posts} tags={tags} />
        ) : (
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Nothing here yet.
          </p>
        )}
      </div>
    </Layout>
  )
}
