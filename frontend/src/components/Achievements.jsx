import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Target, Users, Star, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '450+ DSA Problems Solved',
      description: 'Successfully solved over 450 Data Structures and Algorithms problems across multiple platforms including LeetCode and GeeksforGeeks.',
      icon: Code,
      metric: '450+',
      category: 'Programming',
      color: 'from-lime-primary/20 to-olive-dark/40'
    },
    {
      title: 'LeetCode Rating 1800+',
      description: 'Achieved and maintained a competitive rating above 1800 on LeetCode, demonstrating consistent problem-solving excellence.',
      icon: Target,
      metric: '1800+',
      category: 'Competitive Programming',
      color: 'from-olive-dark/30 to-lime-primary/20'
    },
    {
      title: 'Cultural Incharge Leadership',
      description: 'Served as Cultural Incharge during school, leading event organization and team coordination activities.',
      icon: Users,
      metric: 'Leadership',
      category: 'Leadership',
      color: 'from-card-dark/50 to-olive-dark/30'
    }
  ];

  const stats = [
    { label: 'Problems Solved', value: '450+', icon: Code },
    { label: 'LeetCode Rating', value: '1800+', icon: Target },
    { label: 'Projects Built', value: '3+', icon: Star },
    { label: 'Tech Stack', value: '15+', icon: Zap }
  ];

  return (
    <section id="achievements" className="section-padding bg-page-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary-lime mb-4">
            Achievements
          </h2>
          <p className="section-subtitle text-secondary-gray max-w-2xl mx-auto">
            Milestones that reflect my dedication to continuous learning, 
            problem-solving excellence, and leadership growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-card-dark rounded-lg border border-olive-dark hover:border-lime-primary transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 mx-auto mb-3 bg-lime-primary/20 rounded-full flex items-center justify-center group-hover:bg-lime-primary group-hover:text-page-dark transition-colors"
              >
                <stat.icon size={24} className="text-lime-primary group-hover:text-page-dark" />
              </motion.div>
              <div className="text-2xl font-black text-primary-lime mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-gray font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Achievements */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="portfolio-card overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${achievement.color} opacity-50 rounded-bl-full`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    {/* Icon Section */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-16 h-16 bg-lime-primary/20 rounded-full flex items-center justify-center border-2 border-lime-primary/30 group-hover:border-lime-primary group-hover:bg-lime-primary transition-all">
                        <achievement.icon 
                          size={28} 
                          className="text-lime-primary group-hover:text-page-dark transition-colors" 
                        />
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-primary-lime group-hover:text-lime-hover transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="px-3 py-1 bg-olive-dark text-lime-primary text-xs font-medium rounded-full uppercase tracking-wide">
                          {achievement.category}
                        </span>
                      </div>
                      
                      <p className="body-medium text-secondary-gray leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-4 py-2 bg-lime-primary/10 rounded-full border border-lime-primary/30"
                        >
                          <Trophy size={16} className="text-lime-primary" />
                          <span className="text-sm font-semibold text-lime-primary">
                            {achievement.metric}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Problem Solving Journey Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="portfolio-card text-center bg-gradient-to-r from-lime-primary/5 via-card-dark to-olive-dark/20 border-lime-primary/30"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Trophy className="text-lime-primary" size={32} />
              </motion.div>
              <h4 className="text-xl font-bold text-primary-lime">
                Consistent Growth & Excellence
              </h4>
            </div>
            
            <p className="body-medium text-secondary-gray max-w-3xl mx-auto leading-relaxed">
              My achievements reflect a commitment to continuous improvement and excellence. 
              From solving complex algorithmic challenges to leading cultural initiatives, 
              each milestone represents growth in both technical and soft skills that contribute 
              to my overall development as a well-rounded professional.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Problem Solving', 'Consistent Practice', 'Leadership', 'Technical Excellence'].map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="skill-tag"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;