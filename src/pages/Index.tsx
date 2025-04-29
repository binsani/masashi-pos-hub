
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToAction from '@/components/ui/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        <FeaturesSection />
        
        {/* Industries Section */}
        <section className="bg-white">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions Tailored to Your Industry</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're in retail, pharmacy, supermarket, or warehouse management, Masashi POS adapts to your specific needs with industry-specific features and workflows.
                </p>
                <ul className="space-y-4">
                  {[
                    "Custom workflows for different business types",
                    "Industry-specific reporting and analytics",
                    "Specialized inventory management tools",
                    "Compliance-ready features for regulated industries"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild className="bg-primary-800 hover:bg-primary-700">
                    <Link to="/products" className="flex items-center">
                      Explore Industry Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-orange-50 transition-colors">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Retail</h3>
                  <p className="text-gray-600 text-sm">Perfect for boutiques, specialty shops, and general retail</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pharmacy</h3>
                  <p className="text-gray-600 text-sm">Specialized features for medication tracking and compliance</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-green-50 transition-colors">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Supermarket</h3>
                  <p className="text-gray-600 text-sm">High-volume inventory and fast checkout processes</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-purple-50 transition-colors">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Warehouse</h3>
                  <p className="text-gray-600 text-sm">Advanced logistics and large-scale inventory management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        <CallToAction 
          title="Ready to Transform Your Business?"
          description="Join hundreds of businesses that have improved efficiency and increased profits with Masashi POS."
          primaryButtonText="Request Demo"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/products"
        />
      </main>
      <Footer />
    </>
  );
};

export default Index;
