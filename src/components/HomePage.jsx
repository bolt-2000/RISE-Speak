import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './HomePage.module.css';

export default function HomePage() {
  const featuredPodcasts = [
    {
      id: 1,
      title: 'Tech Talk Daily',
      host: 'Sarah Johnson',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Business Breakthrough',
      host: 'Mike Rodriguez',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      category: 'Business'
    },
    {
      id: 3,
      title: 'Wellness Weekly',
      host: 'Dr. Emily Chen',
      thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      category: 'Health'
    }
  ];

  const stats = [
    { number: '2.4M+', label: 'Podcasts' },
    { number: '156M', label: 'Listeners' },
    { number: '1.2B', label: 'Hours Listened' },
    { number: '50K+', label: 'Creators' }
  ];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Amplify Your Voice,<br />
              <span className={styles.highlight}>Connect the World</span>
            </h1>
            <p className={styles.heroDescription}>
              Join millions of creators and listeners on the ultimate podcast platform. 
              Discover amazing content, create your own shows, and build your audience.
            </p>
            <div className={styles.heroActions}>
              <Link to="/register" className="btn btn-primary btn-lg">
                Start Creating
              </Link>
              <Link to="/discover" className="btn btn-outline btn-lg">
                Explore Podcasts
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.podcastCard}>
              <div className={styles.waveform}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
              </div>
              <div className={styles.playButton}>
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Featured Podcasts</h2>
            <p>Discover trending shows and rising creators</p>
          </div>
          <div className={styles.podcastsGrid}>
            {featuredPodcasts.map(podcast => (
              <div key={podcast.id} className={styles.podcastCard}>
                <div className={styles.podcastThumbnail}>
                  <img src={podcast.thumbnail} alt={podcast.title} />
                  <div className={styles.playOverlay}>
                    <button className={styles.playBtn}>▶</button>
                  </div>
                </div>
                <div className={styles.podcastInfo}>
                  <span className={styles.category}>{podcast.category}</span>
                  <h3>{podcast.title}</h3>
                  <p>by {podcast.host}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionActions}>
            <Link to="/discover" className="btn btn-primary">
              Explore All Podcasts
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose RISE & Speak?</h2>
            <p>Everything you need to create, distribute, and monetize your podcast</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎙️</div>
              <h3>Professional Recording</h3>
              <p>High-quality recording tools with built-in editing capabilities</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Advanced Analytics</h3>
              <p>Detailed insights into your audience and episode performance</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Monetization Tools</h3>
              <p>Multiple revenue streams including subscriptions and sponsorships</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌍</div>
              <h3>Global Distribution</h3>
              <p>Reach listeners worldwide with automatic distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Podcast Journey?</h2>
            <p>Join thousands of creators who've already started building their audience</p>
            <div className={styles.ctaActions}>
              <Link to="/apply" className="btn btn-primary btn-lg">
                Apply to Create
              </Link>
              <Link to="/creators" className="btn btn-secondary btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}