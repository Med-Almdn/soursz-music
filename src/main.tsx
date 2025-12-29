import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import { AudioProvider } from './context/AudioContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <BrowserRouter basename="/soursz-music">        
        <App />
      </BrowserRouter>
    </AudioProvider>
  </StrictMode>
);
