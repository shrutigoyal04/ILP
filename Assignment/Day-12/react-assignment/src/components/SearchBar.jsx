import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ fetchActivity }) => {
  const [input, setInput] = useState('');
  const history = JSON.parse(localStorage.getItem('history')) || [];

  const handleSearch = () => {
    if (!input.trim()) return;
    fetchActivity(input);
    const updatedHistory = [...new Set([input, ...history])].slice(0, 5);
    localStorage.setItem('history', JSON.stringify(updatedHistory));
  };

  return (
    <div className="search-bar">
      <input
        list="user-history"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <datalist id="user-history">
        {history.map((user, i) => (
          <option key={i} value={user} />
        ))}
      </datalist>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
