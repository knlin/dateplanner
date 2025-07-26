import { useState } from 'react';
import './App.css';
import { Onboarding } from './components/Onboarding';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleLogin = () => {
    console.log('Login with Google clicked');
    // Future logic for OAuth will go here
  };

  const handlePlanning = () => {
    console.log('Start Planning clicked');
    // Future logic to trigger planning will go here
  };

  return (
    <div className="App">
      {showOnboarding ? <Onboarding /> : (
        <>
          <header>
            <h1>DatePlanner</h1>
          </header>
          <main>
            <button onClick={handleLogin} className="action-button">
              Login with Google
            </button>
            <button onClick={handlePlanning} className="action-button">
              Start Planning
            </button>
            <button onClick={() => setShowOnboarding(true)} className="action-button">
              Set Preferences
            </button>
          </main>
        </>
      )}
    </div>
  );
}

export default App
