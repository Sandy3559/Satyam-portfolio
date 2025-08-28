import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'National Institute of Technology (NIT) Raipur',
      duration: '2023 - 2026',
      location: 'Raipur, Chhattisgarh',
      status: 'Currently Pursuing',
      description: 'Comprehensive curriculum covering advanced computer science concepts, software engineering, and emerging technologies.',
      highlights: [
        'Advanced Data Structures & Algorithms',
        'Software Engineering & System Design',
        'Database Management Systems',
        'Operating Systems & Networking',
        'Machine Learning & AI Technologies'
      ]
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Tilka Manjhi Bhagalpur University',
      duration: '2018 - 2022',
      location: 'Bhagalpur, Bihar',
      status: 'Completed',
      description: 'Foundation in computer science with focus on programming, web development, and database management.',
      highlights: [
        'Core Programming Languages (C, C++, Java)',
        'Web Development Technologies',
        'Database Design & Management',
        'Software Development Life Cycle',
        'Object-Oriented Programming Concepts'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'GGSP School',
      duration: '2016 - 2018',
      location: 'Bokaro, Jharkhand',
      status: 'Completed',
      description: 'Science stream with mathematics, focusing on analytical and problem-solving skills.',
      highlights: [
        'Mathematics & Physics',
        'Logical Reasoning',
        'Analytical Problem Solving',
        'Academic Excellence'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-card-dark/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary-lime mb-4">
            Education
          </h2>
          <p className="section-subtitle text-secondary-gray max-w-2xl mx-auto">
            My academic journey has provided a strong foundation in computer science 
            and shaped my analytical thinking and problem-solving abilities.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-olive-dark transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-4 md:left-1/2 w-4 h-4 bg-lime-primary rounded-full border-4 border-page-dark transform md:-translate-x-1/2 z-10 ${
                    index === 0 ? 'animate-pulse' : ''
                  }`}
                />

                {/* Content Card */}
                <div className={`w-full ${index % 2 === 0 ? 'md:pr-8 md:ml-8' : 'md:pl-8 md:mr-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`portfolio-card ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {/* Status Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        item.status === 'Currently Pursuing'
                          ? 'bg-lime-primary text-page-dark'
                          : 'bg-olive-dark text-lime-primary'
                      }`}
                    >
                      {item.status === 'Currently Pursuing' ? (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2 h-2 bg-page-dark rounded-full"
                        />
                      ) : (
                        <Award size={12} />
                      )}
                      {item.status}
                    </motion.div>

                    {/* Degree & Institution */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-primary-lime">
                        {item.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-secondary-gray">
                        {item.institution}
                      </h4>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-secondary-gray">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-lime-primary" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-lime-primary" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="body-medium text-secondary-gray mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-primary-lime flex items-center gap-2">
                        <GraduationCap size={18} />
                        Key Learning Areas:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <motion.span
                            key={highlightIndex}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: 'var(--brand-primary)',
                              color: 'var(--text-inverse)'
                            }}
                            className="skill-tag text-xs"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievements Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="portfolio-card max-w-3xl mx-auto bg-gradient-to-r from-lime-primary/10 to-olive-dark/30 border-lime-primary/30"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <GraduationCap className="text-lime-primary" size={32} />
              </motion.div>
              <h4 className="text-xl font-bold text-primary-lime">
                Academic Excellence & Growth
              </h4>
            </div>
            <p className="body-medium text-secondary-gray">
              Throughout my academic journey, I've maintained a strong focus on practical application 
              of theoretical concepts. My education at prestigious institutions has not only provided 
              me with technical knowledge but also shaped my analytical thinking and research capabilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;