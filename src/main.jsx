import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { AuthContextWrapper } from './contexts/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <AuthContextWrapper>
          <App />
        </AuthContextWrapper>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
