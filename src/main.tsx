import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS import
import App from './App';

// Find the root element in the HTML file where the app will be mounted
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);