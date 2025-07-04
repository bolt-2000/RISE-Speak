import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './Register.module.css';

export default function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

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
      const userData = {
        id: Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        joinedAt: new Date().toISOString()
      };

      if (onRegister) {
        onRegister(userData);
      }

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <div className={styles.registerCard}>
          <div className={styles.header}>
            <Link to="/" className={styles.backLink}>← Back to Home</Link>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🎙️</span>
              <span className={styles.logoText}>RISE & Speak™</span>
            </div>
            <h1>Create Your Account</h1>
            <p>Join thousands of creators and listeners worldwide</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.registerForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Full Name
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
                Email Address
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
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.password ? styles.error : ''}`}
                  placeholder="Create a strong password"
                />
                {errors.password && <span className={styles.errorText}>{errors.password}</span>}
              </label>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.confirmPassword ? styles.error : ''}`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
              </label>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>
                  I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                </span>
                {errors.agreeToTerms && <span className={styles.errorText}>{errors.agreeToTerms}</span>}
              </label>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary btn-lg ${styles.submitButton}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner}></div>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className={styles.footer}>
            <p>Already have an account? <Link to="/login">Sign in here</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}