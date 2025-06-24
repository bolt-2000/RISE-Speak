import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useRealTimeStats } from '../../hooks/useRealTime';
import styles from './Community.module.css';

export default function Community() {
  const [activeTab, setActiveTab] = useState('discussions');
  const stats = useRealTimeStats();

  const discussions = [
    {
      id: 1,
      title: "Best practices for podcast editing?",
      author: "AudioPro23",
      replies: 24,
      lastActivity: "2 hours ago",
      category: "Production",
      isHot: true
    },
    {
      id: 2,
      title: "How to grow your podcast audience organically",
      author: "PodcastGuru",
      replies: 18,
      lastActivity: "4 hours ago",
      category: "Marketing",
      isHot: false
    },
    {
      id: 3,
      title: "Equipment recommendations for beginners",
      author: "NewPodcaster",
      replies: 31,
      lastActivity: "6 hours ago",
      category: "Equipment",
      isHot: true
    },
    {
      id: 4,
      title: "Monetization strategies that actually work",
      author: "CreatorSuccess",
      replies: 42,
      lastActivity: "8 hours ago",
      category: "Monetization",
      isHot: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Podcast Creator Meetup - San Francisco",
      date: "February 15, 2025",
      time: "6:00 PM PST",
      location: "San Francisco, CA",
      attendees: 45,
      type: "In-Person"
    },
    {
      id: 2,
      title: "Virtual Workshop: Advanced Audio Editing",
      date: "February 20, 2025",
      time: "2:00 PM EST",
      location: "Online",
      attendees: 128,
      type: "Virtual"
    },
    {
      id: 3,
      title: "Podcast Monetization Masterclass",
      date: "February 25, 2025",
      time: "7:00 PM GMT",
      location: "Online",
      attendees: 89,
      type: "Virtual"
    }
  ];

  const featuredCreators = [
    {
      id: 1,
      name: "Sarah Johnson",
      podcast: "Tech Talk Daily",
      followers: "125K",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      badge: "Top Creator"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      podcast: "Comedy Central Pod",
      followers: "98K",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      badge: "Rising Star"
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      podcast: "Science Simplified",
      followers: "87K",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      badge: "Expert"
    }
  ];

  return (
    <div className={styles.communityPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Community Hub</h1>
          <p>Connect, learn, and grow with fellow podcast creators and listeners</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.communityStats}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statInfo}>
                <h3>{stats.activeUsers.toLocaleString()}</h3>
                <p>Active Members</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>💬</div>
              <div className={styles.statInfo}>
                <h3>2,847</h3>
                <p>Discussions</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🎯</div>
              <div className={styles.statInfo}>
                <h3>156</h3>
                <p>Events This Month</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏆</div>
              <div className={styles.statInfo}>
                <h3>1,234</h3>
                <p>Success Stories</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.communityContent}>
          <div className={styles.tabNavigation}>
            <button 
              className={`${styles.tab} ${activeTab === 'discussions' ? styles.active : ''}`}
              onClick={() => setActiveTab('discussions')}
            >
              💬 Discussions
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'events' ? styles.active : ''}`}
              onClick={() => setActiveTab('events')}
            >
              📅 Events
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'creators' ? styles.active : ''}`}
              onClick={() => setActiveTab('creators')}
            >
              ⭐ Featured Creators
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'resources' ? styles.active : ''}`}
              onClick={() => setActiveTab('resources')}
            >
              📚 Resources
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'discussions' && (
              <div className={styles.discussions}>
                <div className={styles.sectionHeader}>
                  <h2>Community Discussions</h2>
                  <button className="btn btn-primary">Start New Discussion</button>
                </div>
                
                <div className={styles.discussionsList}>
                  {discussions.map(discussion => (
                    <div key={discussion.id} className={styles.discussionCard}>
                      <div className={styles.discussionHeader}>
                        <div className={styles.discussionTitle}>
                          <h3>{discussion.title}</h3>
                          {discussion.isHot && <span className={styles.hotBadge}>🔥 Hot</span>}
                        </div>
                        <span className={styles.category}>{discussion.category}</span>
                      </div>
                      
                      <div className={styles.discussionMeta}>
                        <span className={styles.author}>by {discussion.author}</span>
                        <span className={styles.replies}>{discussion.replies} replies</span>
                        <span className={styles.lastActivity}>Last activity: {discussion.lastActivity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className={styles.events}>
                <div className={styles.sectionHeader}>
                  <h2>Upcoming Events</h2>
                  <button className="btn btn-primary">Create Event</button>
                </div>
                
                <div className={styles.eventsList}>
                  {events.map(event => (
                    <div key={event.id} className={styles.eventCard}>
                      <div className={styles.eventType}>
                        {event.type === 'Virtual' ? '💻' : '📍'} {event.type}
                      </div>
                      
                      <div className={styles.eventInfo}>
                        <h3>{event.title}</h3>
                        <div className={styles.eventDetails}>
                          <span>📅 {event.date}</span>
                          <span>🕐 {event.time}</span>
                          <span>📍 {event.location}</span>
                        </div>
                        <div className={styles.eventAttendees}>
                          👥 {event.attendees} attending
                        </div>
                      </div>
                      
                      <div className={styles.eventActions}>
                        <button className="btn btn-primary btn-sm">Join Event</button>
                        <button className="btn btn-outline btn-sm">Learn More</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'creators' && (
              <div className={styles.creators}>
                <div className={styles.sectionHeader}>
                  <h2>Featured Creators</h2>
                  <button className="btn btn-primary">Become Featured</button>
                </div>
                
                <div className={styles.creatorsList}>
                  {featuredCreators.map(creator => (
                    <div key={creator.id} className={styles.creatorCard}>
                      <img src={creator.avatar} alt={creator.name} />
                      <div className={styles.creatorInfo}>
                        <h3>{creator.name}</h3>
                        <p>{creator.podcast}</p>
                        <div className={styles.creatorStats}>
                          <span>{creator.followers} followers</span>
                          <span className={styles.badge}>{creator.badge}</span>
                        </div>
                      </div>
                      <div className={styles.creatorActions}>
                        <button className="btn btn-primary btn-sm">Follow</button>
                        <button className="btn btn-outline btn-sm">Message</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className={styles.resources}>
                <div className={styles.sectionHeader}>
                  <h2>Community Resources</h2>
                </div>
                
                <div className={styles.resourcesGrid}>
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>📖</div>
                    <h3>Beginner's Guide</h3>
                    <p>Complete guide to starting your first podcast</p>
                    <button className="btn btn-outline btn-sm">Read Guide</button>
                  </div>
                  
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>🎧</div>
                    <h3>Equipment Reviews</h3>
                    <p>Community-reviewed microphones, headphones, and software</p>
                    <button className="btn btn-outline btn-sm">Browse Reviews</button>
                  </div>
                  
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>💰</div>
                    <h3>Monetization Hub</h3>
                    <p>Strategies and tools for podcast monetization</p>
                    <button className="btn btn-outline btn-sm">Explore Options</button>
                  </div>
                  
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>📊</div>
                    <h3>Analytics Tools</h3>
                    <p>Track your podcast performance and growth</p>
                    <button className="btn btn-outline btn-sm">View Tools</button>
                  </div>
                  
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>🎨</div>
                    <h3>Design Templates</h3>
                    <p>Free podcast artwork and promotional templates</p>
                    <button className="btn btn-outline btn-sm">Download</button>
                  </div>
                  
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>🤝</div>
                    <h3>Collaboration Board</h3>
                    <p>Find co-hosts, guests, and collaboration partners</p>
                    <button className="btn btn-outline btn-sm">Join Board</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className={styles.joinCommunity}>
          <div className={styles.joinCard}>
            <h2>Ready to Join Our Community?</h2>
            <p>Connect with thousands of podcast creators and enthusiasts. Share knowledge, get feedback, and grow together.</p>
            <div className={styles.joinActions}>
              <button className="btn btn-primary btn-lg">Join Community</button>
              <button className="btn btn-secondary btn-lg">Learn More</button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}