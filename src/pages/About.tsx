
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import CallToAction from '@/components/ui/CallToAction';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-800 py-16 md:py-20 text-white">
          <div className="max-container">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Learn about our mission to transform inventory management and point-of-sale operations for businesses worldwide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Our team collaborating on inventory solutions"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4 md:mb-6">
                  At Masashi POS, we're dedicated to empowering businesses with smart, user-friendly inventory and point-of-sale solutions. Our mission is to simplify complex operations and help businesses of all sizes thrive in today's competitive market.
                </p>
                <p className="text-gray-600 mb-6">
                  Founded in 2015, we started with a simple idea: inventory management shouldn't be complicated or time-consuming. Since then, we've expanded our offerings to create a comprehensive suite of tools that seamlessly integrate with your existing business processes.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                  <div>
                    <h4 className="font-semibold text-xl mb-1 md:mb-2">300+</h4>
                    <p className="text-gray-600">Business Clients</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 md:mb-2">25+</h4>
                    <p className="text-gray-600">Countries Served</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 md:mb-2">98%</h4>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 md:mb-2">24/7</h4>
                    <p className="text-gray-600">Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-container">
            <SectionHeading 
              title="Our Core Values"
              subtitle="These principles guide everything we do, from product development to customer service."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We constantly push boundaries to develop cutting-edge solutions that solve real business challenges.",
                  icon: (
                    <svg className="h-10 w-10 md:h-12 md:w-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Reliability",
                  description: "Our systems are built for maximum uptime and dependability, because we know your business can't afford downtime.",
                  icon: (
                    <svg className="h-10 w-10 md:h-12 md:w-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Customer Focus",
                  description: "We listen to our clients and design solutions based on their real-world needs and feedback.",
                  icon: (
                    <svg className="h-10 w-10 md:h-12 md:w-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4 md:mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Join Our Growing Team"
          description="We're always looking for talented individuals who are passionate about technology and customer success."
          primaryButtonText="View Careers"
          primaryButtonLink="/contact"
          bgColor="bg-orange-500"
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
