import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Help.module.css';

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'account', name: 'Account & Billing', icon: '👤' },
    { id: 'listening', name: 'Listening', icon: '🎧' },
    { id: 'creating', name: 'Creating Podcasts', icon: '🎙️' },
    { id: 'technical', name: 'Technical Issues', icon: '🔧' },
    { id: 'monetization', name: 'Monetization', icon: '💰' }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I create my first podcast?",
      answer: "To create your first podcast, go to your dashboard and click 'Create New Podcast'. You'll need to upload your audio file, add a title, description, and cover art. Our step-by-step guide will walk you through the entire process.",
      category: "getting-started"
    },
    {
      id: 2,
      question: "What audio formats are supported?",
      answer: "We support MP3, WAV, M4A, and AAC audio formats. For best quality and compatibility, we recommend uploading MP3 files with a bitrate of 128kbps or higher.",
      category: "technical"
    },
    {
      id: 3,
      question: "How can I monetize my podcast?",
      answer: "RISE & Speak offers several monetization options including premium subscriptions, listener donations, sponsored content, and our revenue sharing program. Visit the Monetization section in your creator dashboard to get started.",
      category: "monetization"
    },
    {
      id: 4,
      question: "Can I download episodes for offline listening?",
      answer: "Yes! Premium subscribers can download episodes for offline listening. Simply tap the download icon next to any episode. Downloaded episodes are available in your Downloads section.",
      category: "listening"
    },
    {
      id: 5,
      question: "How do I change my subscription plan?",
      answer: "You can change your subscription plan anytime by going to Account Settings > Subscription. Changes take effect immediately, and you'll be charged or credited the difference.",
      category: "account"
    },
    {
      id: 6,
      question: "Why is my podcast not appearing in search results?",
      answer: "New podcasts may take up to 24 hours to appear in search results. Make sure your podcast is published (not in draft mode) and has proper tags and descriptions for better discoverability.",
      category: "creating"
    },
    {
      id: 7,
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page and enter your email address. We'll send you a secure link to reset your password. The link expires after 24 hours for security.",
      category: "account"
    },
    {
      id: 8,
      question: "Can I collaborate with other creators?",
      answer: "Absolutely! You can invite co-hosts to your podcast, participate in cross-promotions, and join our Creator Collaboration Hub to find potential partners.",
      category: "creating"
    },
    {
      id: 9,
      question: "What should I do if audio playback is choppy?",
      answer: "Choppy audio is usually due to internet connection issues. Try refreshing the page, checking your internet connection, or switching to a lower quality setting in the player options.",
      category: "technical"
    },
    {
      id: 10,
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime in Account Settings > Subscription > Cancel Subscription. You'll continue to have access until the end of your current billing period.",
      category: "account"
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const quickLinks = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      icon: "📖",
      link: "#guide"
    },
    {
      title: "Creator Resources",
      description: "Tools and tips for podcast creators",
      icon: "🎙️",
      link: "#creator"
    },
    {
      title: "Technical Support",
      description: "Troubleshooting and technical help",
      icon: "🔧",
      link: "#technical"
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: "💬",
      link: "/community"
    }
  ];

  return (
    <div className={styles.helpPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Help Center</h1>
          <p>Find answers to your questions and get the support you need</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.searchSection}>
          <div className={styles.searchCard}>
            <h2>How can we help you?</h2>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search for help articles, FAQs, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>🔍</button>
            </div>
          </div>
        </section>

        <section className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <div className={styles.linksGrid}>
            {quickLinks.map((link, index) => (
              <div key={index} className={styles.linkCard}>
                <div className={styles.linkIcon}>{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <Link to={link.link} className="btn btn-outline btn-sm">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          
          <div className={styles.categoryFilter}>
            {faqCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className={styles.faqList}>
            {filteredFaqs.length === 0 ? (
              <div className={styles.noResults}>
                <h3>No results found</h3>
                <p>Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              filteredFaqs.map(faq => (
                <details key={faq.id} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    {faq.question}
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))
            )}
          </div>
        </section>

        <section className={styles.contactSupport}>
          <div className={styles.supportCard}>
            <h2>Still Need Help?</h2>
            <p>Can't find what you're looking for? Our support team is here to help!</p>
            
            <div className={styles.supportOptions}>
              <div className={styles.supportOption}>
                <div className={styles.supportIcon}>💬</div>
                <h3>Live Chat</h3>
                <p>Get instant help from our support team</p>
                <button className="btn btn-primary">Start Chat</button>
              </div>
              
              <div className={styles.supportOption}>
                <div className={styles.supportIcon}>📧</div>
                <h3>Email Support</h3>
                <p>Send us a detailed message</p>
                <Link to="/contact" className="btn btn-outline">
                  Send Email
                </Link>
              </div>
              
              <div className={styles.supportOption}>
                <div className={styles.supportIcon}>📞</div>
                <h3>Phone Support</h3>
                <p>Speak directly with our team</p>
                <button className="btn btn-secondary">Call Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.resources}>
          <h2>Additional Resources</h2>
          <div className={styles.resourcesList}>
            <div className={styles.resourceItem}>
              <h3>📚 User Manual</h3>
              <p>Comprehensive guide to all platform features</p>
              <button className="btn btn-outline btn-sm">Download PDF</button>
            </div>
            
            <div className={styles.resourceItem}>
              <h3>🎥 Video Tutorials</h3>
              <p>Step-by-step video guides for common tasks</p>
              <button className="btn btn-outline btn-sm">Watch Videos</button>
            </div>
            
            <div className={styles.resourceItem}>
              <h3>🔄 System Status</h3>
              <p>Check current platform status and updates</p>
              <button className="btn btn-outline btn-sm">View Status</button>
            </div>
            
            <div className={styles.resourceItem}>
              <h3>📱 Mobile Apps</h3>
              <p>Download our mobile apps for iOS and Android</p>
              <button className="btn btn-outline btn-sm">Get Apps</button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}