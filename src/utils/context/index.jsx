import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('colorMode1');
  const toggleTheme = () => {
    setTheme(theme === 'colorMode0' ? 'colorMode1' : theme === 'colorMode1' ? 'colorMode2' : theme === 'colorMode2' ? 'colorMode3' : theme === 'colorMode3' ? 'colorMode4' : theme === 'colorMode4' ? 'colorMode5' : 'colorMode0');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}