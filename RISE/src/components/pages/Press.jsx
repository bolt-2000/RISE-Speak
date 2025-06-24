import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Press.module.css';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: "RISE & Speak Reaches 100,000 Active Users Milestone",
      date: "January 15, 2025",
      excerpt: "The innovative podcast platform celebrates significant growth in its first year of operation.",
      category: "Company News"
    },
    {
      id: 2,
      title: "New Creator Monetization Features Launch",
      date: "December 20, 2024",
      excerpt: "Enhanced tools help podcast creators generate revenue through premium content and subscriptions.",
      category: "Product Update"
    },
    {
      id: 3,
      title: "RISE & Speak Partners with Major Podcast Networks",
      date: "November 30, 2024",
      excerpt: "Strategic partnerships bring exclusive content and expanded library to the platform.",
      category: "Partnership"
    },
    {
      id: 4,
      title: "AI-Powered Recommendation Engine Improves Discovery",
      date: "October 25, 2024",
      excerpt: "Machine learning technology enhances personalized content recommendations for listeners.",
      category: "Technology"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats",
      fileSize: "2.5 MB",
      format: "ZIP"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      fileSize: "1.8 MB",
      format: "PDF"
    },
    {
      title: "Product Screenshots",
      description: "High-quality app and web interface screenshots",
      fileSize: "15.2 MB",
      format: "ZIP"
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      fileSize: "8.7 MB",
      format: "ZIP"
    }
  ];

  const awards = [
    {
      title: "Best New Podcast Platform 2024",
      organization: "Digital Media Awards",
      year: "2024"
    },
    {
      title: "Innovation in Audio Technology",
      organization: "Tech Excellence Awards",
      year: "2024"
    },
    {
      title: "Rising Star in Media & Entertainment",
      organization: "Startup Awards",
      year: "2024"
    }
  ];

  return (
    <div className={styles.pressPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Press & Media</h1>
          <p>Latest news, updates, and media resources from RISE & Speak</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.pressContact}>
          <div className={styles.contactCard}>
            <h2>Media Inquiries</h2>
            <p>For press inquiries, interviews, and media requests, please contact our press team:</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Email:</strong> press@risespeak.com
              </div>
              <div className={styles.contactItem}>
                <strong>Phone:</strong> +1 (555) 123-PRESS
              </div>
              <div className={styles.contactItem}>
                <strong>Response Time:</strong> Within 24 hours
              </div>
            </div>
          </div>
        </section>

        <section className={styles.pressReleases}>
          <h2>Press Releases</h2>
          <div className={styles.releasesList}>
            {pressReleases.map(release => (
              <article key={release.id} className={styles.releaseCard}>
                <div className={styles.releaseHeader}>
                  <span className={styles.category}>{release.category}</span>
                  <span className={styles.date}>{release.date}</span>
                </div>
                <h3>{release.title}</h3>
                <p>{release.excerpt}</p>
                <button className="btn btn-outline btn-sm">Read Full Release</button>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.mediaKit}>
          <h2>Media Kit</h2>
          <p>Download our media kit for logos, brand guidelines, and other press materials.</p>
          <div className={styles.mediaGrid}>
            {mediaKit.map((item, index) => (
              <div key={index} className={styles.mediaItem}>
                <div className={styles.mediaIcon}>📁</div>
                <div className={styles.mediaInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.mediaDetails}>
                    <span>{item.fileSize}</span>
                    <span>•</span>
                    <span>{item.format}</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm">Download</button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.awards}>
          <h2>Awards & Recognition</h2>
          <div className={styles.awardsList}>
            {awards.map((award, index) => (
              <div key={index} className={styles.awardCard}>
                <div className={styles.awardIcon}>🏆</div>
                <div className={styles.awardInfo}>
                  <h3>{award.title}</h3>
                  <p>{award.organization}</p>
                  <span className={styles.awardYear}>{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.factSheet}>
          <h2>Company Fact Sheet</h2>
          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <h3>Founded</h3>
              <p>2024</p>
            </div>
            <div className={styles.factCard}>
              <h3>Headquarters</h3>
              <p>San Francisco, CA</p>
            </div>
            <div className={styles.factCard}>
              <h3>Active Users</h3>
              <p>100,000+</p>
            </div>
            <div className={styles.factCard}>
              <h3>Podcasts</h3>
              <p>25,000+</p>
            </div>
            <div className={styles.factCard}>
              <h3>Episodes</h3>
              <p>5 Million+</p>
            </div>
            <div className={styles.factCard}>
              <h3>Countries</h3>
              <p>150+</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}