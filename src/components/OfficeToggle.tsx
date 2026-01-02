import { motion } from 'framer-motion';
import { OfficeType } from '@/data/departments';

interface OfficeToggleProps {
  activeOffice: OfficeType;
  onToggle: (office: OfficeType) => void;
}

const OfficeToggle = ({ activeOffice, onToggle }: OfficeToggleProps) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative inline-flex p-1.5 bg-secondary/50 backdrop-blur-sm rounded-full border border-border/50">
        {/* Sliding background */}
        <motion.div
          layoutId="activeOffice"
          className={`absolute top-1.5 bottom-1.5 rounded-full transition-colors duration-300 ${
            activeOffice === 'front' ? 'bg-accent' : 'bg-navy'
          }`}
          style={{
            width: 'calc(50% - 6px)',
            left: activeOffice === 'front' ? '6px' : 'calc(50% + 0px)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Front Office button */}
        <button
          onClick={() => onToggle('front')}
          className={`relative z-10 px-6 md:px-10 py-3 rounded-full font-body text-sm md:text-base font-medium transition-colors duration-300 ${
            activeOffice === 'front'
              ? 'text-accent-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Front Office
        </button>

        {/* Back Office button */}
        <button
          onClick={() => onToggle('back')}
          className={`relative z-10 px-6 md:px-10 py-3 rounded-full font-body text-sm md:text-base font-medium transition-colors duration-300 ${
            activeOffice === 'back'
              ? 'text-navy-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Back Office
        </button>
      </div>
    </div>
  );
};

export default OfficeToggle;
