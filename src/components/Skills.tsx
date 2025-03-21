import { Code, Database, Globe, Palette, Server, Terminal ,Cloud, Wrench,BarChart3} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'SQL', 'R', 'pyspark', 'C Langauge'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MYSQL', 'Microsoft SQL'],
  },
  {
    category: 'Data Visualization',
    icon: BarChart3,
    skills: ['Power BI', 'Tableau', 'Looker Studio'],
  },
  {
    category: 'Big Data Technologies',
    icon: Server,
    skills: ['HDFS', 'Hadoop MapReduce','Spark', 'Sqoop', 'Hive', 'Impala', 'Flink', 'pig'],
  },
  {
    category: 'Cloud Techologies',
    icon: Cloud,
    skills: ['Azure Data Factory', 'Databricks', 'Synapse Analytics', 'ADLS', 'Stream Analytics','Redshift','Glue','Athena','EC2','S3','Lambda'],
  },
  
  {
    category: 'Tools / Software',
    icon: Wrench,
    skills: ['Git', 'Mcrosoft Excel', 'VS Code', 'Jupyter'],
  },
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-indigo-600" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}