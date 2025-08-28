import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Strong foundations in modern web technologies including React, Next.js, Node.js, and database management.'
    },
    {
      icon: Brain,
      title: 'AI & Problem Solving',
      description: 'Passionate about integrating AI technologies and solving complex problems with innovative solutions.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on building scalable applications that make a real-world impact and deliver user value.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experience in leadership roles and collaborative development with strong communication skills.'
    }
  ];

  const stats = [
    { number: '450+', label: 'DSA Problems Solved' },
    { number: '1800+', label: 'LeetCode Rating' },
    { number: '3+', label: 'Major Projects' },
    { number: '2023', label: 'Started MCA Journey' }
  ];

  return (
    <section id="about" className="section-padding bg-page-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2 
              className="section-title text-primary-lime"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="body-large text-secondary-gray">
                I'm a passionate MCA student at NIT Raipur with a strong foundation in computer science 
                fundamentals including DSA, OOPS, DBMS, OS, and Networking. My journey in technology 
                is driven by curiosity and the desire to build solutions that make a difference.
              </p>
              
              <p className="body-medium text-secondary-gray">
                With hands-on experience in full-stack development and AI technologies, I focus on 
                creating scalable, user-centric applications. I've successfully built and deployed 
                multiple projects that solve real-world problems, from AI-powered career development 
                platforms to modern note-taking systems.
              </p>
              
              <p className="body-medium text-secondary-gray">
                My approach combines technical expertise with creative problem-solving, always 
                aiming to deliver high-quality solutions that exceed expectations.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-card-dark rounded-lg border border-olive-dark hover:border-lime-primary transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-black text-primary-lime">
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary-gray font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="portfolio-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 p-3 bg-lime-primary text-page-dark rounded-full group-hover:bg-olive-dark group-hover:text-lime-primary transition-colors"
                  >
                    <highlight.icon size={24} />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary-lime group-hover:text-lime-hover transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="body-medium text-secondary-gray">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;