import React from 'react'
import ReactDOM from 'react-dom/client'
import Notifications from './Notifications.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
)
