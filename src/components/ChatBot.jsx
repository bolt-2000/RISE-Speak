import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your RISE & Speak assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "How do I start a podcast?",
    "Pricing information",
    "Technical support",
    "Account help",
    "Upload issues"
  ];

  const botResponses = {
    "how do i start a podcast": "Great question! To start a podcast on RISE & Speak:\n\n1. Create your account\n2. Set up your podcast profile\n3. Record or upload your first episode\n4. Add artwork and description\n5. Publish to reach your audience!\n\nWould you like me to guide you through any specific step?",
    
    "pricing information": "Here are our pricing plans:\n\n🆓 **Starter** - Free\n• Up to 5 episodes/month\n• Basic analytics\n• Community support\n\n💎 **Creator** - $19/month\n• Unlimited episodes\n• Advanced analytics\n• Monetization tools\n• Priority support\n\n🚀 **Pro** - $49/month\n• Everything in Creator\n• Multi-show management\n• Team collaboration\n• API access\n\nWould you like to know more about any plan?",
    
    "technical support": "I can help with technical issues! Common solutions:\n\n🎧 **Audio Issues:**\n• Check your microphone settings\n• Ensure files are in MP3/WAV format\n• Maximum file size: 500MB\n\n📱 **App Problems:**\n• Try refreshing your browser\n• Clear cache and cookies\n• Update to latest browser version\n\nWhat specific issue are you experiencing?",
    
    "account help": "I can assist with account-related questions:\n\n👤 **Account Management:**\n• Reset password via login page\n• Update profile in Settings\n• Change subscription in Billing\n\n🔒 **Security:**\n• Enable 2FA in Security settings\n• Review login activity\n• Update email preferences\n\nWhat do you need help with?",
    
    "upload issues": "Having trouble uploading? Here's how to fix common issues:\n\n📁 **File Requirements:**\n• Supported formats: MP3, WAV, M4A\n• Maximum size: 500MB\n• Recommended bitrate: 128kbps or higher\n\n🔧 **Troubleshooting:**\n• Check your internet connection\n• Try a different browser\n• Disable browser extensions\n• Clear browser cache\n\nStill having issues? I can connect you with our technical team!",
    
    "default": "I understand you're looking for help. Here are some things I can assist you with:\n\n• Getting started with podcasting\n• Account and billing questions\n• Technical support\n• Upload and publishing help\n• Platform features\n\nYou can also contact our support team at support@risespeak.com or use the contact form on our website. What would you like to know more about?"
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Check for specific keywords and return appropriate response
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    
    // Check for greeting
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to RISE & Speak. I'm here to help you with any questions about our podcast platform. What can I assist you with today?";
    }
    
    // Check for thanks
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with today? I'm here whenever you need assistance with RISE & Speak.";
    }
    
    // Default response
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    handleSendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`${styles.chatToggle} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat support"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className={styles.chatWidget}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.botAvatar}>🤖</div>
              <div>
                <h3>RISE & Speak Assistant</h3>
                <span className={styles.status}>
                  <span className={styles.statusDot}></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`${styles.message} ${styles[message.sender]}`}
              >
                <div className={styles.messageContent}>
                  <div className={styles.messageText}>
                    {message.text.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < message.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className={styles.messageTime}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className={styles.quickReplies}>
              <p>Quick questions:</p>
              <div className={styles.quickReplyButtons}>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    className={styles.quickReplyButton}
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={styles.chatInput}>
            <div className={styles.inputContainer}>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={styles.messageInput}
                rows="1"
              />
              <button 
                className={styles.sendButton}
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}