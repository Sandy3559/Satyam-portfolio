import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Brain, FileText, Ticket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ElevateAI',
      subtitle: 'AI-Powered Career Development Platform',
      description: 'A comprehensive platform that revolutionizes career development with AI-powered resume and cover letter builders, mock interview simulations, and industry insights module.',
      features: [
        'AI-powered resume builder with smart suggestions',
        'Interactive mock interview simulation',
        'Industry insights and career guidance',
        'Firebase authentication and secure user management'
      ],
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'ShadcnUI', 'Firebase'],
      icon: Brain,
      github: 'https://github.com/Sandy3559/Elevate-ai',
      live: 'https://elevate-ai-rho.vercel.app/',
      gradient: 'from-lime-primary/20 to-olive-dark/40'
    },
    {
      title: 'ClariNotes',
      subtitle: 'Modern Note-Taking Platform',
      description: 'A sleek and intelligent note-taking application with smart organization, real-time sync, and optimized performance for seamless productivity.',
      features: [
        'Smart note organization with tagging system',
        'Real-time synchronization across devices',
        'Convex backend for optimal performance',
        'Secure authentication and data protection'
      ],
      tech: ['Next.js', 'Convex', 'Tailwind CSS', 'Authentication'],
      icon: FileText,
      github: 'https://github.com/Sandy3559/ClariNotes',
      live: 'https://clari-notes.vercel.app/',
      gradient: 'from-olive-dark/30 to-lime-primary/20'
    },
    {
      title: 'Tixtra',
      subtitle: 'AI-Powered Ticket Management System',
      description: 'An intelligent ticket management system featuring AI-powered categorization, event-driven workflows, and comprehensive analytics dashboards.',
      features: [
        'AI-powered ticket categorization and routing',
        'Event-driven architecture for scalability',
        'Role-based authentication and permissions',
        'Advanced analytics and reporting dashboards'
      ],
      tech: ['React 19', 'Tailwind CSS', 'DaisyUI', 'MongoDB', 'Express.js'],
      icon: Ticket,
      github: 'https://github.com/Sandy3559/Tixtra',
      live: null,
      gradient: 'from-card-dark/50 to-olive-dark/30'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-page-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary-lime mb-4">
            Featured Projects
          </h2>
          <p className="section-subtitle text-secondary-gray max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through 
            real-world applications that make a meaningful impact.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="project-card">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Image/Icon Section */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`project-card-image bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-4 right-4"
                    >
                      <Sparkles className="text-lime-primary opacity-60" size={24} />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 bg-lime-primary/20 rounded-full flex items-center justify-center border-2 border-lime-primary/30"
                    >
                      <project.icon size={40} className="text-primary-lime" />
                    </motion.div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-secondary-gray opacity-75">
                        Project {index + 1} of {projects.length}
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Content Section */}
                  <div className="project-card-content space-y-6">
                    <div>
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-2xl md:text-3xl font-black text-primary-lime mb-2 group-hover:text-lime-hover transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-lg text-secondary-gray font-medium mb-4">
                        {project.subtitle}
                      </p>
                      <p className="body-medium text-secondary-gray leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-bold text-primary-lime mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start gap-2 text-secondary-gray"
                          >
                            <span className="text-lime-primary mt-1 flex-shrink-0">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-bold text-primary-lime mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="skill-tag text-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <Github size={18} />
                        View Code
                      </motion.a>
                      
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary flex items-center gap-2"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="body-large text-secondary-gray mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.a
            href="https://github.com/Sandy3559"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;