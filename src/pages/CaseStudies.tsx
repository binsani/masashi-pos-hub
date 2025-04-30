
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import CallToAction from '@/components/ui/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Urban Retail Boosts Efficiency by 45%",
      client: "Urban Retail",
      industry: "Fashion Retail",
      challenge: "Managing inventory across 5 locations with frequent stock discrepancies and manual processes.",
      solution: "Implemented Masashi POS with multi-store sync and real-time inventory tracking.",
      results: [
        "45% increase in operational efficiency",
        "Nearly eliminated inventory discrepancies",
        "Reduced stockouts by 60%",
        "Staff training time cut in half"
      ],
      quote: "Masashi POS has revolutionized how we manage inventory. Stock discrepancies are now a thing of the past.",
      author: "Sarah Johnson, Operations Manager",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Wellness Pharmacy Improves Customer Experience",
      client: "Wellness Pharmacy",
      industry: "Pharmacy",
      challenge: "Long wait times for customers and difficulty tracking medication inventory and expiration dates.",
      solution: "Deployed Masashi POS with pharmacy-specific features including medication tracking and prescription management.",
      results: [
        "Customer wait time reduced by 35%",
        "100% accuracy in medication expiration tracking",
        "Improved regulatory compliance",
        "Streamlined insurance processing"
      ],
      quote: "The multi-store sync feature has been a game-changer for our pharmacy chain. We can now easily transfer products between locations.",
      author: "Michael Chen, Owner",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Fresh Market Supermarket Reduces Waste by 30%",
      client: "Fresh Market",
      industry: "Supermarket",
      challenge: "High perishable inventory waste and inefficient checkout processes causing long lines.",
      solution: "Implemented Masashi POS with fresh produce management and multi-register synchronization.",
      results: [
        "30% reduction in perishable waste",
        "Checkout time decreased by 40%",
        "Improved inventory forecasting accuracy",
        "Better staffing optimization"
      ],
      quote: "Implementation was seamless, and the support team has been exceptional. Our checkout process is now twice as fast.",
      author: "Emma Rodriguez, General Manager",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-800 py-20 text-white">
          <div className="max-container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-white/90">
                See how businesses across different industries have transformed their operations with Masashi POS.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Case Study */}
        <section className="bg-white">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">Featured Case Study</span>
                <h2 className="text-3xl font-bold mb-4">Thompson Electronics Increases Revenue by 25%</h2>
                <p className="text-gray-600 mb-6">
                  Thompson Electronics, a regional electronics retailer with 12 locations, was struggling with inventory management, leading to stockouts of popular items and excess inventory of slower-moving products.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Frequent stockouts of high-demand products resulting in lost sales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>Manual inventory counts consuming 20+ hours weekly per store</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2">•</span>
                      <span>No visibility into real-time sales data across locations</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="bg-primary-800 hover:bg-primary-700">
                  <Link to="#" className="flex items-center">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Thompson Electronics Store" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <svg className="h-8 w-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="italic text-gray-700">
                      "The analytics tools have helped us identify our best-selling products and optimize our purchasing decisions, resulting in a 20% increase in profit margins."
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                      alt="David Thompson" 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-semibold">David Thompson</p>
                      <p className="text-sm text-gray-600">CEO, Thompson Electronics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Case Studies */}
        <section className="bg-gray-50">
          <div className="max-container">
            <SectionHeading 
              title="Success Stories"
              subtitle="Discover how businesses across various industries have transformed their operations with Masashi POS."
              centered
            />
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-4">{study.industry}</span>
                      <h3 className="text-2xl font-semibold mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.client}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-gray-900">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-gray-900">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="relative flex flex-col bg-gray-50">
                      <div className="flex-grow p-6">
                        <img 
                          src={study.image} 
                          alt={study.client} 
                          className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
                        />
                        
                        <div className="mb-4">
                          <svg className="h-6 w-6 text-orange-500 mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="italic text-gray-700">
                            "{study.quote}"
                          </p>
                        </div>
                        <p className="text-sm font-semibold">{study.author}</p>
                      </div>
                      <div className="p-6 pt-0">
                        <Button asChild variant="outline" className="w-full">
                          <Link to="#">Read Full Case Study</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Join Our Success Stories"
          description="See how Masashi POS can transform your business operations and boost your bottom line."
          primaryButtonText="Request Demo"
          primaryButtonLink="/contact"
          secondaryButtonText="Contact Sales"
          secondaryButtonLink="/contact"
        />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudies;
