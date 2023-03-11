import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePageUrl, MovieDetailPageUrl, LoginPageUrl, RegisterPageUrl } from './constants/urls';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage/MovieDetailPage";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HomePageUrl} element={<HomePage/>}></Route>
        <Route path={LoginPageUrl} element={<LoginPage/>}></Route>
        <Route path={RegisterPageUrl} element={<RegisterPage/>}></Route>
        <Route path={HomePageUrl} element={<HomePage />} />
        <Route path={MovieDetailPageUrl} element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
