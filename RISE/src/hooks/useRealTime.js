import { useState, useEffect, useRef } from 'react';

export const useRealTime = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const wsRef = useRef(null);

  useEffect(() => {
    // Simulate WebSocket connection
    const connectWebSocket = () => {
      try {
        // In a real app, this would be a WebSocket connection
        // For demo purposes, we'll simulate it
        setIsConnected(true);
        setLastUpdate(new Date());
        
        // Simulate periodic updates
        const interval = setInterval(() => {
          setLastUpdate(new Date());
        }, 5000);

        return () => clearInterval(interval);
      } catch (error) {
        console.error('WebSocket connection failed:', error);
        setIsConnected(false);
      }
    };

    const cleanup = connectWebSocket();
    return cleanup;
  }, []);

  const sendMessage = (message) => {
    if (isConnected) {
      console.log('Sending message:', message);
      // In a real app, this would send via WebSocket
    }
  };

  return {
    isConnected,
    lastUpdate,
    sendMessage
  };
};

export const useRealTimeStats = () => {
  const [stats, setStats] = useState({
    activeUsers: 15420,
    currentStreams: 2847,
    totalListens: 1250000,
    newEpisodes: 45
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        currentStreams: prev.currentStreams + Math.floor(Math.random() * 20) - 10,
        totalListens: prev.totalListens + Math.floor(Math.random() * 100),
        newEpisodes: prev.newEpisodes + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return stats;
};

export const useRealTimeNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newNotification = {
          id: Date.now(),
          type: Math.random() > 0.5 ? 'new_episode' : 'live_stream',
          title: Math.random() > 0.5 ? 'New Episode Available!' : 'Live Stream Started!',
          message: Math.random() > 0.5 ? 'Your favorite podcast just released a new episode' : 'Join the live discussion now',
          timestamp: new Date(),
          read: false
        };
        
        setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return {
    notifications,
    markAsRead,
    clearAll
  };
};