import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './AdminPanel.module.css';

export default function AdminPanel() {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    date: '',
    time: '',
    notes: ''
  });

  const categories = [
    { value: 'technology', label: 'Technology', icon: '💻' },
    { value: 'medical', label: 'Medical & Health', icon: '🏥' },
    { value: 'business', label: 'Business & Finance', icon: '💼' },
    { value: 'education', label: 'Education & Learning', icon: '📚' },
    { value: 'science', label: 'Science & Research', icon: '🔬' },
    { value: 'entertainment', label: 'Entertainment', icon: '🎭' },
    { value: 'comedy', label: 'Comedy', icon: '😂' },
    { value: 'sports', label: 'Sports & Fitness', icon: '⚽' },
    { value: 'music', label: 'Music & Arts', icon: '🎵' },
    { value: 'news', label: 'News & Politics', icon: '📰' },
    { value: 'history', label: 'History & Culture', icon: '📜' },
    { value: 'lifestyle', label: 'Lifestyle', icon: '🌟' },
    { value: 'crime', label: 'True Crime', icon: '🔍' },
    { value: 'religion', label: 'Religion & Spirituality', icon: '🙏' },
    { value: 'gaming', label: 'Gaming & Esports', icon: '🎮' },
    { value: 'parenting', label: 'Parenting & Family', icon: '👨‍👩‍👧‍👦' },
    { value: 'automotive', label: 'Automotive', icon: '🚗' },
    { value: 'food', label: 'Food & Cooking', icon: '🍳' },
    { value: 'travel', label: 'Travel & Adventure', icon: '✈️' },
    { value: 'other', label: 'Other', icon: '📂' }
  ];

  useEffect(() => {
    loadApplications();
  }, []);

  useEffect(() => {
    filterAndSortApplications();
  }, [applications, filterStatus, filterCategory, searchTerm, sortBy]);

  const loadApplications = () => {
    const storedApplications = JSON.parse(localStorage.getItem('podcastApplications') || '[]');
    setApplications(storedApplications);
  };

  const filterAndSortApplications = () => {
    let filtered = [...applications];

    // Filter by status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(app => app.status === filterStatus);
    }

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(app => app.category === filterCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.podcastTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort applications
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.submittedAt) - new Date(a.submittedAt);
        case 'oldest':
          return new Date(a.submittedAt) - new Date(b.submittedAt);
        case 'name':
          return a.fullName.localeCompare(b.fullName);
        case 'title':
          return a.podcastTitle.localeCompare(b.podcastTitle);
        default:
          return 0;
      }
    });

    setFilteredApplications(filtered);
  };

  const updateApplicationStatus = (id, newStatus, scheduledDate = null) => {
    const updatedApplications = applications.map(app => 
      app.id === id 
        ? { ...app, status: newStatus, scheduledDate }
        : app
    );
    setApplications(updatedApplications);
    localStorage.setItem('podcastApplications', JSON.stringify(updatedApplications));
  };

  const handleSchedule = (application) => {
    setSelectedApplication(application);
    setShowScheduleModal(true);
    setScheduleData({
      date: '',
      time: '',
      notes: ''
    });
  };

  const confirmSchedule = () => {
    if (scheduleData.date && scheduleData.time) {
      const scheduledDateTime = `${scheduleData.date} at ${scheduleData.time}`;
      updateApplicationStatus(selectedApplication.id, 'scheduled', scheduledDateTime);
      setShowScheduleModal(false);
      setSelectedApplication(null);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: '#f59e0b', label: 'Pending Review' },
      approved: { color: '#10b981', label: 'Approved' },
      scheduled: { color: '#3b82f6', label: 'Scheduled' },
      completed: { color: '#8b5cf6', label: 'Completed' },
      rejected: { color: '#ef4444', label: 'Rejected' }
    };

    const config = statusConfig[status] || statusConfig.pending;
    
    return (
      <span 
        className={styles.statusBadge}
        style={{ backgroundColor: config.color + '20', color: config.color }}
      >
        {config.label}
      </span>
    );
  };

  const getCategoryInfo = (categoryValue) => {
    return categories.find(cat => cat.value === categoryValue) || { icon: '📂', label: 'Other' };
  };

  const getStats = () => {
    const total = applications.length;
    const pending = applications.filter(app => app.status === 'pending').length;
    const approved = applications.filter(app => app.status === 'approved').length;
    const scheduled = applications.filter(app => app.status === 'scheduled').length;
    const completed = applications.filter(app => app.status === 'completed').length;

    return { total, pending, approved, scheduled, completed };
  };

  const stats = getStats();

  return (
    <div className={styles.adminPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Podcast Applications Admin</h1>
          <p>Manage and review podcast creation applications</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Stats Dashboard */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📊</div>
            <div className={styles.statInfo}>
              <h3>{stats.total}</h3>
              <p>Total Applications</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⏳</div>
            <div className={styles.statInfo}>
              <h3>{stats.pending}</h3>
              <p>Pending Review</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>✅</div>
            <div className={styles.statInfo}>
              <h3>{stats.approved}</h3>
              <p>Approved</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📅</div>
            <div className={styles.statInfo}>
              <h3>{stats.scheduled}</h3>
              <p>Scheduled</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🎉</div>
            <div className={styles.statInfo}>
              <h3>{stats.completed}</h3>
              <p>Completed</p>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className={styles.filtersSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search by name, email, or podcast title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          
          <div className={styles.filters}>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.icon} {category.label}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Sort by Name</option>
              <option value="title">Sort by Title</option>
            </select>
          </div>
        </div>

        {/* Applications List */}
        <div className={styles.applicationsSection}>
          <h2>Applications ({filteredApplications.length})</h2>
          
          {filteredApplications.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📭</div>
              <h3>No applications found</h3>
              <p>No applications match your current filters.</p>
            </div>
          ) : (
            <div className={styles.applicationsList}>
              {filteredApplications.map(application => {
                const categoryInfo = getCategoryInfo(application.category);
                return (
                  <div key={application.id} className={styles.applicationCard}>
                    <div className={styles.applicationHeader}>
                      <div className={styles.applicantInfo}>
                        <h3>{application.fullName}</h3>
                        <p>{application.email}</p>
                        <span className={styles.submissionDate}>
                          Submitted: {new Date(application.submittedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className={styles.applicationMeta}>
                        {getStatusBadge(application.status)}
                        <span className={styles.categoryBadge}>
                          {categoryInfo.icon} {categoryInfo.label}
                        </span>
                      </div>
                    </div>

                    <div className={styles.podcastInfo}>
                      <h4>{application.podcastTitle}</h4>
                      <p className={styles.description}>{application.description}</p>
                      <div className={styles.details}>
                        <span>📊 {application.experience}</span>
                        <span>🎙️ {application.format}</span>
                        <span>⏱️ {application.duration}</span>
                      </div>
                    </div>

                    {application.scheduledDate && (
                      <div className={styles.scheduleInfo}>
                        <strong>Scheduled: {application.scheduledDate}</strong>
                      </div>
                    )}

                    <div className={styles.applicationActions}>
                      <button 
                        className="btn btn-outline btn-sm"
                        onClick={() => setSelectedApplication(application)}
                      >
                        View Details
                      </button>
                      
                      {application.status === 'pending' && (
                        <>
                          <button 
                            className="btn btn-primary btn-sm"
                            onClick={() => updateApplicationStatus(application.id, 'approved')}
                          >
                            Approve
                          </button>
                          <button 
                            className="btn btn-secondary btn-sm"
                            onClick={() => updateApplicationStatus(application.id, 'rejected')}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      
                      {(application.status === 'approved' || application.status === 'scheduled') && (
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => handleSchedule(application)}
                        >
                          {application.status === 'scheduled' ? 'Reschedule' : 'Schedule'}
                        </button>
                      )}
                      
                      {application.status === 'scheduled' && (
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => updateApplicationStatus(application.id, 'completed')}
                        >
                          Mark Complete
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Application Details Modal */}
      {selectedApplication && !showScheduleModal && (
        <div className={styles.modal} onClick={() => setSelectedApplication(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Application Details</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedApplication(null)}
              >
                ✕
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailSection}>
                  <h3>Personal Information</h3>
                  <p><strong>Name:</strong> {selectedApplication.fullName}</p>
                  <p><strong>Email:</strong> {selectedApplication.email}</p>
                  <p><strong>Phone:</strong> {selectedApplication.phone}</p>
                </div>

                <div className={styles.detailSection}>
                  <h3>Podcast Details</h3>
                  <p><strong>Title:</strong> {selectedApplication.podcastTitle}</p>
                  <p><strong>Category:</strong> {getCategoryInfo(selectedApplication.category).label}</p>
                  <p><strong>Format:</strong> {selectedApplication.format}</p>
                  <p><strong>Duration:</strong> {selectedApplication.duration}</p>
                  <p><strong>Experience:</strong> {selectedApplication.experience}</p>
                  {selectedApplication.audience && (
                    <p><strong>Target Audience:</strong> {selectedApplication.audience}</p>
                  )}
                </div>

                <div className={styles.detailSection}>
                  <h3>Description</h3>
                  <p>{selectedApplication.description}</p>
                </div>

                <div className={styles.detailSection}>
                  <h3>Topics</h3>
                  <p>{selectedApplication.topics}</p>
                </div>

                {selectedApplication.equipment && (
                  <div className={styles.detailSection}>
                    <h3>Equipment</h3>
                    <p>{selectedApplication.equipment}</p>
                  </div>
                )}

                {selectedApplication.previousWork && (
                  <div className={styles.detailSection}>
                    <h3>Previous Work</h3>
                    <a href={selectedApplication.previousWork} target="_blank" rel="noopener noreferrer">
                      {selectedApplication.previousWork}
                    </a>
                  </div>
                )}

                {selectedApplication.availability && (
                  <div className={styles.detailSection}>
                    <h3>Availability</h3>
                    <p>{selectedApplication.availability}</p>
                  </div>
                )}

                {selectedApplication.specialRequests && (
                  <div className={styles.detailSection}>
                    <h3>Special Requests</h3>
                    <p>{selectedApplication.specialRequests}</p>
                  </div>
                )}

                <div className={styles.detailSection}>
                  <h3>Social Media</h3>
                  {Object.entries(selectedApplication.socialMedia).map(([platform, url]) => 
                    url && (
                      <p key={platform}>
                        <strong>{platform.charAt(0).toUpperCase() + platform.slice(1)}:</strong>{' '}
                        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className={styles.modal} onClick={() => setShowScheduleModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Schedule Recording Session</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setShowScheduleModal(false)}
              >
                ✕
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.scheduleForm}>
                <div className={styles.formGroup}>
                  <label>Date</label>
                  <input
                    type="date"
                    value={scheduleData.date}
                    onChange={(e) => setScheduleData({...scheduleData, date: e.target.value})}
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Time</label>
                  <input
                    type="time"
                    value={scheduleData.time}
                    onChange={(e) => setScheduleData({...scheduleData, time: e.target.value})}
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Notes (Optional)</label>
                  <textarea
                    value={scheduleData.notes}
                    onChange={(e) => setScheduleData({...scheduleData, notes: e.target.value})}
                    className={styles.formTextarea}
                    placeholder="Any additional notes for the recording session..."
                    rows="3"
                  />
                </div>
                
                <div className={styles.modalActions}>
                  <button 
                    className="btn btn-outline"
                    onClick={() => setShowScheduleModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={confirmSchedule}
                    disabled={!scheduleData.date || !scheduleData.time}
                  >
                    Confirm Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}