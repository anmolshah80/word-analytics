import { createContext, useState } from 'react';

export const LastCheckedContext = createContext();

export const LastCheckedProvider = ({ children }) => {
  const lastCheckedOnLocal = localStorage.getItem('lastCheckedOn');

  const [lastCheckedOn, setLastCheckedOn] = useState(
    lastCheckedOnLocal || null,
  );

  const updateLastCheckedOn = (newDate) => {
    setLastCheckedOn(newDate);

    localStorage.setItem('lastCheckedOn', newDate);
  };

  return (
    <LastCheckedContext.Provider value={{ lastCheckedOn, updateLastCheckedOn }}>
      {children}
    </LastCheckedContext.Provider>
  );
};
