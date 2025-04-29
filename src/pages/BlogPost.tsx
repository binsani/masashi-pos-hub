
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import CallToAction from "@/components/ui/CallToAction";

// Sample blog data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: "1",
    title: "5 Ways to Optimize Your Inventory Management",
    date: "Apr 15, 2023",
    author: "Alex Johnson",
    readTime: "5 min read",
    image: "/placeholder.svg",
    categories: ["Inventory", "Optimization"],
    content: `
      <p class="mb-4">Effective inventory management is crucial for businesses of all sizes. When done right, it can significantly reduce costs, improve cash flow, and enhance customer satisfaction. Here are five key strategies to optimize your inventory management:</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Implement ABC Analysis</h2>
      <p class="mb-4">ABC analysis categorizes inventory items based on their value and usage. 'A' items are high-value products that require tight control, 'B' items have moderate value and need regular monitoring, while 'C' items have the lowest value but often comprise the bulk of inventory items.</p>
      <p class="mb-4">By implementing ABC analysis, businesses can focus their resources on managing high-value items more effectively while spending less time on low-value items.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Utilize Just-in-Time (JIT) Inventory</h2>
      <p class="mb-4">JIT inventory management involves receiving goods only as they are needed in the production process, reducing inventory costs. While this requires precise forecasting and reliable suppliers, the benefits include reduced carrying costs, minimal warehouse space, and lower risk of obsolescence.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Implement Inventory Management Software</h2>
      <p class="mb-4">Modern inventory management software like Masashi POS provides real-time visibility into stock levels, automated reordering, and powerful analytics. These systems can help prevent stockouts and overstock situations by maintaining optimal inventory levels based on historical data and demand forecasts.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Regular Auditing and Cycle Counting</h2>
      <p class="mb-4">Instead of conducting time-consuming annual physical counts, implement cycle counting where small subsets of inventory are counted on a rotating schedule. This approach helps identify discrepancies early and ensures more accurate inventory records throughout the year.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Optimize Your Warehouse Layout</h2>
      <p class="mb-4">An efficient warehouse layout can dramatically improve picking times and reduce errors. Store fast-moving items in easily accessible locations, group related items together, and ensure clear labeling and organization throughout the facility.</p>
      
      <p class="mt-8 mb-4">Implementing these five strategies can help businesses optimize their inventory management processes, leading to reduced costs, improved efficiency, and enhanced customer satisfaction. The key is to regularly review and refine your approach based on changing business needs and market conditions.</p>
    `
  },
  {
    id: "2",
    title: "The Future of Point-of-Sale Systems",
    date: "Mar 22, 2023",
    author: "Sarah Miller",
    readTime: "4 min read",
    image: "/placeholder.svg",
    categories: ["POS", "Technology"],
    content: `
      <p class="mb-4">Point-of-sale (POS) systems have evolved significantly over the past decade, transforming from simple cash registers to sophisticated business management tools. As technology continues to advance, POS systems are set to become even more integral to business operations. Let's explore the emerging trends that will shape the future of POS technology.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Cloud-Based POS Solutions</h2>
      <p class="mb-4">Cloud-based POS systems are becoming increasingly popular as they offer flexibility, scalability, and remote access capabilities. These systems store data securely in the cloud, allowing business owners to access their information from anywhere with an internet connection. This trend will continue to grow as businesses seek more agile solutions that can adapt to changing needs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mobile POS Integration</h2>
      <p class="mb-4">Mobile POS systems are transforming how businesses interact with customers by enabling transactions to take place anywhere in the store or even outside traditional retail environments. This mobility enhances the customer experience by reducing wait times and creating more personalized interactions.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">AI and Machine Learning</h2>
      <p class="mb-4">Artificial intelligence and machine learning are revolutionizing POS systems by providing advanced analytics, predictive inventory management, and personalized customer experiences. These technologies can analyze vast amounts of data to identify patterns and make recommendations, helping businesses optimize their operations and increase sales.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Contactless and Alternative Payment Methods</h2>
      <p class="mb-4">The demand for contactless payment options has surged in recent years, and this trend is expected to continue. Future POS systems will need to support an increasingly diverse range of payment methods, including mobile wallets, cryptocurrencies, and biometric authentication.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Integration with Other Business Systems</h2>
      <p class="mb-4">Modern POS systems are becoming central hubs that integrate with other business systems such as accounting software, CRM platforms, and e-commerce sites. This integration creates a seamless flow of information across the business, improving efficiency and providing more comprehensive insights.</p>
      
      <p class="mt-8 mb-4">As POS technology continues to evolve, businesses that embrace these innovations will be better positioned to meet changing customer expectations, streamline operations, and drive growth. The key is to choose a flexible POS solution that can adapt to emerging technologies and business needs.</p>
    `
  },
  // More posts would be here...
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="max-container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="text-orange-500 hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Article Header */}
        <section className="bg-primary-800 py-20 text-white">
          <div className="max-container">
            <Link to="/blog" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-6">
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image */}
        <div className="bg-white">
          <div className="max-container py-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        
        {/* Article Content */}
        <section className="bg-white">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Article Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.categories.map((category, index) => (
                    <Link 
                      key={index}
                      to={`/blog?category=${category}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      #{category}
                    </Link>
                  ))}
                </div>
                
                {/* Share */}
                <div className="mt-8 flex items-center">
                  <span className="font-medium mr-4">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <Share2 size={18} />
                    </button>
                    {/* Add more social sharing buttons here */}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(p => p.id !== post.id)
                      .slice(0, 3)
                      .map(relatedPost => (
                        <Link 
                          key={relatedPost.id} 
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="font-medium group-hover:text-orange-500 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar size={12} className="mr-1" />
                            <span>{relatedPost.date}</span>
                          </div>
                        </Link>
                      ))}
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(blogPosts.flatMap(p => p.categories))).map((category, index) => (
                        <Link 
                          key={index}
                          to={`/blog?category=${category}`}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Ready to optimize your business operations?"
          description="See how Masashi POS can help streamline your inventory management and point-of-sale processes."
          primaryButtonText="Request Demo"
          primaryButtonLink="/contact"
          bgColor="bg-orange-500"
        />
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
