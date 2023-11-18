import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { Header } from './çomponents/Header';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);

