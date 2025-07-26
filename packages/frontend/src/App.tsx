import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Onboarding } from './components/Onboarding';
import { PlanningForm } from './components/PlanningForm';
import { Results } from './components/Results';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    console.log('Login with Google clicked');
    // Future logic for OAuth will go here
    setIsAuthenticated(true);
  };

  const HomePage = () => (
    <div className="home-page">
      <header className="hero">
        <h1>DatePlanner</h1>
        <p>AI-powered date planning with one-click booking</p>
      </header>
      <main className="home-content">
        {!isAuthenticated ? (
          <button onClick={handleLogin} className="cta-button">
            Get Started with Google
          </button>
        ) : (
          <div className="authenticated-actions">
            <Link to="/onboarding" className="action-button">
              Set Your Preferences
            </Link>
            <Link to="/planning" className="action-button primary">
              Plan a Date
            </Link>
          </div>
        )}
      </main>
    </div>
  );

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-brand">DatePlanner</Link>
          {isAuthenticated && (
            <div className="nav-links">
              <Link to="/onboarding">Preferences</Link>
              <Link to="/planning">Plan Date</Link>
            </div>
          )}
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/planning" element={<PlanningForm />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
