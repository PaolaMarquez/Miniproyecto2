import React from "react";
import ReactDOM from "react-dom/client";
import { HomePageUrl, MovieDetailPageUrl } from "./constants/urls";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage/MovieDetailPage";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HomePageUrl} element={<HomePage />} />
        <Route path={MovieDetailPageUrl} element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
