import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Categories.module.css';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'technology',
      name: 'Technology',
      icon: '💻',
      description: 'Latest tech trends, gadgets, and innovations',
      podcastCount: 1247,
      color: '#3b82f6'
    },
    {
      id: 'business',
      name: 'Business',
      icon: '💼',
      description: 'Entrepreneurship, finance, and business strategies',
      podcastCount: 892,
      color: '#10b981'
    },
    {
      id: 'health',
      name: 'Health & Fitness',
      icon: '🏃‍♂️',
      description: 'Wellness, nutrition, and fitness tips',
      podcastCount: 756,
      color: '#f59e0b'
    },
    {
      id: 'comedy',
      name: 'Comedy',
      icon: '😂',
      description: 'Stand-up, sketches, and humorous content',
      podcastCount: 634,
      color: '#ef4444'
    },
    {
      id: 'education',
      name: 'Education',
      icon: '📚',
      description: 'Learning, tutorials, and educational content',
      podcastCount: 589,
      color: '#8b5cf6'
    },
    {
      id: 'news',
      name: 'News & Politics',
      icon: '📰',
      description: 'Current events and political discussions',
      podcastCount: 523,
      color: '#06b6d4'
    },
    {
      id: 'crime',
      name: 'True Crime',
      icon: '🔍',
      description: 'Mystery, investigations, and crime stories',
      podcastCount: 467,
      color: '#dc2626'
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      description: 'Sports news, analysis, and commentary',
      podcastCount: 412,
      color: '#059669'
    },
    {
      id: 'culture',
      name: 'Arts & Culture',
      icon: '🎨',
      description: 'Art, music, literature, and cultural topics',
      podcastCount: 378,
      color: '#d946ef'
    },
    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      description: 'Scientific discoveries and research',
      podcastCount: 345,
      color: '#0ea5e9'
    },
    {
      id: 'history',
      name: 'History',
      icon: '📜',
      description: 'Historical events and stories',
      podcastCount: 289,
      color: '#f97316'
    },
    {
      id: 'music',
      name: 'Music',
      icon: '🎵',
      description: 'Music reviews, interviews, and discussions',
      podcastCount: 267,
      color: '#ec4899'
    }
  ];

  const topPodcasts = {
    technology: [
      { name: 'Tech Talk Daily', host: 'Sarah Johnson', rating: 4.8 },
      { name: 'Code & Coffee', host: 'Alex Chen', rating: 4.7 },
      { name: 'Future Tech', host: 'Mike Rodriguez', rating: 4.9 }
    ],
    business: [
      { name: 'Startup Stories', host: 'Jennifer Kim', rating: 4.8 },
      { name: 'Business Breakthrough', host: 'David Park', rating: 4.6 },
      { name: 'Entrepreneur Weekly', host: 'Lisa Wang', rating: 4.7 }
    ]
  };

  return (
    <div className={styles.categoriesPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Podcast Categories</h1>
          <p>Explore podcasts by topic and discover your next favorite show</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.categoriesGrid}>
          {categories.map(category => (
            <div 
              key={category.id} 
              className={`${styles.categoryCard} ${selectedCategory === category.id ? styles.selected : ''}`}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              <div className={styles.categoryHeader}>
                <div 
                  className={styles.categoryIcon}
                  style={{ backgroundColor: category.color + '20', color: category.color }}
                >
                  {category.icon}
                </div>
                <div className={styles.categoryInfo}>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              
              <div className={styles.categoryStats}>
                <span className={styles.podcastCount}>
                  {category.podcastCount.toLocaleString()} podcasts
                </span>
                <div className={styles.expandIcon}>
                  {selectedCategory === category.id ? '−' : '+'}
                </div>
              </div>

              {selectedCategory === category.id && (
                <div className={styles.categoryDetails}>
                  <h4>Popular in {category.name}</h4>
                  {topPodcasts[category.id] ? (
                    <div className={styles.topPodcasts}>
                      {topPodcasts[category.id].map((podcast, index) => (
                        <div key={index} className={styles.podcastItem}>
                          <span className={styles.podcastName}>{podcast.name}</span>
                          <span className={styles.podcastHost}>by {podcast.host}</span>
                          <span className={styles.podcastRating}>⭐ {podcast.rating}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={styles.comingSoon}>Popular podcasts coming soon!</p>
                  )}
                  <Link to={`/discover?category=${category.id}`} className="btn btn-primary btn-sm">
                    Explore {category.name}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.featuredSection}>
          <h2>Featured Categories This Week</h2>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredIcon}>🎙️</div>
              <h3>New & Noteworthy</h3>
              <p>Fresh podcasts making waves in the community</p>
              <Link to="/discover?filter=new" className="btn btn-outline">Discover New</Link>
            </div>
            
            <div className={styles.featuredCard}>
              <div className={styles.featuredIcon}>🔥</div>
              <h3>Trending Now</h3>
              <p>The hottest podcasts everyone's talking about</p>
              <Link to="/trending" className="btn btn-outline">See Trending</Link>
            </div>
            
            <div className={styles.featuredCard}>
              <div className={styles.featuredIcon}>🏆</div>
              <h3>Award Winners</h3>
              <p>Critically acclaimed and award-winning shows</p>
              <Link to="/discover?filter=awards" className="btn btn-outline">View Winners</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}