import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, BookOpen, Trophy, Target, BarChart3, Edit2, LogOut } from 'lucide-react';
import './profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Khushali Deore',
    email: 'khushali@example.com',
    phone: '+91 9876543210',
    location: 'Pune, India',
    bio: 'Aspiring software engineer passionate about competitive programming',
  });

  const [formData, setFormData] = useState(profileData);

  const stats = [
    {
      id: 1,
      icon: <Target size={28} />,
      title: 'Questions Solved',
      value: '245',
      color: '#6b46ff',
    },
    {
      id: 2,
      icon: <Trophy size={28} />,
      title: 'Tests Completed',
      value: '32',
      color: '#10b981',
    },
    {
      id: 3,
      icon: <BarChart3 size={28} />,
      title: 'Accuracy Rate',
      value: '78%',
      color: '#3b82f6',
    },
    {
      id: 4,
      icon: <BookOpen size={28} />,
      title: 'Topics Covered',
      value: '18',
      color: '#f59e0b',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-banner"></div>
        <div className="profile-content">
          <div className="profile-avatar">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Khushali&backgroundColor=e2e8f0"
              alt="Profile Avatar"
              className="avatar-img"
            />
          </div>
          <div className="profile-info-header">
            <h1 className="profile-name">{profileData.name}</h1>
            <p className="profile-bio">{profileData.bio}</p>
            <button
              className={`edit-btn ${isEditing ? 'active' : ''}`}
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit2 size={18} /> {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-main">
        {/* Left Column - Personal Info */}
        <div className="profile-section personal-info-section">
          <h2 className="section-title">Personal Information</h2>
          
          {!isEditing ? (
            <div className="info-display">
              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <span className="info-value">{profileData.email}</span>
                </div>
              </div>
              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{profileData.phone}</span>
                </div>
              </div>
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <span className="info-value">{profileData.location}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="info-edit">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                />
              </div>
              <div className="form-actions">
                <button className="btn btn-save" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="btn btn-cancel" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Stats */}
        <div className="profile-section stats-section">
          <h2 className="section-title">Your Statistics</h2>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card" style={{ borderTopColor: stat.color }}>
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-value">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="profile-section activity-section">
        <h2 className="section-title">Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p className="activity-text">Completed Aptitude Test - Scored 82%</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p className="activity-text">Solved 10 Reasoning questions</p>
              <span className="activity-time">4 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p className="activity-text">Completed Verbal Ability Mock Test</p>
              <span className="activity-time">1 week ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p className="activity-text">Solved 5 Coding problems</p>
              <span className="activity-time">1 week ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <div className="logout-section">
        <button className="btn btn-logout">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
