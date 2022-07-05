import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './themes/GlobalStyles';
import { PupProvider } from './Contexts/PupContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <PupProvider>
        <App />
      </PupProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
