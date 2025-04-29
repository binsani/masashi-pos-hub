
import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ icon, title, description, className, style }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md card-hover", 
        className
      )}
      style={style}
    >
      <div className="mb-4 text-orange-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
