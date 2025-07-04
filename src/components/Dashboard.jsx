import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './Dashboard.module.css';

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalListens: 12547,
    totalEpisodes: 23,
    followers: 1834,
    revenue: 2456
  };

  const recentEpisodes = [
    {
      id: 1,
      title: 'Getting Started with Podcasting',
      publishDate: '2025-01-15',
      listens: 1234,
      duration: '45:30',
      status: 'published'
    },
    {
      id: 2,
      title: 'Interview with Tech Expert',
      publishDate: '2025-01-10',
      listens: 2156,
      duration: '52:15',
      status: 'published'
    },
    {
      id: 3,
      title: 'Future of AI in Podcasting',
      publishDate: '2025-01-05',
      listens: 3421,
      duration: '38:45',
      status: 'published'
    }
  ];

  const analytics = {
    weeklyListens: [120, 150, 180, 220, 190, 240, 280],
    topCountries: [
      { country: 'United States', percentage: 45 },
      { country: 'Canada', percentage: 18 },
      { country: 'United Kingdom', percentage: 12 },
      { country: 'Australia', percentage: 8 },
      { country: 'Germany', percentage: 7 }
    ]
  };

  if (!user) {
    return (
      <div className={styles.dashboardPage}>
        <div className={styles.container}>
          <div className={styles.notLoggedIn}>
            <h1>Please Log In</h1>
            <p>You need to be logged in to access your dashboard.</p>
            <Link to="/login" className="btn btn-primary">Log In</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <div className={styles.welcomeSection}>
            <h1>Welcome back, {user.fullName || user.email}!</h1>
            <p>Here's what's happening with your podcast</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.tabNavigation}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'overview' ? styles.active : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'episodes' ? styles.active : ''}`}
            onClick={() => setActiveTab('episodes')}
          >
            🎧 Episodes
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'analytics' ? styles.active : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📈 Analytics
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'settings' ? styles.active : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Settings
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className={styles.tabContent}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>👂</div>
                <div className={styles.statInfo}>
                  <h3>{stats.totalListens.toLocaleString()}</h3>
                  <p>Total Listens</p>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>🎙️</div>
                <div className={styles.statInfo}>
                  <h3>{stats.totalEpisodes}</h3>
                  <p>Episodes Published</p>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>👥</div>
                <div className={styles.statInfo}>
                  <h3>{stats.followers.toLocaleString()}</h3>
                  <p>Followers</p>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>💰</div>
                <div className={styles.statInfo}>
                  <h3>${stats.revenue.toLocaleString()}</h3>
                  <p>Revenue This Month</p>
                </div>
              </div>
            </div>

            <div className={styles.quickActions}>
              <h2>Quick Actions</h2>
              <div className={styles.actionGrid}>
                <Link to="/apply" className={styles.actionCard}>
                  <div className={styles.actionIcon}>🎤</div>
                  <h3>Create New Episode</h3>
                  <p>Record or upload a new episode</p>
                </Link>
                <div className={styles.actionCard}>
                  <div className={styles.actionIcon}>📊</div>
                  <h3>View Analytics</h3>
                  <p>Check your podcast performance</p>
                </div>
                <div className={styles.actionCard}>
                  <div className={styles.actionIcon}>💬</div>
                  <h3>Engage Audience</h3>
                  <p>Respond to comments and messages</p>
                </div>
              </div>
            </div>

            <div className={styles.recentActivity}>
              <h2>Recent Episodes</h2>
              <div className={styles.episodesList}>
                {recentEpisodes.map(episode => (
                  <div key={episode.id} className={styles.episodeItem}>
                    <div className={styles.episodeInfo}>
                      <h3>{episode.title}</h3>
                      <p>Published on {new Date(episode.publishDate).toLocaleDateString()}</p>
                      <span className={styles.episodeMeta}>
                        {episode.duration} • {episode.listens.toLocaleString()} listens
                      </span>
                    </div>
                    <div className={styles.episodeActions}>
                      <button className="btn btn-outline btn-sm">Edit</button>
                      <button className="btn btn-primary btn-sm">View</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'episodes' && (
          <div className={styles.tabContent}>
            <div className={styles.sectionHeader}>
              <h2>Manage Episodes</h2>
              <Link to="/apply" className="btn btn-primary">Create New Episode</Link>
            </div>
            <div className={styles.episodesList}>
              {recentEpisodes.map(episode => (
                <div key={episode.id} className={styles.episodeItem}>
                  <div className={styles.episodeInfo}>
                    <h3>{episode.title}</h3>
                    <p>Published on {new Date(episode.publishDate).toLocaleDateString()}</p>
                    <span className={styles.episodeMeta}>
                      {episode.duration} • {episode.listens.toLocaleString()} listens
                    </span>
                  </div>
                  <div className={styles.episodeActions}>
                    <button className="btn btn-outline btn-sm">Edit</button>
                    <button className="btn btn-secondary btn-sm">Analytics</button>
                    <button className="btn btn-primary btn-sm">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className={styles.tabContent}>
            <h2>Analytics Overview</h2>
            <div className={styles.analyticsGrid}>
              <div className={styles.analyticsCard}>
                <h3>Weekly Listens</h3>
                <div className={styles.chartPlaceholder}>
                  <p>Chart showing weekly listen trends</p>
                  <div className={styles.weeklyData}>
                    {analytics.weeklyListens.map((listens, index) => (
                      <div key={index} className={styles.dataPoint}>
                        <div className={styles.bar} style={{ height: `${(listens / 300) * 100}%` }}></div>
                        <span>{listens}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.analyticsCard}>
                <h3>Top Countries</h3>
                <div className={styles.countriesList}>
                  {analytics.topCountries.map((country, index) => (
                    <div key={index} className={styles.countryItem}>
                      <span className={styles.countryName}>{country.country}</span>
                      <div className={styles.countryBar}>
                        <div 
                          className={styles.countryFill} 
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                      <span className={styles.countryPercentage}>{country.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className={styles.tabContent}>
            <h2>Account Settings</h2>
            <div className={styles.settingsGrid}>
              <div className={styles.settingsCard}>
                <h3>Profile Information</h3>
                <div className={styles.settingsForm}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" value={user.fullName || user.email} className={styles.formInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" value={user.email} className={styles.formInput} />
                  </div>
                  <button className="btn btn-primary">Update Profile</button>
                </div>
              </div>
              <div className={styles.settingsCard}>
                <h3>Podcast Settings</h3>
                <div className={styles.settingsForm}>
                  <div className={styles.formGroup}>
                    <label>Podcast Name</label>
                    <input type="text" placeholder="Your Podcast Name" className={styles.formInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea placeholder="Describe your podcast..." className={styles.formTextarea}></textarea>
                  </div>
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}