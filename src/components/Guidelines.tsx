import { motion } from 'framer-motion';
import { FileText, CheckCircle, Calendar, Users } from 'lucide-react';

const Guidelines = () => {
  const guidelines = [
    {
      icon: FileText,
      title: 'Prepare Your Application',
      description: 'Review the requirements and complete the application form accurately.'
    },
    {
      icon: CheckCircle,
      title: 'Meet the Criteria',
      description: 'Ensure you meet all eligibility criteria for your desired leadership position.'
    },
    {
      icon: Calendar,
      title: 'Submit on Time',
      description: 'Applications must be submitted before the deadline. Late submissions will not be considered.'
    },
    {
      icon: Users,
      title: 'Attend Interviews',
      description: 'Shortlisted candidates will be contacted for interviews. Be prepared to showcase your leadership potential.'
    }
  ];

  return (
    <section id="guidelines-section" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
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
            Application Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
          >
            Guidelines
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Follow these steps to ensure a smooth application process
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((guideline, index) => {
            const Icon = guideline.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-medium text-foreground mb-2">
                        {guideline.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 p-8 bg-accent/5 border border-accent/20 rounded-2xl"
        >
          <h3 className="font-display text-xl font-medium text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-accent" />
            Important Notes
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>All applications will be reviewed thoroughly by your LCVPs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Only shortlisted candidates will be contacted for the interview process</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Ensure all information provided is accurate and truthful</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>For any queries, please reach out through our contact section</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Guidelines;
