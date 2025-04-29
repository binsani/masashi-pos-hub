
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import CallToAction from '@/components/ui/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const features = [
    {
      title: "Inventory Management",
      icon: "📦",
      description: "Track stock levels in real-time with automated alerts, batch inventory management, and barcode scanning.",
      benefits: [
        "Real-time stock monitoring",
        "Low stock alerts & reordering",
        "Inventory forecasting",
        "Supplier management"
      ]
    },
    {
      title: "Sales & Checkout",
      icon: "💳",
      description: "Streamline checkout processes with an intuitive POS interface, multiple payment options, and customizable receipts.",
      benefits: [
        "Fast checkout experience",
        "Multiple payment methods",
        "Custom receipt printing",
        "Customer accounts"
      ]
    },
    {
      title: "Reporting & Analytics",
      icon: "📊",
      description: "Make data-driven decisions with comprehensive reports on sales, inventory, staff performance, and more.",
      benefits: [
        "Sales trend analysis",
        "Product performance metrics",
        "Staff productivity reports",
        "Custom reporting options"
      ]
    },
    {
      title: "Multi-Location Support",
      icon: "🏢",
      description: "Manage inventory across multiple stores with synchronized stock levels, transfers, and consolidated reporting.",
      benefits: [
        "Central management system",
        "Inter-store transfers",
        "Location-specific pricing",
        "Unified reporting"
      ]
    }
  ];
  
  const industries = [
    {
      id: "retail",
      name: "Retail",
      description: "Streamline operations for retail stores with fast checkout, inventory tracking, and customer management.",
      image: "/placeholder.svg",
      features: [
        "Barcode scanning & label printing",
        "Customer loyalty programs",
        "Sales promotions management",
        "Employee commission tracking"
      ]
    },
    {
      id: "pharmacy",
      name: "Pharmacy",
      description: "Specialized solutions for pharmacies with medication tracking, prescription management, and regulatory compliance.",
      image: "/placeholder.svg",
      features: [
        "Prescription tracking system",
        "Medication expiration monitoring",
        "Insurance processing",
        "Compliance documentation"
      ]
    },
    {
      id: "supermarket",
      name: "Supermarket",
      description: "Handle high-volume inventory and fast-paced checkout for supermarkets and grocery stores.",
      image: "/placeholder.svg",
      features: [
        "Scale integration",
        "Fresh produce management",
        "Multi-register synchronization",
        "Promotion & discount automation"
      ]
    },
    {
      id: "warehouse",
      name: "Warehouse",
      description: "Advanced inventory management for warehouses with picking, packing, and shipping integration.",
      image: "/placeholder.svg",
      features: [
        "Bin & shelf location tracking",
        "Barcode & RFID integration",
        "Purchase order management",
        "Shipping integration"
      ]
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
                Products & Solutions
              </h1>
              <p className="text-xl text-white/90">
                Comprehensive inventory and point-of-sale solutions designed to streamline your business operations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Product Overview */}
        <section className="bg-white">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Masashi POS System</h2>
                <p className="text-gray-600 mb-6">
                  Our flagship product combines powerful inventory management with an intuitive point-of-sale interface, giving you complete control over your business operations.
                </p>
                <p className="text-gray-600 mb-8">
                  Built with flexibility in mind, Masashi POS adapts to businesses of all sizes and across various industries, from small boutiques to multi-location retail chains.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600">
                    <Link to="/contact">Request Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/case-studies" className="flex items-center">
                      See Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/placeholder.svg" 
                  alt="Masashi POS Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="bg-gray-50" id="features">
          <div className="max-container">
            <SectionHeading 
              title="Key Modules & Features"
              subtitle="Our comprehensive solution includes everything you need to manage your business efficiently."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="p-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Industry-Specific Solutions */}
        <section className="bg-white" id="industries">
          <div className="max-container">
            <SectionHeading 
              title="Industry-Specific Solutions"
              subtitle="Tailored features to address the unique challenges of different industries."
              centered
            />
            
            <div className="space-y-16">
              {industries.map((industry, index) => (
                <div 
                  key={industry.id} 
                  id={industry.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                    <h3 className="text-2xl font-semibold mb-4">{industry.name} Solutions</h3>
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    <ul className="space-y-3 mb-8">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="bg-orange-100 rounded-full p-1 mr-3">
                            <Check className="h-4 w-4 text-orange-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary-800 hover:bg-primary-700">
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                  
                  <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={industry.image} 
                        alt={`${industry.name} Solution`} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction 
          title="Ready to See Masashi POS in Action?"
          description="Schedule a personalized demo to see how our solutions can transform your business operations."
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

export default Products;
