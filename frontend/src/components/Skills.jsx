import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS']
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'Firebase', 'Git', 'GitHub']
    },
    {
      title: 'Cloud & Platforms',
      skills: ['Vercel', 'AWS', 'Linux', 'Windows', 'Convex']
    },
    {
      title: 'AI Technologies',
      skills: ['Google Generative AI', 'Google Gemini API', 'OpenAI', 'REST APIs']
    },
    {
      title: 'Authentication & Security',
      skills: ['Firebase Auth', 'Clerk', 'JWT', 'Event-Driven Architecture']
    }
  ];

  const softSkills = [
    'Problem-Solving',
    'Project Execution', 
    'Communication',
    'Leadership',
    'Team Collaboration',
    'Analytical Thinking'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-card-dark/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary-lime mb-4">
            Technical Skills
          </h2>
          <p className="section-subtitle text-secondary-gray max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            innovative solutions and solve complex problems.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="portfolio-card"
            >
              <h3 className="text-xl font-bold text-primary-lime mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'var(--brand-primary)',
                      color: 'var(--text-inverse)'
                    }}
                    transition={{ duration: 0.2 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary-lime mb-6">
            Soft Skills & Competencies
          </h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--text-inverse)'
                }}
                className="px-6 py-3 bg-card-dark text-primary-lime rounded-full border-2 border-olive-dark hover:border-lime-primary transition-all cursor-pointer font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Problem Solving Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="portfolio-card max-w-2xl mx-auto bg-gradient-to-r from-olive-dark/50 to-card-dark border-lime-primary/30"
          >
            <h4 className="text-xl font-bold text-primary-lime mb-2">
              🏆 Problem Solving Achievement
            </h4>
            <p className="body-medium text-secondary-gray mb-2">
              <strong className="text-primary-lime">450+ DSA Problems Solved</strong> across 
              LeetCode and GeeksforGeeks
            </p>
            <p className="body-small text-secondary-gray">
              Maintained consistent practice with a <strong className="text-lime-primary">LeetCode rating of 1800+</strong>, 
              demonstrating strong algorithmic thinking and optimization skills.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;