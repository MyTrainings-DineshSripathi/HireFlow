import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Header from './UIBlocks/Header/Header'
import RoutesComponent from './UIBlocks/Header/RoutesComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <RoutesComponent></RoutesComponent>
    </BrowserRouter>
  </StrictMode>,
)
