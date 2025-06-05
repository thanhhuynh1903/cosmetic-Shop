import "./Blog.css";

function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Natural Skincare",
      excerpt:
        "Discover why natural ingredients are better for your skin and the environment.",
      image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?cs=srgb&dl=pexels-andersonguerra-1115128.jpg&fm=jpg",
      date: "May 15, 2023",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Morning Skincare Routine Guide",
      excerpt:
        "Learn the perfect step-by-step morning routine for glowing skin all day.",
      image: "https://preview.redd.it/what-is-the-best-and-worst-makeup-you-ever-tried-v0-1rw2ttjsusrb1.jpg?width=640&crop=smart&auto=webp&s=786cd94e8d90a4ad2c91f68bb78f9619eb949539",
      date: "June 2, 2023",
      author: "Emma Davis",
    },
    {
      id: 3,
      title: "Understanding Skin Types",
      excerpt:
        "How to identify your skin type and choose the right products for your needs.",
      image:"https://c0.wallpaperflare.com/preview/835/84/849/flatlay-makeup-beauty-cosmetics.jpg",
      date: "July 10, 2023",
      author: "Michael Chen",
    },
  ];

  return (
    <div className="bg-[#faf7f5] py-6 md:py-16">
      <div className="w-[95%] md:w-[88%] mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-[#c28b7a] text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4">
            Our Blog
          </h1>
          <p className="text-[#c28b7a] opacity-60 max-w-2xl mx-auto">
            Discover the latest trends, tips, and insights about skincare,
            beauty routines, and natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-[#c28b7a] opacity-70 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-semibold text-[#c28b7a] mb-2">
                  {post.title}
                </h2>
                <p className="text-[#c28b7a] opacity-80 mb-4">{post.excerpt}</p>
                <button className="text-[#c28b7a] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#c28b7a] text-white py-2 px-6 rounded-md hover:bg-[#b27a69] transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
