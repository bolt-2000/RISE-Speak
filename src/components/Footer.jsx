import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Blog', path: '/blog' }
    ],
    creators: [
      { name: 'For Creators', path: '/creators' },
      { name: 'Categories', path: '/categories' },
      { name: 'Community', path: '/community' },
      { name: 'Help Center', path: '/help' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'DMCA', path: '/dmca' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Help & FAQ', path: '/help' },
      { name: 'Feedback', path: '/feedback' },
      { name: 'Report Issue', path: '/contact' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/risespeak' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/risespeak' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/risespeak' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/risespeak' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/risespeak' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🎙️</span>
              <span className={styles.logoText}>RISE & Speak™</span>
            </div>
            <p className={styles.brandDescription}>
              Amplify your voice and connect with millions of listeners worldwide. 
              The ultimate podcast platform for creators and audiences.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className={styles.linksGrid}>
            <div className={styles.linkSection}>
              <h3>Company</h3>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h3>Creators</h3>
              <ul>
                {footerLinks.creators.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h3>Legal</h3>
              <ul>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h3>Support</h3>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3>Stay Updated</h3>
            <p>Get the latest podcast trends and creator tips delivered to your inbox.</p>
          </div>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} RISE & Speak Inc. All rights reserved.</p>
          </div>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}