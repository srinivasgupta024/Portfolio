import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import sriniImage from "../images/srini.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src={sriniImage}
              alt="Srinivas Gupta"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Hi, I'm Srinivas Gupta, a passionate Data Engineer and Analytics professional. I specialize in building scalable data pipelines, optimizing cloud infrastructures, and transforming raw data into actionable insights.With expertise in Big Data, SQL, Python, and cloud technologies like Azure and AWS, I design efficient data workflows that drive business intelligence and decision-making.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            I am also enthusiastic about mentoring and sharing knowledge, helping aspiring data professionals navigate the evolving world of data engineering and analytics.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">100+</h3>
                <p className="text-gray-600">Training Hours</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">10</h3>
                <p className="text-gray-600">Mentored People</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">6</h3>
                <p className="text-gray-600">Certifications</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
