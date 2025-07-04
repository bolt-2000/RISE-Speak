import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './Trending.module.css';

export default function Trending() {
  const [timeframe, setTimeframe] = useState('week');

  const trendingPodcasts = [
    {
      id: 1,
      title: 'AI Revolution: What\'s Next?',
      host: 'Tech Insights',
      category: 'Technology',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      listens: 125000,
      growth: '+45%',
      rank: 1,
      description: 'Deep dive into the latest AI developments and their impact on society.'
    },
    {
      id: 2,
      title: 'Startup Success Stories',
      host: 'Business Weekly',
      category: 'Business',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      listens: 98000,
      growth: '+32%',
      rank: 2,
      description: 'Inspiring stories from entrepreneurs who built successful companies.'
    },
    {
      id: 3,
      title: 'Mental Health Matters',
      host: 'Dr. Sarah Wilson',
      category: 'Health',
      thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      listens: 87000,
      growth: '+28%',
      rank: 3,
      description: 'Expert advice on maintaining mental wellness in modern life.'
    },
    {
      id: 4,
      title: 'Comedy Gold Hour',
      host: 'Laugh Track Studios',
      category: 'Comedy',
      thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      listens: 76000,
      growth: '+22%',
      rank: 4,
      description: 'The funniest stand-up sets and comedy sketches from rising stars.'
    },
    {
      id: 5,
      title: 'Science Simplified',
      host: 'Prof. Mike Chen',
      category: 'Education',
      thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      listens: 65000,
      growth: '+18%',
      rank: 5,
      description: 'Making complex scientific concepts accessible to everyone.'
    }
  ];

  const trendingTopics = [
    { topic: 'Artificial Intelligence', mentions: 15420, trend: 'up' },
    { topic: 'Remote Work', mentions: 12350, trend: 'up' },
    { topic: 'Cryptocurrency', mentions: 9870, trend: 'down' },
    { topic: 'Climate Change', mentions: 8940, trend: 'up' },
    { topic: 'Mental Health', mentions: 7650, trend: 'up' }
  ];

  const formatListens = (listens) => {
    if (listens >= 1000000) {
      return `${(listens / 1000000).toFixed(1)}M`;
    } else if (listens >= 1000) {
      return `${(listens / 1000).toFixed(0)}K`;
    }
    return listens.toString();
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <div className={styles.trendingPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Trending Podcasts</h1>
          <p>Discover what's hot and rising in the podcast world</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.timeframeSelector}>
          <h2>Trending This</h2>
          <div className={styles.timeframeButtons}>
            <button 
              className={`${styles.timeframeButton} ${timeframe === 'day' ? styles.active : ''}`}
              onClick={() => setTimeframe('day')}
            >
              Day
            </button>
            <button 
              className={`${styles.timeframeButton} ${timeframe === 'week' ? styles.active : ''}`}
              onClick={() => setTimeframe('week')}
            >
              Week
            </button>
            <button 
              className={`${styles.timeframeButton} ${timeframe === 'month' ? styles.active : ''}`}
              onClick={() => setTimeframe('month')}
            >
              Month
            </button>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <div className={styles.trendingList}>
              {trendingPodcasts.map((podcast, index) => (
                <div key={podcast.id} className={styles.trendingItem}>
                  <div className={styles.rankBadge}>
                    <span className={styles.rankIcon}>{getRankIcon(podcast.rank)}</span>
                  </div>
                  
                  <div className={styles.podcastThumbnail}>
                    <img src={podcast.thumbnail} alt={podcast.title} />
                    <div className={styles.playOverlay}>
                      <button className={styles.playButton}>▶</button>
                    </div>
                  </div>
                  
                  <div className={styles.podcastInfo}>
                    <div className={styles.podcastHeader}>
                      <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                      <span className={styles.categoryBadge}>{podcast.category}</span>
                    </div>
                    <p className={styles.podcastHost}>by {podcast.host}</p>
                    <p className={styles.podcastDescription}>{podcast.description}</p>
                    
                    <div className={styles.podcastStats}>
                      <div className={styles.stat}>
                        <span className={styles.statIcon}>👂</span>
                        <span className={styles.statValue}>{formatListens(podcast.listens)} listens</span>
                      </div>
                      <div className={styles.stat}>
                        <span className={styles.statIcon}>📈</span>
                        <span className={`${styles.statValue} ${styles.growth}`}>{podcast.growth}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.podcastActions}>
                    <button className="btn btn-primary btn-sm">Listen Now</button>
                    <button className="btn btn-outline btn-sm">Subscribe</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>🔥 Trending Topics</h3>
              <div className={styles.topicsList}>
                {trendingTopics.map((topic, index) => (
                  <div key={index} className={styles.topicItem}>
                    <div className={styles.topicInfo}>
                      <span className={styles.topicName}>{topic.topic}</span>
                      <span className={styles.topicMentions}>
                        {topic.mentions.toLocaleString()} mentions
                      </span>
                    </div>
                    <div className={`${styles.trendIndicator} ${styles[topic.trend]}`}>
                      {topic.trend === 'up' ? '↗️' : '↘️'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>📊 Quick Stats</h3>
              <div className={styles.statsList}>
                <div className={styles.statsItem}>
                  <span className={styles.statsLabel}>Total Podcasts</span>
                  <span className={styles.statsValue}>2.4M+</span>
                </div>
                <div className={styles.statsItem}>
                  <span className={styles.statsLabel}>Active Listeners</span>
                  <span className={styles.statsValue}>156M</span>
                </div>
                <div className={styles.statsItem}>
                  <span className={styles.statsLabel}>Hours Listened</span>
                  <span className={styles.statsValue}>1.2B</span>
                </div>
                <div className={styles.statsItem}>
                  <span className={styles.statsLabel}>New This Week</span>
                  <span className={styles.statsValue}>12K</span>
                </div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>🎯 Personalized</h3>
              <p className={styles.personalizedText}>
                Sign in to see trending podcasts based on your listening history and preferences.
              </p>
              <Link to="/login" className="btn btn-primary btn-sm">Sign In</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}