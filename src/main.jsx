import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Middle} from './Middle'
import {Center} from './Center'
import './Media-querys.css'
import {Footer} from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Center />
    <Middle />
    <Footer />
  </React.StrictMode>,
)
