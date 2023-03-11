import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from './pages/LoginPage/LoginPage';
import { LoginPageUrl } from './constants/urls';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={LoginPageUrl} element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
