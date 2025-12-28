import { FC } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  rating,
  image,
  className = '',
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={16}
      className={i < rating ? 'text-soursz-neon fill-soursz-neon' : 'text-white/20'}
    />
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`card p-6 ${className}`}
    >
      <div className="flex space-x-1 mb-3">{stars}</div>
      <p className="text-white/90 mb-6">{quote}</p>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        )}
        {!image && (
          <div className="w-10 h-10 rounded-full bg-soursz-neon/20 flex items-center justify-center text-soursz-neon font-bold mr-3">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-white/50 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;