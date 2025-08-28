import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: 'https://github.com/Sandy3559',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/satyam-raj-410a392aa/',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'mailto:955rajsatyam@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-page-dark border-t border-olive-dark">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black text-primary-lime cursor-pointer"
              onClick={scrollToTop}
            >
              SATYAM RAJ
            </motion.h3>
            <p className="body-medium text-secondary-gray leading-relaxed">
              MCA student at NIT Raipur passionate about full-stack development, 
              AI technologies, and creating innovative solutions that make a real-world impact.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-card-dark hover:bg-lime-primary hover:text-page-dark rounded-full transition-all group"
                  title={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-primary-lime mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  whileHover={{ x: 5, color: 'var(--brand-primary)' }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-1 text-secondary-gray hover:text-lime-primary transition-colors text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-primary-lime mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:955rajsatyam@gmail.com"
                whileHover={{ x: 5 }}
                className="block text-secondary-gray hover:text-lime-primary transition-colors"
              >
                955rajsatyam@gmail.com
              </motion.a>
              <p className="text-secondary-gray text-sm">
                NIT Raipur, Chhattisgarh
              </p>
              <motion.a
                href="/resume.pdf"
                download="Satyam_Raj_Resume.pdf"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block btn-secondary text-sm mt-2"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-olive-dark py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-secondary-gray text-sm">
            <span>© 2024 Satyam Raj. Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-lime-primary fill-current" />
            </motion.div>
            <span>and React</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs text-secondary-gray">
              Designed & Developed by Satyam Raj
            </p>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-lime-primary text-page-dark rounded-full hover:bg-lime-hover transition-colors"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;