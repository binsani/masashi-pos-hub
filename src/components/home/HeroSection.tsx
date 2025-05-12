
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-gradient-to-b from-primary-800 to-primary-900 pt-12 md:pt-20 pb-24 md:pb-32 text-white relative">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Smarter Inventory.<br />Smarter Business.
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90">
              Masashi POS helps businesses streamline their inventory and point-of-sale operations.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size={isMobile ? "default" : "lg"} className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg border-2 border-orange-400">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size={isMobile ? "default" : "lg"} className="border-2 border-white text-white hover:bg-white/10 shadow-lg">
                <Link to="/products" className="flex items-center">
                  See Features <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in mt-6 md:mt-0">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <img alt="Masashi POS Dashboard" src="/lovable-uploads/6e5eb04e-1382-49d4-bcc6-4a92197ced8d.png" className="w-full h-auto object-fill" />
            </div>
            <div className="absolute bottom-4 md:bottom-8 -right-4 md:-right-12 w-24 md:w-32 h-24 md:h-32 bg-orange-500 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute top-4 md:top-8 -left-4 md:-left-12 w-28 md:w-40 h-28 md:h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,154.7C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
