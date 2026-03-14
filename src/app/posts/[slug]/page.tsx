import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Layout from '@/components/blog/Layout'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { JSX } from 'react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

const components = {
  pre: ({ children, ...props }: JSX.IntrinsicElements['pre']) => (
    <pre className="bg-neutral-950 text-neutral-100 p-5 overflow-x-auto text-sm mb-6" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }: JSX.IntrinsicElements['code']) => {
    if (typeof children === 'string') {
      return (
        <code
          className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1.5 py-0.5 text-sm font-mono"
          dangerouslySetInnerHTML={{ __html: highlight(children) }}
          {...props}
        />
      )
    }
    return <code {...props}>{children}</code>
  },
  h1: ({ children, ...props }: JSX.IntrinsicElements['h1']) => (
    <h1 className="font-heading font-bold text-3xl text-neutral-950 dark:text-neutral-50 mb-6 mt-10" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: JSX.IntrinsicElements['h2']) => (
    <h2 className="font-heading font-bold text-2xl text-neutral-950 dark:text-neutral-50 mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: JSX.IntrinsicElements['h3']) => (
    <h3 className="font-heading font-bold text-xl text-neutral-950 dark:text-neutral-50 mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: JSX.IntrinsicElements['p']) => (
    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: JSX.IntrinsicElements['ul']) => (
    <ul className="list-disc pl-5 mb-5 space-y-2 text-neutral-700 dark:text-neutral-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: JSX.IntrinsicElements['ol']) => (
    <ol className="list-decimal pl-5 mb-5 space-y-2 text-neutral-700 dark:text-neutral-300" {...props}>
      {children}
    </ol>
  ),
  blockquote: ({ children, ...props }: JSX.IntrinsicElements['blockquote']) => (
    <blockquote className="border-l-4 border-teal-600 dark:border-teal-400 pl-5 italic text-neutral-500 dark:text-neutral-400 mb-5" {...props}>
      {children}
    </blockquote>
  ),
  a: ({ children, ...props }: JSX.IntrinsicElements['a']) => (
    <a className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 underline underline-offset-2" {...props}>
      {children}
    </a>
  ),
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Not Found' }

  return {
    title: `${post.title} — Cameron Fleet`,
    description: post.excerpt,
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-2">
          <Link
            href="/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            ← Writing
          </Link>
        </div>

        <header className="mt-8 mb-12 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-4 text-xs font-heading uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-5">
            <time dateTime={post.date}>{date}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
            {post.category && (
              <>
                <span>·</span>
                <span className="text-teal-600 dark:text-teal-400">{post.category}</span>
              </>
            )}
          </div>

          <h1 className="font-heading font-bold text-4xl text-neutral-950 dark:text-neutral-50 leading-tight mb-5">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-heading font-medium uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>
    </Layout>
  )
}
