import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

const StatItem: FC<StatItemProps> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {icon && <div className="text-soursz-neon mb-2">{icon}</div>}
      <span className="text-3xl md:text-4xl font-bold text-white">{value}</span>
      <span className="text-white/70 text-sm mt-1">{label}</span>
    </div>
  );
};

interface StatsCardProps {
  className?: string;
  stats: StatItemProps[];
}

const StatsCard: FC<StatsCardProps> = ({ className = '', stats }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 md:p-8 ${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </motion.div>
  );
};

export default StatsCard;