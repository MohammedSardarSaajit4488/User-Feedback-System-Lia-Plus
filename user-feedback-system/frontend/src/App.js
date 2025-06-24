// App.js
import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(0);
  const handleRefresh = () => setRefresh((prev) => prev + 1);

  return (
    <div className="container">
      <div className="left-pane">
        <h1>User Feedback</h1>
        <FeedbackForm onSubmitted={handleRefresh} />
      </div>
      <div className="right-pane">
        <FeedbackDashboard refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
