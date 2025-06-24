import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Cookies.module.css';

export default function Cookies() {
  return (
    <div className={styles.cookiesPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Cookie Policy</h1>
          <p>Last updated: January 2025</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              improving our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Cookies</h2>
            <p>
              We use cookies for various purposes including:
            </p>
            <ul>
              <li>Remembering your login status and preferences</li>
              <li>Analyzing website traffic and user behavior</li>
              <li>Personalizing content and recommendations</li>
              <li>Improving website performance and functionality</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Types of Cookies We Use</h2>
            <div className={styles.cookieTypes}>
              <div className={styles.cookieType}>
                <h3>Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
              </div>
              <div className={styles.cookieType}>
                <h3>Analytics Cookies</h3>
                <p>These help us understand how visitors interact with our website by collecting anonymous information.</p>
              </div>
              <div className={styles.cookieType}>
                <h3>Functional Cookies</h3>
                <p>These enable enhanced functionality and personalization, such as remembering your preferences.</p>
              </div>
              <div className={styles.cookieType}>
                <h3>Marketing Cookies</h3>
                <p>These are used to deliver relevant advertisements and track the effectiveness of our campaigns.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Managing Your Cookie Preferences</h2>
            <p>
              You can control and manage cookies in various ways. Most web browsers automatically 
              accept cookies, but you can modify your browser settings to decline cookies if you prefer.
            </p>
            <div className={styles.cookieControls}>
              <button className="btn btn-primary">Manage Cookie Preferences</button>
              <button className="btn btn-outline">Accept All Cookies</button>
            </div>
          </section>

          <section className={styles.section}>
            <h2>5. Third-Party Cookies</h2>
            <p>
              We may also use third-party services that set cookies on our behalf. These include 
              analytics providers, advertising networks, and social media platforms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at 
              privacy@risespeak.com or through our <Link to="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}