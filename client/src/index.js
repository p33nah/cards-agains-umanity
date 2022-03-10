import React from 'react'
import ReactDOM from 'react-dom'
import './fonts/BMW Helvetica 75 Bold.otf'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
