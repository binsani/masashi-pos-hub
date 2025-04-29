
import { CalendarIcon, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  categories: string[];
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  author,
  readTime,
  image,
  categories,
}: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <Link to={`/blog/${id}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="flex gap-2 mb-3">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {category}
            </span>
          ))}
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-orange-500 transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 justify-between">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
