import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🎙️</span>
          <span className={styles.logoText}>RISE & Speak™</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link to="/discover" className={styles.navLink}>Discover</Link>
          <Link to="/trending" className={styles.navLink}>Trending</Link>
          <Link to="/categories" className={styles.navLink}>Categories</Link>
          <Link to="/creators" className={styles.navLink}>For Creators</Link>
          <Link to="/community" className={styles.navLink}>Community</Link>
        </nav>

        <div className={styles.actions}>
          {user ? (
            <div className={styles.userMenu}>
              <Link to="/dashboard" className="btn btn-outline btn-sm">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-primary btn-sm">
                Logout
              </button>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className="btn btn-outline btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
            </div>
          )}

          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}