"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const blogData = {
  "modern-land-surveying-techniques": {
    title: "Modern Land Surveying Techniques",
    date: "2024-03-01",
    content: `
    Modern land surveying has undergone a revolutionary transformation with the advent of drone technology and advanced digital tools. This article explores how these innovations are reshaping the surveying industry and improving accuracy, efficiency, and accessibility.

    Key Topics:
    • Drone-based surveying technology
    • Advanced GPS and GIS integration
    • Digital mapping techniques
    • Real-time data processing
    • Benefits and applications

    Whether you're a property developer, landowner, or industry professional, understanding these modern surveying techniques is crucial for making informed decisions in today's real estate market.
    `,
  },
  // Add more blog posts as needed
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-2xl text-gray-800">Blog post not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <article className="container mx-auto px-6">
        <header className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <time className="text-gray-600">{post.date}</time>
        </header>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="whitespace-pre-line text-gray-700">
            {post.content}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
