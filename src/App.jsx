import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Discover from "./components/Discover";
import Trending from "./components/Trending";
import HomePage from "./components/HomePage";
import AdminPanel from "./components/AdminPanel";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import Help from "./components/pages/Help";
import Careers from "./components/pages/Careers";
import Press from "./components/pages/Press";
import Blog from "./components/pages/Blog";
import Community from "./components/pages/Community";
import Cookies from "./components/pages/Cookies";
import DMCA from "./components/pages/DMCA";
import Categories from "./components/pages/Categories";
import Creators from "./components/pages/Creators";
import PodcastApplication from "./components/PodcastApplication";
import ChatBot from "./components/ChatBot";

function App() {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/dmca" element={<DMCA />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/apply" element={<PodcastApplication />} />
        <Route path="/feedback" element={<Contact />} />
        <Route path="/player" element={
          <>
            <Header user={user} onLogout={handleLogout} />
            <div className="main-content">
              <Sidebar onSelectEpisode={setCurrentEpisode} />
              <Player episode={currentEpisode} />
            </div>
          </>
        } />
        <Route path="/" element={
          <>
            <Header user={user} onLogout={handleLogout} />
            <HomePage />
          </>
        } />
      </Routes>
      
      {/* Chat Bot - Available on all pages */}
      <ChatBot />
    </div>
  );
}

export default App;