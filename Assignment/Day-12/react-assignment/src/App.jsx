import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import Filter from './components/Filter';
import ActivityList from './components/ActivityList';

const App = () => {
  const [events, setEvents] = useState([]);
  const [profile, setProfile] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const fetchActivity = async (user) => {
    try {
      const [activityRes, profileRes] = await Promise.all([
        fetch(`https://api.github.com/users/${user}/events`),
        fetch(`https://api.github.com/users/${user}`)
      ]);

      const activityData = await activityRes.json();
      const profileData = await profileRes.json();

      setEvents(activityData);
      setProfile(profileData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setEvents([]);
      setProfile(null);
    }
  };

  return (
    <div className="app-container">
      <h2>GitHub Activity Viewer</h2>
      <SearchBar fetchActivity={fetchActivity} />
      <Filter setFilterType={setFilterType} />
      <UserProfile profile={profile} />
      <ActivityList events={events} filterType={filterType} />
    </div>
  );
};

export default App;
