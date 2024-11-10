import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Components
import App from './App.jsx';
// Css
import './Assets/Css/Fonts.css';
import './Assets/Css/Font-Icon.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);