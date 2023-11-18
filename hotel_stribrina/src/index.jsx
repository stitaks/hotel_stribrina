import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import React from 'react';

createRoot(
  document.querySelector('#app'),
).render(
    <HomePage/> 
  );

