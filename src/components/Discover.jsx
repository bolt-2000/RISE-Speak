import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './Discover.module.css';

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: '🎧' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'health', name: 'Health', icon: '🏃‍♂️' },
    { id: 'comedy', name: 'Comedy', icon: '😂' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'news', name: 'News', icon: '📰' },
    { id: 'sports', name: 'Sports', icon: '⚽' }
  ];

  const podcasts = [
    {
      id: 1,
      title: 'Tech Talk Daily',
      host: 'Sarah Johnson',
      category: 'technology',
      description: 'Daily insights into the latest technology trends and innovations.',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.8,
      episodes: 156,
      subscribers: '45K'
    },
    {
      id: 2,
      title: 'Business Breakthrough',
      host: 'Mike Rodriguez',
      category: 'business',
      description: 'Strategies and insights for building successful businesses.',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.6,
      episodes: 89,
      subscribers: '32K'
    },
    {
      id: 3,
      title: 'Wellness Weekly',
      host: 'Dr. Emily Chen',
      category: 'health',
      description: 'Your weekly dose of health and wellness tips from medical experts.',
      thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.9,
      episodes: 67,
      subscribers: '28K'
    },
    {
      id: 4,
      title: 'Comedy Central Pod',
      host: 'Alex Thompson',
      category: 'comedy',
      description: 'Stand-up comedy, funny stories, and hilarious interviews.',
      thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.7,
      episodes: 134,
      subscribers: '52K'
    },
    {
      id: 5,
      title: 'Learn Something New',
      host: 'Prof. David Kim',
      category: 'education',
      description: 'Educational content that makes learning fun and accessible.',
      thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.5,
      episodes: 78,
      subscribers: '19K'
    },
    {
      id: 6,
      title: 'News Today',
      host: 'Jennifer Park',
      category: 'news',
      description: 'Daily news analysis and current events discussion.',
      thumbnail: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.4,
      episodes: 245,
      subscribers: '67K'
    }
  ];

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesCategory = selectedCategory === 'all' || podcast.category === selectedCategory;
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.discoverPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Discover Podcasts</h1>
          <p>Find your next favorite podcast from thousands of amazing shows</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search podcasts, hosts, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>🔍</button>
          </div>
        </div>

        <div className={styles.categoriesSection}>
          <h2>Browse by Category</h2>
          <div className={styles.categoriesList}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.podcastsSection}>
          <div className={styles.sectionHeader}>
            <h2>
              {selectedCategory === 'all' ? 'All Podcasts' : 
               categories.find(cat => cat.id === selectedCategory)?.name + ' Podcasts'}
            </h2>
            <span className={styles.resultCount}>
              {filteredPodcasts.length} podcast{filteredPodcasts.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredPodcasts.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No podcasts found</h3>
              <p>Try adjusting your search terms or browse different categories.</p>
            </div>
          ) : (
            <div className={styles.podcastsGrid}>
              {filteredPodcasts.map(podcast => (
                <div key={podcast.id} className={styles.podcastCard}>
                  <div className={styles.podcastThumbnail}>
                    <img src={podcast.thumbnail} alt={podcast.title} />
                    <div className={styles.playOverlay}>
                      <button className={styles.playButton}>▶</button>
                    </div>
                  </div>
                  
                  <div className={styles.podcastInfo}>
                    <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                    <p className={styles.podcastHost}>by {podcast.host}</p>
                    <p className={styles.podcastDescription}>{podcast.description}</p>
                    
                    <div className={styles.podcastMeta}>
                      <div className={styles.rating}>
                        <span className={styles.stars}>⭐</span>
                        <span className={styles.ratingValue}>{podcast.rating}</span>
                      </div>
                      <span className={styles.episodes}>{podcast.episodes} episodes</span>
                      <span className={styles.subscribers}>{podcast.subscribers} subscribers</span>
                    </div>
                    
                    <div className={styles.podcastActions}>
                      <button className="btn btn-primary btn-sm">Subscribe</button>
                      <button className="btn btn-outline btn-sm">Preview</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}