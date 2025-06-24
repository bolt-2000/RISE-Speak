import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Creators.module.css';

export default function Creators() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: '🎙️',
      title: 'Professional Recording Tools',
      description: 'High-quality audio recording with built-in editing capabilities'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Detailed insights into your audience and episode performance'
    },
    {
      icon: '💰',
      title: 'Multiple Revenue Streams',
      description: 'Monetize through subscriptions, donations, and sponsorships'
    },
    {
      icon: '🌍',
      title: 'Global Distribution',
      description: 'Reach listeners worldwide with automatic distribution'
    },
    {
      icon: '🤝',
      title: 'Community Building',
      description: 'Engage with your audience through comments and live sessions'
    },
    {
      icon: '📱',
      title: 'Mobile Creator App',
      description: 'Record, edit, and publish directly from your mobile device'
    }
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      podcast: 'Tech Talk Daily',
      achievement: 'Reached 1M+ downloads in 6 months',
      revenue: '$15K/month',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      quote: 'RISE & Speak gave me all the tools I needed to turn my passion into a profitable business.'
    },
    {
      name: 'Mike Rodriguez',
      podcast: 'Comedy Central Pod',
      achievement: 'Built audience of 500K+ subscribers',
      revenue: '$8K/month',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      quote: 'The monetization features helped me quit my day job and focus on creating full-time.'
    },
    {
      name: 'Dr. Emily Chen',
      podcast: 'Science Simplified',
      achievement: 'Featured in top education podcasts',
      revenue: '$12K/month',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      quote: 'The analytics helped me understand my audience and create better content.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for beginners',
      features: [
        'Up to 5 episodes per month',
        'Basic analytics',
        'Community support',
        'Standard audio quality'
      ],
      cta: 'Start Free'
    },
    {
      name: 'Creator',
      price: '$19/month',
      description: 'For serious podcasters',
      features: [
        'Unlimited episodes',
        'Advanced analytics',
        'Priority support',
        'HD audio quality',
        'Custom branding',
        'Monetization tools'
      ],
      cta: 'Start Creating',
      popular: true
    },
    {
      name: 'Pro',
      price: '$49/month',
      description: 'For podcast networks',
      features: [
        'Everything in Creator',
        'Multi-show management',
        'Team collaboration',
        'White-label options',
        'API access',
        'Dedicated account manager'
      ],
      cta: 'Go Pro'
    }
  ];

  return (
    <div className={styles.creatorsPage}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <div className={styles.heroContent}>
            <h1>Create. Monetize. Grow.</h1>
            <p>
              Join thousands of creators who've turned their passion into profit with 
              RISE & Speak's comprehensive podcasting platform.
            </p>
            <div className={styles.heroActions}>
              <Link to="/register" className="btn btn-primary btn-lg">Start Creating Today</Link>
              <button className="btn btn-outline btn-lg">Watch Demo</button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Active Creators</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>$2M+</span>
                <span className={styles.statLabel}>Creator Earnings</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50M+</span>
                <span className={styles.statLabel}>Total Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.features}>
          <h2>Everything You Need to Succeed</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.successStories}>
          <h2>Creator Success Stories</h2>
          <div className={styles.storiesGrid}>
            {successStories.map((story, index) => (
              <div key={index} className={styles.storyCard}>
                <div className={styles.storyHeader}>
                  <img src={story.avatar} alt={story.name} />
                  <div className={styles.storyInfo}>
                    <h3>{story.name}</h3>
                    <p>{story.podcast}</p>
                  </div>
                </div>
                <div className={styles.storyAchievements}>
                  <div className={styles.achievement}>
                    <span className={styles.achievementLabel}>Achievement</span>
                    <span className={styles.achievementValue}>{story.achievement}</span>
                  </div>
                  <div className={styles.achievement}>
                    <span className={styles.achievementLabel}>Monthly Revenue</span>
                    <span className={styles.achievementValue}>{story.revenue}</span>
                  </div>
                </div>
                <blockquote className={styles.quote}>
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.howItWorks}>
          <h2>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Create Your Account</h3>
              <p>Sign up in minutes and set up your podcast profile with our easy onboarding process.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Record & Upload</h3>
              <p>Use our built-in recording tools or upload your existing audio files with drag-and-drop simplicity.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Customize & Publish</h3>
              <p>Add artwork, descriptions, and metadata. Publish instantly to reach your audience worldwide.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Grow & Monetize</h3>
              <p>Use our analytics to understand your audience and monetize through multiple revenue streams.</p>
            </div>
          </div>
        </section>

        <section className={styles.pricing}>
          <h2>Choose Your Plan</h2>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}>
                {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className={styles.price}>{plan.price}</div>
                <p className={styles.planDescription}>{plan.description}</p>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-lg`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.resources}>
          <h2>Creator Resources</h2>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>📖</div>
              <h3>Creator Handbook</h3>
              <p>Complete guide to podcasting success</p>
              <button className="btn btn-outline btn-sm">Download Free</button>
            </div>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>🎥</div>
              <h3>Video Tutorials</h3>
              <p>Step-by-step video guides</p>
              <button className="btn btn-outline btn-sm">Watch Now</button>
            </div>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>💬</div>
              <h3>Creator Community</h3>
              <p>Connect with fellow podcasters</p>
              <Link to="/community" className="btn btn-outline btn-sm">Join Community</Link>
            </div>
            <div className={styles.resourceCard}>
              <div className={styles.resourceIcon}>🎧</div>
              <h3>Equipment Guide</h3>
              <p>Recommended gear for every budget</p>
              <button className="btn btn-outline btn-sm">View Guide</button>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaCard}>
            <h2>Ready to Start Your Podcast Journey?</h2>
            <p>Join thousands of creators who've already started building their audience and earning revenue.</p>
            <div className={styles.ctaActions}>
              <Link to="/register" className="btn btn-primary btn-lg">Get Started Free</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Talk to Sales</Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}