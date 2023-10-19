import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { useGlobalContext,AppProvider } from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <App />

    </AppProvider>

  </React.StrictMode>,
)
