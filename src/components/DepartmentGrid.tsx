import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Department, OfficeType, frontOfficeDepartments, backOfficeDepartments } from '@/data/departments';
import OfficeToggle from './OfficeToggle';
import DepartmentCard from './DepartmentCard';
import RolePanel from './RolePanel';

const DepartmentGrid = () => {
  const [activeOffice, setActiveOffice] = useState<OfficeType>('front');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const departments = activeOffice === 'front' ? frontOfficeDepartments : backOfficeDepartments;

  const handleCardClick = (department: Department) => {
    setSelectedDepartment(department);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">{/* Section header */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Explore Roles
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Discover your path to leadership. Choose between Front Office roles that drive external impact
            or Back Office roles that power our operations.
          </p>
        </motion.div>

        {/* Toggle */}
        <OfficeToggle activeOffice={activeOffice} onToggle={setActiveOffice} />

        {/* Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {departments.map((department, index) => (
              <DepartmentCard
                key={department.id}
                department={department}
                onClick={() => handleCardClick(department)}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

          {/* Modal */}
          <RolePanel
            department={selectedDepartment}
            isOpen={isPanelOpen}
            onClose={handleClosePanel}
          />
        </div>
      </section>
    </>
  );
};

export default DepartmentGrid;
