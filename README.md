# Cameron Fleet Blog

A modern, fast, and developer-friendly blog built with Next.js, MDX, and Tailwind CSS. Inspired by the clean aesthetics of technical blogs like Julia Evans' and Coding Horror.

🌐 **Live Site**: [https://blog-cameronfleet.vercel.app](https://blog-cameronfleet.vercel.app)  
📂 **Repository**: [https://github.com/CameronFleet/blog](https://github.com/CameronFleet/blog)

## 🚀 Features

- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **MDX Support**: Write posts in Markdown with React components
- **Syntax Highlighting**: Beautiful code blocks with sugar-high
- **Responsive Design**: Looks great on all devices
- **SEO Optimized**: Meta tags, structured data, and performance
- **Type Safe**: Full TypeScript support throughout
- **Git-based CMS**: Write posts in MDX files, no database needed
- **Auto-deployment**: Deployed on Vercel with automatic updates

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 with App Router
- **Content**: [MDX](https://mdxjs.com/) for markdown with React components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 for utility-first styling
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Package Manager**: [Yarn](https://yarnpkg.com/) for dependency management
- **Deployment**: [Vercel](https://vercel.com/) for hosting and CI/CD

## 📝 Writing Posts

Create a new `.mdx` file in the `src/posts/` directory:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
tags: ["React", "TypeScript", "Web Development"]
category: "tutorial"
---

# Your Post Title

Your content goes here! You can use:

- **Markdown** syntax
- React components
- Code blocks with syntax highlighting
- And much more!

```javascript
const greeting = "Hello, World!"
console.log(greeting)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CameronFleet/blog.git
cd blog
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Homepage
│   ├── posts/[slug]/   # Individual post pages
│   ├── about/          # About page
│   └── tags/           # Tags page
├── components/         # React components
│   └── blog/          # Blog-specific components
├── lib/               # Utility functions
│   └── posts.ts       # Post handling logic
├── posts/             # Blog posts (.mdx files)
└── styles/           # Global styles
```

## 🎨 Customization

### Styling
- Edit `src/app/globals.css` for global styles
- Modify Tailwind classes in components
- Update the color scheme in `tailwind.config.js`

### Components
- Create custom MDX components in `src/components/blog/`
- Add them to the components object in `src/app/posts/[slug]/page.tsx`

### Configuration
- Update site metadata in `src/app/layout.tsx`
- Modify the header/footer in respective component files

## 🚀 Deployment

This blog is deployed on **Vercel** with automatic deployments:

- **Live URL**: [https://blog-cameronfleet.vercel.app](https://blog-cameronfleet.vercel.app)
- **Auto-deploy**: Every push to `main` branch triggers a new deployment
- **Build Command**: `yarn build`
- **Framework**: Next.js (optimized for static generation)

### Deploy Your Own

1. Fork this repository
2. Connect your GitHub account to [Vercel](https://vercel.com)
3. Import your forked repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `yarn build`
   - **Install Command**: `yarn install`
   - **Output Directory**: `./` (default)
5. Deploy!

For other platforms, build the static site:
```bash
yarn build
yarn start
```

## 🔧 Development Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn test --watchAll=false` - Run tests (when added)

## 📊 Analytics & Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **SEO**: Built-in meta tags and structured data
- **Analytics**: Ready for Plausible, Umami, or Google Analytics integration

## 📚 Writing Tips

1. **Use descriptive titles** that clearly indicate what the post is about
2. **Add excerpts** to help readers decide if they want to read the full post
3. **Tag appropriately** to help with discoverability
4. **Include code examples** when discussing technical topics
5. **Keep paragraphs short** for better readability

## 🤝 Contributing

This is a personal blog, but if you find bugs or have suggestions:

1. Open an issue describing the problem
2. Submit a pull request with your fix
3. Ensure all tests pass and code follows the existing style

## 📄 License

MIT License - feel free to use this as a template for your own blog!

## 🙏 Inspiration

This blog draws inspiration from:
- [Julia Evans](https://jvns.ca/) - Clean design and technical focus
- [Coding Horror](https://blog.codinghorror.com/) - Engaging technical writing
- [Dan Abramov](https://overreacted.io/) - Developer-friendly content

---

Built with ❤️ by Cameron Fleet | [GitHub](https://github.com/CameronFleet) | [Live Site](https://blog-cameronfleet.vercel.app)
