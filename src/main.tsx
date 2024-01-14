import React from 'react';
import ReactDOM from 'react-dom/client';
import { Entrypoint } from './app/entrypoint';
import './app/styles/pollen.css';
import './app/styles/base.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Entrypoint />
  </React.StrictMode>
);
