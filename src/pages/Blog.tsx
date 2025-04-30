
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample blog data with updated images
const blogPosts = [
  {
    id: "1",
    title: "5 Ways to Optimize Your Inventory Management",
    excerpt: "Learn the best practices to streamline your inventory processes and reduce costs.",
    date: "Apr 15, 2023",
    author: "Alex Johnson",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Inventory", "Optimization"]
  },
  {
    id: "2",
    title: "The Future of Point-of-Sale Systems",
    excerpt: "Discover the emerging trends in POS technology and how they will shape retail.",
    date: "Mar 22, 2023",
    author: "Sarah Miller",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["POS", "Technology"]
  },
  {
    id: "3",
    title: "How Cloud-Based Inventory Solutions Save Time and Money",
    excerpt: "A detailed analysis of the ROI when switching to cloud-based inventory management.",
    date: "Feb 10, 2023",
    author: "David Chen",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Cloud", "ROI"]
  },
  {
    id: "4",
    title: "Case Study: How a Multi-Store Retailer Increased Sales by 27%",
    excerpt: "Learn how one of our clients transformed their operations using Masashi POS.",
    date: "Jan 05, 2023",
    author: "Maya Patel",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Case Study", "Retail"]
  },
  {
    id: "5",
    title: "Essential Reports for Inventory Management",
    excerpt: "The key reports every business owner should be reviewing to optimize stock levels.",
    date: "Dec 12, 2022",
    author: "Alex Johnson",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Reports", "Analytics"]
  },
  {
    id: "6",
    title: "Setting Up Barcode Integration: A Complete Guide",
    excerpt: "Step-by-step instructions for implementing barcode scanning in your business.",
    date: "Nov 18, 2022",
    author: "Sarah Miller",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    categories: ["Barcodes", "Setup"]
  }
];

// All unique categories
const allCategories = Array.from(
  new Set(blogPosts.flatMap(post => post.categories))
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-800 py-20 text-white">
          <div className="max-container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog & Resources
              </h1>
              <p className="text-xl text-white/90">
                Insights, tips, and updates to help you get the most out of your inventory management system.
              </p>
            </div>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === null 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                
                {allCategories.map((category) => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="bg-gray-50">
          <div className="max-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
