import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './DMCA.module.css';

export default function DMCA() {
  return (
    <div className={styles.dmcaPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>DMCA Policy</h1>
          <p>Digital Millennium Copyright Act Compliance</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. DMCA Compliance</h2>
            <p>
              RISE & Speak respects the intellectual property rights of others and expects our users 
              to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and will 
              respond to valid takedown notices.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Filing a DMCA Takedown Notice</h2>
            <p>
              If you believe that content on our platform infringes your copyright, you may submit 
              a DMCA takedown notice. Your notice must include:
            </p>
            <ul>
              <li>Your physical or electronic signature</li>
              <li>Identification of the copyrighted work claimed to be infringed</li>
              <li>Identification of the infringing material and its location</li>
              <li>Your contact information (address, phone number, email)</li>
              <li>A statement of good faith belief that the use is not authorized</li>
              <li>A statement that the information is accurate and you are authorized to act</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Designated Copyright Agent</h2>
            <div className={styles.contactInfo}>
              <h3>Send DMCA notices to:</h3>
              <div className={styles.agentInfo}>
                <p><strong>RISE & Speak DMCA Agent</strong></p>
                <p>Email: dmca@risespeak.com</p>
                <p>Address: 123 Podcast Street, San Francisco, CA 94102</p>
                <p>Phone: +1 (555) 123-DMCA</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Counter-Notification Process</h2>
            <p>
              If you believe your content was removed in error, you may file a counter-notification. 
              Your counter-notice must include:
            </p>
            <ul>
              <li>Your physical or electronic signature</li>
              <li>Identification of the removed material and its former location</li>
              <li>A statement under penalty of perjury that the removal was a mistake</li>
              <li>Your contact information and consent to jurisdiction</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Repeat Infringer Policy</h2>
            <p>
              We maintain a policy of terminating accounts of users who are repeat copyright 
              infringers. We reserve the right to suspend or terminate accounts at our discretion.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. False Claims</h2>
            <p>
              Please note that filing false DMCA claims may result in legal liability. Ensure 
              that your claim is valid before submitting a takedown notice.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Information</h2>
            <p>
              For questions about our DMCA policy, contact us at legal@risespeak.com or 
              through our <Link to="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}