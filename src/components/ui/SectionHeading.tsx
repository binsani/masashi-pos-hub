
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = false, className }: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-12", 
        centered ? "text-center" : "", 
        className
      )}
    >
      <h2 className="font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
