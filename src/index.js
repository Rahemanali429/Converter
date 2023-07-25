import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

navigator.serviceWorker?.register(`${process.env.PUBLIC_URL}/sw.js`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);