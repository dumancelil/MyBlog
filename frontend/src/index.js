import React from 'react';
import ReactDOM from 'react-dom/client'; // createRoot burada import ediliyor
import './index.css';
import App from './App';
import './bootstrap.min.css';

// createRoot kullanımı
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
