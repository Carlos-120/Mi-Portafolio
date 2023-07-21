import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot desde react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.js';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
