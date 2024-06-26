import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProdContextProvider } from './context/ProductContextProvider.jsx'
import { CartContextProvider } from './context/CartContextProvider.jsx'
import { FilterContextProvider } from './context/FilterContextProvider.jsx'
import { FavContextProvider } from './context/FavContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProdContextProvider>
      <FilterContextProvider>
      <FavContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
      </FavContextProvider>
      </FilterContextProvider>
    </ProdContextProvider>
  </React.StrictMode>,
)
