import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute top-40 right-1/4 w-48 h-48 bg-navy rounded-full blur-3xl"
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center mx-auto w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-accent font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          AIESEC in SLIIT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="my-6 flex justify-center"
        >
          <img 
            src="/EBTheme2.0.png" 
            alt="EB Theme" 
            className="w-full max-w-2xl h-auto object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 px-4"
        >
          Leadership Board Applications 2026/27
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span className="w-12 h-px bg-border" />
          <span className="font-body tracking-wide">Scroll to explore positions</span>
          <span className="w-12 h-px bg-border" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
