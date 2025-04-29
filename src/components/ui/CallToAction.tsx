
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  return (
    <section className={cn(bgColor, "py-16", className)}>
      <div className="max-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        {description && (
          <p className="text-white/90 max-w-2xl mx-auto mb-8">{description}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            asChild 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
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
