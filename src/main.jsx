import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePageUrl, LoginPageUrl, RegisterPageUrl } from './constants/urls';
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HomePageUrl} element={<HomePage/>}></Route>
        <Route path={LoginPageUrl} element={<LoginPage/>}></Route>
        <Route path={RegisterPageUrl} element={<RegisterPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
