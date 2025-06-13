import { Link } from "react-router-dom"


export function RelatedPosts({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="relative h-48 w-full">
              <image
                src={post.image || "/placeholder.svg?height=200&width=400"}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-rose-500 mb-2 group-hover:text-rose-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
