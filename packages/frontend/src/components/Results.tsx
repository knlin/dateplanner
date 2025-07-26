import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface DatePlan {
  id: string;
  title: string;
  description: string;
  estimatedCost: number;
  activities: PlanActivity[];
}

interface PlanActivity {
  time: string;
  type: string;
  name: string;
  location: string;
  bookingLink: string;
  description: string;
}

export const Results = () => {
  const [plan, setPlan] = useState<DatePlan | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Get plan from navigation state or API call
    const planData = location.state?.plan;
    if (planData) {
      setPlan(planData);
    }
  }, [location]);

  if (!plan) {
    return <div className="loading">Generating your perfect date plan...</div>;
  }

  return (
    <div className="results-container">
      <h1>{plan.title}</h1>
      <p>{plan.description}</p>
      <div className="estimated-cost">
        Estimated Cost: ${plan.estimatedCost}
      </div>
      
      <div className="activities">
        {plan.activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <div className="activity-time">{activity.time}</div>
            <h3>{activity.name}</h3>
            <p>{activity.location}</p>
            <p>{activity.description}</p>
            <a 
              href={activity.bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="booking-button"
            >
              Book Now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};