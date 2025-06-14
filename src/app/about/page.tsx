import Layout from '@/components/blog/Layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Me
          </h1>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Hey! I&apos;m Cameron Fleet, a software engineer passionate about building 
              meaningful products and sharing knowledge with the developer community.
            </p>
            
            <p>
              I love diving deep into technology, whether it&apos;s exploring new frameworks, 
              optimizing performance, or solving complex architectural challenges. 
              My experience spans full-stack development, cloud infrastructure, and 
              everything in between.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              What I&apos;m Working On
            </h2>
            
            <p>
              Currently, I&apos;m focused on modern web development, exploring the latest 
              in React, Next.js, and cloud-native architectures. I&apos;m particularly 
              interested in developer experience, performance optimization, and 
              building tools that make other developers&apos; lives easier.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Why I Write
            </h2>
            
            <p>
              Writing helps me solidify my understanding of complex topics and hopefully 
              helps others learn something new. I try to focus on practical, actionable 
              content that you can apply in your own projects.
            </p>
            
            <p>
              When I&apos;m not coding or writing, you&apos;ll find me exploring new coffee shops, 
              reading about technology trends, or contributing to open source projects.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Let&apos;s Connect
            </h2>
            
            <p>
              I love connecting with fellow developers and learning from each other&apos;s experiences. 
              Feel free to reach out on any of the platforms below!
            </p>
            
            <div className="flex space-x-6 mt-6">
              <a 
                href="https://github.com/cameronfleet" 
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com/cameronfleet" 
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/cameronfleet" 
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 