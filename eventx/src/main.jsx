import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'
import { AdminProvider } from './Context/AdminContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
    <App />
  </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
