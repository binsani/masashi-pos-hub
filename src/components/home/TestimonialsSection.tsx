
import { useState, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const testimonials = [
    {
      quote: "Masashi POS has revolutionized how we manage inventory. Stock discrepancies are now a thing of the past, and our staff loves the intuitive interface.",
      author: "Sarah Johnson",
      position: "Operations Manager",
      company: "Urban Retail",
      image: "/placeholder.svg"
    },
    {
      quote: "The multi-store sync feature has been a game-changer for our pharmacy chain. We can now easily transfer products between locations and maintain accurate inventory.",
      author: "Michael Chen",
      position: "Owner",
      company: "Wellness Pharmacy",
      image: "/placeholder.svg"
    },
    {
      quote: "Implementation was seamless, and the support team has been exceptional. Our checkout process is now twice as fast, and reporting is more insightful than ever.",
      author: "Emma Rodriguez",
      position: "General Manager",
      company: "Fresh Market",
      image: "/placeholder.svg"
    },
    {
      quote: "The analytics tools have helped us identify our best-selling products and optimize our purchasing decisions, resulting in a 20% increase in profit margins.",
      author: "David Thompson",
      position: "CEO",
      company: "Thompson Electronics",
      image: "/placeholder.svg"
    }
  ];
  
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(scrollContainer.current.scrollLeft - 300);
    }
  };
  
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollContainer.current.scrollLeft + 300);
    }
  };

  return (
    <section className="bg-white">
      <div className="max-container">
        <SectionHeading 
          title="What Our Clients Say"
          subtitle="Hear from businesses that have transformed their operations with Masashi POS"
          centered
        />
        
        <div className="relative">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-[300px] md:min-w-[400px] flex-shrink-0"
              >
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              onClick={scrollLeft} 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              onClick={scrollRight} 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
            <div key={index} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-gray-200 h-12 w-32 rounded flex items-center justify-center">
                <span className="font-bold text-gray-500">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
