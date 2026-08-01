import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// Adjust this path if your data folder sits directly inside src/ (e.g., ../data/ventures)
import { ventures } from "../data/ventures";

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 px-6 bg-gray-50 dark:bg-navy/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            My <span className="text-gold">Ventures</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Building businesses that create value and opportunity
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {ventures &&
            ventures.map((venture, index) => (
              <motion.div
                key={venture.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-white dark:bg-navy/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={venture.image}
                    alt={venture.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">
                    {venture.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {venture.description}
                  </p>
                  <a
                    href={venture.link || "#"}
                    className="inline-flex items-center mt-4 text-gold font-semibold hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
