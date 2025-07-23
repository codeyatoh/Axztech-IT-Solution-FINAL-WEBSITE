import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';
import logoImg from '../../assets/images/axztech-logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const companyName = 'AXZTECH IT SOLUTION';
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [mobileBtnHovered, setMobileBtnHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Improved typewriter animation (no missing/skipped letters)
  useEffect(() => {
    setDisplayed('');
    indexRef.current = 0;
    function typeNext() {
      setDisplayed(companyName.slice(0, indexRef.current + 1));
      if (indexRef.current < companyName.length - 1) {
        indexRef.current++;
        timeoutRef.current = setTimeout(typeNext, 220);
      }
    }
    timeoutRef.current = setTimeout(typeNext, 220);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Helper to determine active tab
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={
          mobileMenuOpen
            ? `${styles.navContainer} ${styles.mobileMenuActive}`
            : styles.navContainer
        }>
          <div className={styles.logo}>
            <img src={logoImg} alt="AXZTECH IT SOLUTION" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 6 }} />
            <span className={`${styles.logoText} ${styles.desktopOnly}`} style={{ minWidth: '16ch' }}>
              {displayed}
            </span>
          </div>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}>HOME</Link></li>
            <li><Link to="/aboutUs" className={`${styles.navLink} ${isActive('/aboutUs') ? styles.navLinkActive : ''}`}>ABOUT</Link></li>
            <li><Link to="/products" className={`${styles.navLink} ${isActive('/products') ? styles.navLinkActive : ''}`}>PRODUCTS</Link></li>
            <li><Link to="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.navLinkActive : ''}`}>CONTACT US</Link></li>
          </ul>
          <button
            className={styles.getStartedBtn}
            style={{ padding: '8px 24px', fontSize: '1rem', position: 'relative', alignItems: 'center', justifyContent: 'center', height: 44 }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '100%' }}>
              <AnimatePresence initial={false}>
                {!btnHovered && (
                  <motion.span
                    key="normal"
                    initial={{ y: -24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0, transition: { duration: 0.28, ease: 'easeIn' } }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center' }}
                  >
                    GET STARTED
                  </motion.span>
                )}
                {btnHovered && (
                  <motion.span
                    key="hover"
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, y: 0, transition: { duration: 0 } }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center' }}
                  >
                    GET STARTED
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </button>
          {/* Burger menu button for mobile */}
          <button
            className={styles.burger}
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className={styles.burgerBar} style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
            <span className={styles.burgerBar} style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <span className={styles.burgerBar} style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
          </button>
        </div>
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileMenuBox} onClick={e => e.stopPropagation()}>
              <ul className={styles.mobileNavLinks}>
                <li><Link to="/" className={`${styles.mobileNavLink} ${isActive('/') ? styles.mobileNavLinkActive : ''}`} onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>
                <li><Link to="/aboutUs" className={`${styles.mobileNavLink} ${isActive('/aboutUs') ? styles.mobileNavLinkActive : ''}`} onClick={() => setMobileMenuOpen(false)}>ABOUT</Link></li>
                <li><Link to="/products" className={`${styles.mobileNavLink} ${isActive('/products') ? styles.mobileNavLinkActive : ''}`} onClick={() => setMobileMenuOpen(false)}>PRODUCTS</Link></li>
                <li><Link to="/contact" className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.mobileNavLinkActive : ''}`} onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link></li>
              </ul>
              <motion.button
                className={styles.mobileGetStartedBtn}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
                onMouseEnter={() => setMobileBtnHovered(true)}
                onMouseLeave={() => setMobileBtnHovered(false)}
                onTouchStart={() => setMobileBtnHovered(true)}
                onTouchEnd={() => setMobileBtnHovered(false)}
              >
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
                  <AnimatePresence initial={false}>
                    {!mobileBtnHovered && (
                      <motion.span
                        key="normal-mobile"
                        initial={{ y: -24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -24, opacity: 0, transition: { duration: 0.28, ease: 'easeIn' } }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center' }}
                      >
                        GET STARTED
                      </motion.span>
                    )}
                    {mobileBtnHovered && (
                      <motion.span
                        key="hover-mobile"
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0, y: 0, transition: { duration: 0 } }}
                        transition={{ duration: 0.32, ease: 'easeOut' }}
                        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center' }}
                      >
                        GET STARTED
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;