import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Modern Land Surveying Techniques",
      excerpt: "Exploring how drone technology is revolutionizing land surveying...",
      date: "2024-03-01",
      slug: "modern-land-surveying-techniques"
    },
    // Add more blog posts
  ];

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Our Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}