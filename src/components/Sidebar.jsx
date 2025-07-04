import React, { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ onSelectEpisode }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Episodes', icon: '🎧' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'health', name: 'Health', icon: '🏃‍♂️' },
    { id: 'comedy', name: 'Comedy', icon: '😂' },
    { id: 'education', name: 'Education', icon: '📚' }
  ];

  const episodes = [
    {
      id: 1,
      title: 'The Future of AI',
      host: 'Tech Talk Daily',
      duration: '45:30',
      category: 'technology',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Building Successful Startups',
      host: 'Business Breakthrough',
      duration: '38:15',
      category: 'business',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Mental Health Matters',
      host: 'Wellness Weekly',
      duration: '52:20',
      category: 'health',
      thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Stand-up Comedy Secrets',
      host: 'Comedy Central Pod',
      duration: '41:45',
      category: 'comedy',
      thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const filteredEpisodes = selectedCategory === 'all' 
    ? episodes 
    : episodes.filter(episode => episode.category === selectedCategory);

  const handleEpisodeSelect = (episode) => {
    if (onSelectEpisode) {
      onSelectEpisode(episode);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>Browse Episodes</h2>
      </div>

      <div className={styles.categories}>
        <h3>Categories</h3>
        <div className={styles.categoryList}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.episodes}>
        <h3>Episodes</h3>
        <div className={styles.episodeList}>
          {filteredEpisodes.map(episode => (
            <div
              key={episode.id}
              className={styles.episodeItem}
              onClick={() => handleEpisodeSelect(episode)}
            >
              <div className={styles.episodeThumbnail}>
                <img src={episode.thumbnail} alt={episode.title} />
                <div className={styles.playButton}>▶</div>
              </div>
              <div className={styles.episodeInfo}>
                <h4 className={styles.episodeTitle}>{episode.title}</h4>
                <p className={styles.episodeHost}>{episode.host}</p>
                <span className={styles.episodeDuration}>{episode.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}