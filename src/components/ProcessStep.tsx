import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
  className?: string;
}

const ProcessStep: FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${className}`}
    >
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-soursz-neon text-soursz-dark font-bold rounded-full mr-4">
            {number}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        {icon && (
          <div className="absolute -top-1 right-0 text-soursz-neon">
            {icon}
          </div>
        )}
        
        <p className="text-white/70 pl-14">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;