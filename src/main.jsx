import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthProvider from './assets/providers/authProvider.jsx'
import ProcessesProvider from './assets/providers/processesProvider.jsx'

import { BrowserRouter as Router } from "react-router-dom";


import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ProcessesProvider>
          <App />
        </ProcessesProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,

)
