import { motion } from 'framer-motion';
import { Mail, Phone, User } from 'lucide-react';

const ContactUs = () => {
  return (
    <section id="contact-section" className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-accent font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            For inquiries, connect with our point of contact
          </motion.p>
        </motion.div>

        {/* VP TM Contact Card - Centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-xl border-2 border-accent/30 rounded-3xl p-10 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 max-w-md w-full"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />

            {/* Photo Circle */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center border-4 border-accent/20 shadow-lg">
                <User className="w-12 h-12 text-accent" />
              </div>
            </div>

            {/* Name and Positions */}
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Dinadi Jayathilake
              </h3>
              <p className="font-body text-base text-accent font-semibold uppercase tracking-wider mb-1">
                Vice President
              </p>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">
                Talent Management
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="tel:0760006189"
                className="flex items-center gap-4 text-base text-muted-foreground hover:text-accent transition-all duration-300 group bg-secondary/30 rounded-xl p-4 hover:bg-accent/10"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">0760006189</span>
              </a>
              <a
                href="mailto:dinadijayathialke@aiesec.net"
                className="flex items-center gap-4 text-base text-muted-foreground hover:text-accent transition-all duration-300 group bg-secondary/30 rounded-xl p-4 hover:bg-accent/10"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium truncate">dinadijayathialke@aiesec.net</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
