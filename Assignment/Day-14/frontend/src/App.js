import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
   fetch('/api/visit')
      .then(response => response.json())
      .then(data => setCount(data.visits));
  }, []);

  return (
    <div className="App">
      <h1> Welcome!</h1>
      <h2>Total Visitors: {count}</h2>
    </div>
  );
}

export default App;
