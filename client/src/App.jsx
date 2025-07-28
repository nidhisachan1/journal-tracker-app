import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Welcome to My Journal Tracker</h1>
      <p><strong>Backend says:</strong> {message}</p>
    </div>
  );
}

export default App;