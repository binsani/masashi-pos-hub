
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  image, 
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-8 shadow-md", 
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        
        <div className="flex items-center">
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-600">{position}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
