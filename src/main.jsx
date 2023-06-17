import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {BookProvider} from "./context/bookContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <BookProvider>
              <App />
          </BookProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
