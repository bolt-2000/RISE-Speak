import React from 'react';
import { useRealTime, useRealTimeStats } from '../hooks/useRealTime';
import styles from './RealTimeIndicator.module.css';

export default function RealTimeIndicator() {
  const { isConnected, lastUpdate } = useRealTime();
  const stats = useRealTimeStats();

  return (
    <div className={styles.realTimeIndicator}>
      <div className={styles.connectionStatus}>
        <div className={`${styles.statusDot} ${isConnected ? styles.connected : styles.disconnected}`}></div>
        <span className={styles.statusText}>
          {isConnected ? 'Live' : 'Offline'}
        </span>
      </div>
      
      <div className={styles.liveStats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>{stats.activeUsers.toLocaleString()}</span>
          <span className={styles.statLabel}>Online</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{stats.currentStreams.toLocaleString()}</span>
          <span className={styles.statLabel}>Listening</span>
        </div>
      </div>
      
      {lastUpdate && (
        <div className={styles.lastUpdate}>
          Last update: {lastUpdate.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}