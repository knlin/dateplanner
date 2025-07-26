import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PlanningForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    city: '',
    duration: 'full' as 'short' | 'full' | 'extended',
    specialRequests: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences: formData })
      });
      
      const result = await response.json();
      if (result.success) {
        navigate('/results', { state: { plan: result.plan } });
      }
    } catch (error) {
      console.error('Failed to generate plan:', error);
    }
  };

  return (
    <div className="planning-form">
      <h1>Plan Your Perfect Date</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            placeholder="San Francisco"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Duration</label>
          <select
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value as any})}
          >
            <option value="short">Short (2-3 hours)</option>
            <option value="full">Full Evening (4-6 hours)</option>
            <option value="extended">Extended (All day)</option>
          </select>
        </div>
        
        <button type="submit" className="submit-button">
          Generate Date Plan
        </button>
      </form>
    </div>
  );
};