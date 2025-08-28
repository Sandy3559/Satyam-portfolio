import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '955rajsatyam@gmail.com',
      href: 'mailto:955rajsatyam@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Sandy3559',
      href: 'https://github.com/Sandy3559'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/satyam-raj-410a392aa/'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'NIT Raipur, Chhattisgarh',
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-card-dark/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary-lime mb-4">
            Get In Touch
          </h2>
          <p className="section-subtitle text-secondary-gray max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-lime mb-6">
                Let's Connect
              </h3>
              <p className="body-large text-secondary-gray mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                and potential collaborations. Whether you're looking for a fresh 
                perspective on a technical challenge or want to explore new ideas, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-4 p-4 bg-card-dark rounded-lg border border-olive-dark hover:border-lime-primary transition-all group-hover:bg-lime-primary/5"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-12 h-12 bg-lime-primary/20 rounded-full flex items-center justify-center group-hover:bg-lime-primary group-hover:text-page-dark transition-colors"
                      >
                        <info.icon size={20} className="text-lime-primary group-hover:text-page-dark" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-secondary-gray font-medium">
                          {info.label}
                        </div>
                        <div className="text-primary-lime font-semibold group-hover:text-lime-hover">
                          {info.value}
                        </div>
                      </div>
                      {info.href.startsWith('http') && (
                        <ExternalLink size={16} className="text-secondary-gray group-hover:text-lime-primary ml-auto" />
                      )}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-card-dark rounded-lg border border-olive-dark">
                      <div className="flex-shrink-0 w-12 h-12 bg-lime-primary/20 rounded-full flex items-center justify-center">
                        <info.icon size={20} className="text-lime-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary-gray font-medium">
                          {info.label}
                        </div>
                        <div className="text-primary-lime font-semibold">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <h4 className="text-lg font-bold text-primary-lime mb-4">
                Quick Actions
              </h4>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="/resume.pdf"
                  download="Satyam_Raj_Resume.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-sm"
                >
                  Download Resume
                </motion.a>
                <motion.a
                  href="https://github.com/Sandy3559"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-sm"
                >
                  View GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="portfolio-card"
            >
              <h3 className="text-2xl font-bold text-primary-lime mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-primary-lime mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-primary-lime mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-lime mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-primary-lime mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input w-full resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;