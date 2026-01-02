import { motion } from 'framer-motion';
import { Department } from '@/data/departments';
import * as Icons from 'lucide-react';

interface DepartmentCardProps {
  department: Department;
  onClick: () => void;
  index: number;
}

const DepartmentCard = ({ department, onClick, index }: DepartmentCardProps) => {
  const isFrontOffice = department.officeType === 'front';
  
  // Dynamically get the icon component from lucide-react
  const IconComponent = (Icons as any)[department.icon] || Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`
        group relative cursor-pointer
        glass-card rounded-2xl p-6 md:p-8
        transition-all duration-300 w-full max-w-sm
        ${isFrontOffice ? 'fo-card hover:shadow-glow-fo' : 'bo-card hover:shadow-glow-bo'}
      `}
    >
      {/* Icon */}
      <div className={`mb-4 ${isFrontOffice ? 'text-accent' : 'text-navy'}`}>
        <IconComponent className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1.5} />
      </div>

      {/* Department name */}
      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
        {department.shortName}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        {department.description}
      </p>

      {/* Hover indicator */}
      <div className={`
        absolute bottom-4 right-4 
        w-8 h-8 rounded-full 
        flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        ${isFrontOffice ? 'bg-accent/20 text-accent' : 'bg-navy/20 text-navy'}
      `}>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default DepartmentCard;
