import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './Login.module.css';

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
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
        email: formData.email,
        fullName: 'Demo User',
        loginAt: new Date().toISOString()
      };

      if (onLogin) {
        onLogin(userData);
      }

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <Link to="/" className={styles.backLink}>← Back to Home</Link>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🎙️</span>
              <span className={styles.logoText}>RISE & Speak™</span>
            </div>
            <h1>Welcome Back</h1>
            <p>Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.loginForm}>
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
                  placeholder="Enter your password"
                />
                {errors.password && <span className={styles.errorText}>{errors.password}</span>}
              </label>
            </div>

            <div className={styles.formOptions}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>Remember me</span>
              </label>
              <Link to="/forgot-password" className={styles.forgotLink}>
                Forgot password?
              </Link>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary btn-lg ${styles.submitButton}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner}></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <div className={styles.socialLogin}>
            <button className={`btn btn-outline ${styles.socialButton}`}>
              <span className={styles.socialIcon}>🔍</span>
              Continue with Google
            </button>
            <button className={`btn btn-outline ${styles.socialButton}`}>
              <span className={styles.socialIcon}>📘</span>
              Continue with Facebook
            </button>
          </div>

          <div className={styles.footer}>
            <p>Don't have an account? <Link to="/register">Create one here</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}