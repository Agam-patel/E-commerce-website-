import './index.scss';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from "./components/contexts/user.contexts.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
{/* inside UserProvide every component access context  */}

<App></App>
    </UserProvider>
    
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
