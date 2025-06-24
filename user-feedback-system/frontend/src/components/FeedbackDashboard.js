import { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackDashboard({ refresh }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/feedback').then(res => setData(res.data));
  }, [refresh]);

  const grouped = {
    Suggestion: [],
    'Bug Report': [],
    'Feature Request': []
  };

  data.forEach(fb => {
    if (grouped[fb.category]) {
      grouped[fb.category].push(fb);
    }
  });

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await axios.delete(`http://localhost:5000/feedback/${id}`);
      setData(data.filter(fb => fb._id !== id));
    }
  };

  return (
    <div className="dashboard">
      <h2>Feedback Dashboard</h2>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h3 style={{ color: '#007bff', marginTop: '25px' }}>{category}</h3>
          {items.length === 0 ? (
            <p style={{ fontStyle: 'italic', color: '#999' }}>No feedback yet.</p>
          ) : (
            items.map(fb => (
              <div key={fb._id} className="card">
                <h4>{fb.name} ({fb.email})</h4>
                <p>{fb.text}</p>
                <p className="date">{new Date(fb.createdAt).toLocaleString()}</p>
                <button onClick={() => deleteFeedback(fb._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default FeedbackDashboard;
