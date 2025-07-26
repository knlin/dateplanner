import { useState } from 'react';

const CUISINE_OPTIONS = ['Italian', 'Mexican', 'Japanese', 'Indian', 'None'];
const INTEREST_OPTIONS = ['Live Music', 'Art Exhibits', 'Hiking', 'Nightclubs', 'None'];

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    cuisines: [] as string[],
    interests: [] as string[],
  });

  const handleSelect = (type: 'cuisines' | 'interests', value: string) => {
    const current = preferences[type];
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    setPreferences({ ...preferences, [type]: updated });
  };

  const submitPreferences = () => {
    console.log('Submitting:', preferences);
    // API call to POST /api/preferences will go here
    alert('Preferences saved!');
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Favorite Cuisines?</h2>
          {CUISINE_OPTIONS.map(c => (
            <button key={c} onClick={() => handleSelect('cuisines', c)}>
              {c} {preferences.cuisines.includes(c) && '✅'}
            </button>
          ))}
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>What do you like to do?</h2>
          {INTEREST_OPTIONS.map(i => (
            <button key={i} onClick={() => handleSelect('interests', i)}>
              {i} {preferences.interests.includes(i) && '✅'}
            </button>
          ))}
          <button onClick={submitPreferences}>Save</button>
        </div>
      )}
    </div>
  );
};