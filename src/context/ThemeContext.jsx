import React, { createContext, useState, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a custom hook to use the context easily
export const useTheme = () => useContext(ThemeContext);

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  
  // This passes the current theme and the toggle function to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
