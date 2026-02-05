import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from './AuthContext';

const ThemeContext = createContext({});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const { user, profile } = useAuth();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = profile?.theme || localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, [profile]);

  const applyTheme = (newTheme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (user) {
      await supabase
        .from('profiles')
        .update({ theme: newTheme })
        .eq('id', user.id);
    }
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
