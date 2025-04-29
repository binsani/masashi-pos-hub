
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import { BarChart, Calendar, Clock, Cloud } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Inventory Tracking",
      description: "Real-time monitoring of stock levels, automated reordering, and inventory forecasting."
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud-Based Access",
      description: "Access your inventory and sales data from anywhere, on any device. No hardware limitations."
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Sales Analytics",
      description: "Comprehensive reports and dashboards to track performance and make data-driven decisions."
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Multi-Store Sync",
      description: "Seamlessly manage inventory across multiple locations with real-time synchronization."
    }
  ];

  return (
    <section className="bg-gray-50 relative z-10">
      <div className="max-container">
        <SectionHeading 
          title="Core Features"
          subtitle="Our point-of-sale system comes with powerful features designed to streamline your business operations and boost productivity."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
