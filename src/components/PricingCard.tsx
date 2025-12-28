import { FC, ReactNode } from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  icon?: ReactNode;
  buttonText?: string;
  className?: string;
}

const PricingCard: FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  popular = false,
  icon,
  buttonText = 'Get Started',
  className = '',
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="bg-soursz-neon text-soursz-dark-800 text-xs font-bold uppercase tracking-wide py-1 px-4 rounded-full">
            Most Popular
          </div>
        </div>
      )}
      
      <div className={`card p-6 h-full ${popular ? 'border-2 border-soursz-neon shadow-neon-sm' : 'border border-white/5'}`}>
        <div className="flex flex-col h-full">
          <div className="mb-6">
            {icon && <div className="text-soursz-neon mb-4">{icon}</div>}
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold">{price}</span>
              {price !== 'Custom' && <span className="text-white/70 ml-1">/campaign</span>}
            </div>
            <p className="text-white/70 text-sm">{description}</p>
          </div>
          
          <div className="space-y-3 mb-8 flex-grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className={`mt-0.5 mr-3 ${feature.included ? 'text-soursz-neon' : 'text-white/30'}`}>
                  <Check size={18} />
                </div>
                <span className={feature.included ? 'text-white/90' : 'text-white/30'}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            <Button 
              variant={popular ? 'primary' : 'outline'} 
              fullWidth
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;