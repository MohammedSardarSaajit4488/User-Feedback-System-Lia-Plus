import { useState } from 'react';
import axios from 'axios';

function FeedbackForm({ onSubmitted }) {
  const [form, setForm] = useState({ name: '', email: '', text: '', category: 'Suggestion' });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/feedback', form);
    alert('Feedback submitted!');
    setForm({ name: '', email: '', text: '', category: 'Suggestion' });
    if (onSubmitted) onSubmitted(); // ✅ notify parent to refresh
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
      <textarea placeholder="Feedback" value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} required />
      <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
        <option>Suggestion</option>
        <option>Bug Report</option>
        <option>Feature Request</option>
      </select>
      <button className="btn" type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
