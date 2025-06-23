import React from 'react';
import './ActivityList.css';

const ActivityList = ({ events, filterType }) => {
  const filteredEvents = filterType === 'all'
    ? events
    : events.filter(event => event.type === filterType);

  return (
    <div className="activity-list">
      <h3>Recent Activities</h3>
      {filteredEvents.length === 0 ? (
        <p>No activity found.</p>
      ) : (
        <ul>
          {filteredEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.type}</strong> - {event.repo.name}
              <br />
              <small>{new Date(event.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityList;
