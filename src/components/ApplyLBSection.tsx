import { motion } from 'framer-motion';
import { Rocket, ExternalLink } from 'lucide-react';

const ApplyLBSection = () => {
  const handleApplyClick = () => {
    const rolesSection = document.getElementById('roles-section');
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-6 sm:p-8 shadow-lg"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center flex-shrink-0">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-white mb-1">
                  Ready to Lead?
                </h2>
                <p className="font-body text-sm sm:text-base text-white/80">
                  Apply now for AIESEC in SLIIT Leadership Board 2026/27
                </p>
              </div>
            </div>

            <motion.button
              onClick={handleApplyClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-primary font-body font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Apply for LB
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyLBSection;
