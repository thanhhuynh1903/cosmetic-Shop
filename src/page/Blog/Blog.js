import "./Blog.css";

function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Natural Skincare",
      excerpt:
        "Discover why natural ingredients are better for your skin and the environment.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLxxfE3JDjz1eyc1u3PykuK0uWlacdvehJA&s",
      date: "May 15, 2023",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Morning Skincare Routine Guide",
      excerpt:
        "Learn the perfect step-by-step morning routine for glowing skin all day.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw_TPJnEkWe3pjCKqqEuNB0MyntoMguU_xw&s",
      date: "June 2, 2023",
      author: "Emma Davis",
    },
    {
      id: 3,
      title: "Understanding Skin Types",
      excerpt:
        "How to identify your skin type and choose the right products for your needs.",
      image:
        "data:image/jpeg;base64,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",
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
