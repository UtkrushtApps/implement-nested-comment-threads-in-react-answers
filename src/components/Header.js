import React from 'react';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>Admin Dashboard</h1>
      <button
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        onClick={toggleTheme}
        role="switch"
        aria-checked={theme === 'dark'}
        tabIndex={0}
      >
        {theme === 'light' ? (
          <span aria-hidden="true">🌞</span>
        ) : (
          <span aria-hidden="true">🌜</span>
        )}
        <span className="visually-hidden">
          {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        </span>
      </button>
    </header>
  );
};

export default Header;
