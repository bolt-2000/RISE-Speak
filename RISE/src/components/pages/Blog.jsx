import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Blog.module.css';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Podcast Discovery: How AI is Changing the Game",
      excerpt: "Explore how artificial intelligence is revolutionizing podcast recommendations and helping listeners discover their next favorite show.",
      author: "Sarah Johnson",
      authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "January 20, 2025",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Building Your Podcast Audience: 10 Proven Strategies",
      excerpt: "Learn the essential tactics successful podcasters use to grow their audience and increase engagement.",
      author: "Mike Chen",
      authorAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "January 18, 2025",
      readTime: "8 min read",
      category: "Creator Tips",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "The Psychology of Audio: Why Podcasts Create Deeper Connections",
      excerpt: "Discover the science behind why audio content creates more intimate relationships between creators and audiences.",
      author: "Dr. Emily Rodriguez",
      authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "January 15, 2025",
      readTime: "6 min read",
      category: "Industry Insights",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Monetizing Your Podcast: Beyond Traditional Advertising",
      excerpt: "Explore innovative revenue streams for podcast creators, from premium content to community memberships.",
      author: "Alex Thompson",
      authorAvatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Monetization",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Interactive Podcasts: Engaging Your Audience",
      excerpt: "Learn how interactive features are transforming the podcast experience and creating new opportunities for engagement.",
      author: "Lisa Park",
      authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "January 10, 2025",
      readTime: "4 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Global Podcasting Trends: What's Hot Around the World",
      excerpt: "A comprehensive look at podcasting trends across different countries and cultures.",
      author: "David Kim",
      authorAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      date: "January 8, 2025",
      readTime: "9 min read",
      category: "Industry Insights",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ['all', 'Technology', 'Creator Tips', 'Industry Insights', 'Monetization'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className={styles.blogPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>RISE & Speak Blog</h1>
          <p>Insights, tips, and stories from the world of podcasting</p>
        </div>
      </div>

      <div className={styles.container}>
        {featuredPost && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredPost}>
              <div className={styles.featuredImage}>
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className={styles.featuredBadge}>Featured</div>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{featuredPost.category}</span>
                  <span className={styles.readTime}>{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className={styles.authorInfo}>
                  <img src={featuredPost.authorAvatar} alt={featuredPost.author} />
                  <div>
                    <span className={styles.authorName}>{featuredPost.author}</span>
                    <span className={styles.postDate}>{featuredPost.date}</span>
                  </div>
                </div>
                <button className="btn btn-primary">Read Article</button>
              </div>
            </div>
          </section>
        )}

        <section className={styles.blogSection}>
          <div className={styles.sectionHeader}>
            <h2>Latest Articles</h2>
            <div className={styles.categoryFilter}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.postsGrid}>
            {filteredPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.authorInfo}>
                    <img src={post.authorAvatar} alt={post.author} />
                    <div>
                      <span className={styles.authorName}>{post.author}</span>
                      <span className={styles.postDate}>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <div className={styles.noPosts}>
              <h3>No posts found</h3>
              <p>Try selecting a different category or check back later for new content.</p>
            </div>
          )}
        </section>

        <section className={styles.newsletter}>
          <div className={styles.newsletterCard}>
            <h2>Stay Updated</h2>
            <p>Get the latest podcasting insights and platform updates delivered to your inbox.</p>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className={styles.emailInput}
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}