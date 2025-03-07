import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/Detail" element={<ProductDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
)
