import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import styles from './Careers.module.css';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our frontend team to build the next generation of podcast streaming experiences.",
      requirements: ["React/TypeScript expertise", "Modern CSS/Styling", "Performance optimization", "Testing frameworks"]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Lead product strategy and development for our creator tools and listener experience.",
      requirements: ["Product management experience", "Data-driven decision making", "User research", "Agile methodologies"]
    },
    {
      id: 3,
      title: "Content Partnerships Manager",
      department: "Business",
      location: "Los Angeles, CA / Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build relationships with podcast creators and manage strategic partnerships.",
      requirements: ["Partnership management", "Content industry experience", "Negotiation skills", "Relationship building"]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX / Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Scale our infrastructure to support millions of podcast listeners worldwide.",
      requirements: ["AWS/Cloud platforms", "Kubernetes", "CI/CD pipelines", "Monitoring & observability"]
    },
    {
      id: 5,
      title: "UX Designer",
      department: "Design",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Design intuitive and engaging user experiences for our podcast platform.",
      requirements: ["User experience design", "Prototyping tools", "User research", "Design systems"]
    },
    {
      id: 6,
      title: "Marketing Intern",
      department: "Marketing",
      location: "Remote",
      type: "Internship",
      experience: "Student/Entry level",
      description: "Support our marketing team with campaigns, content creation, and analytics.",
      requirements: ["Marketing fundamentals", "Social media", "Content creation", "Analytics tools"]
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Business', 'Marketing'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Market-leading compensation packages with equity options"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance"
    },
    {
      icon: "🏠",
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and home office stipend"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual learning budget and conference attendance support"
    },
    {
      icon: "🌴",
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and maintain work-life balance"
    },
    {
      icon: "🎧",
      title: "Podcast Perks",
      description: "Premium platform access and exclusive creator events"
    }
  ];

  return (
    <div className={styles.careersPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          <h1>Join Our Team</h1>
          <p>Help us revolutionize the podcast industry and amplify voices worldwide</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            At RISE & Speak, we're building the future of audio content. Join a passionate team 
            dedicated to empowering creators and connecting listeners through innovative technology 
            and exceptional user experiences.
          </p>
        </section>

        <section className={styles.benefits}>
          <h2>Why Work With Us?</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.openings}>
          <div className={styles.openingsHeader}>
            <h2>Open Positions</h2>
            <div className={styles.departmentFilter}>
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`${styles.filterBtn} ${selectedDepartment === dept ? styles.active : ''}`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.jobsList}>
            {filteredJobs.map(job => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <div>
                    <h3>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.department}>{job.department}</span>
                      <span className={styles.location}>{job.location}</span>
                      <span className={styles.type}>{job.type}</span>
                    </div>
                  </div>
                  <div className={styles.experience}>{job.experience}</div>
                </div>
                
                <p className={styles.jobDescription}>{job.description}</p>
                
                <div className={styles.requirements}>
                  <h4>Key Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.jobActions}>
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className={styles.noJobs}>
              <h3>No openings in {selectedDepartment}</h3>
              <p>Check back soon or view all departments for other opportunities.</p>
            </div>
          )}
        </section>

        <section className={styles.culture}>
          <h2>Our Culture</h2>
          <div className={styles.cultureGrid}>
            <div className={styles.cultureCard}>
              <h3>🚀 Innovation First</h3>
              <p>We encourage experimentation and bold ideas that push the boundaries of what's possible.</p>
            </div>
            <div className={styles.cultureCard}>
              <h3>🤝 Collaboration</h3>
              <p>We believe the best solutions come from diverse perspectives working together.</p>
            </div>
            <div className={styles.cultureCard}>
              <h3>📈 Growth Mindset</h3>
              <p>We invest in our team's professional development and celebrate continuous learning.</p>
            </div>
            <div className={styles.cultureCard}>
              <h3>🌍 Global Impact</h3>
              <p>Our work connects millions of people worldwide through the power of audio storytelling.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}