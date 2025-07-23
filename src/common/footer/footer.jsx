import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin 
} from 'react-icons/fa';
import styles from './Footer.module.css';
import logoImg from '../../assets/images/axztech-logo.png';
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.contentContainer}>
          {/* Top section with logo and columns */}
          <div className={styles.topSection}>
            {/* Company info */}
            <div className={styles.companyInfo}>
              <div className={styles.logoContainer}>
                <div className={styles.logo}>
                  <img src={logoImg} alt="Axztech IT Solutions" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 6 }} />
                </div>
                <h2 className={styles.companyName} style={{ whiteSpace: 'nowrap', textTransform: 'uppercase', margin: 0 }}>
                  Axztech IT Solutions
                </h2>
              </div>
              <p className={styles.companyDescription}>
                Providing innovative IT solutions for businesses of all sizes.
              </p>
            </div>
            {/* Quick Links */}
            <div className={styles.linkSection}>
              <h3 className={styles.sectionTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="#" className={styles.link}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className={styles.contactSection}>
              <h3 className={styles.sectionTitle}>Contact Info</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <FaPhone className={styles.icon} />
                  <span className={styles.contactText}>0935 391 9496</span>
                </li>
                <li className={styles.contactItem}>
                  <FaEnvelope className={styles.icon} />
                  <span className={styles.contactText}>rioaldi.dompol@gmail.com</span>
                </li>
                <li className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <span className={styles.contactText}>
                    Zone 5, Dicklum,
                    <br />
                    Manolo Fortich, Philippines
                  </span>
                </li>
              </ul>
            </div>
            {/* Connect With Us */}
            <div className={styles.socialSection}>
              <h3 className={styles.sectionTitle}>Connect With Us</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>
                  <FaFacebook className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <FaTwitter className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <FaLinkedin className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </div>
          {/* Divider */}
          <hr className={styles.divider} />
          {/* Bottom section with copyright */}
          <div className={styles.bottomSection}>
            <div>
              <p className={styles.copyright}>
                © 2025 Axztech IT Solutions. All rights reserved.
              </p>
            </div>
            <div className={styles.mobileIconsWrapper}>
              {/* Social media icons for mobile view */}
              <div className={styles.mobileIcons}>
                <a href="#" className={styles.mobileLink}>
                  <FaFacebook className={styles.mobileIcon} />
                </a>
                <a href="#" className={styles.mobileLink}>
                  <FaTwitter className={styles.mobileIcon} />
                </a>
                <a href="#" className={styles.mobileLink}>
                  <FaLinkedin className={styles.mobileIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;