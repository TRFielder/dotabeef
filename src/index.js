import './styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta
          property="og:title"
          content="Dotabeef - A stats tool for dota 2"
        />
        <meta
          property="og:image"
          content="../public/opengraph-image-spirit-breaker.webp"
        />
        <meta name="description" content="Dota stats tool" />
        <meta charset="utf-8" />
        <title>Dotabeef</title>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
