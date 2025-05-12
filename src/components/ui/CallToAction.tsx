
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface CallToActionProps {
  title: string;
  description?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  bgColor?: string;
}

const CallToAction = ({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
  className,
  bgColor = "bg-primary-800" 
}: CallToActionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className={cn(bgColor, "py-12 md:py-16 relative", className)}>
      <div className="max-container text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">{title}</h2>
        {description && (
          <p className="text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">{description}</p>
        )}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <Button 
            asChild 
            size={isMobile ? "default" : "lg"}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 shadow-md border-2 border-orange-400"
          >
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button 
              asChild 
              variant="outline" 
              size={isMobile ? "default" : "lg"}
              className="border-3 border-white text-white hover:bg-white/10 shadow-md"
            >
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
