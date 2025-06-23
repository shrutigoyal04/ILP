import React from 'react';
import './UserProfile.css';

const UserProfile = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="profile-card">
      <img src={profile.avatar_url} alt="avatar" />
      <div className="info">
        <h3>{profile.name || profile.login}</h3>
        <p>{profile.bio}</p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          Visit GitHub Profile →
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
