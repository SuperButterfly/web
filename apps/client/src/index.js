import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import axios from 'axios'
import { ComponentProvider } from './context/Editor/ContextMenuContext'

// axios.defaults.baseURL = 'https://api-web2.aythen.com/api'
axios.defaults.baseURL = "http://localhost:4000/api";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ComponentProvider>
        <App />
      </ComponentProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
