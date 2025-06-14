import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Cameron Fleet
            </Link>
            <p className="text-gray-600 text-sm mt-1">
              Software Engineer • Builder • Learner
            </p>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/tags" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Tags
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 