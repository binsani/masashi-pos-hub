
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import { BarChart, FileSpreadsheet, Filter, ShoppingCart, BellRing, Barcode, Mail, Moon, Smartphone, ShieldCheck, FileText, Receipt, UserCog, Target } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    // First row
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Adjustments",
      description: "Flexible inventory adjustment tools to manage stock levels accurately."
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10" />,
      title: "RTL Support",
      description: "Full right-to-left language support for global businesses."
    },
    {
      icon: <Filter className="h-10 w-10" />,
      title: "Data Filter",
      description: "Advanced filtering capabilities for precise data management."
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Reports",
      description: "Comprehensive reporting tools to track all aspects of your business."
    },
    // Second row
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "Inventory",
      description: "Real-time inventory tracking with automated stock alerts."
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Charts",
      description: "Visual analytics to help make data-driven business decisions."
    },
    {
      icon: <BellRing className="h-10 w-10" />,
      title: "Notifications",
      description: "Real-time alerts for critical business events and updates."
    },
    {
      icon: <Barcode className="h-10 w-10" />,
      title: "Barcode",
      description: "Integrated barcode scanning for fast inventory management."
    },
    // Third row
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Mail Report",
      description: "Automated report delivery to your inbox on your schedule."
    },
    {
      icon: <Moon className="h-10 w-10" />,
      title: "Dark Mode",
      description: "Eye-friendly interface option for different lighting conditions."
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Responsive",
      description: "Access your system from any device with a fully responsive design."
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Permissions",
      description: "Granular access controls to secure your business data."
    },
    // Fourth row
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Note App",
      description: "Integrated note-taking for tracking important information."
    },
    {
      icon: <Receipt className="h-10 w-10" />,
      title: "Expenses",
      description: "Track and manage all business expenses in one place."
    },
    {
      icon: <UserCog className="h-10 w-10" />,
      title: "Secured",
      description: "Enterprise-level security to protect your sensitive data."
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Easy POS",
      description: "Intuitive point-of-sale interface for quick transactions."
    },
  ];

  return (
    <section className="bg-gray-50 relative z-10 py-16">
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
