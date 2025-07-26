import React from 'react';
import { useTheme } from '../ThemeContext';

const Card = ({ title, children }) => {
  const { theme } = useTheme();
  return (
    <div className={`card card--${theme}`}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
