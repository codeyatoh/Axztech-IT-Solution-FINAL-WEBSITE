import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  User,
  Mail,
  Phone,
  Building,
  Send,
  MapPin,
  Clock,
  CheckSquare,
  Square,
} from 'lucide-react';
import styles from './contact.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: '',
    receiveUpdates: false,
  });
  const handleChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const toggleReceiveUpdates = () => {
    setFormData((prev) => ({
      ...prev,
      receiveUpdates: !prev.receiveUpdates,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Message sent successfully!');
  };
  return (
    <motion.div className={styles.container} style={{ paddingTop: '1.5rem' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: 'tween' }}>
      <motion.div className={styles.formCard} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.1, type: 'tween' }}>
        <motion.div className={styles.sidebar} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.2, type: 'tween' }}>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <Phone size={18} />
              </div>
              <div className={styles.infoText}>
                <h3>Phone</h3>
                <p>0935 391 9496</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <Mail size={18} />
              </div>
              <div className={styles.infoText}>
                <h3>Email</h3>
                <p>rioaldi.dompol@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <MapPin size={18} />
              </div>
              <div className={styles.infoText}>
                <h3>Address</h3>
                <p>
                  Zone 5, Dicklum,<br />
                  Manolo Fortich, Philippines
                </p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <Clock size={18} />
              </div>
              <div className={styles.infoText}>
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9am - 6pm<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.formContent} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.2, type: 'tween' }}>
          <h1 className={styles.title}>Send Us a Message</h1>
          <p className={styles.subtitle}>
          Have a question or want to learn more about our services? Fill out the form below and we'll get back 
          to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Eg. 0935 391 9496"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your company"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Sales">Sales</option>
                <option value="Partnership">Partnership</option>
                <option value="Careers">Careers</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <div
              className={styles.checkboxContainer}
              onClick={toggleReceiveUpdates}
            >
              <div className={styles.checkboxIcon}>
                {formData.receiveUpdates ? (
                  <CheckSquare size={20} />
                ) : (
                  <Square size={20} />
                )}
              </div>
              <span>I'd like to receive updates from Axztech IT Solution</span>
            </div>
            <p className={styles.privacyText}>
              Please read our{' '}
              <a href="#" className={styles.privacyLink}>
                Privacy Policy
              </a>{' '}
              to see how we use your personal information.
            </p>
            <button type="submit" className={styles.button}>
              <Send className={styles.buttonIcon} size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;