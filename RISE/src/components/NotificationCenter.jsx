import React, { useState } from 'react';
import { useRealTimeNotifications } from '../hooks/useRealTime';
import styles from './NotificationCenter.module.css';

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, markAsRead, clearAll } = useRealTimeNotifications();
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
  };

  return (
    <div className={styles.notificationCenter}>
      <button 
        className={styles.notificationButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        🔔
        {unreadCount > 0 && (
          <span className={styles.badge}>{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className={styles.notificationPanel}>
          <div className={styles.panelHeader}>
            <h3>Notifications</h3>
            {notifications.length > 0 && (
              <button onClick={clearAll} className={styles.clearButton}>
                Clear All
              </button>
            )}
          </div>

          <div className={styles.notificationsList}>
            {notifications.length === 0 ? (
              <div className={styles.emptyState}>
                <span>🔕</span>
                <p>No notifications</p>
              </div>
            ) : (
              notifications.map(notification => (
                <div 
                  key={notification.id}
                  className={`${styles.notificationItem} ${!notification.read ? styles.unread : ''}`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className={styles.notificationIcon}>
                    {notification.type === 'new_episode' ? '🎧' : '🔴'}
                  </div>
                  <div className={styles.notificationContent}>
                    <h4>{notification.title}</h4>
                    <p>{notification.message}</p>
                    <span className={styles.timestamp}>
                      {notification.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  {!notification.read && <div className={styles.unreadDot}></div>}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}