import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Card from './components/Card';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="main-content">
        <Card title="Dashboard Stats">
          <p>Welcome, Admin! Here are your key stats.</p>
        </Card>
        <Card title="Quick Actions">
          <ul>
            <li>Add user</li>
            <li>Review reports</li>
            <li>Manage settings</li>
          </ul>
        </Card>
      </main>
    </ThemeProvider>
  );
}

export default App;
