import React from 'react';
import './Filter.css';

const Filter = ({ setFilterType }) => {
  const handleChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="filter-container">
      <label>Filter by event type:</label>
      <select onChange={handleChange}>
        <option value="all">All</option>
        <option value="PushEvent">PushEvent</option>
        <option value="PullRequestEvent">PullRequestEvent</option>
        <option value="IssuesEvent">IssuesEvent</option>
        <option value="ForkEvent">ForkEvent</option>
        <option value="WatchEvent">WatchEvent</option>
      </select>
    </div>
  );
};

export default Filter;
