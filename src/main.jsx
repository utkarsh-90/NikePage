import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Component/Nav.jsx'
import Hero from './Component/Hero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero/>
  </React.StrictMode>,
)
