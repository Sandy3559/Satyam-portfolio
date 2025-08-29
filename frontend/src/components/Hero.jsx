import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // This will be a link to the resume PDF in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Satyam_Raj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  // Extracted the image into a reusable component to avoid duplicating code.
  const ProfileImage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-80 h-80 border-2 border-lime-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-96 h-96 border border-olive-dark/40 rounded-full"
        />
      </div>

      {/* Profile Photo Container */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="relative z-10 group"
      >
        {/* Photo Frame */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
          {/* Glow Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-lime-primary/30 via-transparent to-olive-dark/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
          
          {/* Main Photo Container */}
          <div className="relative w-full h-full bg-gradient-to-br from-card-dark to-olive-dark rounded-full p-2 border-2 border-lime-primary/30 group-hover:border-lime-primary transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-card-dark border border-olive-dark/50">
              <img
                src="/photo.JPG"
                alt="Satyam Raj - Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Avatar */}
              <div className="w-full h-full bg-gradient-to-br from-lime-primary/20 to-olive-dark/40 flex items-center justify-center text-6xl font-black text-lime-primary" style={{display: 'none'}}>
                SR
              </div>
            </div>
          </div>

          {/* Floating Accent Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-lime-primary rounded-full opacity-80"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-olive-dark rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1/4 -right-6 w-4 h-4 bg-lime-primary/60 rounded-full"
          />
        </div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-lime-primary text-page-dark rounded-full text-sm font-bold shadow-lg"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block w-2 h-2 bg-page-dark rounded-full mr-2"
          />
          Available for Opportunities
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-page-dark via-page-dark to-olive-dark/20"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-lime-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-olive-dark/30 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-secondary-gray text-lg font-medium uppercase tracking-wide"
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="hero-title text-primary-lime leading-none mt-6"
              >
                SATYAM RAJ
              </motion.h1>
            </motion.div>

            {/* Image for mobile view */}
            <div className="lg:hidden my-8">
              <ProfileImage />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 mt-6"
            >
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-secondary-gray leading-tight"
              >
                MCA Student | Aspiring Software Engineer
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="body-large text-secondary-gray leading-relaxed"
              >
                I'm a passionate fresher currently pursuing MCA at NIT Raipur, with strong skills in 
                full-stack development, AI technologies, and problem-solving. I love building scalable 
                solutions that make a real-world impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="btn-primary flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Projects
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex gap-4 pt-8"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-card-dark hover:bg-lime-primary hover:text-page-dark rounded-full transition-all duration-300 group"
                    title={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
           {/* Right Column - Profile Photo for desktop */}
          <div className="hidden lg:flex">
             <ProfileImage />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-lime-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-lime-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;