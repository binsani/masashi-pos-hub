
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered ? "text-center" : "",
      className
    )}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
