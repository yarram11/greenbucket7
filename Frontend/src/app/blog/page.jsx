import React from 'react';

// Sample blog data (you can replace this with actual data or fetch it from an API)
const blogPosts = [
  {
    title: "The History of Biryani",
    description: "Discover the rich history behind one of the world's most beloved dishes – biryani, from its origins to modern interpretations.",
    image: "/blog.jpeg", // Replace with actual image path
    link: "/blogs/history-of-biryani", // Replace with actual blog post link
  },
  {
    title: "Top 5 Spices for Authentic Flavors",
    description: "Explore the essential spices that give our biryani its signature flavor and aroma.",
    image: "/blog2.jpeg", // Replace with actual image path
    link: "/blogs/top-5-spices", // Replace with actual blog post link
  },
  {
    title: "Perfect Pairings: Biryani & Drinks",
    description: "Learn about the perfect drink pairings to complement your biryani meal.",
    image: "/blog3.jpg", // Replace with actual image path
    link: "/blogs/biryani-and-drinks", // Replace with actual blog post link
  },
  {
    title: "A Guide to Regional Biryani Varieties",
    description: "From Hyderabadi to Lucknowi, explore the different regional varieties of biryani across India.",
    image: "/blog2.jpeg", // Replace with actual image path
    link: "/blogs/regional-biryani-varieties", // Replace with actual blog post link
  },
];

const Blogs = () => {
  return (
    <div className="about-section bg-gray-300 py-20">
      <div className="container mx-auto px-5 lg:px-20 text-center">
        <h1 className="text-5xl font-bold mb-10 text-gray-800">Our Blogs</h1>
        <p className="text-lg text-gray-600 mb-10">Stay updated with our latest stories and culinary insights</p>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post border rounded-lg p-5 shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-5"
              />
              <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
              <p className="text-gray-700 mb-5">{post.description}</p>
              <a href={post.link} className="text-primary font-semibold hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
