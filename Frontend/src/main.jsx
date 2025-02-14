import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/templates/login.jsx'

createRoot(document.getElementById('root')).render(
    <div className="no-scrollbar overflow-y-scroll h-screen">

    <App />
</div>
)
