import { Link } from "react-router-dom"
import { BlogAuthor } from "./BlogAuthor"
import { RelatedPosts } from "./RelatedPost"
import { ShareButtons } from "../../../components/ShareButton/ShareButton"
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs"

export default function BlogPost({ params }) {
  // In a real application, you would fetch the blog post data based on the slug
  // For this example, we'll use hardcoded data
  const post = {
    title: "The Benefits of Natural Skincare",
    excerpt: "Discover why natural ingredients are better for your skin and the environment.",
    date: "May 15, 2023",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/avatar-sarah.jpg",
      bio: "Beauty expert with 10+ years of experience in the skincare industry.",
    },
    image: "/images/natural-skincare.jpg",
    content: `
      <p>Natural skincare has gained immense popularity in recent years, and for good reason. Products made with natural ingredients offer numerous benefits for both your skin and the environment.</p>
      
      <h2>What Makes Natural Skincare Different?</h2>
      
      <p>Unlike conventional skincare products that often contain synthetic chemicals, natural skincare relies on ingredients derived from plants, minerals, and other natural sources. These ingredients work in harmony with your skin, providing nourishment without harsh side effects.</p>
      
      <p>Some key benefits of natural skincare include:</p>
      
      <ul>
        <li>Gentler on sensitive skin</li>
        <li>Rich in antioxidants and nutrients</li>
        <li>Environmentally sustainable</li>
        <li>Free from potentially harmful chemicals</li>
        <li>Often cruelty-free and ethically sourced</li>
      </ul>
      
      <h2>Key Natural Ingredients to Look For</h2>
      
      <p>When shopping for natural skincare products, keep an eye out for these powerful ingredients:</p>
      
      <ol>
        <li><strong>Aloe Vera:</strong> Soothes and hydrates the skin</li>
        <li><strong>Rosehip Oil:</strong> Rich in vitamins and antioxidants</li>
        <li><strong>Green Tea:</strong> Reduces inflammation and fights aging</li>
        <li><strong>Shea Butter:</strong> Deeply moisturizes and protects</li>
        <li><strong>Honey:</strong> Natural antibacterial and humectant properties</li>
      </ol>
      
      <p>By incorporating natural skincare into your daily routine, you're not only benefiting your skin but also making a positive impact on the planet.</p>
    `,
    tags: ["skincare", "natural beauty", "eco-friendly", "self-care"],
    relatedPosts: [
      {
        id: 2,
        title: "Morning Skincare Routine Guide",
        excerpt: "Learn the perfect step-by-step morning routine for glowing skin all day.",
        image: "/images/morning-routine.jpg",
        slug: "morning-skincare-routine",
      },
      {
        id: 3,
        title: "Understanding Skin Types",
        excerpt: "How to identify your skin type and choose the right products for your needs.",
        image: "/images/skin-types.jpg",
        slug: "understanding-skin-types",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
        <Breadcrumbs productName={post.title} />

          {/* Post Header */}
          <h1 className="text-4xl md:text-5xl font-serif text-rose-500 mb-4">{post.title}</h1>

          <div className="flex items-center justify-between mb-6">
            <div className="text-rose-400">{post.date}</div>
            <ShareButtons />
          </div>

          {/* Featured Image */}
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden shadow-md">
            <image
              src={post.image || "/placeholder.svg?height=600&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-rose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-rose-100 text-rose-500 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio */}
          <BlogAuthor author={post.author} />

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif text-rose-500 mb-6">Related Posts</h2>
            <RelatedPosts posts={post.relatedPosts} />
          </div>
        </div>
      </div>
    </main>
  )
}
