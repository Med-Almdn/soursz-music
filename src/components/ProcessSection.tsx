import { Target, Zap, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ProcessStep from './ProcessStep';

const ProcessSection = () => {
  return (
    <section className="section bg-soursz-dark-800/50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2 className="mb-3">How It Works</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our AI-powered promotion process is designed to maximize your music's reach
            to the right audience, at the right time.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ProcessStep
            number={1}
            title="Select Your Package"
            description="Choose the promotion package that fits your goals and budget. From our $25 trial to our comprehensive Pro option."
            icon={<Zap size={24} />}
            delay={0.1}
            className="card-hover p-6"
          />
          
          <ProcessStep
            number={2}
            title="Target Your Audience"
            description="Our AI analyzes your music and identifies the perfect audience segments based on genre, location, and listening habits."
            icon={<Target size={24} />}
            delay={0.2}
            className="card-hover p-6"
          />
          
          <ProcessStep
            number={3}
            title="Launch & Track Results"
            description="Monitor your campaign's performance in real-time. Track streams, playlist adds, follower growth, and more."
            icon={<BarChart2 size={24} />}
            delay={0.3}
            className="card-hover p-6"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="mb-4">Ready to get started?</h3>
            <p className="text-white/70 mb-6">
              Launch your first campaign today for just $25 and see the Soursz difference.
            </p>
            <a href="/signup" className="btn-primary">
              Try For $25
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;