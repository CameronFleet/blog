import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Layout from '@/components/blog/Layout'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { JSX } from 'react'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Custom components for MDX
const components = {
  pre: ({ children, ...props }: JSX.IntrinsicElements['pre']) => {
    return (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm" {...props}>
        {children}
      </pre>
    )
  },
  code: ({ children, ...props }: JSX.IntrinsicElements['code']) => {
    if (typeof children === 'string') {
      return (
        <code 
          className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono"
          dangerouslySetInnerHTML={{ __html: highlight(children) }}
          {...props}
        />
      )
    }
    return <code {...props}>{children}</code>
  },
  h1: ({ children, ...props }: JSX.IntrinsicElements['h1']) => (
    <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: JSX.IntrinsicElements['h2']) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: JSX.IntrinsicElements['h3']) => (
    <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: JSX.IntrinsicElements['p']) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: JSX.IntrinsicElements['ul']) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: JSX.IntrinsicElements['ol']) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  blockquote: ({ children, ...props }: JSX.IntrinsicElements['blockquote']) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4" {...props}>
      {children}
    </blockquote>
  ),
  a: ({ children, ...props }: JSX.IntrinsicElements['a']) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props}>
      {children}
    </a>
  ),
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Cameron Fleet`,
    description: post.excerpt,
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}
          
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>
    </Layout>
  )
} 