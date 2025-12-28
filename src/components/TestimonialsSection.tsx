import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "Soursz helped me get 50,000 new listeners in just two weeks. The AI targeting is incredibly precise and found listeners who actually stuck around!",
    author: "Jamie Brooks",
    role: "Independent Artist",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "After trying multiple promotion services, Soursz is the only one that delivered real, engaged listeners. My follower count tripled in a month.",
    author: "Mia Rodriguez",
    role: "Singer-Songwriter",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Being a curator with Soursz has been fantastic. I get to discover great new music while generating additional income from my playlists.",
    author: "Alex Johnson",
    role: "Playlist Curator",
    rating: 4,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Our label uses Soursz for all our emerging artists. The algorithmic targeting consistently outperforms traditional marketing channels for ROI.",
    author: "Sarah Williams",
    role: "A&R Manager",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "The data insights alone are worth the price. I've refined my target audience based on Soursz analytics and seen my engagement skyrocket.",
    author: "Marcus Taylor",
    role: "Hip-Hop Producer",
    rating: 4,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "My first campaign with Soursz got my track on 32 playlists and brought in over 20,000 new monthly listeners. I'm a customer for life!",
    author: "Elena Martinez",
    role: "EDM Artist",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const startIndex = currentPage * itemsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);
  
  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2 className="mb-3">What Our Artists Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what artists and curators are saying about Soursz.
          </p>
        </motion.div>
        
        <div className="mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={startIndex + index} {...testimonial} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={goToPreviousPage}
                className="p-2 rounded-full bg-soursz-dark-600 hover:bg-soursz-dark-700 text-white"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === currentPage ? 'bg-soursz-neon' : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial page ${i + 1}`}
                    aria-current={i === currentPage ? 'true' : 'false'}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNextPage}
                className="p-2 rounded-full bg-soursz-dark-600 hover:bg-soursz-dark-700 text-white"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;