import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Department, RoleLevel, getRoleLevelLabel } from '@/data/departments';
import * as Icons from 'lucide-react';
import { X, Clock, Target, Briefcase, Star } from 'lucide-react';

interface RolePanelProps {
  department: Department | null;
  isOpen: boolean;
  onClose: () => void;
}

const RolePanel = ({ department, isOpen, onClose }: RolePanelProps) => {
  if (!department) return null;

  // Get available roles for this department
  const roles: RoleLevel[] = Object.keys(department.roles) as RoleLevel[];
  
  const [activeRole, setActiveRole] = useState<RoleLevel>(roles[0] || 'specialist');

  // Reset activeRole when department changes
  useEffect(() => {
    if (department && roles.length > 0) {
      setActiveRole(roles[0]);
    }
  }, [department?.id, roles.length]);

  // Ensure activeRole is valid for current department, fallback to first role if not
  const validatedActiveRole = roles.includes(activeRole) ? activeRole : roles[0];
  const roleDetails = department.roles[validatedActiveRole];
  const isFrontOffice = department.officeType === 'front';
  
  // Dynamically get the icon component from lucide-react
  const IconComponent = (Icons as any)[department.icon] || Icons.Circle;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-md z-40"
          />

          {/* Modal Container - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full max-w-2xl max-h-[90vh] bg-card glass-panel overflow-hidden flex flex-col rounded-2xl shadow-2xl"
            >
            {/* Header */}
            <div className={`p-4 sm:p-6 border-b border-border bg-gradient-to-r ${isFrontOffice ? 'from-accent/10' : 'from-navy/10'} to-transparent`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className={`p-2 rounded-lg ${isFrontOffice ? 'bg-accent/10' : 'bg-navy/10'} shrink-0`}>
                    <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${isFrontOffice ? 'text-accent' : 'text-navy'}`} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground truncate">
                      {department.shortName}
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {department.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  aria-label="Close modal"
                  className="p-2 rounded-full hover:bg-secondary transition-colors shrink-0 ml-2"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Role Tabs - Wrapping layout for multiple rows */}
              <div className="flex flex-wrap gap-2 pb-1 -mb-1">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`
                      px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-body text-xs sm:text-sm font-medium
                      transition-all duration-300 whitespace-nowrap
                      ${validatedActiveRole === role
                        ? `${isFrontOffice ? 'bg-accent text-accent-foreground' : 'bg-navy text-navy-foreground'}`
                        : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
                      }
                    `}
                  >
                    {getRoleLevelLabel(role, department.id)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={validatedActiveRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Mission */}
                  <section>
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Target className={`w-4 h-4 sm:w-5 sm:h-5 ${isFrontOffice ? 'text-accent' : 'text-navy'}`} />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        The Mission
                      </h3>
                    </div>
                    <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {roleDetails.mission}
                    </p>
                  </section>

                  {/* Responsibilities */}
                  <section>
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Briefcase className={`w-4 h-4 sm:w-5 sm:h-5 ${isFrontOffice ? 'text-accent' : 'text-navy'}`} />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        Key Responsibilities
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {roleDetails.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 ${isFrontOffice ? 'bg-accent' : 'bg-navy'}`} />
                          <span className="font-body text-sm sm:text-base text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Competencies */}
                  <section>
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${isFrontOffice ? 'text-accent' : 'text-navy'}`} />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        Core Competencies
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {roleDetails.competencies.map((comp, idx) => (
                        <span
                          key={idx}
                          className={`
                            px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-body text-xs sm:text-sm
                            ${isFrontOffice
                              ? 'bg-accent/10 text-accent border border-accent/20'
                              : 'bg-navy/10 text-navy border border-navy/20'
                            }
                          `}
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* KPIs */}
                  <section>
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Target className={`w-4 h-4 sm:w-5 sm:h-5 ${isFrontOffice ? 'text-accent' : 'text-navy'}`} />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        KPIs & Success Metrics
                      </h3>
                    </div>
                    <div className="grid gap-2">
                      {roleDetails.kpis.map((kpi, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-secondary/30"
                        >
                          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${isFrontOffice ? 'bg-accent' : 'bg-navy'}`} />
                          <span className="font-body text-xs sm:text-sm text-foreground">{kpi}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Time Commitment */}
                  <section>
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Clock className={`w-4 h-4 sm:w-5 sm:h-5 ${isFrontOffice ? 'text-accent' : 'text-navy'}`} />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        Time Commitment
                      </h3>
                    </div>
                    <div className={`
                      inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg
                      ${isFrontOffice ? 'bg-accent/10 text-accent' : 'bg-navy/10 text-navy'}
                    `}>
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-body text-sm sm:text-base font-medium">{roleDetails.timeCommitment}</span>
                    </div>
                  </section>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="p-4 sm:p-6 border-t border-border bg-card/80 backdrop-blur-xl">
              <button
                onClick={() => department.applicationFormUrl && window.open(department.applicationFormUrl, '_blank')}
                disabled={!department.applicationFormUrl}
                className="w-full py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-base sm:text-lg shadow-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply for this Role
              </button>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RolePanel;
