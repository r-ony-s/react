import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {useState} from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'milligram/dist/milligram.css';

// install for miligram for css design:npm i milligram

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* input for bootstrap in terminal= npm i bootstrap@5.3.8 */}
    <App />
  </StrictMode>,
)
