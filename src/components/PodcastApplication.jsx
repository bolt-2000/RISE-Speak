import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './PodcastApplication.module.css';

export default function PodcastApplication() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    podcastTitle: '',
    category: '',
    description: '',
    experience: '',
    audience: '',
    topics: '',
    duration: '',
    format: '',
    equipment: '',
    socialMedia: {
      twitter: '',
      instagram: '',
      linkedin: '',
      youtube: ''
    },
    previousWork: '',
    availability: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableDate, setAvailableDate] = useState(null);

  const categories = [
    'Technology', 'Business', 'Health & Fitness', 'Comedy', 'Education',
    'News & Politics', 'True Crime', 'Sports', 'Arts & Culture', 'Science',
    'History', 'Music', 'Self-Improvement', 'Entertainment', 'Other'
  ];

  const experienceLevels = [
    'Complete Beginner',
    'Some Experience (1-2 years)',
    'Experienced (3-5 years)',
    'Very Experienced (5+ years)',
    'Professional Podcaster'
  ];

  const formatTypes = [
    'Solo Show',
    'Interview Style',
    'Panel Discussion',
    'Storytelling',
    'Educational/Tutorial',
    'News/Commentary',
    'Comedy/Entertainment'
  ];

  const durationOptions = [
    '15-30 minutes',
    '30-45 minutes',
    '45-60 minutes',
    '60-90 minutes',
    '90+ minutes'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.podcastTitle.trim()) newErrors.podcastTitle = 'Podcast title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.topics.trim()) newErrors.topics = 'Topics are required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.format) newErrors.format = 'Format is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateAvailableDate = () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + Math.floor(Math.random() * 14) + 7); // 1-3 weeks from now
    
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    
    return futureDate.toLocaleDateString('en-US', options);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setAvailableDate(generateAvailableDate());
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className={styles.applicationPage}>
        <div className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>🎉</div>
            <h1>Application Submitted Successfully!</h1>
            <p>Thank you for your interest in creating a podcast with RISE & Speak!</p>
            
            <div className={styles.scheduleInfo}>
              <h2>📅 Your Scheduled Session</h2>
              <div className={styles.dateCard}>
                <div className={styles.dateIcon}>🗓️</div>
                <div className={styles.dateDetails}>
                  <h3>Podcast Recording Session</h3>
                  <p className={styles.scheduledDate}>{availableDate}</p>
                  <p className={styles.timezone}>Pacific Standard Time (PST)</p>
                </div>
              </div>
            </div>

            <div className={styles.nextSteps}>
              <h3>What happens next?</h3>
              <div className={styles.stepsList}>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>1</span>
                  <div>
                    <h4>Confirmation Email</h4>
                    <p>You'll receive a detailed confirmation email within 24 hours</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>2</span>
                  <div>
                    <h4>Pre-Recording Call</h4>
                    <p>We'll schedule a brief call to discuss your podcast concept</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>3</span>
                  <div>
                    <h4>Recording Session</h4>
                    <p>Professional recording session at the scheduled time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.successActions}>
              <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
              <Link to="/dashboard" className="btn btn-outline btn-lg">Go to Dashboard</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.applicationPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Apply for Podcast Creation</h1>
          <p>Share your story, expertise, and passion with the world</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2>Tell Us About Your Podcast Idea</h2>
            <p>We'll help you bring your vision to life with professional recording and production</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.applicationForm}>
            {/* Personal Information */}
            <section className={styles.formSection}>
              <h3>Personal Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Full Name *
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.fullName ? styles.error : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Email Address *
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Phone Number *
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.phone ? styles.error : ''}`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  </label>
                </div>
              </div>
            </section>

            {/* Podcast Details */}
            <section className={styles.formSection}>
              <h3>Podcast Details</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Podcast Title *
                    <input
                      type="text"
                      name="podcastTitle"
                      value={formData.podcastTitle}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.podcastTitle ? styles.error : ''}`}
                      placeholder="What's your podcast called?"
                    />
                    {errors.podcastTitle && <span className={styles.errorText}>{errors.podcastTitle}</span>}
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Category *
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.category ? styles.error : ''}`}
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    {errors.category && <span className={styles.errorText}>{errors.category}</span>}
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Experience Level *
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.experience ? styles.error : ''}`}
                    >
                      <option value="">Select your experience</option>
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    {errors.experience && <span className={styles.errorText}>{errors.experience}</span>}
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Podcast Format *
                    <select
                      name="format"
                      value={formData.format}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.format ? styles.error : ''}`}
                    >
                      <option value="">Select format</option>
                      {formatTypes.map(format => (
                        <option key={format} value={format}>{format}</option>
                      ))}
                    </select>
                    {errors.format && <span className={styles.errorText}>{errors.format}</span>}
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Episode Duration *
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.duration ? styles.error : ''}`}
                    >
                      <option value="">Select duration</option>
                      {durationOptions.map(duration => (
                        <option key={duration} value={duration}>{duration}</option>
                      ))}
                    </select>
                    {errors.duration && <span className={styles.errorText}>{errors.duration}</span>}
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Target Audience
                    <input
                      type="text"
                      name="audience"
                      value={formData.audience}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Who is your target audience?"
                    />
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Podcast Description *
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className={`${styles.formTextarea} ${errors.description ? styles.error : ''}`}
                    placeholder="Describe your podcast concept, what makes it unique, and what value it provides to listeners..."
                    rows="4"
                  />
                  {errors.description && <span className={styles.errorText}>{errors.description}</span>}
                </label>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Topics You'll Cover *
                  <textarea
                    name="topics"
                    value={formData.topics}
                    onChange={handleInputChange}
                    className={`${styles.formTextarea} ${errors.topics ? styles.error : ''}`}
                    placeholder="List the main topics, themes, or subjects you plan to discuss..."
                    rows="3"
                  />
                  {errors.topics && <span className={styles.errorText}>{errors.topics}</span>}
                </label>
              </div>
            </section>

            {/* Technical & Social */}
            <section className={styles.formSection}>
              <h3>Technical & Social Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Recording Equipment
                    <input
                      type="text"
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="What recording equipment do you have?"
                    />
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Previous Work/Portfolio
                    <input
                      type="url"
                      name="previousWork"
                      value={formData.previousWork}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Link to previous podcasts, videos, or content"
                    />
                  </label>
                </div>
              </div>

              <div className={styles.socialMediaSection}>
                <h4>Social Media Presence (Optional)</h4>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Twitter/X
                      <input
                        type="url"
                        name="socialMedia.twitter"
                        value={formData.socialMedia.twitter}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="https://twitter.com/username"
                      />
                    </label>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Instagram
                      <input
                        type="url"
                        name="socialMedia.instagram"
                        value={formData.socialMedia.instagram}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="https://instagram.com/username"
                      />
                    </label>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      LinkedIn
                      <input
                        type="url"
                        name="socialMedia.linkedin"
                        value={formData.socialMedia.linkedin}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="https://linkedin.com/in/username"
                      />
                    </label>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      YouTube
                      <input
                        type="url"
                        name="socialMedia.youtube"
                        value={formData.socialMedia.youtube}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="https://youtube.com/channel/..."
                      />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className={styles.formSection}>
              <h3>Additional Information</h3>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Availability
                  <textarea
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    placeholder="When are you typically available for recording? (days, times, timezone)"
                    rows="2"
                  />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Special Requests or Requirements
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    placeholder="Any special requirements, accessibility needs, or additional information we should know?"
                    rows="3"
                  />
                </label>
              </div>
            </section>

            <div className={styles.submitSection}>
              <button 
                type="submit" 
                className={`btn btn-primary btn-lg ${styles.submitButton}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Processing Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
              <p className={styles.submitNote}>
                We'll review your application and get back to you within 24-48 hours with available recording dates.
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}