import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white/80 dark:bg-navy/90 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            About <span className="text-gold">Ahmed</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
              <strong className="text-gold">CEO & Founder</strong> of White Dove
              Electrical and Engineering Company, Sierra Leone. A serial
              entrepreneur with over 12 years of leadership experience,{" "}
              <strong className="text-gold">General Manager</strong> of Grand
              Leone Casino.
            </p>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
              Graduate of <strong className="text-gold">IPAM</strong> (BSc
              Applied Accounting) and{" "}
              <strong className="text-gold">
                Milton Margai Technical University
              </strong>{" "}
              (Higher Diploma in Electrical Engineering). Known for integrity,
              discipline, and outstanding work ethics.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/50 dark:bg-white/5 p-4 rounded-xl">
                <div className="text-gold font-semibold">Mission</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Empower through engineering & business
                </div>
              </div>
              <div className="bg-white/50 dark:bg-white/5 p-4 rounded-xl">
                <div className="text-gold font-semibold">Vision</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Global impact, local excellence
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=center"
                alt="Ahmed Thronka professional"
                className="relative rounded-2xl shadow-premium max-h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
