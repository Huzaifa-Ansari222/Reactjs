import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CounterProvider} from './context/Counter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
{/* all component come in <app> will auto wrap to context provider by props.children     */}
          <App />
    </CounterProvider>

  </React.StrictMode>,
)
