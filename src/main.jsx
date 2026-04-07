import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Header from './UIBlocks/Header/Header'
import RoutesComponent from './UIBlocks/Header/RoutesComponent'
import { Provider } from 'react-redux'
import { store } from './data/slices/reduxStore'
import AuthProvider from './data/ExtraProviders/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <RoutesComponent></RoutesComponent>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
